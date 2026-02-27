// ---------- [BanItemSystem: Initialization] ----------

const Classes = {
	Accessories: Platform.isLoaded("accessories") ? Java.loadClass("io.wispforest.accessories.api.AccessoriesCapability") : null,
	Curios: Platform.isLoaded("curios") ? Java.loadClass("top.theillusivec4.curios.api.CuriosApi") : null,
	BuiltInRegistries: Java.loadClass("net.minecraft.core.registries.BuiltInRegistries"),
	ItemStack: Java.loadClass("net.minecraft.world.item.ItemStack")
}

const ConfiscatedMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Item proibido confiscado do inventário!").color("red"))

// ---------- [BanItemSystem: Accessories Mod] ----------

function VerifyAccessories(player) {
	let list = prohibitedItems

	let capability = Classes.Accessories.get(player)
	let itemRemoved = false

	if (capability) {
		let equippedList = capability.getAllEquipped()

		for (let i = 0; i < equippedList.size(); i++) {
			let entry = equippedList.get(i)
			let stack = entry.stack()

			if (!stack.isEmpty()) {
				let itemId = Classes.BuiltInRegistries.ITEM.getKey(stack.getItem()).toString()

				if (list.includes(itemId)) {
					entry.reference().setStack(Classes.ItemStack.EMPTY)
					itemRemoved = true
				}
			}
		}
	}

	return itemRemoved
}

// ---------- [BanItemSystem: Curios Mod] ----------

function VerifyCurios(player) {
	let list = prohibitedItems

	if (!Classes.Curios) return false
	let itemRemoved = false

	let curiosHelper = Classes.Curios.getCuriosHelper()
	let handlerOpt = curiosHelper.getEquippedCurios(player)

	if (handlerOpt.isPresent()) {
		let handler = handlerOpt.get()
		for (let i = 0; i < handler.getSlots(); i++) {
			let stack = handler.getStackInSlot(i)

			if (!stack.isEmpty()) {
				let itemId = Classes.BuiltInRegistries.ITEM.getKey(stack.getItem()).toString()

				if (list.includes(itemId)) {
					handler.setStackInSlot(i, Classes.ItemStack.EMPTY)
					itemRemoved = true
				}
			}
		}
	}

	return itemRemoved
}

// ---------- [BanItemSystem: Vanilla] ----------

function VerifyVanilla(player) {
	let list = prohibitedItems
	let itemRemoved = false

	player.inventory.allItems.forEach((item) => {
		if (!item.isEmpty() && list.includes(item.id)) {
			item.count = 0
			itemRemoved = true
		}
	})

	return itemRemoved
}

// ---------- [BanItemSystem: MainLine] ----------

PlayerEvents.tick((event) => {
	if (event.player.username.startsWith("FNPC")) return // Bypass for FNPCs
	if (event.player.username.startsWith("FURSMP")) return // Bypass for FURSMPs accounts
	if (event.player.level.isClientSide()) return // Only run on the server side
	if (event.player.tickCount % 20 !== 0) return // Run every 20 ticks (1 vez per second)

	let itemConfiscated = false
	let player = event.player

	if (VerifyAccessories(player)) itemConfiscated = true
	if (VerifyCurios(player)) itemConfiscated = true
	if (VerifyVanilla(player)) itemConfiscated = true

	if (itemConfiscated) {
		event.player.playNotifySound("minecraft:entity.villager.no", "master", 50, 1)
		event.player.tell(ConfiscatedMessage)
		event.player.inventory.setChanged()
	}
})

// ---------- [BanItemSystem: Tooltip Warning] ----------

ItemEvents.modifyTooltips((event) => {
	prohibitedItems.forEach((item) => {
		event.add(item, Text.red("⚠ Item Banido! ⚠"))
	})
})

// ServerEvents.commandRegistry((event) => {
// 	const { commands } = event

// 	event.register(
// 		commands
// 			.literal("comandosecreto")
// 			// Nível 2 geralmente é necessário para comandos de OP / cheats
// 			.requires((source) => source.hasPermission(2))
// 			.executes((ctx) => {
// 				prohibitedItems.forEach((item) => {
// 					try {
// 						ctx.source.player.block.popItem(item)
// 					} catch (e) {
// 						ctx.source.sendSystemMessage(Text.red("Erro ao tentar remover item banido: " + item))
// 					}
// 				})

// 				return 1
// 			})
// 	)
// })

