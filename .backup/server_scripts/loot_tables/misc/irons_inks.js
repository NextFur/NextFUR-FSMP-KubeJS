LootJS.lootTables(e => {
    e.create("foxes:misc/irons_inks_inventory")
        .createPool(p => {
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:common_ink")
                    .setCount([2, 20])
                    .withWeight(40)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:uncommon_ink")
                    .setCount([2, 12])
                    .withWeight(23)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:rare_ink")
                    .setCount([1, 10])
                    .withWeight(12)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:epic_ink")
                    .setCount([1, 8])
                    .withWeight(4)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:legendary_ink")
                    .setCount([1, 4])
                    .withWeight(1)
            )

            p.rolls([1, 3])
    })

    e.create("foxes:misc/irons_inks_reward")
        .createPool(p => {
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:common_ink")
                    .setCount([1, 14])
                    .withWeight(50)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:uncommon_ink")
                    .setCount([1, 12])
                    .withWeight(30)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:rare_ink")
                    .setCount([1, 6])
                    .withWeight(15)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:epic_ink")
                    .setCount([1, 3])
                    .withWeight(6)
            )
            
            p.addEntry(
                LootEntry.of("irons_spellbooks:legendary_ink")
                    .setCount([1, 2])
                    .withWeight(1)
            )

            p.rolls(1)
        })        
})