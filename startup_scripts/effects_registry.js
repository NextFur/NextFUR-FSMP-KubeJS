StartupEvents.registry("mob_effect", e => {

    e.create("stuff:vulpine_grace")
        .color("0xE49B0F")
        .displayName("Vulpine Grace")
        .beneficial()
        .modifyAttribute(
            "apothic_attributes:dodge_chance",
            "4d67c594-6523-4624-a1fc-6f6e149a0000",
            0.05, "add_value"
        )
        
    e.create("stuff:outfoxed")
        .color("0xE49B0F")
        .displayName("Outfoxed!!")
        .harmful()
        .modifyAttribute(
            "apothic_attributes:dodge_chance",
            "4d67c594-6523-4624-a1fc-6f6e149a0001",
            -1, "add_multiplied_total"
        )
        
})