ServerEvents.recipes(e => {
    let items = ['silentgear:blaze_gold_dust', 'silentgear:azure_silver_dust', 'silentgear:starmetal_dust', 'silentgear:glowing_dust', 'silentgear:blazing_dust', 'silentgear:glittery_dust', 'silentgear:material_grader', 'silentgear:starlight_charger']

    items.forEach(i => {
        e.remove({ output: i })
    })
})