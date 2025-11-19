LootJS.lootTables(e => {
    e.create("foxes:geodes/carbonaceous")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:coal")
                    .setCount([1, 12])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("minecraft:diamond")
                    .setCount([1, 6])
                    .withWeight(2)
            )

            p.addEntry(
                LootEntry.of("minecraft:emerald")
                    .setCount([1, 6])
                    .withWeight(2)
            )

            p.rolls([1, 4])
        })

        // Additional pool
        .createPool(p => {
            p.addEntry(
                LootEntry.empty()
                    .withWeight(100)
            )

            p.addEntry(
                LootEntry.of("minecraft:coal")
                    .setCount([1, 6])
                    .withWeight(150)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:coal_coke")
                    .setCount([1, 4])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("minecraft:diamond")
                    .setCount([1, 3])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("minecraft:emerald")
                    .setCount([1, 3])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("minecraft:amethyst_shard")
                    .setCount([2, 24])
                    .withWeight(20)
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