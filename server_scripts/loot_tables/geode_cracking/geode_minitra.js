LootJS.lootTables(e => {
    e.create("foxes:geodes/minitra")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:raw_gold")
                    .setCount([1, 8])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("minecraft:glowstone_dust")
                    .setCount([2, 12])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("malum:cthonic_gold_fragment")
                    .setCount([1, 4])
                    .withWeight(5)
            )

            p.rolls([1, 3])
        })

        // Additional pool
        .createPool(p => {
            p.addEntry(
                LootEntry.empty()
                    .withWeight(80)
            )

            p.addEntry(
                LootEntry.of("malum:blazing_quartz")
                    .setCount([2, 12])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("minecraft:quartz")
                    .setCount([4, 24])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("malum:cthonic_gold_fragment")
                    .setCount([1, 4])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:dust_sulfur")
                    .setCount([1, 8])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:raw_mithril")
                    .setCount([1, 8])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("minecraft:netherite_scrap")
                    .setCount([1, 2])
                    .withWeight(2)
            )

            p.addEntry(
                LootEntry.of("kubejs:stellar_remnant")
                    .setCount([1, 3])
                    .withWeight(1)
            )

            p.rolls([1, 3])
        })
})