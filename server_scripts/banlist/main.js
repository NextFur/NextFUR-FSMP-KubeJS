//! ============================================================
//! ---------- [BanItemSystem: Prohibited Items List] ----------
//! --- List of prohibited items (can be expanded as needed) ---
//! ============================================================

const prohibitedItems = [
	"advanced_ae:attack_speed_card",
	"advanced_ae:evasion_card",
	"advanced_ae:luck_card",
	"advanced_ae:magnet_card",
	"advanced_ae:strength_card",
	"ae2:creative_energy_cell",
	"ae2:creative_storage_cell",
	"ae2:spatial_anchor",
	"ae2:spatial_pylon",
	"ae2:spatial_storage_cell_128",
	"ae2:spatial_storage_cell_16",
	"ae2:spatial_storage_cell_2",
	"ae2:tiny_tnt",
	"apothic_enchanting:occult_ender_lead",
	"artifacts:charm_of_shrinking",
	"artifacts:scarf_of_invisibility",
	"artifacts:universal_attractor",
	"aviator_dream:test",
	"cataclysm:abyss_eye",
	"cataclysm:altar_of_abyss",
	"cataclysm:altar_of_amethyst",
	"cataclysm:altar_of_fire",
	"cataclysm:altar_of_void",
	"cataclysm:ancient_spear",
	"cataclysm:blazing_grips",
	"cataclysm:bulwark_of_the_flame",
	"cataclysm:cursed_eye",
	"cataclysm:cursed_tombstone",
	"cataclysm:cursium_upgrade_smithing_template",
	"cataclysm:desert_eye",
	"cataclysm:emp",
	"cataclysm:flame_eye",
	"cataclysm:gauntlet_of_bulwark",
	"cataclysm:gauntlet_of_maelstrom",
	"cataclysm:ignitium_boots",
	"cataclysm:ignitium_chestplate",
	"cataclysm:ignitium_elytra_chestplate",
	"cataclysm:ignitium_helmet",
	"cataclysm:ignitium_ingot",
	"cataclysm:ignitium_leggings",
	"cataclysm:ignitium_upgrade_smithing_template",
	"cataclysm:laser_gatling",
	"cataclysm:meat_shredder",
	"cataclysm:mech_eye",
	"cataclysm:mechanical_fusion_anvil",
	"cataclysm:monstrous_eye",
	"cataclysm:netherite_effigy",
	"cataclysm:soul_render",
	"cataclysm:storm_eye",
	"cataclysm:the_immolator",
	"cataclysm:the_incinerator",
	"cataclysm:void_eye",
	"cataclysm:void_forge",
	"constructionstick:template_destruction",
	"create:creative_blaze_cake",
	"create:creative_crate",
	"create:creative_fluid_tank",
	"create:creative_motor",
	"create:handheld_worldshaper",
	"create_connected:creative_fluid_vessel",
	"create_sa:andesite_jetpack_chestplate",
	"create_sa:copper_jetpack_chestplate",
	"create_sa:copper_magnet",
	"create_sa:creative_filling_tank",
	"create_things_and_misc:radar",
	"createaddition:creative_energy",
	"dndesires:creative_gear_motor",
	"dndesires:gatling_breaker",
	"dndesires:industrial_fan",
	"extended_industrialization:nano_boots",
	"extended_industrialization:nano_chestplate",
	"extended_industrialization:nano_gravichestplate",
	"extended_industrialization:nano_helmet",
	"extended_industrialization:nano_leggings",
	"extended_industrialization:nano_quantum_boots",
	"extended_industrialization:nano_quantum_chestplate",
	"extended_industrialization:nano_quantum_helmet",
	"extended_industrialization:nano_quantum_leggings",
	"extended_industrialization:nano_quantum_saber",
	"functionalstorage:creative_vending_upgrade",
	"hazennstuff:creaking_boots",
	"hazennstuff:creaking_chestplate",
	"hazennstuff:creaking_helmet",
	"hazennstuff:creaking_leggings",
	"hazennstuff:cryogenic_ruler_boots",
	"hazennstuff:cryogenic_ruler_chestplate",
	"hazennstuff:cryogenic_ruler_helmet",
	"hazennstuff:cryogenic_ruler_leggings",
	"hazennstuff:dark_ritual_templar_boots",
	"hazennstuff:dark_ritual_templar_chestplate",
	"hazennstuff:dark_ritual_templar_helmet",
	"hazennstuff:dark_ritual_templar_leggings",
	"hazennstuff:divine_mold",
	"hazennstuff:ender_dragon_boots",
	"hazennstuff:ender_dragon_chestplate",
	"hazennstuff:ender_dragon_helmet",
	"hazennstuff:ender_dragon_leggings",
	"hazennstuff:fireblossom_boots",
	"hazennstuff:fireblossom_chestplate",
	"hazennstuff:fireblossom_crown",
	"hazennstuff:fireblossom_helmet",
	"hazennstuff:fireblossom_leggings",
	"hazennstuff:fireblossom_rapier",
	"hazennstuff:flesh_mass_boots",
	"hazennstuff:flesh_mass_chestplate",
	"hazennstuff:flesh_mass_helmet",
	"hazennstuff:flesh_mass_leggings",
	"hazennstuff:radiance",
	"hazennstuff:rod_of_discord",
	"hazennstuff:seraph_boots",
	"hazennstuff:seraph_chestplate",
	"hazennstuff:seraph_helmet",
	"hazennstuff:seraph_leggings",
	"hazennstuff:skyscorcher",
	"hazennstuff:soul_flame_boots",
	"hazennstuff:soul_flame_chestplate",
	"hazennstuff:soul_flame_helmet",
	"hazennstuff:soul_flame_leggings",
	"hazennstuff:supreme_witch_boots",
	"hazennstuff:supreme_witch_chestplate",
	"hazennstuff:supreme_witch_helmet",
	"hazennstuff:supreme_witch_leggings",
	"immersiveengineering:capacitor_creative",
	"irons_spellbooks:betrayer_signet",
	"justdirethings:bow_eclipsealloy",
	"justdirethings:coal_t4",
	"justdirethings:coalblock_t4",
	"justdirethings:creaturecatcher",
	"justdirethings:eclipsealloy_block",
	"justdirethings:eclipsealloy_boots",
	"justdirethings:eclipsealloy_chestplate",
	"justdirethings:eclipsealloy_helmet",
	"justdirethings:eclipsealloy_hoe",
	"justdirethings:eclipsealloy_ingot",
	"justdirethings:eclipsealloy_leggings",
	"justdirethings:eclipsealloy_paxel",
	"justdirethings:eclipsealloy_pickaxe",
	"justdirethings:eclipsealloy_shovel",
	"justdirethings:eclipsealloy_sword",
	"justdirethings:eclipsegate_wand",
	"justdirethings:gooblock_tier4",
	"justdirethings:goosoil_tier4",
	"justdirethings:paradoxmachine",
	"justdirethings:playeraccessor",
	"justdirethings:polymorphic_catalyst",
	"justdirethings:polymorphic_fluid_bucket",
	"justdirethings:polymorphic_wand",
	"justdirethings:polymorphic_wand_v2",
	"justdirethings:portal_fluid_bucket",
	"justdirethings:portal_fluid_catalyst",
	"justdirethings:portalgun_v2",
	"justdirethings:potion_canister",
	"justdirethings:raw_coal_t4_ore",
	"justdirethings:raw_eclipsealloy_ore",
	"justdirethings:refined_t4_fluid_bucket",
	"justdirethings:template_eclipsealloy",
	"justdirethings:time_crystal",
	"justdirethings:time_crystal_block",
	"justdirethings:time_crystal_budding_block",
	"justdirethings:time_fluid_bucket",
	"justdirethings:time_wand",
	"justdirethings:unrefined_t4_fluid_bucket",
	"justdirethings:upgrade_cauterizewounds",
	"justdirethings:upgrade_deathprotection",
	"justdirethings:upgrade_debuffremover",
	"justdirethings:upgrade_decoy",
	"justdirethings:upgrade_epicarrow",
	"justdirethings:upgrade_glowing",
	"justdirethings:upgrade_groundstomp",
	"justdirethings:upgrade_homing",
	"justdirethings:upgrade_invulnerability",
	"justdirethings:upgrade_mobscanner",
	"justdirethings:upgrade_noai",
	"justdirethings:upgrade_orexray",
	"justdirethings:upgrade_phase",
	"malum:tyrving",
	// "mekanism:digital_miner",
	// "mekanism:creative_fluid_tank",
	// "mekanism:creative_energy_cube",
	// "mekanism:creative_chemical_tank",
	"modern_industrialization:creative_barrel",
	"modern_industrialization:creative_storage_unit",
	"modern_industrialization:creative_tank",
	"modern_industrialization:quantum_boots",
	"modern_industrialization:quantum_chestplate",
	"modern_industrialization:quantum_helmet",
	"modern_industrialization:quantum_leggings",
	"modern_industrialization:quantum_sword",
	"mowziesmobs:earthrend_gauntlet",
	"mowziesmobs:grant_suns_blessing",
	"pointblank:printer",
	"pointblank:processor",
	"powah:energy_cell_creative",
	"sgearmetalworks:excavator_cast",
	"sgearmetalworks:hammer_cast",
	"sgearmetalworks:machete_cast",
	"silentgear:alloy_forge",
	"silentgear:azure_electrum_ingot",
	"silentgear:azure_silver_ingot",
	"silentgear:crimson_iron_ingot",
	"silentgear:crimson_steel_ingot",
	"silentgear:excavator_blueprint",
	"silentgear:excavator_template",
	"silentgear:hammer_blueprint",
	"silentgear:hammer_template",
	"silentgear:mace_blueprint",
	"silentgear:mace_template",
	"silentgear:machete_blueprint",
	"silentgear:machete_template",
	"silentgear:magnetic_upgrade",
	"silentgear:material_grader",
	"silentgear:metal_press",
	"silentgear:recrystallizer",
	"silentgear:refabricator",
	"silentgear:starlight_charger",
	"silentgear:tyrian_steel_ingot",
	"sophisticatedbackpacks:advanced_alchemy_upgrade",
	"sophisticatedbackpacks:advanced_magnet_upgrade",
	"sophisticatedbackpacks:alchemy_upgrade",
	"sophisticatedbackpacks:magnet_upgrade",
	"sophisticatedbackpacks:stack_upgrade_omega_tier",
	"sophisticatedbackpacks:xp_pump_upgrade",
	"spore:mutation_syringe",
	"spore:surgery_table",
	"too_many_bows:dark_bow",
	"too_many_bows:dusk_reaper",
	"too_many_bows:emerald_sage_bow",
	"too_many_bows:necro_flame_bow",
	"waystones:black_portstone",
	"waystones:black_sharestone",
	"waystones:blackstone_waystone",
	"waystones:blue_portstone",
	"waystones:blue_sharestone",
	"waystones:brown_portstone",
	"waystones:brown_sharestone",
	"waystones:cyan_portstone",
	"waystones:cyan_sharestone",
	"waystones:deepslate_waystone",
	"waystones:end_stone_waystone",
	"waystones:gray_portstone",
	"waystones:gray_sharestone",
	"waystones:green_portstone",
	"waystones:green_sharestone",
	"waystones:light_blue_portstone",
	"waystones:light_blue_sharestone",
	"waystones:light_gray_portstone",
	"waystones:light_gray_sharestone",
	"waystones:lime_portstone",
	"waystones:lime_sharestone",
	"waystones:magenta_portstone",
	"waystones:magenta_sharestone",
	"waystones:mossy_waystone",
	"waystones:orange_portstone",
	"waystones:orange_sharestone",
	"waystones:pink_portstone",
	"waystones:pink_sharestone",
	"waystones:purple_portstone",
	"waystones:purple_sharestone",
	"waystones:red_portstone",
	"waystones:red_sharestone",
	"waystones:sandy_waystone",
	"waystones:warp_stone",
	"waystones:waystone",
	"waystones:white_portstone",
	"waystones:yellow_portstone",
	"waystones:yellow_sharestone"
]

