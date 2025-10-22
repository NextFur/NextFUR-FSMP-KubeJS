ItemEvents.modifyTooltips(event => {

    event.add("createsifter:crushed_basalt", {ctrl: false}, "§7Hold §6[LCtrl]§7 for Sifting outputs")
    event.add("createsifter:crushed_basalt", {ctrl: true}, [
        ("§4§lAdvanced Sturdy Mesh (Brass Sifter)"),
        ("§7- Coal (32%)"),
        ("§7- Blazing Quartz (12%)"),
        ("§7- Nugget of Experience (6%)"),
        ("§7- Netherite Scrap (1%)"),
        ("§7- Umbra Geode (<1%)")
    ])
})