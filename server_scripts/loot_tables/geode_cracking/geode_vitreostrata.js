LootJS.lootTables(e => {
    e.create("foxes:geodes/vitreostrata")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:diamond")
                    .setCount([1, 4])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("ae2:certus_quartz_crystal")
                    .setCount([2, 16])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("ae2:sky_dust")
                    .setCount([1, 8])
                    .withWeight(2)
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
                LootEntry.of("minecraft:quartz")
                    .setCount([4, 24])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("malum:blazing_quartz")
                    .setCount([1, 12])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:dust_sulfur")
                    .setCount([2, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("malum:cthonic_gold_fragment")
                    .setCount([1, 4])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:raw_mithril")
                    .setCount([1, 3])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("minecraft:netherite_scrap")
                    .setCount([1, 2])
                    .withWeight(2)
            )


            p.addEntry(
                LootEntry.of("minecraft:emerald")
                    .setCount([1, 6])
                    .withWeight(2)
            )


            p.addEntry(
                LootEntry.of("minecraft:amethyst_shard")
                    .setCount([2, 24])
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