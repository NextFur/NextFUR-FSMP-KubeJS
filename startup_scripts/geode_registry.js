StartupEvents.registry("item", e => {

    // Geodes!

    const geodes = ["Auferlite", "Carbonaceous", "Varmandnite", "Oubliestos", "Vitreostrata", "Minitra", "Umbra"]

    geodes.forEach(geode => {
        e.create(`geode_${geode.toLowerCase()}`)
            .texture(`stuff\:item/geodes/geode_${geode.toLowerCase()}`)
            .displayName(`§e${geode} Geode`)
            .rarity("uncommon")
            .maxStackSize(16)
    })

    e.create("geode_amorphous")
        .texture("stuff:item/geodes/geode_amorphous")
        .displayName("§eAmorphous Geode")
        .rarity("uncommon")
        .maxStackSize(16)

    /*
    e.create("geode_auferlite").texture("stuff:item/geodes/geode_auferlite").displayName(Text.of("Auferlite Geode").green()).maxStackSize(16)
    e.create("geode_carbonaceous").texture("stuff:item/geodes/geode_carbonaceous").displayName(Text.of("Carbonaceous Geode").green()).maxStackSize(16)
    */

})