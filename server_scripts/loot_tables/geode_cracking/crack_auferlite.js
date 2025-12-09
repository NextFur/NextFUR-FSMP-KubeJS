LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:geode/auferlite_g").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:raw_iron")
                .setCount([1, 8])
        )
        // p.rolls([1, 2])

    })
})

LootJS.lootTables(e => {
    // c stands for "chance"
    e.create("foxes:geode/auferlite_c").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:raw_iron")
                .setCount([1, 6])
                .withWeight(40)
        )
        
        p.addEntry(
            LootEntry.of("minecraft:raw_gold")
                .setCount([1, 16])
                .withWeight(6)
        )

        p.addEntry(
            LootEntry.of("minecraft:redstone")
                .setCount([2, 12])
                .withWeight(20)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:raw_nickel")
                .setCount([2, 8])
                .withWeight(20)
        )

        p.addEntry(
            LootEntry.of("ae2:sky_dust")
                .setCount([1, 2])
                .withWeight(1)
        )

        p.addEntry(
            LootEntry.empty()
                .withWeight(40)
        )

        p.rolls([1, 3])

        /*
        p.addEntry(
            LootEntry.group(
                LootEntry.of("minecraft:raw_iron")
                    .setCount([1, 12]),
                LootEntry.of("minecraft:raw_iron")
                    .setCount([4, 36])
                    .when(c => c.randomChance(0.1)),
                LootEntry.of("minecraft:raw_gold")
                    .setCount([1, 12])
                    .when(c => c.randomChance(0.2)),
                LootEntry.of("immersiveengineering:raw_nickel")
                    .setCount([1, 8])
                    .when(c => c.randomChance(0.4)),
                LootEntry.of("minecraft:redstone")
                    .setCount([4, 24])
                    .when(c => c.randomChance(0.2))
            )
        )
        */

        // p.rolls([1, 2])

    })
})