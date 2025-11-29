ServerEvents.recipes(e => {

    let drill_type = "modern_industrialization:gold_drill"
    e.remove({ type: "modern_industrialization:quarry", input: drill_type })

    e.custom({
        "type": "modern_industrialization:quarry",
        "eu": 8,
        "duration": 600,
        "item_inputs": {
            "item": drill_type,
            "amount": 1,
            "probability": 0.08
        },
        "item_outputs": [
            {
                "item": "minecraft:netherrack",
                "amount": 32,
                "probability": 0.5
            },
            {
                "item": "minecraft:blackstone",
                "amount": 16,
                "probability": 0.25
            },
            {
                "item": "minecraft:basalt",
                "amount": 16,
                "probability": 0.25
            },
            {
                "item": "minecraft:soul_soil",
                "amount": 20,
                "probability": 0.1
            },
            {
                "item": "minecraft:magma_block",
                "amount": 5,
                "probability": 0.1
            },
            {
                "item": "minecraft:soul_sand",
                "amount": 20,
                "probability": 0.25
            },
            {
                "item": "minecraft:ancient_debris",
                "amount": 1,
                "probability": 0.05
            },

            {
                "item": "minecraft:glowstone",
                "amount": 4,
                "probability": 0.15
            },
            {
                "item": "minecraft:nether_quartz_ore",
                "amount": 6,
                "probability": 0.15
            },
            {
                "item": "minecraft:nether_gold_ore",
                "amount": 1,
                "probability": 0.25
            },
            {
                "neoforge:conditions": [
                    { "type": "neoforge:mod_loaded", "modid": "malum" }
                ],
                "item": "malum:blazing_quartz_ore",
                "amount": 8,
                "probability": 0.1
            }
        ]
    })

})