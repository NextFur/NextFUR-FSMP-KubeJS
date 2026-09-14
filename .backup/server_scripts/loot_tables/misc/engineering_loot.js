LootJS.lootTables((e) => {
	// g stands for "guaranteed"
	e.create("foxes:misc/engineering_basic")

		.createPool((p) => {
			p.addEntry(LootEntry.of("create:andesite_alloy").setCount([4, 24]).withWeight(100))

			p.addEntry(LootEntry.of("create:brass_ingot").setCount([2, 12]).withWeight(40))

			p.addEntry(LootEntry.of("create:copper_sheet").setCount([4, 24]).withWeight(40))

			p.addEntry(LootEntry.of("create:iron_sheet").setCount([2, 16]).withWeight(30))

			p.addEntry(LootEntry.of("create:brass_sheet").setCount([2, 12]).withWeight(20))

			p.addEntry(LootEntry.of("create:golden_sheet").setCount([2, 8]).withWeight(30))

			p.addEntry(LootEntry.of("create:electron_tube").setCount([2, 12]).withWeight(50))

			p.addEntry(LootEntry.of("create:precision_mechanism").setCount([1, 6]).withWeight(30))

			p.addEntry(LootEntry.of("create:sturdy_sheet").setCount([2, 6]).withWeight(30))

			p.addEntry(LootEntry.of("create:polished_rose_quartz").setCount([2, 6]).withWeight(80))

			p.addEntry(LootEntry.of("create:shaft").setCount([8, 32]).withWeight(40))

			p.addEntry(LootEntry.of("immersiveengineering:hemp_fabric").setCount([6, 24]).withWeight(80))

			p.addEntry(LootEntry.of("immersiveengineering:component_iron").setCount([3, 8]).withWeight(50))

			p.addEntry(LootEntry.of("immersiveengineering:component_steel").setCount([2, 6]).withWeight(30))

			p.addEntry(LootEntry.of("immersiveengineering:component_electronic").setCount([3, 8]).withWeight(60))

			p.addEntry(LootEntry.of("immersiveengineering:electron_tube").setCount([8, 24]).withWeight(60))

			p.addEntry(LootEntry.of("immersiveengineering:plate_electrum").setCount([3, 12]).withWeight(40))

			p.addEntry(LootEntry.of("immersiveengineering:plate_steel").setCount([4, 16]).withWeight(40))

			p.addEntry(LootEntry.of("immersiveengineering:plate_constantan").setCount([3, 12]).withWeight(40))

			p.addEntry(LootEntry.of("immersiveengineering:plate_aluminum").setCount([3, 12]).withWeight(40))

			p.addEntry(LootEntry.of("immersiveengineering:plate_silver").setCount([3, 12]).withWeight(30))

			p.addEntry(LootEntry.of("immersiveengineering:plate_lead").setCount([3, 12]).withWeight(30))

			p.addEntry(LootEntry.of("create_dragons_plus:blaze_upgrade_smithing_template").setCount(1).withWeight(10))
		})
})
