ServerEvents.recipes((event) => {
	if (typeof event.addJson !== "function") {
		console.error("Silent Gear nerf script: recipes hook lacks addJson(); update KubeJS.")
		return
	}
	// Global Multipliers (alterar conforme necessidade) -> Tipo tu f-der com o balanceamento
	const MULTIPLIERS = {
		durability: 0.8,
		armor: 0.85,
		attack_damage: 0.85, // (reduzir isso é tipo tu dar adeus ao silent gear como arma viável)
		attack_speed: 1.0
	}

	const materials = [
		{
			name: "iron",
			tier: 2,
			categories: ["metal"],
			stats: {
				main: {
					durability: 200,
					armor: 14,
					enchantment_value: 12,
					harvest_level: 2,
					rarity: 10,
					charging_value: 0.6,
					attack_speed: -2.6,
					attack_damage: 5
				},
				rod: {
					durability: 1.0,
					enchantment_value: 0.9
				}
			},
			traits: [
				{ name: "silentgear:magnetic", level: 1 },
				{ name: "silentgear:malleable", level: 3 }
			],
			crafting_item: { tag: "forge:ingots/iron" }
		},
		{
			name: "gold",
			tier: 2,
			categories: ["metal"],
			stats: {
				main: {
					durability: 40,
					armor: 10,
					enchantment_value: 25,
					harvest_level: 1,
					rarity: 15,
					charging_value: 1.2,
					attack_speed: -2.0,
					attack_damage: 3
				},
				rod: {
					durability: 0.8,
					enchantment_value: 1.5
				}
			},
			traits: [
				{ name: "silentgear:malleable", level: 4 },
				{ name: "silentgear:soft", level: 2 }
			],
			crafting_item: { tag: "forge:ingots/gold" }
		},
		{
			name: "diamond",
			tier: 3,
			categories: ["gem"],
			stats: {
				main: {
					durability: 1200,
					armor: 20,
					enchantment_value: 8,
					harvest_level: 3,
					rarity: 40,
					charging_value: 0.8,
					attack_speed: -2.4,
					attack_damage: 7
				},
				rod: {
					durability: 1.2,
					enchantment_value: 1.0
				}
			},
			traits: [
				{ name: "silentgear:brittle", level: 2 },
				{ name: "silentgear:lustrous", level: 3 }
			],
			crafting_item: { tag: "forge:gems/diamond" }
		},
		{
			name: "netherite",
			tier: 4,
			categories: ["metal"],
			stats: {
				main: {
					durability: 1800, // Vanilla is ~2031
					armor: 24,
					enchantment_value: 12,
					harvest_level: 4,
					rarity: 60,
					charging_value: 0.9,
					attack_speed: -2.4,
					attack_damage: 9
				},
				rod: {
					durability: 1.4,
					enchantment_value: 1.1
				}
			},
			traits: [
				{ name: "silentgear:fireproof", level: 1 },
				{ name: "silentgear:malleable", level: 2 }
			],
			crafting_item: { tag: "forge:ingots/netherite" }
		},
		{
			name: "copper",
			tier: 2,
			categories: ["metal"],
			stats: {
				main: {
					durability: 150,
					armor: 12,
					enchantment_value: 12,
					harvest_level: 2,
					rarity: 12,
					charging_value: 0.6,
					attack_speed: -2.5,
					attack_damage: 4.5
				},
				rod: { durability: 1.0, enchantment_value: 1.0 }
			},
			traits: [{ name: "silentgear:malleable", level: 2 }],
			crafting_item: { tag: "forge:ingots/copper" }
		},
		{
			name: "bronze",
			tier: 2,
			categories: ["metal"],
			stats: {
				main: {
					durability: 220,
					armor: 15,
					enchantment_value: 10,
					harvest_level: 2,
					rarity: 15,
					charging_value: 0.6,
					attack_speed: -2.6,
					attack_damage: 5.5
				},
				rod: { durability: 1.1, enchantment_value: 1.0 }
			},
			traits: [{ name: "silentgear:malleable", level: 2 }],
			crafting_item: { tag: "forge:ingots/bronze" }
		},
		{
			name: "crimson_iron",
			tier: 3,
			categories: ["metal"],
			stats: {
				main: {
					durability: 500,
					armor: 18,
					enchantment_value: 14,
					harvest_level: 3,
					rarity: 30,
					charging_value: 0.7,
					attack_speed: -2.5,
					attack_damage: 6
				},
				rod: { durability: 1.2, enchantment_value: 1.1 }
			},
			traits: [
				{ name: "silentgear:malleable", level: 3 },
				{ name: "silentgear:magnetic", level: 2 }
			],
			crafting_item: { tag: "forge:ingots/crimson_iron" }
		},
		{
			name: "crimson_steel",
			tier: 4,
			categories: ["metal"],
			stats: {
				main: {
					durability: 1400,
					armor: 22,
					enchantment_value: 16,
					harvest_level: 4,
					rarity: 50,
					charging_value: 0.8,
					attack_speed: -2.4,
					attack_damage: 8
				},
				rod: { durability: 1.3, enchantment_value: 1.2 }
			},
			traits: [
				{ name: "silentgear:malleable", level: 4 },
				{ name: "silentgear:hard", level: 2 }
			],
			crafting_item: { tag: "forge:ingots/crimson_steel" }
		},
		{
			name: "blaze_gold",
			tier: 3,
			categories: ["metal"],
			stats: {
				main: {
					durability: 400,
					armor: 16,
					enchantment_value: 20,
					harvest_level: 3,
					rarity: 35,
					charging_value: 1.1,
					attack_speed: -1.8,
					attack_damage: 6
				},
				rod: { durability: 0.9, enchantment_value: 1.4 }
			},
			traits: [
				{ name: "silentgear:malleable", level: 3 },
				{ name: "silentgear:soft", level: 1 }
			],
			crafting_item: { tag: "forge:ingots/blaze_gold" }
		},
		{
			name: "azure_silver",
			tier: 3,
			categories: ["metal"],
			stats: {
				main: {
					durability: 450,
					armor: 17,
					enchantment_value: 22,
					harvest_level: 3,
					rarity: 40,
					charging_value: 1.0,
					attack_speed: -1.6,
					attack_damage: 6.5
				},
				rod: { durability: 1.0, enchantment_value: 1.5 }
			},
			traits: [
				{ name: "silentgear:malleable", level: 3 },
				{ name: "silentgear:moonwalker", level: 1 }
			],
			crafting_item: { tag: "forge:ingots/azure_silver" }
		},
		{
			name: "azure_electrum",
			tier: 4,
			categories: ["metal"],
			stats: {
				main: {
					durability: 900,
					armor: 20,
					enchantment_value: 24,
					harvest_level: 4,
					rarity: 55,
					charging_value: 1.1,
					attack_speed: -1.5, // Super Fast
					attack_damage: 7.5
				},
				rod: { durability: 1.1, enchantment_value: 1.6 }
			},
			traits: [
				{ name: "silentgear:malleable", level: 4 },
				{ name: "silentgear:moonwalker", level: 2 }
			],
			crafting_item: { tag: "forge:ingots/azure_electrum" }
		},
		{
			name: "tyrian_steel",
			tier: 5,
			categories: ["metal"],
			stats: {
				main: {
					durability: 2000,
					armor: 26,
					enchantment_value: 18,
					harvest_level: 5,
					rarity: 70,
					charging_value: 1.0,
					attack_speed: -2.4,
					attack_damage: 10
				},
				rod: { durability: 1.5, enchantment_value: 1.3 }
			},
			traits: [
				{ name: "silentgear:malleable", level: 5 },
				{ name: "silentgear:hard", level: 3 }
			],
			crafting_item: { tag: "forge:ingots/tyrian_steel" }
		}
	]

	materials.forEach((mat) => {
		let s = mat.stats.main
		if (typeof MULTIPLIERS !== "undefined") {
			s.durability = Math.floor(s.durability * MULTIPLIERS.durability)
			s.armor = Math.floor(s.armor * MULTIPLIERS.armor)
			s.attack_damage = Math.floor(s.attack_damage * MULTIPLIERS.attack_damage)
		}

		event.addJson(`silentgear:materials/${mat.name}.json`, {
			type: "silentgear:standard",
			simple: true,
			availability: {
				tier: mat.tier,
				categories: mat.categories,
				visible: true,
				gear_blacklisted: false,
				can_salvage: true
			},
			stats: {
				main: s,
				rod: mat.stats.rod || {}
			},
			traits: {
				main: mat.traits
			},
			crafting_items: {
				main: mat.crafting_item
			},
			name: { translate: `material.silentgear.${mat.name}` }
		})
	})
})
