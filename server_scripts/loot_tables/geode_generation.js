LootJS.lootTables(e => {
    e.create("foxes:multiblock/generate_geodes_basic").createPool(p => {

        p.addEntry(
            LootEntry.of("kubejs:geode_auferlite")
                .setCount([1, 4])
                .withWeight(40)
        )

        p.addEntry(
            LootEntry.of("kubejs:geode_carbonaceous")
                .setCount([1, 3])
                .withWeight(15)
        )

        p.addEntry(
            LootEntry.of("kubejs:geode_vitreostrata")
                .setCount([1, 3])
                .withWeight(15)
        )

        p.addEntry(
            LootEntry.of("kubejs:geode_varmandnite")
                .setCount([1, 4])
                .withWeight(20)
        )
        
        p.addEntry(
            LootEntry.of("kubejs:geode_oubliestos")
                .setCount([2, 5])
                .withWeight(5)
        )

        p.addEntry(
            LootEntry.of("kubejs:geode_minitra")
                .setCount([1, 5])
                .withWeight(8)
        )

        p.addEntry(
            LootEntry.of("kubejs:geode_umbra")
                .setCount([1, 5])
                .withWeight(8)
        )

        p.addEntry(
            LootEntry.empty()
                .withWeight(50)
        )

        p.rolls([1, 4])

    })
})