const prohibitedBlocks = [
	"ae2:spatial_anchor",
	"ae2:spatial_pylon",
	"ae2:tiny_tnt",
	"cataclysm:altar_of_abyss",
	"cataclysm:altar_of_amethyst",
	"cataclysm:altar_of_fire",
	"cataclysm:altar_of_void",
	"cataclysm:cursed_tombstone",
	"cataclysm:emp",
	"cataclysm:mechanical_fusion_anvil",
	"dndesires:industrial_fan",
	// "mekanism:digital_miner",
	// "mekanism:creative_fluid_tank",
	// "mekanism:creative_energy_cube",
	// "mekanism:creative_chemical_tank",
	"pointblank:printer",
	"silentgear:alloy_forge",
	"silentgear:material_grader",
	"silentgear:metal_press",
	"silentgear:recrystallizer",
	"silentgear:refabricator",
	"silentgear:starlight_charger",
	"spore:surgery_table",
	// "waystones:blackstone_waystone",
	// "waystones:deepslate_waystone",
	// "waystones:end_stone_waystone",
	// "waystones:mossy_waystone",
	// "waystones:sandy_waystone",
	// "waystones:waystone",
	"waystones:black_portstone",
	"waystones:black_sharestone",
	"waystones:blue_portstone",
	"waystones:blue_sharestone",
	"waystones:brown_portstone",
	"waystones:brown_sharestone",
	"waystones:cyan_portstone",
	"waystones:cyan_sharestone",
	"waystones:gray_portstone",
	"waystones:gray_sharestone",
	"waystones:green_portstone",
	"waystones:green_sharestone",
	"waystones:light_blue_portstone",
	"waystones:light_blue_sharestone",
	"waystones:light_gray_portstone",
	"waystones:light_gray_sharestone",
	"waystones:lime_portstone",
	"waystones:lime_sharestone",
	"waystones:magenta_portstone",
	"waystones:magenta_sharestone",
	"waystones:orange_portstone",
	"waystones:orange_sharestone",
	"waystones:pink_portstone",
	"waystones:pink_sharestone",
	"waystones:purple_portstone",
	"waystones:purple_sharestone",
	"waystones:red_portstone",
	"waystones:red_sharestone",
	"waystones:white_portstone",
	"waystones:yellow_portstone",
	"waystones:yellow_sharestone"
]

