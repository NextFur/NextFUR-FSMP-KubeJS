ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar("kubejs:novice_essence")
    .itemInputs(["cobweb", "3x string","loom"])
    .entityOutputs([
    SummoningEntity.output("spider")
    .data({
         Health: 50,
         Attributes: [{ Name: "generic.max_health", Base: 50 }],
        })
    .tooltip("Meshy Spider")])
    
})
