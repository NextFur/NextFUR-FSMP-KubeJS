// ---------- [BanItemSystem: Initialization] ----------
// Variables and constants initialization

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

const ConfiscatedBlockMessage = Text.of("F")
	.bold()
	.color("#00b8e1")
	.append(Text.of("u").bold().color("#3192e6"))
	.append(Text.of("rS").bold().color("#626cea"))
	.append(Text.of("M").bold().color("#7861e4"))
	.append(Text.of("P").bold().color("#8d56de"))
	.append(Text.of(" | ").color("dark_gray"))
	.append(Text.of("Bloco proibido confiscado do ambiente!").color("red"))

// ---------- [BanItemSystem: Prohibited Items List] ----------
// List of prohibited items (can be expanded as needed)

const prohibitedItems = [
	"aviator_dream:douglas_dc1",
	"aviator_dream:douglas_dc2",
	"aviator_dream:douglas_c47",
	"aviator_dream:lockheed_l1049g",
	"aviator_dream:test",
	"aviator_dream:dehavilland_dh106",
	"aviator_dream:fokker_fviib3m",
	"aviator_dream:fokker_fviia",
	"aviator_dream:toyota_stout_k100",
	"apothic_enchanting:improved_scrap_tome",
	"apothic_enchanting:extraction_tome",
	"apothic_enchanting:draconic_endshelf",
	"apothic_enchanting:occult_ender_lead",
	"artifacts:scarf_of_invisibility",
	"artifacts:universal_attractor",
	"artifacts:charm_of_shrinking",
	"advanced_ae:luck_card",
	"advanced_ae:flight_card",
	"advanced_ae:magnet_card",
	"advanced_ae:flight_drift_card",
	"advanced_ae:evasion_card",
	"advanced_ae:strength_card",
	"advacned_ae:attack_speed_card",
	"ae2:tiny_tnt",
	"ae2:spatial_pylon",
	"ae2:spatial_anchor",
	"ae2:spatial_storage_cell_2",
	"ae2:spatial_storage_cell_16",
	"ae2:spatial_storage_cell_128",
	"better_weaponry:wooden_scythe",
	"better_weaponry:stone_scythe",
	"better_weaponry:iron_scythe",
	"better_weaponry:golden_scythe",
	"better_weaponry:diamond_scythe",
	"better_weaponry:netherite_scythe",
	"better_weaponry:copper_scythe",
	"better_weaponry:emerald_scythe",
	"better_weaponry:amethyst_scythe",
	"cataclysm:soul_render",
	"cataclysm:ignitium_helmet",
	"cataclysm:ignitium_elytra_chestplate",
	"cataclysm:ignitium_chestplate",
	"cataclysm:ignitium_leggings",
	"cataclysm:ignitium_boots",
	"cataclysm:void_forge",
	"cataclysm:the_immolator",
	"cataclysm:the_incinerator",
	"cataclysm:ignitium_ingot",
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
	"cataclysm:black_steel_targe",
	"cataclysm:azure_sea_shield",
	"cataclysm:bulwark_of_the_flame",
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
	"cataclysm:laser_gatling",
	"cataclysm:meat_shredder",
	"cataclysm:emp",
	"cataclysm:mechanical_fusion_anvil",
	"cataclysm:cursed_tombstone",
	"create_things_and_misc:radar",
	"create_sa:copper_magnet",
	"dndesires:industrial_fan",
	"extended_industrialization:nano_helmet",
	"extended_industrialization:nano_chestplate",
	"extended_industrialization:nano_gravichestplate",
	"extended_industrialization:nano_leggings",
	"extended_industrialization:nano_boots",
	"extended_industrialization:nano_quantum_helmet",
	"extended_industrialization:nano_quantum_chestplate",
	"extended_industrialization:nano_quantum_leggings",
	"extended_industrialization:nano_quantum_boots",
	"gametechbcs_spellbooks:amulet_of_spectral_shift",
	"hazennstuff:starkissed_zenalite",
	"hazennstuff:divine_mold",
	"hazennstuff:rod_of_discord",
	"hazennstuff:fireblossom_rapier",
	"hazennstuff:radiance",
	"hazennstuff:zenalite_ingot",
	"hazennstuff:beongae",
	"hazennstuff:ancient_warriors_axe",
	"hazennstuff:skycorcher",
	"hazennstuff:bountiful_harvest",
	"hazennstuff:reinforced",
	"hazennstuff:fireblossom",
	"hazennstuff:fireblossom_leggings",
	"hazennstuff:fireblossom_chestplate",
	"hazennstuff:fireblossom_helmet",
	"hazennstuff:fireblossom_crown",
	"hazennstuff:dark_ritual_templar_boots",
	"hazennstuff:dark_ritual_templar_leggings",
	"hazennstuff:dark_ritual_templar_chestplate",
	"hazennstuff:dark_ritual_templar_helmet",
	"hazennstuff:supreme_witch_helmet",
	"hazennstuff:supreme_witch_chestplate",
	"hazennstuff:supreme_witch_leggings",
	"hazennstuff:supreme_witch_boots",
	"hazennstuff:soul_flame_boots",
	"hazennstuff:soul_flame_leggings",
	"hazennstuff:soul_flame_chestplate",
	"hazennstuff:soul_flame_helmet",
	"hazennstuff:seraph_boots",
	"hazennstuff:seraph_leggings",
	"hazennstuff:seraph_chestplate",
	"hazennstuff:seraph_helmet",
	"hazennstuff:flesh_mass_boots",
	"hazennstuff:flesh_mass_leggings",
	"hazennstuff:flesh_mass_chestplate",
	"hazennstuff:flesh_mass_helmet",
	"hazennstuff:ender_dragon_boots",
	"hazennstuff:ender_dragon_leggings",
	"hazennstuff:ender_dragon_chestplate",
	"hazennstuff:ender_dragon_helmet",
	"hazennstuff:cryogenic_ruler_boots",
	"hazennstuff:cryogenic_ruler_leggings",
	"hazennstuff:cryogenic_ruler_chestplate",
	"hazennstuff:cryogenic_ruler_helmet",
	"hazennstuff:creaking_boots",
	"hazennstuff:creaking_leggings",
	"hazennstuff:creaking_chestplate",
	"hazennstuff:creaking_helmet",
	"irons_spellbooks:betrayer_signet",
	"justdirethings:gooblock_tier2",
	"justdirethings:gooblock_tier3",
	"justdirethings:gooblock_tier4",
	"mowziesmobs:grant_suns_blessing",
	"mowziesmobs:earthrend_gauntlet",
	"malum:tyrving",
	"minecraft:spawner",
	"modern_industrialization:quantum_helmet",
	"modern_industrialization:quantum_chestplate",
	"modern_industrialization:quantum_leggings",
	"modern_industrialization:quantum_boots",
	"pointblank:processor",
	"pointblank:printer",
	"silentgear:azure_silver_ingot",
	"silentgear:azure_electrum_ingot",
	"silentgear:tyrian_steel_ingot",
	"silentgear:crimson_iron_ingot",
	"silentgear:crimson_steel_ingot",
	// "silentgear:high_carbon_steel",
	"silentgear:recrystallizer",
	"silentgear:refabricator",
	"silentgear:metal_press",
	"silentgear:material_grader",
	"silentgear:starlight_charger",
	"silentgear:alloy_forge",
	"silentgear:magnetic_upgrade",
	"silentgear:mace_template",
	"silentgear:hammer_template",
	"silentgear:excavator_template",
	"silentgear:machete_template",
	"silentgear:mace_blueprint",
	"silentgear:hammer_blueprint",
	"silentgear:excavator_blueprint",
	"silentgear:machete_blueprint",
	"silentgear:shield",
	"silentgear:shield_blueprint",
	"silentgear:shield_template",
	"sophisticatedbackpacks:stack_upgrade_omega_tier",
	"sophisticatedbackpacks:magnet_upgrade",
	"sophisticatedbackpacks:advanced_magnet_upgrade",
	"sophisticatedbackpacks:xp_pump_upgrade",
	"sophisticatedbackpacks:alchemy_upgrade",
	"sgearmetalworks:excavator_cast",
	"sgearmetalworks:hammer_cast",
	"sgearmetalworks:shield_cast",
	"sgearmetalworks:machete_cast",
	"spore:surgery_table",
	"spore:scanner",
	"too_many_bows:emerald_sage_bow",
	"too_many_bows:dusk_reaper",
	"too_many_bows:dark_bow",
	"too_many_bows:necro_flame_bow"
]

