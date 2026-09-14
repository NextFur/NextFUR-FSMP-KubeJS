// Idea stolen from Superior RPG's "Arachnophobia" gameplay modifier

EntityEvents.death(e => {
    let entity = e.entity

    /*
    console.log(entity.customName.string)
    console.log(entity.customName.string == "Nesting Spider")
    */

    if (!entity.type.includes("spider")) return
    if (!(entity.displayName.string == "Nesting Spider")) return // I hope whoever created JavaScript gets three pineapples rammed up their ass every fucking hour
    if (entity.type.includes("cave")) return

    // random number between 1 and 5
    let amount = Math.floor(Math.random() * 5) + 1
    entity.playSound("minecraft:entity.silverfish.hurt")
    for (let i = 0; i < amount; i++) {
        let silverfish = e.level.createEntity("minecraft:silverfish")
        silverfish.x = entity.x
        silverfish.y = entity.y
        silverfish.z = entity.z
        silverfish.spawn()
    }
    for (let i = 0; i < 2; i++) {
        let spider = e.level.createEntity("minecraft:cave_spider")
        spider.x = entity.x
        spider.y = entity.y
        spider.z = entity.z
        spider.spawn()
    }
})