LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:gateways/bonanza_of_the_wilds")

        .createPool(p => {

            p.addEntry(
                LootEntry.of("minecraft:string")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("minecraft:leather")
                    .setCount([1, 12])
                    .withWeight(10)
            )
            p.addEntry(
                LootEntry.of("minecraft:slime_ball")
                    .setCount([1, 12])
                    .withWeight(10)
            )
            p.addEntry(
                LootEntry.of("minecraft:fermented_spider_eye")
                    .setCount([1, 6])
                    .withWeight(20)
            )
            p.addEntry(
                LootEntry.of("minecraft:sweet_berries")
                    .setCount([1, 6])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:wheat")
                    .setCount([3, 24])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:clay_ball")
                    .setCount([12, 48])
                    .withWeight(40)
            )
            p.addEntry(
                LootEntry.of("minecraft:rabbit_foot")
                    .setCount([1, 2])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:blaze_rod")
                    .setCount([1, 12])
                    .withWeight(5)
            )
            p.addEntry(
                LootEntry.of("minecraft:blaze_powder")
                    .setCount([1, 8])
                    .withWeight(15)
            )
            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount([2, 12])
                    .withWeight(40)
            )
            p.addEntry(
                LootEntry.of("minecraft:feather")
                    .setCount([1, 12])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:bone")
                    .setCount([1, 12])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:redstone")
                    .setCount([1, 24])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:white_wool")
                    .setCount([1, 4])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:iron_nugget")
                    .setCount([1, 32])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:gold_nugget")
                    .setCount([1, 24])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:potato")
                    .setCount([1, 16])
                    .withWeight(30)
            )
            p.addEntry(
                LootEntry.of("minecraft:nether_wart")
                    .setCount([1, 8])
                    .withWeight(5)
            )
            p.addEntry(
                LootEntry.of("immersiveengineering:nugget_steel")
                    .setCount([1, 24])
                    .withWeight(5)
            )


            p.addEntry(
                LootEntry.empty()
                    .withWeight(50)
            )

            p.rolls([1, 3])
        })
})