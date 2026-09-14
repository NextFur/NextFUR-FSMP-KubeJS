// Aqui é o Nerf em Runtime, ou seja o q vai aplicar nos items existentes e novos;
// outra coisa, aqui agnt n tem como alterar atributos direto, então a gente aplica efeitos negativos
// enquanto o player estiver usando Silent Gear

const SG_ATTACK_SPEED_EFFECT = "kubejs:silentgear_attack_drag"
const SG_ARMOR_EFFECT = "kubejs:silentgear_armor_crack"

const isSilentGearStack = stack => {
    if (!stack || stack.isEmpty()) return false
    if (typeof stack.id !== "string" || !stack.id.startsWith("silentgear:")) return false
    return stack.nbt && stack.nbt.contains("SGear")
}

const attackerHasSilentGear = attacker => {
    if (!attacker) return false
    return [attacker.mainHandItem, attacker.offHandItem].some(isSilentGearStack)
}

const entityWearsSilentGear = entity => {
    if (!entity || typeof entity.getArmorSlots !== "function") return false
    for (let armor of entity.getArmorSlots()) {
        if (isSilentGearStack(armor)) return true
    }
    return false
}

PlayerEvents.tick(event => {
    const player = event.player
    if (!player || player.level.isClientSide()) return

    if (attackerHasSilentGear(player)) {
        player.addEffect(SG_ATTACK_SPEED_EFFECT, 40, 0, false, false, true)
    } else {
        player.removeEffect(SG_ATTACK_SPEED_EFFECT)
    }

    if (entityWearsSilentGear(player)) {
        player.addEffect(SG_ARMOR_EFFECT, 40, 0, false, false, true)
    } else {
        player.removeEffect(SG_ARMOR_EFFECT)
    }
})
