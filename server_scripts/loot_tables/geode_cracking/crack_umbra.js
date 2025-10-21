LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:geode/umbra_g").createPool(p => {

        /*
        p.addEntry(
            LootEntry.sequence(
                LootEntry.of("immersiveengineering:raw_lead").setCount([1, 5]),
                LootEntry.of("immersiveengineering:raw_silver").setCount([1, 5])
            )
        )
        */

        p.addEntry(
            LootEntry.of("immersiveengineering:raw_lead")
                .setCount([1, 8])
        )
        p.addEntry(
            LootEntry.of("immersiveengineering:raw_silver")
                .setCount([1, 6])
        )

    })
})

LootJS.lootTables(e => {
    // c stands for "chance"
    e.create("foxes:geode/umbra_c").createPool(p => {

        p.addEntry(
            LootEntry.of("immersiveengineering:raw_nickel")
                .setCount([1, 4])
                .withWeight(30)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:raw_uranium")
                .setCount([1, 4])
                .withWeight(10)
        )

        p.addEntry(
            LootEntry.of("minecraft:raw_iron")
                .setCount([1, 6])
                .withWeight(20)
        )

        p.addEntry(
            LootEntry.of("malum:raw_soulstone")
                .setCount([1, 6])
                .withWeight(4)
        )

        p.addEntry(
            LootEntry.of("minecraft:netherite_scrap")
                .setCount(1)
                .withWeight(1)
        )

        p.addEntry(
            LootEntry.of("minecraft:diamond")
                .setCount([1, 3])
                .withWeight(5)
        )


        p.addEntry(
            LootEntry.empty()
                .withWeight(50)
        )

        p.rolls([1, 3])

    })
})