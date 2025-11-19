LootJS.lootTables(e => {
    e.create("foxes:geodes/amorphous")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("kubejs:geode_auferlite")
                    .setCount([1, 4])
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_carbonaceous")
                    .setCount([1, 4])
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_minitra")
                    .setCount([1, 4])
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_oubliestos")
                    .setCount([1, 4])
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_umbra")
                    .setCount([1, 4])
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_varmandnite")
                    .setCount([1, 4])
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_vitreostrata")
                    .setCount([1, 4])
            )

            p.rolls([1, 3])
        })
})