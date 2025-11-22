ServerEvents.recipes(event => {
  //mob passivo
  //tier 1
  event.recipes.summoningrituals
    .altar("kubejs:novice_essence")
    .itemInputs(["iron_block", "3x short_grass","hay_block"
    ])
    .entityOutputs([
      "2x cow",
      "2x pig",
      "2x chicken",
    ])
    .id("fursmp:summoningaltar/tier1pacific")
    //tier 2
  event.recipes.summoningrituals
  .altar("kubejs:apprentice_essence")
  .itemInputs(["gold_block", "2x sunflower","hay_block"])
  .entityOutputs(["panda", "polar_bear"])
  .itemOutputs(["sniffer_egg"])
  .id("fursmp:summoningaltar/tier2pacific")
  //tier 3
  event.recipes.summoningrituals
  .altar("kubejs:master_essence")
  .itemInputs(["diamond_block", "4x torchflower","2x rose_bush","hay_block"])
  .entityOutputs(["2x bee","horse","rabbit"])
  .id("fursmp:summoningaltar/tier3pacific")
  //mobs aquáticos (utiliza tier 2)
  event.recipes.summoningrituals
  .altar("kubejs:apprentice_essence")
  .itemInputs(["gold_block","3x seagrass","water_bucket"])
  .entityOutputs(["dolphin","axolotl","glow_squid"])
  .itemOutputs("bucket")
});
