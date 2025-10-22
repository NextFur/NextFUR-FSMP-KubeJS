ItemEvents.modifyTooltips(event => {

    event.add("minecraft:soul_sand", {ctrl: false}, "§7Hold §6[LCtrl]§7 for Sifting outputs")
    event.add("minecraft:soul_sand", {ctrl: true}, [
        ("§e§lAdvanced Brass Mesh (Brass Sifter)"),
        ("§7- Nether Quartz (45%)"),
        ("§7- Nether Quartz (15%)"),
        ("§7- Nugget of Experience (20%)"),
        ("§7- Nether Wart (10%)"),
        ("§7- Ghast Tear (5%)"),
        (""),
        ("§6§lBrass Mesh"),
        ("§7- Nether Quartz, Nugget of Experience (10%)"),
        ("§7- Nether Wart (5%)")
    ])
})