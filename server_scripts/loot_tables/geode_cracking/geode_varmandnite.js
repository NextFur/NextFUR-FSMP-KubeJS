LootJS.lootTables(e => {
    e.create("foxes:geodes/varmandnite")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:raw_copper")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("minecraft:redstone")
                    .setCount([2, 8])
                    .withWeight(10)
            )

            p.rolls([1, 5])
        })

        // Additional pool
        .createPool(p => {
            p.addEntry(
                LootEntry.empty()
                    .withWeight(80)
            )

            p.addEntry(
                LootEntry.of("minecraft:raw_copper")
                    .setCount([1, 6])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("malum:blazing_quartz")
                    .setCount([1, 12])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_aluminum")
                    .setCount([4, 16])
                    .withWeight(8)
            )

            p.addEntry(
                LootEntry.of("minecraft:lapis_lazuli")
                    .setCount([1, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:redstone")
                    .setCount([1, 12])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("ae2:fluix_crystal")
                    .setCount([1, 4])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("ae2:certus_quartz_crystal")
                    .setCount([1, 4])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("kubejs:stellar_remnant")
                    .setCount([1, 3])
                    .withWeight(1)
            )

            p.rolls([1, 3])
        })
})