ServerEvents.recipes(e => {
    e.shaped(
        Item.of("create:blaze_burner", 1),
        [
            "   ",
            "PBP",
            "SLS"
        ],
        {
            B: "create:empty_blaze_burner",
            P: "create:sturdy_sheet",
            S: "#c:plates/steel",
            L: "minecraft:lava_bucket"
        }
    )
})