LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:gateways/voices_of_the_silent")

        .createPool(p => {

            p.addEntry(
                LootEntry.of("silentgear:crimson_iron_nugget")
                    .setCount([4, 16])
                    .withWeight(7)
            )

            p.addEntry(
                LootEntry.of("silentgear:blaze_gold_nugget")
                    .setCount([3, 12])
                    .withWeight(2)
            )
        
            p.addEntry(
                LootEntry.of("silentgear:azure_silver_nugget")
                    .setCount([2, 8])
                    .withWeight(1)
            )
            
        })

        .createPool(p => {

            p.addEntry(
                LootEntry.of("minecraft:string")
                    .setCount([1, 8])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("create:experience_nugget")
                    .setCount([1, 12])
                    .withWeight(90)
            )

            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount([1, 2])
                    .withWeight(60)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:nugget_steel")
                    .setCount([1, 9])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("ae2:fluix_crystal")
                    .setCount([1, 4])
                    .withWeight(30)
            )


            p.addEntry(
                LootEntry.of("ae2:certus_quartz_crystal")
                    .setCount([1, 4])
                    .withWeight(30)
            )


            p.addEntry(
                LootEntry.empty()
                    .withWeight(300)
            )

            p.rolls([1, 3])
        })
})