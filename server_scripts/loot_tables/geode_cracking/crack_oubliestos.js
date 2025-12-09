LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:geode/oubliestos_g").createPool(p => {

        p.addEntry(
            LootEntry.of("create:raw_zinc")
                .setCount([1, 6])
        )

    })
})

LootJS.lootTables(e => {
    // c stands for "chance"
    e.create("foxes:geode/oubliestos_c").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:lapis_lazuli")
            .setCount([1, 16])
            .withWeight(25)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:raw_uranium")
            .setCount([1, 8])
            .withWeight(13)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:raw_silver")
            .setCount([1, 4])
            .withWeight(5)
        )
        
        p.addEntry(
            LootEntry.of("immersiveengineering:raw_lead")
            .setCount([1, 6])
            .withWeight(5)
        )

        p.addEntry(
            LootEntry.of("ae2:fluix_crystal")
            .setCount([1, 4])
            .withWeight(2)
        )

        p.addEntry(
            LootEntry.of("minecraft:amethyst_shard")
            .setCount([1, 4])
            .withWeight(5)
        )

        p.addEntry(
            LootEntry.empty()
                .withWeight(40)
        )

        p.rolls([1, 3])

    })
})