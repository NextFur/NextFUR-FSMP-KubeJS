ServerEvents.recipes(e => {

    function to_arcane_essence(input_item, amount){
        e.custom({
            "type": "create:haunting",
            "ingredients": [{ "item": input_item }],
            "results": [{ "count": amount, "id": "irons_spellbooks:arcane_essence" }]
        })
    }

    to_arcane_essence("minecraft:white_dye", 2)
    to_arcane_essence("minecraft:brown_dye", 4)
    to_arcane_essence("minecraft:blue_dye", 1)
    to_arcane_essence("minecraft:green_dye", 5)
    to_arcane_essence("minecraft:black_dye", 8)
    to_arcane_essence("minecraft:red_dye", 4)
    to_arcane_essence("minecraft:yellow_dye", 4)
    to_arcane_essence("minecraft:redstone", 1)
})