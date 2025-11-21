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

    e.create("silentgear_attack_drag")
        .color("0x6A1E1E")
        .displayName("Weighted Gear")
        .harmful()
        .modifyAttribute(
            "minecraft:generic.attack_speed",
            "d5ad52bb-1111-4c77-9d3d-010101010101",
            -0.30, "add_multiplied_total"
        )
        .modifyAttribute(
            "minecraft:generic.attack_damage",
            "d5ad52bb-3333-4c77-9d3d-010101010101",
            -0.60, "add_multiplied_total"
        )

    e.create("silentgear_armor_crack")
        .color("0x1E3A6A")
        .displayName("Compromised Plating")
        .harmful()
        .modifyAttribute(
            "minecraft:generic.armor",
            "d5ad52bb-2222-4c77-9d3d-010101010101",
            -0.45, "add_multiplied_total"
        )
        
})