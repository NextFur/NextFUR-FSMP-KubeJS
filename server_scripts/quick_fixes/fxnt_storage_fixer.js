ServerEvents.recipes(e => {
    e.replaceInput(
        { mod: "fxntstorage", input: "create:redstone_link" },
        "create:redstone_link",
        "minecraft:comparator"
    )
})