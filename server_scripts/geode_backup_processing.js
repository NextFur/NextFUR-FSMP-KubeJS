ServerEvents.recipes(e => {
    e.custom({
        "type": "create:crushing",
        "ingredients": [{ "item": "kubejs:geode_auferlite" }],
        "processing_time": 1500,
        "results": [
            { "id": "minecraft:raw_iron", "count": 7 },
            { "id": "minecraft:raw_gold", "count": 2 },
            { "id": "immersiveengineering:dust_saltpeter", "count": 6, "chance": 0.166 },
            { "id": "minecraft:redstone", "count": 9, "chance": 0.6 },
            { "id": "minecraft:lapis_lazuli", "count": 6, "chance": 0.4 },
            { "id": "immersiveengineering:raw_nickel", "count": 4, "chance": 0.33},
            { "id": "minecraft:netherite_scrap", "count": 1, "chance": 0.01 }
        ]
    })

    e.custom({
        "type": "create:crushing",
        "ingredients": [{ "item": "kubejs:geode_carbonaceous" }],
        "processing_time": 800,
        "results": [
            { "id": "minecraft:coal", "count": 10 },
            { "id": "minecraft:coal", "count": 6, "chance": 0.4 },
            { "id": "minecraft:coal", "count": 2, "chance": 0.25 },
            { "id": "minecraft:diamond", "count": 3, "chance": 0.166 },
            { "id": "minecraft:emerald", "count": 3, "chance": 0.166 },
            { "id": "minecraft:amethyst_shard", "count": 6, "chance": 0.1 },
            { "id": "minecraft:netherite_scrap", "count": 1, "chance": 0.02 }
        ]
    })

    e.custom({
        "type": "create:crushing",
        "ingredients": [{ "item": "kubejs:geode_minitra" }],
        "processing_time": 1200,
        "results": [
            { "id": "minecraft:raw_gold", "count": 4 },
            { "id": "malum:cthonic_gold_fragment", "count": 1, "chance": 0.33 },
            { "id": "immersiveengineering:dust_sulfur", "count": 3, "chance": 0.5 },
            { "id": "immersiveengineering:dust_saltpeter", "count": 2, "chance": 0.4 },
            { "id": "irons_spellbooks:raw_mithril", "count": 4, "chance": 0.166 },
            { "id": "malum:blazing_quartz", "count": 8, "chance": 0.2 },
            { "id": "minecraft:glowstone_dust", "count": 12, "chance": 0.166 }
        ]
    })

    e.custom({
        "type": "create:crushing",
        "ingredients": [{ "item": "kubejs:geode_oubliestos" }],
        "processing_time": 800,
        "results": [
            { "id": "create:raw_zinc", "count": 5 },
            { "id": "minecraft:lapis_lazuli", "count": 6, "chance": 0.4 },
            { "id": "immersiveengineering:raw_uranium", "count": 4, "chance": 0.33 },
            { "id": "immersiveengineering:raw_lead", "count": 2, "chance": 0.33 },
            { "id": "minecraft:amethyst_shard", "count": 6, "chance": 0.1 },
            { "id": "ae2:fluix_crystal", "count": 2, "chance": 0.5 },
            { "id": "minecraft:netherite_scrap", "count": 1, "chance": 0.02 }
        ]
    })

    e.custom({
        "type": "create:crushing",
        "ingredients": [{ "item": "kubejs:geode_umbra" }],
        "processing_time": 1400,
        "results": [
            { "id": "immersiveengineering:raw_lead", "count": 5 },
            { "id": "immersiveengineering:raw_silver", "count": 4 },
            { "id": "immersiveengineering:raw_nickel", "count": 2, "chance": 0.8},
            { "id": "minecraft:raw_iron", "count": 4, "chance": 0.6},
            { "id": "malum:raw_soulstone", "count": 5, "chance": 0.133 },
            { "id": "immersiveengineering:raw_uranium", "count": 4, "chance": 0.33 },
            { "id": "minecraft:netherite_scrap", "count": 1, "chance": 0.02 }
        ]
    })

    e.custom({
        "type": "create:crushing",
        "ingredients": [{ "item": "kubejs:geode_varmandnite" }],
        "processing_time": 900,
        "results": [
            { "id": "minecraft:raw_copper", "count": 12 },
            { "id": "malum:blazing_quartz", "count": 4, "chance": 0.5 },
            { "id": "immersiveengineering:raw_aluminum", "count": 8, "chance": 0.4},
            { "id": "minecraft:raw_iron", "count": 3, "chance": 0.2},
            { "id": "minecraft:redstone", "count": 4, "chance": 0.5 },
            { "id": "minecraft:lapis_lazuli", "count": 8, "chance": 0.33 },
            { "id": "minecraft:netherite_scrap", "count": 1, "chance": 0.01 }
        ]
    })

    e.custom({
        "type": "create:crushing",
        "ingredients": [{ "item": "kubejs:geode_vitreostrata" }],
        "processing_time": 1200,
        "results": [
            { "id": "create:raw_zinc", "count": 8 },
            { "id": "immersiveengineering:raw_aluminum", "count": 5 },
            { "id": "minecraft:quartz", "count": 16, "chance": 0.4 },
            { "id": "immersiveengineering:dust_sulfur", "count": 3, "chance": 0.6},
            { "id": "ae2:certus_quartz_crystal", "count": 4, "chance": 0.4 },
            { "id": "irons_spellbooks:raw_mithril", "count": 2, "chance": 0.33 },
            { "id": "minecraft:netherite_scrap", "count": 1, "chance": 0.01 }
        ]
    })
})