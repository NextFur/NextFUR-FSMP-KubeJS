//! ============================================================
//! ---------- [BanItemSystem: Prohibited Items List] ----------
//! --- List of prohibited items (can be expanded as needed) ---
//! ============================================================

const prohibitedItems = global.prohibitedItems;
const prohibitedBlocks = global.prohibitedBlocks;
const prohibitedSpells = global.prohibitedSpells;

//! =====================================================
//! ---------- [BanItemSystem: Initialization] ----------
//! ------ Variables and constants initialization -------
//! =====================================================

// Load necessary classes for mod compatibility checks and item manipulation
const Classes = {
	Accessories: Platform.isLoaded("accessories")
		? Java.loadClass("io.wispforest.accessories.api.AccessoriesCapability")
		: null,
	Curios: Platform.isLoaded("curios")
		? Java.loadClass("top.theillusivec4.curios.api.CuriosApi")
		: null,
	BuiltInRegistries: Java.loadClass(
		"net.minecraft.core.registries.BuiltInRegistries",
	),
	ItemStack: Java.loadClass("net.minecraft.world.item.ItemStack"),
};

// Confiscation message for items
const ConfiscatedMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Item proibido confiscado do inventário!").color("red"));

// Confiscation message for spells
const ConfiscationSpellMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Magia proibida confiscada do inventario!").color("red"));

// Cancel message for blocks
const CancelBlockMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Bloco proibido ação cancelada!").color("red"));

// Constants for components and IDs to avoid typos and improve readability
const SPELL_COMPONENT = "irons_spellbooks:spell_container";
const SCROLL_ID = "irons_spellbooks:scroll";

//! =======================================================
//! ---------- [BanItemSystem: Helper Functions] ----------
//! =======================================================

/**
 * Checks and removes prohibited spells from an item stack.
 * Extracts the logic so it can be reused in Curios, Accessories, and Vanilla inventories.
 * @param {Internal.ItemStack} stack
 * @returns {boolean}
 */
function cleanSpellsFromStack(stack) {
	if (!stack.has(SPELL_COMPONENT)) return false;

	const container = stack.components.get(SPELL_COMPONENT);
	if (!container) return false;

	const spellSlotsList = container.getAllSpells();
	const isScroll = stack.id === SCROLL_ID;

	if (isScroll) {
		// Handle Scrolls: Destroy the scroll if the spell is banned
		if (spellSlotsList.length <= 0) return false;
		const spellId = spellSlotsList[0].spellData().spell.getSpellId();

		if (prohibitedSpells.includes(spellId)) {
			stack.count = 0;
			return true;
		}

		return false;
	}

	// Handle Spellbooks/Items: Remove only the banned spell from the container
	let itemModified = false;
	let newContainer = null;

	for (let i = 0; i < spellSlotsList.length; i++) {
		if (!spellSlotsList[i]?.spellData) continue;
		const currentSpellId = spellSlotsList[i].spellData().spell.getSpellId();

		if (prohibitedSpells.includes(currentSpellId)) {
			// Lazy initialization of mutable copy for performance
			if (!newContainer) newContainer = container.mutableCopy();
			newContainer.removeSpellAtIndex(i);
			itemModified = true;
		}
	}

	// Apply changes to the item if a spell was removed
	if (itemModified) {
		stack.components.set(SPELL_COMPONENT, newContainer);
		newContainer = null;
	}

	return itemModified;
}

/**
 * Create a array like list with all levels of specific spell (for tooltip only)
 * @param {string} spellID
 * @param {number} maxLevel
 * @returns
 */
function getSpellLevels(spellID, maxLevel) {
	const result = [];

	for (let i = 0; i <= maxLevel; i++) {
		result.push(
			`irons_spellbooks:spell_container={data:[{id:"${spellID}",index:0,level:${i}}],maxSpells:1,mustEquip:0b,spellWheel:0b}`,
		);
	}

	return result;
}

//! =====================================================
//! ------------ [BanItemSystem: Curios Mod] ------------
//! =====================================================

/** @param {import("dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent").$SimplePlayerKubeEvent} player */
function VerifyCurios(player) {
	const result = { itemRemoved: false, spellRemoved: false };
	if (!Classes.Curios) return result;

	const handlerOpt = Classes.Curios.getCuriosHelper().getEquippedCurios(player);
	if (!handlerOpt.isPresent()) return result;
	const handler = handlerOpt.get();

	for (let i = 0; i < handler.getSlots(); i++) {
		const stack = handler.getStackInSlot(i);
		if (stack.isEmpty()) continue;

		// Check if the item itself is prohibited
		if (prohibitedItems.includes(stack.id)) {
			handler.setStackInSlot(i, Classes.ItemStack.EMPTY);
			result.itemRemoved = true;
			continue;
		}

		// Check for prohibited spells
		if (cleanSpellsFromStack(stack)) {
			result.spellRemoved = true;
		}
	}

	return result;
}