const prohibitedSpells = [
	// "hazennstuff:chaotic_teleport",
	// "irons_spellbooks:ascension",
	// "irons_spellbooks:flaming_strike",
]

//! =====================================================
//! ---------- [BanItemSystem: Initialization] ----------
//! ------ Variables and constants initialization -------
//! =====================================================

// Load necessary classes for mod compatibility checks and item manipulation
const Classes = {
	Accessories: Platform.isLoaded("accessories") ? Java.loadClass("io.wispforest.accessories.api.AccessoriesCapability") : null,
	Curios: Platform.isLoaded("curios") ? Java.loadClass("top.theillusivec4.curios.api.CuriosApi") : null,
	BuiltInRegistries: Java.loadClass("net.minecraft.core.registries.BuiltInRegistries"),
	ItemStack: Java.loadClass("net.minecraft.world.item.ItemStack")
}

// Confiscation message for items
const ConfiscatedMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Item proibido confiscado do inventário!").color("red"))

// Confiscation message for spells
const ConfiscationSpellMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Magia proibida confiscada do inventario!").color("red"))

// Cancel message for blocks
const CancelBlockMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Bloco proibido ação cancelada!").color("red"))

// Constants for components and IDs to avoid typos and improve readability
const SPELL_COMPONENT = "irons_spellbooks:spell_container"
const SCROLL_ID = "irons_spellbooks:scroll"

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
	if (!stack.has(SPELL_COMPONENT)) return false

	let container = stack.components.get(SPELL_COMPONENT)
	if (!container) return false

	let spellSlotsList = container.getAllSpells()
	let isScroll = stack.id === SCROLL_ID

	if (isScroll) {
		// Handle Scrolls: Destroy the scroll if the spell is banned
		if (spellSlotsList.length <= 0) return false
		let spellId = spellSlotsList[0].spellData().spell.getSpellId()

		if (prohibitedSpells.includes(spellId)) {
			stack.count = 0
			return true
		}

		return false
	}

	// Handle Spellbooks/Items: Remove only the banned spell from the container
	let itemModified = false
	let newContainer = null

	for (let i = 0; i <= spellSlotsList.length; i++) {
		if (!spellSlotsList[i] || !spellSlotsList[i]?.spellData) continue
		let currentSpellId = spellSlotsList[i].spellData().spell.getSpellId()

		if (prohibitedSpells.includes(currentSpellId)) {
			// Lazy initialization of mutable copy for performance
			if (!newContainer) newContainer = container.mutableCopy()
			newContainer.removeSpellAtIndex(i)
			itemModified = true
		}
	}

	// Apply changes to the item if a spell was removed
	if (itemModified) {
		stack.components.set(SPELL_COMPONENT, newContainer)
		newContainer = null
	}

	return itemModified
}

