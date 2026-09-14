ServerEvents.recipes(e => {
    let banned_upgrades = ['sophisticatedbackpacks:stack_upgrade_omega_tier', 'sophisticatedbackpacks:xp_pump_upgrade', 'sophisticatedbackpacks:magnet_upgrade', 'sophisticatedbackpacks:advanced_magnet_upgrade']

    banned_upgrades.forEach(b => {
        e.remove({ output: b })
    })
})