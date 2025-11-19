StartupEvents.registry("item", e => {

    // Brick Dust
    e.create("brick_dust").texture("stuff:item/brick_dust")

    // Stuff for Matt
    e.create("croc_coin").texture("stuff:item/mattocas/croc_coin")
    e.create("croc_rose_coin").texture("stuff:item/mattocas/croc_rose_coin")

    e.create("untitled_project").texture("stuff:item/mattocas/untitled_project").displayName(".")
    e.create("handy_project").texture("stuff:item/mattocas/handy_project")
    e.create("alt_project").texture("stuff:item/mattocas/alt_project")

    e.create("astral_orb").texture("stuff:item/fops/astral_orb").displayName("§9Astral Orb")
    e.create("stellar_remnant").texture("stuff:item/fops/stellar_remnant").displayName("§9Stellar Remnant")
    e.create("plain_ring").texture("stuff:item/fops/plain_ring")
    e.create("stellar_ring").texture("stuff:item/fops/stellar_ring").displayName("§bStellar Ring")
    e.create("threaded_ring").texture("stuff:item/fops/threaded_ring").displayName("§bThreaded Ring")
    e.create("overgrown_ring").texture("stuff:item/fops/overgrown_ring").displayName("§bOvergrown Ring")
    e.create("novice_essence").displayName("§cNovice Essence").texture("stuff:item/essences/essence1")
    e.create("apprentice_essence").displayName("§6Apprentice Essence").texture("stuff:item/essences/essence2")
    e.create("master_essence").displayName("§5Master Essence").texture("stuff:item/essences/essence3")
})