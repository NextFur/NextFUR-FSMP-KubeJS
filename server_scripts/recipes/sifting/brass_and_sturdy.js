ServerEvents.recipes(e => {

    // Removing some recipes

    e.remove({
        type: "createsifter:sifting",
        id: "createsifter:sifting/crushed_basalt_advance_sturdy"
    })

    e.remove({
        type: "createsifter:sifting",
        id: "createsifter:sifting/crushed_basalt_sturdy"
    })

    e.remove({
        type: "createsifter:sifting",
        id: "createsifter:sifting/crushed_end_stone_sturdy"
    })
    
    e.remove({
        type: "createsifter:sifting",
        id: "createsifter:sifting/crushed_end_stone_advance_sturdy"
    })


    // Readding them back up
    // 1. Crushed Basalt

    e.recipes.createsifter.sifting(
        [
            Output.of("minecraft:coal", 0.32),
            Output.of("minecraft:netherite_scrap", 0.016),
            Output.of("malum:blazing_quartz", 0.12),
            Output.of("create:experience_nugget", 0.06),
            Output.of("kubejs:geode_umbra", 0.008)
        ], "createsifter:crushed_basalt", "createsifter:advanced_sturdy_mesh"
    ).advancedSifter(true).processingTime(800)
    
    // 2. Crushed Endstone

    e.recipes.createsifter.sifting(
        [
            Output.of("create:crushed_raw_silver", 0.08),
            Output.of("create:crushed_raw_lead", 0.12),
            Output.of("minecraft:ender_pearl", 0.04),
            Output.of("create:experience_nugget", 0.02),
            Output.of("kubejs:geode_minitra", 0.008)
        ], "createsifter:crushed_end_stone", "createsifter:advanced_sturdy_mesh"
    ).advancedSifter(true).processingTime(800)
    


})