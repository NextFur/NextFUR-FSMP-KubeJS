LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:gateways/a_lesson_in_mineralogy")

        .createPool(p => {

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_silver")
                    .setCount([2, 8])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_lead")
                    .setCount([2, 8])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_aluminum")
                    .setCount([4, 16])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_nickel")
                    .setCount([3, 12])
                    .withWeight(50)
            )

            p.addEntry(
                LootEntry.of("create:raw_zinc")
                    .setCount([2, 12])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("minecraft:raw_iron")
                    .setCount([4, 16])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("minecraft:raw_gold")
                    .setCount([4, 16])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_uranium")
                    .setCount([4, 16])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("modern_industrialization:raw_antimony")
                    .setCount([4, 16])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("modern_industrialization:raw_tin")
                    .setCount([4, 16])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("modern_industrialization:raw_tungsten")
                    .setCount([4, 16])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:arcane_essence")
                    .setCount([8, 32])
                    .withWeight(50)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:cinder_essence")
                    .setCount([1, 4])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:dust_sulfur")
                    .setCount([3, 12])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:dust_saltpeter")
                    .setCount([2, 8])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("minecraft:emerald")
                    .setCount([1, 4])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("minecraft:diamond")
                    .setCount([1, 4])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("minecraft:netherite_scrap")
                    .setCount([1, 4])
                    .withWeight(8)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:raw_mithril")
                    .setCount([1, 8])
                    .withWeight(25)
            )

            p.addEntry(
                LootEntry.of("minecraft:quartz")
                    .setCount([4, 24])
                    .withWeight(30)
            )

            p.rolls([1, 4])
        })
})