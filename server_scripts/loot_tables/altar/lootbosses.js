LootJS.lootTables(e => {
    e.create("fursmp:bosses/meshy_spider")
    .createPool(p =>[
        p.addEntry(
            LootEntry.of("exdeorum:string_mesh")
            .setCount(1)
        )
    ])
})