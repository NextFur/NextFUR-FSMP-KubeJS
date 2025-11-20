const GLOBAL_SCYTHE_COOLDOWN = 80 // in ticks

ItemEvents.rightClicked(e => {
    const player = e.player

    if (e.player.isCreative()) return

    if ((e.item.id.includes("malum:") && e.item.id.includes("scythe"))) {
        player.addItemCooldown(e.item, GLOBAL_SCYTHE_COOLDOWN)
    }
})