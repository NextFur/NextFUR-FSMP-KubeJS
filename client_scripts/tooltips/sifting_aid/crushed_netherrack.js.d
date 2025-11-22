ItemEvents.modifyTooltips(event => {

    event.add("createsifter:crushed_netherrack", {ctrl: false}, "§7Hold §6[LCtrl]§7 for Sifting outputs")
    event.add("createsifter:crushed_netherrack", {ctrl: true}, [
        ("§e§lAdvanced Brass Mesh (Brass Sifter)"),
        ("§7- Basalt Pebble (80%)"),
        ("§7- Blackstone Pebble (60%)"),
        ("§7- Gold Nugget (30%)"),
        ("§7- Blaze Powder (20%)"),
        ("§7- Nether Quartz (10%)"),
        ("§7- Netherite Scrap (2%)"),
        (""),
        ("§6§lBrass Mesh"),
        ("§7- Basalt Pebble (50%)"),
        ("§7- Blackstone Pebble (40%)"),
        ("§7- Blaze Powder, Gold Nugget, Nugget of Experience (10%)"),
        ("§7- Nether Quartz (5%)"),
        ("§7- Netherite Scrap (<1%)")
    ])
})