//! ======================================================
//! ---------- [BanItemSystem: Accessories Mod] ----------
//! ======================================================

/** @param {import("dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent").$SimplePlayerKubeEvent} player */
function VerifyAccessories(player) {
	const result = { itemRemoved: false };
	if (!Classes.Accessories) return result;

	const capability = Classes.Accessories.get(player);
	if (!capability) return result;

	const equippedList = capability.getAllEquipped();

	for (let i = 0; i < equippedList.size(); i++) {
		const entry = equippedList.get(i);
		const stack = entry.stack();

		if (stack.isEmpty()) continue;

		if (prohibitedItems.includes(stack.id)) {
			entry.reference().setStack(Classes.ItemStack.EMPTY);
			result.itemRemoved = true;
		}
	}

	return result;
}

//! =====================================================
//! ------------ [BanItemSystem: Inventory] -------------
//! =====================================================

/** @param {import("dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent").$SimplePlayerKubeEvent} player */
function VerifyInventory(player) {
	const result = { itemRemoved: false, spellRemoved: false };

	player.inventory.allItems.forEach((stack) => {
		if (stack.isEmpty()) return;

		// Check if the item itself is prohibited
		if (prohibitedItems.includes(stack.id)) {
			result.itemRemoved = true;
			stack.count = 0;
			return;
		}

		// Check for prohibited spells
		if (cleanSpellsFromStack(stack)) {
			result.spellRemoved = true;
		}
	});

	return result;
}

//! =====================================================
//! ------------- [BanItemSystem: MainLine] -------------
//! =====================================================

PlayerEvents.tick((event) => {
	if (event.player.tickCount % 40 !== 0) return; // Run every 40 ticks (1 time per 2 seconds)
	if (event.player.level.isClientSide()) return; // Only run on the server side
	if (event.player.username.startsWith("FNPC")) return;
	if (event.player.username.startsWith("FURSMP")) return;
	if (event.player.isOp()) return;

	const { player } = event;
	let hasSpellConfiscated = false;
	let hasItemConfiscated = false;

	const processResult = (res) => {
		if (res.itemRemoved) hasItemConfiscated = true;
		if (res.spellRemoved) hasSpellConfiscated = true;
	};

	processResult(VerifyCurios(player));
	processResult(VerifyAccessories(player));
	processResult(VerifyInventory(player));

	if (hasItemConfiscated || hasSpellConfiscated) {
		player.playNotifySound("minecraft:entity.villager.no", "master", 50, 1);
		if (hasSpellConfiscated) player.tell(ConfiscationSpellMessage);
		if (hasItemConfiscated) player.tell(ConfiscatedMessage);
	}
});

//! =====================================================
//! ------------ [BanItemSystem: Block Ban] -------------
//! =====================================================

BlockEvents.rightClicked((event) => {
	if (event.player.level.isClientSide()) return;
	if (event.player.username.startsWith("FNPC")) return;
	if (event.player.username.startsWith("FURSMP")) return;
	if (event.player.isOp()) return;

	if (prohibitedBlocks.includes(event.block.id)) {
		event.player.playNotifySound(
			"minecraft:entity.villager.no",
			"master",
			50,
			1,
		);
		event.player.tell(CancelBlockMessage);
		event.cancel();
	}
});

ItemEvents.rightClicked((event) => {
	if (event.player.level.isClientSide()) return;
	if (event.player.username.startsWith("FNPC")) return;
	if (event.player.username.startsWith("FURSMP")) return;
	if (event.player.isOp()) return;

	if (prohibitedItems.includes(event.item.id)) {
		event.item.count = 0;
		player.playNotifySound("minecraft:entity.villager.no", "master", 1, 1);
		player.tell(ConfiscatedMessage);
		event.cancel();
	}
});

//! ======================================================
//! ---------- [BanItemSystem: Tooltip Warning] ----------
//! ======================================================

ItemEvents.modifyTooltips((event) => {
	prohibitedSpells.forEach((spell) => {
		getSpellLevels(spell, 10).forEach((spellLevel) => {
			event.add(
				`irons_spellbooks:scroll[${spellLevel}]`,
				Text.red("⚠ Magia Banida! ⚠"),
			);
		});
	});

	prohibitedItems.forEach((item) => {
		event.add(item, Text.red("⚠ Item Banido! ⚠"));
	});
});
