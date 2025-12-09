StartupEvents.registry("item", e => {

    // The Longing for an Empty Bliss

    /*
    
    let tlfaeb = ["a_blocky_memory", "what_does_it_matter_how_my_pixels_break", "burning_graphics_do_ache",
        "temporary_bliss_blockstate", "sudden_time_set_0_into_isolation", "items_in_the_world_fade_away",
        "an_empty_bliss_beyond_this_island"
    ]

    */

    e.create("a_blocky_memory").texture("stuff:item/collectibles/caretaker/a_blocky_memory")
        .displayName("§bIt's Just a Blocky Memory").unstackable().rarity("rare")
    e.create("what_does_it_matter_how_my_pixels_break").texture("stuff:item/collectibles/caretaker/what_does_it_matter_how_my_pixels_break")
        .displayName("§bWhat Does it Matter How my Pixels Break?").unstackable().rarity("rare")
    e.create("burning_graphics_do_ache").texture("stuff:item/collectibles/caretaker/burning_graphics_do_ache")
        .displayName("§bBurning Graphics do Ache").unstackable().rarity("rare")
    e.create("temporary_bliss_blockstate").texture("stuff:item/collectibles/caretaker/temporary_bliss_blockstate")
        .displayName("§bTemporary Bliss Blockstate").unstackable().rarity("rare")
    e.create("sudden_time_set_0_into_isolation").texture("stuff:item/collectibles/caretaker/sudden_time_set_0_into_isolation")
        .displayName("§bSudden /time set 0 Into Isolation").unstackable().rarity("rare")
    e.create("items_in_the_world_fade_away").texture("stuff:item/collectibles/caretaker/items_in_the_world_fade_away")
        .displayName("§bItems in the World Fade Away").unstackable().rarity("rare")
    e.create("an_empty_bliss_beyond_this_island").texture("stuff:item/collectibles/caretaker/an_empty_bliss_beyond_this_island")
        .displayName("§bAn Empty Bliss Beyond this Island").unstackable().rarity("rare")
})