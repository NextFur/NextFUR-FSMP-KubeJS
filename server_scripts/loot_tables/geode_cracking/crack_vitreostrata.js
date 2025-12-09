LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:geode/vitreostrata_g").createPool(p => {

        p.addEntry(
            LootEntry.of("create:raw_zinc")
                .setCount([1, 6])
        )

    })
})

LootJS.lootTables(e => {
    // c stands for "chance"
    e.create("foxes:geode/vitreostrata_c").createPool(p => {

        p.addEntry(
            LootEntry.of("minecraft:quartz")
                .setCount([2, 16])
                .withWeight(40)
        )

        p.addEntry(
            LootEntry.of("minecraft:glowstone_dust")
                .setCount([1, 8])
                .withWeight(20)
        )

        p.addEntry(
            LootEntry.of("immersiveengineering:dust_sulfur")
                .setCount([1, 6])
                .withWeight(10)
        )

        p.addEntry(
            LootEntry.of("ae2:certus_quartz_crystal")
                .setCount([1, 4])
                .withWeight(5)
        )

        p.addEntry(
            LootEntry.of("malum:cthonic_gold_fragment")
                .setCount([1, 8])
                .withWeight(20)
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