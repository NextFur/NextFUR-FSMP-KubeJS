ServerEvents.tags("item", e => {

    let siftable_items = [
        "minecraft:dirt",
        "minecraft:gravel",
        "minecraft:sand",
        "minecraft:soul_sand",
        "createsifter:crushed_netherrack",
        "createsifter:crushed_end_stone",
        "createsifter:crushed_basalt",
        "createsifter:dust",
        "minecraft:oak_leaves",
    ]

    siftable_items.forEach(c => {
        e.add("createsifter:siftable", c)
    })

})