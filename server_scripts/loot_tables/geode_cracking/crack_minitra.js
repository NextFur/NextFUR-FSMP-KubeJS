LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:geode/minitra_g").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:raw_gold")
                .setCount([1, 6])
        )

    })
})

LootJS.lootTables(e => {
    // c stands for "chance"
    e.create("foxes:geode/minitra_c").createPool(p => {

        p.addEntry(
            LootEntry.of("malum:blazing_quartz")
                .setCount([1, 4])
                .withWeight(20)
        )

        p.addEntry(
            LootEntry.of("minecraft:glowstone_dust")
                .setCount([1, 8])
                .withWeight(5)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:dust_sulfur")
                .setCount([1, 4])
                .withWeight(10)
        )

        p.addEntry(
            LootEntry.of("malum:cthonic_gold_fragment")
                .setCount([1, 2])
                .withWeight(10)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:dust_saltpeter")
                .setCount([1, 4])
                .withWeight(10)
        )

        p.addEntry(
            LootEntry.of("irons_spellbooks:raw_mithril")
                .setCount([1, 4])
                .withWeight(10)
        )


        p.addEntry(
            LootEntry.empty()
                .withWeight(50)
        )

        p.rolls([1, 3])

    })
})