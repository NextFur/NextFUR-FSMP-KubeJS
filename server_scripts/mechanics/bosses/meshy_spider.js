EntityEvents.spawned("minecraft:spider", event => {

    const spider = event.entity
    const server = event.server

    // Check if said spider is the actual boss
    if (!(spider.displayName.string.includes("Meshy Spider"))) return

    // Modify attributes
    let uuid = spider.uuid
    let dimension = "minecraft:fursmp"
    server.scheduleInTicks(1, () => {
        server.runCommandSilent(`/attribute ${uuid} minecraft:generic.max_health base set 140`)
        server.runCommandSilent(`/attribute ${uuid} minecraft:generic.scale base set 2.2`)
        server.runCommandSilent(`/attribute ${uuid} minecraft:generic.movement_speed base set 0.5`)
        server.runCommandSilent(`/attribute ${uuid} minecraft:generic.armor base set 16`)
        server.runCommandSilent(`/attribute ${uuid} minecraft:generic.armor_toughness base set 8`)
        server.runCommandSilent(`/attribute ${uuid} apothic_attributes:cold_damage base set 6`)
        server.runCommandSilent(`/attribute ${uuid} apothic_attributes:armor_pierce base set 6`)
        server.runCommandSilent(`/attribute ${uuid} irons_spellbooks:spell_power base set 1.2`)
        server.runCommandSilent(`/attribute ${uuid} irons_spellbooks:spell_resist base set 1.5`)
        server.runCommandSilent(`/attribute ${uuid} irons_spellbooks:nature_magic_resist base set 1.25`)
        server.runCommandSilent(`/attribute ${uuid} irons_spellbooks:blood_magic_resist base set 1.25`)
    })     

    // Initial coordinates, might use later, might not use later
    const {sx, sy, sz} = spider

    // Helper functions
    const find_nearest_player = () => {
        // console.log("Attempting to find player")
        let target = event.level.getNearestPlayer(spider, 40)
        if (target == null) return

        return target
    }
    
    // Choreographed attacks, spell sequences, and whatever feels relevant to this?
    // Again, ram a few pineapples up whoever decided to use Javascript over Python's ass

    // dh, dv = delta horizontal, delta vertical
    const cast_targeted_barrage_offset = (target, repetitions, rep_delay, dh, dv, spell_name, spell_level) => {
        if (target != null) {
            for (let i = 0; i < repetitions; i++) {
                server.scheduleInTicks(rep_delay * i, () => {
                    let offset_x = (Math.random() * dh) - (dh / 2)
                    let offset_y = (Math.random() * dv) - (dv / 2)
                    let offset_z = (Math.random() * dh) - (dh / 2)

                    spider.lookAt("eyes", new Vec3d(target.x + offset_x, target.y + offset_y, target.z + offset_z))
                    server.runCommandSilent(`/execute in ${dimension} run cast ${uuid} ${spell_name} ${spell_level}`)
                })
            }
        }
    }

    const cast_targeted_barrage = (target, repetitions, rep_delay, spell_name, spell_level) => {
        if (target != null) {
            for (let i = 0; i < repetitions; i++) {
                server.scheduleInTicks(rep_delay * i, () => {
                    spider.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                    server.runCommandSilent(`/execute in ${dimension} run cast ${uuid} ${spell_name} ${spell_level}`)
                })
            }
        }
    }

    const cast_blood_step = (target) => {
        if (target != null) {
            spider.lookAt("eyes", new Vec3d(target.x, target.y + 1.8, target.z))
            server.runCommandSilent(`/execute in ${dimension} run cast ${uuid} burning_dash 10`)
        }
    }

    const cast_spell_ring = (target, points, spell_name, spell_level) => {
        if (target != null) {
            let r = spider.distanceToEntity(target)
            let coordinates = []

            // Must be in radians!
            let angle_step = (2 * Math.PI) / points
            
            // Calculate coordinates and store them in coordinates
            // Reasoning: we can't cast multiple spells in the same tick, so we're going for an Armor Stand workaround
            // There probably are way better ways to accomplish the same shit, but I'm tired, boss
            for (var i = 0; i < points; i++) {

                // Correcting the angle: ensures the boss will always cast something towards the player
                spider.lookAt("eyes", new Vec3d(target.x, target.y, target.z))
                let player_angle = (spider.yaw / 180) * Math.PI

                // Now add the coordinates themselves
                coordinates.push({
                    x: spider.x + r * Math.cos(player_angle + i * angle_step),
                    y: target.y + 1.8,
                    z: spider.z + r * Math.sin(player_angle + i * angle_step)
                })
            }

            coordinates.forEach(c => {
                let stand = event.level.createEntity("minecraft:armor_stand")

                // Handle NBT, as we must create invulnerable, invisible, and no gravity Armor Stands
                // If we don't make them so, we'll probably cause tons of unwanted lag. Mostly particles, but the server might get impacted as well
                // It also nullifies collateral damage, I think?
                let nbt = stand.nbt
                stand.mergeNbt({Invulnerable: true, Invisible: true, NoGravity: true, Marker: true})

                stand.x = spider.x
                stand.y = spider.y + 3.0
                stand.z = spider.z
                stand.spawn()

                // Make each Armor Stand look at the correct coordinate
                const {x, y, z} = c
                stand.lookAt("eyes", new Vec3d(x, y, z))

                // Finally, cast the fucking spell
                server.runCommandSilent(`/execute in ${dimension} run cast ${stand.uuid} ${spell_name} ${spell_level}`)

                // ... and then execute the Armor Stands, as their purpose has been served...
                server.scheduleInTicks(1, () => {
                    stand.kill()
                })                
            })
        }
    }

    let timer = Math.floor(Math.random() * 3) + 3
    server.scheduleInTicks(timer * 20, e => {
        if (!spider.alive) {
            e.repeating = false
            return
        } else {
            e.repeating = true
            let chance = Math.random()
            let target = find_nearest_player()

            if (chance < 0.7) cast_blood_step(target)

            if (chance < 0.25) {
                cast_targeted_barrage(target, 2, 10, "acupuncture", 1)
            } else if (chance < 0.5) {
                cast_targeted_barrage_offset(target, 12, 2, 3, 1, "blood_slash", 3)
            } else if (chance < 0.8) {
                cast_spell_ring(target, 12, "blood_slash", 8)
            } else {
                server.scheduleInTicks(2, () => {
                    cast_targeted_barrage_offset(target, 5, 3, 3, 1, "blood_needles", 2)
                })
                server.scheduleInTicks(20, () => {
                    cast_targeted_barrage_offset(target, 10, 1, 3, 1, "blood_needles", 4)
                })
                server.scheduleInTicks(35, () => {
                    cast_spell_ring(target, 12, "blood_slash", 6)
                })
            }
            // cast_blood_barrage(target, 3, 1)
            // cast_spell_ring(target, 20, "icicle", 5)
        }
    })
})

EntityEvents.death("minecraft:spider", event => {
    const spider = event.entity
    const server = event.server

    // Check if said spider is the actual boss, again
    if (!(spider.displayName.string.includes("Meshy Spider"))) return

    const {x, y, z} = spider
    server.runCommandSilent(`execute in ${dimension} run loot spawn ${x} ${y + 1} ${z} loot fursmp:bosses/meshy_spider`)

    for (let i = 0; i < 14; i++) {
        server.scheduleInTicks(2 + 3 * i, () => {
            let sx = (Math.random() * 0.4) - 0.2
            let sy = 1.4
            let sz = (Math.random() * 0.4) - 0.2
            server.runCommandSilent(`execute in ${dimension} run summon irons_spellbooks:comet ${x} ${y} ${z} {Motion:[${sx}, ${sy}, ${sz}],Damage:15.0,ExplosionRadius:4.0}`)
        })
    }
    
})