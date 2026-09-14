ServerEvents.recipes(e => {
    e.custom({
        "type": "create:haunting",
        "ingredients": [{ "item": "minecraft:slime_ball" }],
        "results": [{ "chance": 0.33, "id": "minecraft:ender_pearl" }]
    })
})