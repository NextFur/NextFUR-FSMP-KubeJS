ServerEvents.recipes(e => {
    /*AINDA ESTÁ SEM SUPORTE AO EMI
AS RECEITAS FUNCIONAM, CONSULTAR NO FTB QUESTS(Se eu esquecer de colocar pode me cobrar)
NÃO APAGA ISSO AQUI É A DOCUMENTAÇÃO DO NEGÓCIO(O mod é bom na 1.20.1, o cara deu rewrite na documentação inteira arrombado)
vou dar um mortal de costa - Diju

ServerEvents.recipes((event) => {
  event.recipes.summoningrituals
    .altar("stick")
    .itemInputs(["cobblestone", "#c:glass_blocks", "3x #c:ingots"])
    .entityInputs([
      "3x minecraft:elder_guardian",
      "phantom",
      "silverfish",
      "3x cow",
      "minecraft:wither",
      SummoningEntity.input("cat").tooltip("Meow"),
    ])
    .itemOutputs([
      "apple",
      "carrot",
      SummoningItem.of("3x diamond"),
      SummoningItem.of("emerald").offset([1, 2, 2]).spread([4, 2, 4]),
    ])
    .entityOutputs([
      "bat",
      "ender_dragon",
      "4x creeper",
      SummoningEntity.output("fox", 2),
      SummoningEntity.output("blaze", 2)
        .data({
          Health: 50,
          Attributes: [{ Name: "generic.max_health", Base: 50 }],
        })
        .offset([1, 2, 2])
        .tooltip([Text.of("50 health").aqua()]),
      SummoningEntity.output("zombie", 3)
        .data({
          HandItems: [
            {
              id: "minecraft:diamond_sword",
              Count: 1,
              tag: { ench: [{ id: 16, lvl: 1 }] },
            },
          ],
        })
        .tooltip("Has Sword lol"),
      SummoningEntity.output("ghast")
        .offset([1, 2, 2])
        .spread([4, 2, 4])
        .data({
          Health: 50,
          Attributes: [{ Name: "generic.max_health", Base: 50 }],
        }),
    ])
    .commands(["say Hi", "/say Hello"]) // doesn't matter if with slash or not
    .sacrificeZone([3, 3, 3])
    .conditions((conditions) =>
      conditions
        .biomes(["minecraft:plains", "minecraft:desert"])
        .dimension("minecraft:overworld")
        .maxHeight(30)
        .setOpenSky(true)
        .structures("#minecraft:mineshaft")
        .time("night")
        .weather((w) => w.setThundering(true)),
    );
});
*/
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
})