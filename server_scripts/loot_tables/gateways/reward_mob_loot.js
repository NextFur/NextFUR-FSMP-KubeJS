LootJS.lootTables(e => {
    e.create("foxes:gateways/mob_loot_personal")
        .createPool(p => {
            
            p.addEntry(
                LootEntry.of("minecraft:leather")
                    .setCount([2, 8])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("minecraft:ink_sac")
                    .setCount([2, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:rotten_flesh")
                    .setCount([2, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:wither_skeleton_skull")
                    .setCount(1)
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.of("minecraft:gunpowder")
                    .setCount([1, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:ghast_tear")
                    .setCount([1, 4])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:feather")
                    .setCount([1, 6])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("minecraft:rabbit_hide")
                    .setCount([1, 2])
                    .withWeight(8)
            )

            p.addEntry(
                LootEntry.of("minecraft:rabbit_foot")
                    .setCount([1, 2])
                    .withWeight(3)
            )


            p.addEntry(
                LootEntry.of("minecraft:breeze_rod")
                    .setCount([1, 4])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("minecraft:blaze_rod")
                    .setCount([1, 4])
                    .withWeight(5)
            )


            p.addEntry(
                LootEntry.of("minecraft:blaze_powder")
                    .setCount([1, 8])
                    .withWeight(8)
            )

            p.addEntry(
                LootEntry.of("minecraft:phantom_membrane")
                    .setCount([1, 4])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:lightning_bottle")
                    .setCount([1, 4])
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:permafrost_shard")
                    .setCount([1, 2])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:arcane_essence")
                    .setCount([2, 10])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:cinder_essence")
                    .setCount([1, 4])
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.of("minecraft:ender_pearl")
                    .setCount([1, 4])
                    .withWeight(6)
            )

            p.addEntry(
                LootEntry.of("minecraft:spider_eye")
                    .setCount([1, 4])
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.empty()
                    .withWeight(100)
            )

            p.rolls([2, 6])
        })

    e.create("foxes:gateways/mob_loot_general")
        .createPool(p => {
            
            p.addEntry(
                LootEntry.of("minecraft:leather")
                    .setCount([2, 8])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("minecraft:ink_sac")
                    .setCount([2, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:rotten_flesh")
                    .setCount([2, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:wither_skeleton_skull")
                    .setCount(1)
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.of("minecraft:gunpowder")
                    .setCount([1, 8])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:ghast_tear")
                    .setCount([1, 4])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("minecraft:feather")
                    .setCount([1, 6])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("minecraft:rabbit_hide")
                    .setCount([1, 2])
                    .withWeight(8)
            )

            p.addEntry(
                LootEntry.of("minecraft:rabbit_foot")
                    .setCount([1, 2])
                    .withWeight(3)
            )


            p.addEntry(
                LootEntry.of("minecraft:breeze_rod")
                    .setCount([1, 4])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("minecraft:blaze_rod")
                    .setCount([1, 4])
                    .withWeight(5)
            )


            p.addEntry(
                LootEntry.of("minecraft:blaze_powder")
                    .setCount([1, 8])
                    .withWeight(8)
            )

            p.addEntry(
                LootEntry.of("minecraft:phantom_membrane")
                    .setCount([1, 4])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:lightning_bottle")
                    .setCount([1, 4])
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:permafrost_shard")
                    .setCount([1, 2])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:arcane_essence")
                    .setCount([2, 10])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:cinder_essence")
                    .setCount([1, 4])
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.of("minecraft:ender_pearl")
                    .setCount([1, 4])
                    .withWeight(6)
            )

            p.addEntry(
                LootEntry.of("minecraft:spider_eye")
                    .setCount([1, 4])
                    .withWeight(3)
            )

            p.addEntry(
                LootEntry.empty()
                    .withWeight(50)
            )

            p.rolls(1)
        })
})