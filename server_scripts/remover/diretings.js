ServerEvents.recipes(e => {
    let banned_upgrades = ['justdirethings:gooblock_tier2', 'justdirethings:gooblock_tier3', 'justdirethings:gooblock_tier4']

    banned_upgrades.forEach(b => {
        e.remove({ output: b })
    })
})