/**
 * Create a array like list with all levels of specific spell (for tooltip only)
 * @param {string} spellID
 * @param {number} maxLevel
 * @returns
 */
function getSpellLevels(spellID, maxLevel) {
	let result = []

	for (let i = 0; i <= maxLevel; i++) {
		result.push(`irons_spellbooks:spell_container={data:[{id:"${spellID}",index:0,level:${i}}],maxSpells:1,mustEquip:0b,spellWheel:0b}`)
	}

	return result
}

//! =====================================================
//! ------------ [BanItemSystem: Curios Mod] ------------
//! =====================================================

/** @param {import("dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent").$SimplePlayerKubeEvent} player */
function VerifyCurios(player) {
	let result = { itemRemoved: false, spellRemoved: false }
	if (!Classes.Curios) return result

	let handlerOpt = Classes.Curios.getCuriosHelper().getEquippedCurios(player)
	if (!handlerOpt.isPresent()) return result
	let handler = handlerOpt.get()

	for (let i = 0; i < handler.getSlots(); i++) {
		let stack = handler.getStackInSlot(i)
		if (stack.isEmpty()) continue

		// Check if the item itself is prohibited
		if (prohibitedItems.includes(stack.id)) {
			handler.setStackInSlot(i, Classes.ItemStack.EMPTY)
			result.itemRemoved = true
			continue
		}

		// Check for prohibited spells
		if (cleanSpellsFromStack(stack)) {
			result.spellRemoved = true
		}
	}

	return result
}

