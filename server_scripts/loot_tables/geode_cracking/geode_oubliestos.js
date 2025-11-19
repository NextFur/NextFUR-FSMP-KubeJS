LootJS.lootTables(e => {
    e.create("foxes:geodes/oubliestos")
        // Main pool
        .createPool(p => {
            p.addEntry(
                LootEntry.of("create:raw_zinc")
                    .setCount([1, 8])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("minecraft:lapis_lazuli")
                    .setCount([2, 14])
                    .withWeight(10)
            )

            p.rolls([1, 3])
        })

        // Additional pool
        .createPool(p => {
            p.addEntry(
                LootEntry.empty()
                    .withWeight(80)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_uranium")
                    .setCount([1, 8])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_silver")
                    .setCount([1, 8])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:raw_lead")
                    .setCount([1, 12])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("malum:raw_soulstone")
                    .setCount([1, 8])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("ae2:fluix_crystal")
                    .setCount([2, 16])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("ae2:certus_quartz_crystal")
                    .setCount([2, 16])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("minecraft:netherite_scrap")
                    .setCount([1, 2])
                    .withWeight(2)
            )

            p.addEntry(
                LootEntry.of("kubejs:stellar_remnant")
                    .setCount([1, 3])
                    .withWeight(1)
            )

            p.rolls([1, 3])
        })
})