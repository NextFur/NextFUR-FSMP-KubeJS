LootJS.lootTables(e => {

    e.create("foxes:misc/enchanted_books_normal")
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount(1)
                    .enchantWithLevels([2, 12])
            )
        })

    e.create("foxes:misc/enchanted_books_uncommon")
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount(1)
                    .enchantWithLevels([5, 20])
            )
        })

    e.create("foxes:misc/enchanted_books_rare")
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount(1)
                    .enchantWithLevels([8, 25])
            )
        })

    e.create("foxes:misc/enchanted_books_epic")
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount(1)
                    .enchantWithLevels([12, 35])
            )
        })

    e.create("foxes:misc/enchanted_books_legendary")
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount(1)
                    .enchantWithLevels([16, 45])
            )
        })

    e.create("foxes:misc/enchanted_books_mythic")
        .createPool(p => {
            p.addEntry(
                LootEntry.of("minecraft:book")
                    .setCount(1)
                    .enchantWithLevels([20, 60])
            )
        })



})