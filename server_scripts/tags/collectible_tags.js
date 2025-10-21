ServerEvents.tags("item", e => {

    // The Longing for an Empty Bliss

    let tlfaeb = ["a_blocky_memory", "what_does_it_matter_how_my_pixels_break", "burning_graphics_do_ache",
        "temporary_bliss_blockstate", "sudden_time_set_0_into_isolation", "items_in_the_world_fade_away",
        "an_empty_bliss_beyond_this_island"
    ]

    tlfaeb.forEach(c => {
        e.add("foxes:collectibles", `kubejs:${c}`)
        e.add("foxes:collectibles/the_longing_for_an_empty_bliss", `kubejs:${c}`)
    })

})