ServerEvents.tags("item", event => {
    const materials = [
        {
            forge: "forge:ingots/bronze",
            c: "c:bronze_ingots",
            items: ["silentgear:bronze_ingot"]
        },
        {
            forge: "forge:ingots/crimson_iron",
            c: "c:crimson_iron_ingots",
            items: ["silentgear:crimson_iron_ingot"]
        },
        {
            forge: "forge:ingots/crimson_steel",
            c: "c:crimson_steel_ingots",
            items: ["silentgear:crimson_steel_ingot"]
        },
        {
            forge: "forge:ingots/blaze_gold",
            c: "c:blaze_gold_ingots",
            items: ["silentgear:blaze_gold_ingot"]
        },
        {
            forge: "forge:ingots/azure_silver",
            c: "c:azure_silver_ingots",
            items: ["silentgear:azure_silver_ingot"]
        },
        {
            forge: "forge:ingots/azure_electrum",
            c: "c:azure_electrum_ingots",
            items: ["silentgear:azure_electrum_ingot"]
        },
        {
            forge: "forge:ingots/tyrian_steel",
            c: "c:tyrian_steel_ingots",
            items: ["silentgear:tyrian_steel_ingot"]
        }
    ]

    materials.forEach(entry => {
        entry.items.forEach(itemId => event.add(entry.forge, itemId))
        event.add(entry.c, `#${entry.forge}`)
    })
})
