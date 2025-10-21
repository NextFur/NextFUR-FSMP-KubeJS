ServerEvents.tags("item", e => {

    // The Longing for an Empty Bliss

    let stuff = ["plain_ring", "stellar_ring", "threaded_ring", "overgrown_ring"]

    stuff.forEach(c => {
        e.add("curios:ring", `kubejs:${c}`)
    })

})