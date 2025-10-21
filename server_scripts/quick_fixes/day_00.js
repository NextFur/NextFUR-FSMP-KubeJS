ServerEvents.recipes(e => {

    // Nerf: Backpack Ore Mining Upgrade
    e.replaceInput(
        { input: "fxntstorage:backpack_oremining_upgrade" },
        "#c:plates/iron",
        "minecraft:netherite_ingot"
    )

    // Copper jetpack
    e.remove({ type: "create_jetpack:copy_components_mechanical_crafting", output: "create_jetpack:jetpack" })
    e.remove({ type: "create_jetpack:copy_components_mechanical_crafting", output: "create_jetpack:netherite_jetpack" })

    e.custom({
        "type": "create_jetpack:copy_components_mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "pattern": [
            " PSP ",
            "PYEYP",
            "PCXCP",
            " C C "
        ],
        "key": {
            "E": {
                "item": "create_sa:copper_jetpack_chestplate"
            },
            "C": {
                "item": "create:chute"
            },
            "X": {
                "item": "create:copper_backtank"
            },
            "S": {
                "item": "create:shaft"
            },
            "Y": {
                "item": "create:precision_mechanism"
            },
            "P": {
                "tag": "c:plates/brass"
            }
        },
        "result": {
            "id": "create_jetpack:jetpack"
        }
    })

    e.custom({
        "type": "create_jetpack:copy_components_mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "pattern": [
            " PSP ",
            "PYEYP",
            "PCXCP",
            " C C "
        ],
        "key": {
            "E": {
                "item": "create_sa:netherite_jetpack_chestplate"
            },
            "C": {
                "item": "create:chute"
            },
            "X": {
                "item": "create:netherite_backtank"
            },
            "S": {
                "item": "create:shaft"
            },
            "Y": {
                "item": "create:precision_mechanism"
            },
            "P": {
                "tag": "c:plates/brass"
            }
        },
        "result": {
            "id": "create_jetpack:netherite_jetpack"
        }
    })


    
    // Replace some inputs on Create: Jetpacks' jetpacks
})