// ---------- [BanItemSystem: Prohibited Items List] ----------
// List of prohibited items (can be expanded as needed)
const prohibitedItems = [
	"hazennstuff:radiance",
	"silentgear:recrystallizer",
	"silentgear:refabricator",
	"silentgear:metal_press",
	"silentgear:material_grader",
	"silentgear:starlight_charger",
	"silentgear:alloy_forge",
	"ae2:tiny_tnt",
	"apothic_enchanting:draconic_endshelf",
	"advanced_ae:luck_card",
	"advanced_ae:flight_card",
	"apothic_enchanting:improved_scrap_tome",
	"apothic_enchanting:extraction_tome",
	"silentgear:magnetic_upgrade",
	"silentgear:mace_template",
	"silentgear:hammer_template",
	"silentgear:excavator_template",
	"silentgear:machete_template",
	"silentgear:mace_blueprint",
	"advanced_ae:magnet_card",
	"silentgear:hammer_blueprint",
	"silentgear:excavator_blueprint",
	"silentgear:machete_blueprint",
	"sgearmetalworks:excavator_cast",
	"sgearmetalworks:hammer_cast",
	"sgearmetalworks:shield_cast",
	"sgearmetalworks:machete_cast",
	"too_many_bows:emerald_sage_bow",
	"too_many_bows:dusk_reaper",
	"too_many_bows:dark_bow",
	"too_many_bows:necro_flame_bow",
	"irons_spellbooks:betrayer_signet",
	"hazennstuff:starkissed_zenalite",
	"hazennstuff:divine_mold",
	"cataclysm:laser_gatling",
	"sophisticatedbackpacks:xp_pump_upgrade",
	"gametechbcs_spellbooks:amulet_of_spectral_shift",
	"extended_industrialization:nano_helmet",
	"extended_industrialization:nano_chestplate",
	"extended_industrialization:nano_gravichestplate",
	"extended_industrialization:nano_leggings",
	"extended_industrialization:nano_boots",
	"extended_industrialization:nano_quantum_helmet",
	"extended_industrialization:nano_quantum_chestplate",
	"extended_industrialization:nano_quantum_leggings",
	"extended_industrialization:nano_quantum_boots",
	"modern_industrialization:quantum_helmet",
	"modern_industrialization:quantum_chestplate",
	"modern_industrialization:quantum_leggings",
	"modern_industrialization:quantum_boots",
	"aviator_dream:douglas_dc1",
	"aviator_dream:douglas_dc2",
	"aviator_dream:douglas_c47",
	"aviator_dream:lockheed_l1049g",
	"aviator_dream:test",
	"aviator_dream:dehavilland_dh106",
	"aviator_dream:fokker_fviib3m",
	"aviator_dream:fokker_fviia",
	"aviator_dream:toyota_stout_k100",
	"justdirethings:gooblock_tier2",
	"justdirethings:gooblock_tier3",
	"justdirethings:gooblock_tier4",
	"sophisticatedbackpacks:stack_upgrade_omega_tier",
	"sophisticatedbackpacks:magnet_upgrade",
	"sophisticatedbackpacks:advanced_magnet_upgrade",
	"mowziesmobs:earthrend_gauntlet",
	"dndesires:industrial_fan",
	"cataclysm:soul_render",
	"cataclysm:ignitium_helmet",
	"cataclysm:ignitium_elytra_chestplate",
	"cataclysm:ignitium_chestplate",
	"cataclysm:ignitium_leggings",
	"cataclysm:ignitium_boots",
	"mowziesmobs:grant_suns_blessing",
	"cataclysm:void_forge",
	"cataclysm:the_immolator",
	"cataclysm:the_incinerator",
	"cataclysm:ignitium_ingot",
	"better_weaponry:wooden_scythe",
	"better_weaponry:stone_scythe",
	"better_weaponry:iron_scythe",
	"better_weaponry:golden_scythe",
	"better_weaponry:diamond_scythe",
	"better_weaponry:netherite_scythe",
	"better_weaponry:copper_scythe",
	"better_weaponry:emerald_scythe",
	"better_weaponry:amethyst_scythe",
	"cataclysm:mech_eye",
	"cataclysm:flame_eye",
	"cataclysm:void_eye",
	"cataclysm:monstrous_eye",
	"cataclysm:abyss_eye",
	"cataclysm:desert_eye",
	"cataclysm:cursed_eye",
	"cataclysm:storm_eye",
	"cataclysm:blazing_grips",
	"cataclysm:altar_of_fire",
	"cataclysm:altar_of_void",
	"cataclysm:altar_of_amethyst",
	"cataclysm:altar_of_abyss",
	"create_things_and_misc:radar",
	"apothic_enchanting:occult_ender_lead",
	"artifacts:scarf_of_invisibility",
	"artifacts:universal_attractor",
	"artifacts:charm_of_shrinking",
	"create_sa:copper_magnet",
	"cataclysm:black_steel_targe",
	"cataclysm:azure_sea_shield",
	"cataclysm:bulwark_of_the_flame",
	"silentgear:shield",
	"silentgear:shield_blueprint",
	"silentgear:shield_template",
	"cataclysm:ignitium_upgrade_smithing_template",
	"cataclysm:cursium_upgrade_smithing_template",
	"cataclysm:witherite_ingot",
	"cataclysm:sandstorm_in_a_bottle",
	"cataclysm:ancient_spear",
	"cataclysm:void_core",
	"cataclysm:remnant_skull",
	"cataclysm:netherite_effigy",
	"cataclysm:sticky_gloves",
	"cataclysm:monstrous_horn",
	"cataclysm:gauntlet_of_bulwark",
	"cataclysm:gauntlet_of_maelstrom",
	"hazennstuff:rod_of_discord",
	"hazennstuff:fireblossom_rapier",
	"minecraft:spawner",
	"cataclysm:meat_shredder",
	"sophisticatedbackpacks:alchemy_upgrade",
	"spore:surgery_table",
	"spore:scanner",
	"malum:tyrving"
]
