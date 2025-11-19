LootJS.lootTables(e => {
    e.create("foxes:geodes/umbra")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("immersiveengineering:raw_lead")
                    .setCount([1, 8])
                    .withWeight(1)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_silver")
                    .setCount([1, 6])
                    .withWeight(1)
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
                LootEntry.of("immersiveengineering:raw_uranium")
                    .setCount([1, 8])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_nickel")
                    .setCount([2, 16])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_lead")
                    .setCount([1, 8])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("minecraft:amethyst_shard")
                    .setCount([2, 16])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("ae2:fluix_crystal")
                    .setCount([1, 4])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("minecraft:diamond")
                    .setCount([2, 8])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("minecraft:obsidian")
                    .setCount([2, 8])
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