//! ======================================================
//! ---------- [BanItemSystem: Accessories Mod] ----------
//! ======================================================

/** @param {import("dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent").$SimplePlayerKubeEvent} player */
function VerifyAccessories(player) {
	let result = { itemRemoved: false }
	if (!Classes.Accessories) return result

	let capability = Classes.Accessories.get(player)
	if (!capability) return result

	let equippedList = capability.getAllEquipped()

	for (let i = 0; i < equippedList.size(); i++) {
		let entry = equippedList.get(i)
		let stack = entry.stack()

		if (stack.isEmpty()) continue

		if (prohibitedItems.includes(stack.id)) {
			entry.reference().setStack(Classes.ItemStack.EMPTY)
			result.itemRemoved = true
		}
	}

	return result
}

//! =====================================================
//! ------------ [BanItemSystem: Inventory] -------------
//! =====================================================

/** @param {import("dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent").$SimplePlayerKubeEvent} player */
function VerifyInventory(player) {
	let result = { itemRemoved: false, spellRemoved: false }

	player.inventory.allItems.forEach((stack) => {
		if (stack.isEmpty()) return

		// Check if the item itself is prohibited
		if (prohibitedItems.includes(stack.id)) {
			result.itemRemoved = true
			stack.count = 0
			return
		}

		// Check for prohibited spells
		if (cleanSpellsFromStack(stack)) {
			result.spellRemoved = true
		}
	})

	return result
}

//! =====================================================
//! ------------- [BanItemSystem: MainLine] -------------
//! =====================================================

PlayerEvents.tick((event) => {
	if (event.player.tickCount % 20 !== 0) return // Run every 20 ticks (1 time per second)
	if (event.player.level.isClientSide()) return // Only run on the server side
	if (event.player.username.startsWith("FNPC")) return
	if (event.player.username.startsWith("FURSMP")) return

	let { player, inventory } = event
	let hasSpellConfiscated = false
	let hasItemConfiscated = false

	const processResult = (res) => {
		if (res.itemRemoved) hasItemConfiscated = true
		if (res.spellRemoved) hasSpellConfiscated = true
	}

	processResult(VerifyCurios(player))
	processResult(VerifyAccessories(player))
	processResult(VerifyInventory(player))

	if (hasItemConfiscated || hasSpellConfiscated) {
		player.playNotifySound("minecraft:entity.villager.no", "master", 50, 1)
		if (hasSpellConfiscated) player.tell(ConfiscationSpellMessage)
		if (hasItemConfiscated) player.tell(ConfiscatedMessage)
	}
})

//! =====================================================
//! ------------ [BanItemSystem: Block Ban] -------------
//! =====================================================

BlockEvents.rightClicked((event) => {
	if (event.player.level.isClientSide()) return // Only run on the server side
	if (event.player.username.startsWith("FNPC")) return
	if (event.player.username.startsWith("FURSMP")) return

	if (prohibitedBlocks.includes(event.block.id)) {
		event.player.playNotifySound("minecraft:entity.villager.no", "master", 50, 1)
		event.player.tell(CancelBlockMessage)
		event.cancel()
	}
})

//! ======================================================
//! ---------- [BanItemSystem: Tooltip Warning] ----------
//! ======================================================

ItemEvents.modifyTooltips((event) => {
	prohibitedSpells.forEach((spell) => {
		getSpellLevels(spell, 10).forEach((spellLevel) => {
			event.add(`irons_spellbooks:scroll[${spellLevel}]`, Text.red("⚠ Magia Banida! ⚠"))
		})
	})

	prohibitedItems.forEach((item) => {
		event.add(item, Text.red("⚠ Item Banido! ⚠"))
	})
})
