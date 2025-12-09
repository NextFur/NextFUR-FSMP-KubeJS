EntityEvents.beforeHurt("minecraft:player", e => {
    let player = e.entity
    let entity = e.source.actual

    /*
    console.log(entity.type)
    console.log(entity.displayName.string)
    */


    if (!e.source || !e.source.actual) return
    if (!entity.type.includes("iron_golem")) return
    if (!(entity.displayName.string == "Plagued Golem")) return

    // Get player's position
    let px = player.x
    let py = player.y
    let pz = player.z
    let offset = 7
    let box = AABB.of(px + offset, py + 4, pz + offset, px - offset, py - 4, pz - offset)
    let dim = e.level
    let entities_within = dim.getEntitiesWithin(box)

    // console.log(entities_within)

    entities_within.forEach(ent => {
        if (!ent.type.includes("minecraft:player")) return
        ent.runCommandSilent(`/effect give ${ent.uuid} minecraft:wither 5 1`)
    })

    // console.log(player.uuid)

})