const prohibitedBlocks = [
	"apothic_enchanting:draconic_endshelf",
	"ae2:spatial_pylon",
	"ae2:spatial_anchor",
	"ae2:tiny_tnt",
	"cataclysm:altar_of_fire",
	"cataclysm:altar_of_void",
	"cataclysm:altar_of_amethyst",
	"cataclysm:altar_of_abyss",
	"cataclysm:emp",
	"cataclysm:mechanical_fusion_anvil",
	"cataclysm:cursed_tombstone",
	"dndesires:industrial_fan",
	"justdirethings:gooblock_tier2",
	"justdirethings:gooblock_tier3",
	"justdirethings:gooblock_tier4",
	"pointblank:printer",
	"silentgear:recrystallizer",
	"silentgear:refabricator",
	"silentgear:metal_press",
	"silentgear:material_grader",
	"silentgear:starlight_charger",
	"silentgear:alloy_forge",
	"spore:surgery_table"
]

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
	if (event.player.tickCount % 20 !== 0) return // Run every 20 ticks (1 time per second)
	if (event.player.level.isClientSide()) return // Only run on the server side
	if (event.player.username.startsWith("FNPC")) return // Bypass for staff members accounts
	if (event.player.username.startsWith("FURSMP")) return // Bypass for Founders accounts

	let itemConfiscated = false
	let { player } = event

	if (VerifyAccessories(player)) itemConfiscated = true
	if (VerifyCurios(player)) itemConfiscated = true
	if (VerifyVanilla(player)) itemConfiscated = true

	if (itemConfiscated) {
		event.player.playNotifySound("minecraft:entity.villager.no", "master", 50, 1)
		event.player.tell(ConfiscatedMessage)
		event.player.inventory.setChanged()
	}
})

