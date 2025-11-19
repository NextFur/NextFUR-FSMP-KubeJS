LootJS.lootTables(e => {
    e.create("foxes:geodes/auferlite")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:raw_iron")
                    .setCount([1, 8])
                    .withWeight(25)
            )

            p.addEntry(
                LootEntry.of("minecraft:raw_copper")
                    .setCount([1, 12])
                    .withWeight(15)
            )

            p.rolls([1, 4])
        })

        // Additional pool
        .createPool(p => {
            p.addEntry(
                LootEntry.empty()
                    .withWeight(80)
            )

            p.addEntry(
                LootEntry.of("minecraft:raw_iron")
                    .setCount([1, 6])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("minecraft:raw_gold")
                    .setCount([1, 6])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("minecraft:redstone")
                    .setCount([2, 12])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_nickel")
                    .setCount([1, 8])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("minecraft:raw_copper")
                    .setCount([1, 8])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("create:raw_zinc")
                    .setCount([1, 4])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("kubejs:stellar_remnant")
                    .setCount([1, 3])
                    .withWeight(1)
            )

            p.rolls([1, 3])
        })
})