ItemEvents.rightClicked(e => {
    const player = e.player
    const dimension = e.level
    const main_hand_item = player.mainHandItem
    const geode_prefix = "kubejs:geode"

    if (main_hand_item.id.includes(geode_prefix)) {
        let parts = main_hand_item.id.split("_")
        let geode_name = parts[1]
        
        main_hand_item.count--
        e.server.scheduleInTicks(1, () => {
            e.server.runCommandSilent(`loot give ${player.username} loot foxes:geodes/${geode_name}`)
            e.server.runCommandSilent(`playsound minecraft:block.amethyst_block.break player ${player.username} ${player.x} ${player.y} ${player.z}`)
        })
        // console.log(`${player.username} cracked an ${geode_name} geode`)
    }
})
