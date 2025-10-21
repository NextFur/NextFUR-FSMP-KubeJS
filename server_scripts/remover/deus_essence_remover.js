/*
LootJS.lootTables(e => {

    e.modifyLootTables(/.*\/)
        .replaceItem(
            ItemFilter.custom(i => i.id === "hazennstuff:deus_essence"),
            "irons_spellbooks:divine_pearl", true)

})
*/


LootJS.modifiers(e => {
    e.addTableModifier("irons_spellbooks:chests/component_storage").removeLoot("hazennstuff:deus_essence")
    e.addTableModifier("irons_spellbooks:chests/generic_magic_treasure").removeLoot("hazennstuff:deus_essence")
    e.addTableModifier("irons_spellbooks:magic_items/all_focuses").removeLoot("hazennstuff:deus_essence")
})
