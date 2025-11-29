ItemEvents.firstLeftClicked("create:potato_cannon", event => {
    const {player, server} = event
    const main = player.mainHandItem
    const off = player.offhandItem
    const valid_off = ["minecraft:lapis_lazuli", "minecraft:blaze_powder", "minecraft:gunpowder", "minecraft:blue_ice", "minecraft:breeze_rod", "minecraft:ender_pearl"]


    if (!(main.id.includes("create:potato_cannon"))) return 
    if (!valid_off.includes(off.id)) return
    if (player.cooldowns.isOnCooldown("create:potato_cannon")) return
    if (!(main.customData.get("Engineer") == "Flitwick")) return


    switch(off.id) {
        
        // Placeholder: Lapis Lazuli
        case valid_off[0]:
            for (let i = 0; i < 4; i++) {
                server.scheduleInTicks(1 + i * 2, () => {
                    server.runCommandSilent(`execute in ${event.level.dimension} run cast ${player.uuid} icicle 1`)
                })
            }
            player.addItemCooldown(event.item, 30)
            return

        // Placeholder: Blaze Powder
        case valid_off[1]:
            for (let i = 0; i < 10; i++) {
                server.scheduleInTicks(1 + i * 3, () => {
                    server.runCommandSilent(`execute in ${event.level.dimension} run cast ${player.uuid} flaming_barrage 1`)
                })
            }
            player.addItemCooldown(event.item, 80)
            return

        // Placeholder: Gunpowder
        case valid_off[2]:
            for (let i = 0; i < 8; i++) {
                server.scheduleInTicks(1 + i * 4, () => {
                    server.runCommandSilent(`execute in ${event.level.dimension} run cast ${player.uuid} lob_creeper 1`)
                })
            }
            player.addItemCooldown(event.item, 90)
            return

        // Placeholder: Blue Ice
        case valid_off[3]:
            for (let i = 0; i < 1; i++) {
                server.scheduleInTicks(1 + i * 15, () => {
                    server.runCommandSilent(`execute in ${event.level.dimension} run cast ${player.uuid} snowball 1`)
                })
            }
            player.addItemCooldown(event.item, 120)
            return

        // Placeholder: Breeze Rod
        case valid_off[4]:
            for (let i = 0; i < 4; i++) {
                server.scheduleInTicks(1 + i * 5, () => {
                    server.runCommandSilent(`execute in ${event.level.dimension} run cast ${player.uuid} ball_lightning 1`)
                })
            }
            player.addItemCooldown(event.item, 100)
            return

        // Placeholder: Ender Pearl
        case valid_off[5]:
            for (let i = 0; i < 9; i++) {
                server.scheduleInTicks(1 + i * 3, () => {
                    server.runCommandSilent(`execute in ${event.level.dimension} run cast ${player.uuid} magic_missile 1`)
                })
            }
            player.addItemCooldown(event.item, 80)
            return


        default:
            return
    }

})