// ---------- [BanItemSystem: Block Ban] ----------

BlockEvents.rightClicked((event) => {
	if (event.player.level.isClientSide()) return // Only run on the server side
	if (event.player.username.startsWith("FNPC")) return // Bypass for staff members accounts
	if (event.player.username.startsWith("FURSMP")) return // Bypass for Founders accounts
	let blockId = event.block.id

	if (prohibitedBlocks.includes(blockId)) {
		event.player.playNotifySound("minecraft:entity.villager.no", "master", 50, 1)
		event.player.tell(ConfiscatedBlockMessage)
		event.block.set("minecraft:air")
		event.cancel()
	}
})

// ---------- [BanItemSystem: Tooltip Warning] ----------

ItemEvents.modifyTooltips((event) => {
	prohibitedItems.forEach((item) => {
		event.add(item, Text.red("⚠ Item Banido! ⚠"))
	})
})

//ServerEvents.commandRegistry((event) => {
//	const { commands } = event
//
//	event.register(
//		commands
//			.literal("banidos")
//			// Nível 2 geralmente é necessário para comandos de OP / cheats
//			.requires((source) => source.hasPermission(2))
//			.executes((ctx) => {
//				prohibitedItems.forEach((item) => {
//					try {
//						ctx.source.player.block.popItem(item)
//					} catch (e) {
//						ctx.source.sendSystemMessage(Text.red("Erro ao tentar remover item banido: " + item))
//					}
//				})
//
//				return 1
//			})
//	)
//})
