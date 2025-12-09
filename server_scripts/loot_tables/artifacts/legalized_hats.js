LootJS.lootTables(e => {

    let hats = ['artifacts:plastic_drinking_hat', 'artifacts:novelty_drinking_hat', 'artifacts:snorkel', 'artifacts:night_vision_goggles', 'artifacts:anglers_hat', 'artifacts:cowboy_hat', 'artifacts:superstitious_hat']

    e.create("foxes:artifacts/legalized_hats").createPool(p => {
        hats.forEach(h => {
            p.addEntry(LootEntry.of(h).withWeight(1))
        })
    })
})