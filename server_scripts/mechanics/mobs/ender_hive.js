// Idea stolen from Superior RPG's "Arachnophobia" gameplay modifier

EntityEvents.death(e => {
    let entity = e.entity

    /*
    console.log(entity.customName.string)
    console.log(entity.customName.string == "Nesting Spider")
    */

    if (!entity.type.includes("enderman")) return
    if (!(entity.displayName.string == "Ender Hive")) return

    // random number between 2 and 5
    let amount = Math.floor(Math.random() * 3) + 2
    entity.playSound("minecraft:entity.silverfish.hurt")
    for (let i = 0; i < amount; i++) {
        let silverfish = e.level.createEntity("minecraft:endermite")
        silverfish.x = entity.x
        silverfish.y = entity.y
        silverfish.z = entity.z
        silverfish.spawn()
    }
    
    for (let i = 0; i < 2; i++) {
        let spider = e.level.createEntity("minecraft:silverfish")
        spider.x = entity.x
        spider.y = entity.y
        spider.z = entity.z
        spider.spawn()
    }
})