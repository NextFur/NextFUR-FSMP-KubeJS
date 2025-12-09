LootJS.lootTables(e => {
    // g stands for "guaranteed"
    e.create("foxes:gateways/raiding_the_crystal_vault_wave")

        .createPool(p => {

            p.addEntry(
                LootEntry.of("kubejs:geode_auferlite")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_carbonaceous")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_varmandnite")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_oubliestos")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_vitreostrata")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_minitra")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("kubejs:geode_umbra")
                    .setCount([1, 6])
                    .withWeight(30)
            )

            p.rolls(4)
        })

        .createPool(p => {

            p.addEntry(
                LootEntry.of("silentgear:crimson_iron_nugget")
                    .setCount([1, 12])
                    .withWeight(7)
            )

            p.addEntry(
                LootEntry.of("silentgear:blaze_gold_nugget")
                    .setCount([1, 8])
                    .withWeight(2)
            )
        
            p.addEntry(
                LootEntry.of("silentgear:azure_silver_nugget")
                    .setCount([1, 6])
                    .withWeight(1)
            )

            p.rolls([2, 6])
        })

        .createPool(p => {

            p.addEntry(
                LootEntry.of("minecraft:diamond")
                    .setCount([1, 4])
                    .withWeight(7)
            )

            p.addEntry(
                LootEntry.of("minecraft:emerald")
                    .setCount([1, 4])
                    .withWeight(3)
            )
        
            p.addEntry(
                LootEntry.of("minecraft:amethyst_shard")
                    .setCount([1, 4])
                    .withWeight(4)
            )

            p.addEntry(
                LootEntry.of("minecraft:redstone")
                    .setCount([1, 12])
                    .withWeight(4)
            )

            p.addEntry(
                LootEntry.of("minecraft:lapis_lazuli")
                    .setCount([1, 12])
                    .withWeight(4)
            )

            p.rolls([1, 8])
        })

    e.create("foxes:gateways/raiding_the_crystal_vault_end")
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:diamond")
                    .setCount([4, 24])
                    .withWeight(30)
            )

            p.addEntry(
                LootEntry.of("minecraft:emerald")
                    .setCount([4, 12])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("minecraft:gold_ingot")
                    .setCount([4, 48])
                    .withWeight(20)
            )

            p.addEntry(
                LootEntry.of("immersiveengineering:ingot_steel")
                    .setCount([2, 18])
                    .withWeight(40)
            )

            p.addEntry(
                LootEntry.of("minecraft:netherite_scrap")
                    .setCount([1, 20])
                    .withWeight(10)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:raw_mithril")
                    .setCount([1, 4])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("irons_spellbooks:cinder_essence")
                    .setCount([1, 12])
                    .withWeight(15)
            )

            p.addEntry(
                LootEntry.of("create:polished_rose_quartz")
                    .setCount([1, 12])
                    .withWeight(5)
            )

            p.addEntry(
                LootEntry.of("create:blaze_burner")
                    .setCount([1, 12])
                    .withWeight(2)
            )

            p.addEntry(
                LootEntry.of("ae2:fluix_pearl")
                    .setCount([1, 4])
                    .withWeight(10)
            )

            p.addEntry(
                LootEntry.of("ae2:flawless_budding_quartz")
                    .setCount(1)
                    .withWeight(1)
            )
        
        })
})