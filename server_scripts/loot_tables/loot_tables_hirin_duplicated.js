LootJS.lootTables(event => {

    event.create("lootjs:basic_lootchest").createPool(pool => {
        pool.addEntry( LootEntry.of("minecraft:apple").withWeight(50).setCount([3, 8])
            )

        pool.addEntry( LootEntry.of("minecraft:bone").withWeight(60).setCount([3, 12])
            )

        pool.addEntry( LootEntry.of("minecraft:carrot").withWeight(40).setCount([1, 5])
            )

        pool.addEntry( LootEntry.of("minecraft:coal").withWeight(30).setCount([1, 6])
            )

        pool.addEntry( LootEntry.of("minecraft:cooked_beef").withWeight(40).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("minecraft:leather").withWeight(30).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("minecraft:potato").withWeight(40).setCount([1, 5])
            )

        pool.addEntry( LootEntry.of("minecraft:string").withWeight(60).setCount([3, 6])
            )

        pool.addEntry( LootEntry.of("minecraft:stick").withWeight(60).setCount([5, 8])
            )

        pool.addEntry( LootEntry.of("create:experience_nugget").withWeight(50).setCount([1, 5])
            )

        pool.addEntry( LootEntry.of("malum:encyclopedia_arcana").withWeight(30).setCount(1)
            )

        pool.addEntry( LootEntry.of("malum:rotting_essence").withWeight(40).setCount([1, 5])
            )

        pool.addEntry( LootEntry.of("malum:enby_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:ace_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:pan_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry(LootEntry.empty().withWeight(100)
        )

        pool.rolls([7, 14])

    })
    .createPool(pool => {
        
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_boots").withWeight(2)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_hats").withWeight(2)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_oddities").withWeight(2)
        )
        
        pool.addEntry(
            LootEntry.empty().withWeight(114)
        )
    })



    event.create("lootjs:medium_lootchest").createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:iron_ingot").withWeight(30).setCount([1, 5])
            )

        pool.addEntry( LootEntry.of("minecraft:copper_ingot").withWeight(40).setCount([2, 7])
            )

        pool.addEntry( LootEntry.of("minecraft:gold_nugget").withWeight(50).setCount([4, 10])
            )

        pool.addEntry( LootEntry.of("minecraft:leather_boots").withWeight(10).setCount(1)
            )

        pool.addEntry( LootEntry.of("minecraft:leather_leggins").withWeight(10).setCount(1)
            )

        pool.addEntry( LootEntry.of("minecraft:leather_chestplate").withWeight(10).setCount(1)
            )

        pool.addEntry( LootEntry.of("minecraft:leather_helmet").withWeight(10).setCount(1)
            )

        pool.addEntry( LootEntry.of("minecraft:lantern").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("minecraft:beetroot").withWeight(50).setCount([3, 7])
            )

        pool.addEntry( LootEntry.of("minecraft:melon_slice").withWeight(50).setCount([3, 7])
            )

        pool.addEntry( LootEntry.of("minecraft:golden_carrot").withWeight(40).setCount([1, 5])
            )

        pool.addEntry( LootEntry.of("minecraft:bread").withWeight(50).setCount([3, 6])
            )

        pool.addEntry( LootEntry.of("minecraft:baked_potato").withWeight(50).setCount([3, 7])
            )

        pool.addEntry( LootEntry.of("create:experience_nugget").withWeight(50).setCount([5, 12])
            )

        pool.addEntry( LootEntry.of("malum:bi_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:intersex_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:genderfluid_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:arcane_charcoal").withWeight(30).setCount([2, 5])
            )

        pool.addEntry( LootEntry.of("malum:crude_scythe").withWeight(50).setCount(1)
            )

        pool.addEntry(LootEntry.empty().withWeight(100)
        )
        pool.rolls([7, 14])

    })
    .createPool(pool => {
        
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_boots").withWeight(3)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_hats").withWeight(3)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_oddities").withWeight(3)
        )
        
        pool.addEntry(
            LootEntry.empty().withWeight(191)
        )

        pool.rolls(2)
    })

    event.create("lootjs:rare_lootchest").createPool(pool => {
       pool.addEntry(LootEntry.of("minecraft:iron_ingot").withWeight(40).setCount([3, 10])
            )

       pool.addEntry(LootEntry.of("minecraft:gold_ingot").withWeight(30).setCount([1, 5])
            )

       pool.addEntry(LootEntry.of("minecraft:slime_ball").withWeight(30).setCount([1, 5])
            )

       pool.addEntry(LootEntry.of("minecraft:obsidian").withWeight(50).setCount([1, 3])
            )

       pool.addEntry(LootEntry.of("create:andesite_casing").withWeight(50).setCount([2, 3])
            )

       pool.addEntry( LootEntry.of("minecraft:iron_boots").withWeight(10).setCount(1)
            )

        pool.addEntry( LootEntry.of("minecraft:iron_leggins").withWeight(10).setCount(1)
            )

        pool.addEntry( LootEntry.of("minecraft:iron_chestplate").withWeight(10).setCount(1)
            )

        pool.addEntry( LootEntry.of("minecraft:iron_helmet").withWeight(10).setCount(1)
            )

        pool.addEntry(LootEntry.of("minecraft:cake").withWeight(30).setCount(1)
            )

        pool.addEntry(LootEntry.of("minecraft:bread").withWeight(50).setCount([5, 10])
            )

        pool.addEntry(LootEntry.of("minecraft:cooked_beef").withWeight(50).setCount([5, 10])
            )

        pool.addEntry(LootEntry.of("minecraft:golden_carrot").withWeight(50).setCount([4, 8])
            )

        pool.addEntry(LootEntry.of("minecraft:glowstone_dust").withWeight(30).setCount([1, 6])
            )

        pool.addEntry(LootEntry.of("minecraft:amethyst_shard").withWeight(50).setCount([1, 4])
            )

        pool.addEntry(LootEntry.of("minecraft:nether_wart").withWeight(40).setCount([1, 6])
            )

        pool.addEntry( LootEntry.of("create:experience_nugget").withWeight(50).setCount([10, 24])
            )

        pool.addEntry( LootEntry.of("malum:trans_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:pride_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:plural_prideweave").withWeight(50).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:runewood_sapling").withWeight(30).setCount([1, 3])
            )

        pool.addEntry( LootEntry.of("malum:wicked_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry( LootEntry.of("malum:infernal_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry( LootEntry.of("malum:earthen_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry( LootEntry.of("malum:arcane_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry(LootEntry.of("ae2:certus_quartz_crystal").withWeight(30).setCount([1, 4])
            )

        pool.addEntry(LootEntry.empty().withWeight(100)
            )
        
        pool.rolls([7, 14])

    })
    .createPool(pool => {
        
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_boots").withWeight(3)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_hats").withWeight(3)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_oddities").withWeight(3)
        )
        
        pool.addEntry(
            LootEntry.empty().withWeight(221)
        )

        pool.rolls(3)
    })

    event.create("lootjs:epic_lootchest").createPool(pool => {
       pool.addEntry(LootEntry.of("minecraft:diamond").withWeight(40).setCount([1, 5])
            )

       pool.addEntry(LootEntry.of("minecraft:blaze_powder").withWeight(30).setCount([1, 4])
            )

       pool.addEntry(LootEntry.of("minecraft:ender_pearl").withWeight(30).setCount([1, 2])
            )

       pool.addEntry(LootEntry.of("minecraft:golden_apple").withWeight(50).setCount([1, 2])
            )

       pool.addEntry(LootEntry.of("minecraft:netherite_scrap").withWeight(20).setCount([1, 3])
            )

       pool.addEntry( LootEntry.of("minecraft:iron_boots").withWeight(10).setCount(1).enchant(builder => {
                    builder.withEnchantment("minecraft:protection", 1)
            })
       )

        pool.addEntry( LootEntry.of("minecraft:iron_leggins").withWeight(10).setCount(1).enchant(builder => {
                    builder.withEnchantment("minecraft:protection", 1)
            })
        )

        pool.addEntry( LootEntry.of("minecraft:iron_chestplate").withWeight(10).setCount(1).enchant(builder => {
                    builder.withEnchantment("minecraft:protection", 1)
            })
        )

        pool.addEntry( LootEntry.of("minecraft:iron_helmet").withWeight(10).setCount(1).enchant(builder => {
                    builder.withEnchantment("minecraft:protection", 1)
            })
        )

        pool.addEntry(LootEntry.of("minecraft:glowstone_dust").withWeight(40).setCount([5, 10])
            )

        pool.addEntry(LootEntry.of("minecraft:bread").withWeight(50).setCount([5, 10])
            )

        pool.addEntry(LootEntry.of("minecraft:cooked_beef").withWeight(50).setCount([5, 10])
            )

        pool.addEntry(LootEntry.of("minecraft:golden_carrot").withWeight(50).setCount([4, 8])
            )

        pool.addEntry(LootEntry.of("minecraft:glowstone_dust").withWeight(30).setCount([1, 6])
            )

        pool.addEntry(LootEntry.of("minecraft:amethyst_shard").withWeight(50).setCount([1, 4])
            )

        pool.addEntry(LootEntry.of("minecraft:nether_wart").withWeight(40).setCount([1, 6])
            )

        pool.addEntry( LootEntry.of("create:experience_nugget").withWeight(50).setCount([25, 32])
            )


        pool.addEntry( LootEntry.of("malum:sacred_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry( LootEntry.of("malum:eldritch_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry( LootEntry.of("malum:aerial_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry( LootEntry.of("malum:aqueous_spirit").withWeight(20).setCount([1, 2])
            )

        pool.addEntry( LootEntry.of("malum:cthonic_gold_fragment").withWeight(20).setCount([1, 2])
            )

        pool.addEntry(LootEntry.of("ae2:fluix_crystal").withWeight(30).setCount([1, 4])
            )

        pool.addEntry(LootEntry.empty().withWeight(100)
         )


        pool.rolls([7, 14])
    })
    .createPool(pool => {
        
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_boots").withWeight(3)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_hats").withWeight(3)
        )
        pool.addEntry(
            LootEntry.reference("foxes:artifacts/legalized_oddities").withWeight(3)
        )

        pool.addEntry(
            LootEntry.empty().withWeight(116)
        )

        pool.rolls(4)
    })

})