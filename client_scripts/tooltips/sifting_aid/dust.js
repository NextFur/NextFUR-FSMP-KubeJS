ItemEvents.modifyTooltips(event => {

    event.add("createsifter:dust", {ctrl: false}, "§7Hold §6[LCtrl]§7 for Sifting outputs")
    event.add("createsifter:dust", {ctrl: true}, [
        ("§e§lAdvanced Brass Mesh (Brass Sifter)"),
        ("§7- Certus Quartz Crystal (10%)"),
        ("§7- Charged Certus Quartz Crystal (<1%)"),
        (""),
        ("§6§lBrass Mesh"),
        ("§7- Bone Meal (60%)"),
        ("§7- 2x Redstone Dust (35%)"),
        ("§7- Glowstone Dust, Nugget of Experience (20%)"),
        ("§7- Certus Quartz Crystal (10%)"),
        ("§7- Blaze Powder, Sky Stone Dust (5%)"),
        (""),
        ("§f§lAndesite Mesh"),
        ("§7- Bone Meal (40%)"),
        ("§7- 2x Redstone Dust, Nugget of Experience (20%)"),
        ("§7- Glowstone Dust (10%)"),
        ("§7- Certus Quartz Crystal (5%)"),
        ("§7- Blaze Powder, Sky Stone Dust (<1%)")
    ])
})