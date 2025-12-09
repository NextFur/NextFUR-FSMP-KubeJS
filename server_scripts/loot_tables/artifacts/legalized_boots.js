LootJS.lootTables(e => {

    let boots = ['artifacts:flippers', 'artifacts:rooted_boots', 'artifacts:running_shoes', 'artifacts:aqua_dashers', 'artifacts:bunny_hoppers', 'artifacts:snowshoes', 'artifacts:steadfast_spikes', 'artifacts:strider_shoes']

    e.create("foxes:artifacts/legalized_boots").createPool(p => {
        boots.forEach(b => {
            p.addEntry(LootEntry.of(b).withWeight(1))
        })
    })
})