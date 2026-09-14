LootJS.lootTables(e => {

    let oddities = ['artifacts:digging_claws', 'artifacts:feral_claws', 'artifacts:antidote_vessel', 'artifacts:cloud_in_a_bottle', 'artifacts:obsidian_skull', 'artifacts:charm_of_sinking', 'artifacts:lucky_scarf', 'artifacts:crystal_heart', 'artifacts:helium_flamingo', 'artifacts:onion_ring', 'artifacts:pickaxe_heater', 'artifacts:vampiric_glove', 'artifacts:golden_hook']

    e.create("foxes:artifacts/legalized_oddities").createPool(p => {
        oddities.forEach(o => {
            p.addEntry(LootEntry.of(o).withWeight(1))
        })
    })
})