LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:geode/carbonaceous_g").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:coal")
                .setCount([1, 8])
        )

    })
})

LootJS.lootTables(e => {
    // c stands for "chance"
    e.create("foxes:geode/carbonaceous_c").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:coal")
            .setCount([1, 8])
            .withWeight(30)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:coal_coke")
            .setCount([1, 4])
            .withWeight(5)
        )

        p.addEntry(
            LootEntry.of("minecraft:diamond")
                .setCount([1, 8])
                .withWeight(5)
        )
        
        p.addEntry(
            LootEntry.of("minecraft:emerald")
            .setCount([1, 6])
            .withWeight(3)
        )
        
        p.addEntry(
            LootEntry.of("minecraft:amethyst_shard")
                .setCount([1, 8])
                .withWeight(2)
        )

        p.addEntry(
            LootEntry.of("minecraft:netherite_scrap")
                .setCount(1)
                .withWeight(1)
        )

        p.addEntry(
            LootEntry.empty()
                .withWeight(40)
        )

        p.rolls([1, 3])

    })
})