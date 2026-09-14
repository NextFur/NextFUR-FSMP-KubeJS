LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:geode/varmandnite_g").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:raw_copper")
                .setCount([1, 12])
        )

    })
})

LootJS.lootTables(e => {
    // c stands for "chance"
    e.create("foxes:geode/varmandnite_c").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:raw_copper")
            .setCount([1, 6])
            .withWeight(40)
        )

        p.addEntry(
            LootEntry.of("malum:blazing_quartz")
            .setCount([1, 8])
            .withWeight(8)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:raw_aluminum")
            .setCount([1, 8])
            .withWeight(25)
        )
        
        p.addEntry(
            LootEntry.of("minecraft:redstone")
            .setCount([1, 8])
            .withWeight(11)
        )

        p.addEntry(
            LootEntry.of("minecraft:lapis_lazuli")
            .setCount([1, 8])
            .withWeight(11)
        )
        
        p.addEntry(
            LootEntry.of("minecraft:netherite_scrap")
                .setCount(1)
                .withWeight(1)
        )

        p.addEntry(
            LootEntry.empty()
                .withWeight(50)
        )

        p.rolls([1, 3])

    })
})