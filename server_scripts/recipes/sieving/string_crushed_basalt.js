ServerEvents.recipes(e => {
    const meshes = ['exdeorum:string_mesh', 'exdeorum:flint_mesh', 'exdeorum:iron_mesh', 'exdeorum:golden_mesh', 'exdeorum:diamond_mesh', 'exdeorum:netherite_mesh']
    const chances = []

    // Normal sieve

    e.custom({
        "type": "exdeorum:sieve",
        "ingredient": {
            "item": "exdeorum:crushed_blackstone"
        },
        "mesh": {
            "item": "exdeorum:string_mesh"
        },
        "result": {
            "id": "kubejs:geode_amorphous",
            "count": 1
        },
        "result_amount": {
            "type": "minecraft:binomial",
            "n": 1.0,
            "p": 0.008
        }
    })

    e.custom({
        "type": "exdeorum:sieve",
        "ingredient": {
            "item": "exdeorum:crushed_blackstone"
        },
        "mesh": {
            "item": "exdeorum:string_mesh"
        },
        "result": {
            "id": "minecraft:magma_cream",
            "count": 1
        },
        "result_amount": {
            "type": "minecraft:binomial",
            "n": 1.0,
            "p": 0.06
        }
    })

    e.custom({
        "type": "exdeorum:sieve",
        "ingredient": {
            "item": "exdeorum:crushed_blackstone"
        },
        "mesh": {
            "item": "exdeorum:string_mesh"
        },
        "result": {
            "id": "minecraft:gunpowder",
            "count": 1
        },
        "result_amount": {
            "type": "minecraft:binomial",
            "n": 1.0,
            "p": 0.07
        }
    })

    // Compressed sieve
    
    e.custom({
        "type": "exdeorum:compressed_sieve",
        "ingredient": {
            "tag": "exdeorum:compressed/crushed_blackstone"
        },
        "mesh": {
            "item": "exdeorum:string_mesh"
        },
        "result": {
            "id": "kubejs:geode_amorphous",
            "count": 1
        },
        "result_amount": {
            "type": "minecraft:binomial",
            "n": 7.0,
            "p": 0.008
        }
    })

    e.custom({
        "type": "exdeorum:compressed_sieve",
        "ingredient": {
            "tag": "exdeorum:compressed/crushed_blackstone"
        },
        "mesh": {
            "item": "exdeorum:string_mesh"
        },
        "result": {
            "id": "minecraft:magma_cream",
            "count": 1
        },
        "result_amount": {
            "type": "minecraft:binomial",
            "n": 7.0,
            "p": 0.06
        }
    })

    e.custom({
        "type": "exdeorum:compressed_sieve",
        "ingredient": {
            "tag": "exdeorum:compressed/crushed_blackstone"
        },
        "mesh": {
            "item": "exdeorum:string_mesh"
        },
        "result": {
            "id": "minecraft:gunpowder",
            "count": 1
        },
        "result_amount": {
            "type": "minecraft:binomial",
            "n": 7.0,
            "p": 0.07
        }
    })

})