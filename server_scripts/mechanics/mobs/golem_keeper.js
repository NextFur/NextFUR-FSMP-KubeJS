// Idea stolen from Superior RPG's "Arachnophobia" gameplay modifier

EntityEvents.death(e => {
    let entity = e.entity
    let killer = e.source

    /*
    console.log(entity.customName.string)
    console.log(entity.customName.string == "Nesting Spider")
    */

    if (!entity.type.includes("commando")) return
    if (!(entity.displayName.string == "Golem Keeper")) return

    // random number between 1 and 5
    let amount = Math.floor(Math.random() * 4) + 1
    entity.playSound("minecraft:entity.iron_golem.repair")
    for (let i = 0; i < amount; i++) {
        let silverfish = e.level.createEntity("minecraft:iron_golem")
        silverfish.x = entity.x
        silverfish.y = entity.y
        silverfish.z = entity.z
        silverfish.spawn()

        /*
        // console.log(killer.actual.name)
        console.log(killer.player)
        // if (!killer.player) return
        e.level.server.scheduleInTicks(5, () => {
            console.log("Hi!")
            silverfish.lookAt("eyes", new Vec3d(killer.player.x, killer.player.y, killer.player.z))
            silverfish.runCommandSilent("/cast @e[type=minecraft:iron_golem,distance=..3] icicle")
        })
        */
    }
})