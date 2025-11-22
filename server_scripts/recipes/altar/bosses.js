ServerEvents.recipes(event => {
    event.recipes.summoningrituals.altar("kubejs:novice_essence")
		.itemInputs(["cobweb", "3x string","loom"])
		.entityOutputs([
			SummoningEntity.output("spider")
				.data({
					CustomName: '{"text":"Meshy Spider"}'
				})
				.tooltip("Meshy Spider. Bloody dangerous!")
		])
})
