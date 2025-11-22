ServerEvents.recipes(e => {
    e.remove({ output:[
        //Isso remove as receitas vanillas dos itens
        //Actually Additions
        "actuallyadditions:ring_of_growth",
        "actuallyadditions:ring_of_magnetizing",
        "actuallyadditions:teleport_staff",
        "actuallyadditions:phantom_connector",
        //IndustrialForegoing
        "industrialforegoing:infinity_backpack",
        "industrialforegoing:infinity_trident",
        "industrialforegoing:infinity_launcher",
        "industrialforegoing:infinity_saw",
        "industrialforegoing:infinity_hammer",
        "industrialforegoing:infinity_drill",
        "industrialforegoing:infinity_nuke",
        "industrialforegoing:mechanical_dirt",
        "industrialforegoing:ore_laser_base",
         //ExDeorum AKA Ex Nihilo
         "exdeorum:end_cake",
         "exdeorum:string_mesh",
         "exdeorum:flint_mesh",
         "exdeorum:iron_mesh",
         "exdeorum:golden_mesh",
         "exdeorum:diamond_mesh",
         "exdeorum:netherite_mesh",
        //Quantum armor graças a deus
        "advanced_ae:quantum_alloy_plate",
        "advanced_ae:quantum_alloy",
        "advanced_ae:quantum_helmet",
        "advanced_ae:quantum_chestplate",
        "advanced_ae:quantum_leggings",
        "advanced_ae:quantum_boots",
        //Point Blank
        "pointblank:printer"
    ]})
    e.remove({ type: "actuallyadditions:empowering" })
})