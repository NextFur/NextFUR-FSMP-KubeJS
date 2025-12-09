ServerEvents.recipes(e => {

    let drill_type = "modern_industrialization:bronze_drill"
    e.remove({ type: "modern_industrialization:quarry", input: drill_type })

    e.custom({
        "type": "modern_industrialization:quarry",
        "eu": 4,
        "duration": 600,
        "item_inputs": {
            "item": drill_type,
            "amount": 1,
            "probability": 0.04
        },
        "item_outputs": [
            {
                "item": "minecraft:iron_ore",
                "amount": 1,
                "probability": 0.4
            },
            {
                "item": "minecraft:coal_ore",
                "amount": 1,
                "probability": 0.4
            },
            {
                "item": "modern_industrialization:lignite_coal_ore",
                "amount": 1,
                "probability": 0.24
            },
            {
                "item": "minecraft:copper_ore",
                "amount": 1,
                "probability": 0.2
            },
            {
                "item": "modern_industrialization:tin_ore",
                "amount": 1,
                "probability": 0.3
            },
            {
                "item": "minecraft:gold_ore",
                "amount": 1,
                "probability": 0.15
            },
            {
                "item": "minecraft:redstone_ore",
                "amount": 1,
                "probability": 0.2
            },
            {
                "neoforge:conditions": [
                    { "type": "neoforge:mod_loaded", "modid": "create" }
                ],
                "item": "create:zinc_ore",
                "amount": 1,
                "probability": 0.08
            },
            {
                "neoforge:conditions": [
                    { "type": "neoforge:mod_loaded", "modid": "mekanism" }
                ],
                "item": "mekanism:osmium_ore",
                "amount": 1,
                "probability": 0.12
            },
            {
                "item": "modern_industrialization:lead_ore",
                "amount": 1,
                "probability": 0.2
            },
            {
                "item": "modern_industrialization:antimony_ore",
                "amount": 1,
                "probability": 0.14
            },
            {
                "item": "modern_industrialization:nickel_ore",
                "amount": 1,
                "probability": 0.12
            },
            {
                "neoforge:conditions": [
                    { "type": "neoforge:mod_loaded", "modid": "malum" }
                ],
                "item": "malum:cthonic_gold_ore",
                "amount": 1,
                "probability": 0.08
            },
            {
                "neoforge:conditions": [
                    { "type": "neoforge:mod_loaded", "modid": "irons_spellbooks" }
                ],
                "item": "irons_spellbooks:mithril_ore",
                "amount": 1,
                "probability": 0.05
            }
        ]
    })

})