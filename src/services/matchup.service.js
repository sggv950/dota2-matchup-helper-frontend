const matchups =[
    {
        name: "Abaddon",
        badAgainst: ["Ancient Apparition", "Anti-Mage", "Brewmaster", "Doom", "Lina", "Lion", "Outworld Devourer", "Shadow Demon", "Slark", "Undying"],
        goodAgainst: ["DeathProphet", "Mirana", "Bane", "Batrider", "Beastmaster", "Chen", "Techies", "Bloodseeker", "Necrophos"],
        goodWith: ["Storm Spirit", "Phantom Assassin", "Io", "Axe", "Legion Commander", "Centaur Warrunner", "Oracle"]
    },
    {
        name: "Alchemist",
        badAgainst: ["Ancient Apparition", "Enchantress", "Invoker", "Lifestealer", "Necrophos", "Slardar", "Slark", "Ursa", "Ember Spirit"],
        goodAgainst: ["Broodmother", "Nature's Prophet", "Phoenix", "Undying"],
        goodWith: ["Oracle", "Troll Warlord"]
    },
    {
        name: "Axe",
        badAgainst: ["Doom", "Jakiro", "Lifestealer", "Necrophos", "Outworld Devourer", "Phoenix", "Pugna", "Shadow Demon", "Spectre", "Timbersaw", "Ursa", "Undying", "Venomancer", "Viper"],
        goodAgainst: ["Anti-Mage", "Broodmother", "Chaos Knight", "Dazzle", "Huskar", "Legion Commander", "Nature's Prophet", "Phantom Assassin", "Phantom Lancer", "Slark", "Terrorblade", "Troll Warlord", "Weaver"],
        goodWith: ["Dark Seer", "Dazzle", "Enigma", "Disruptor", "Magnus", "Phoenix", "Sand King", "Skywrath Mage", "Tiny", "Venomancer", "Witch Doctor"]
    },
    {
        name: "Beastmaster",
        badAgainst: ["Abaddon", "Enchantress", "Earthshaker", "Keeper of the Light", "Oracle", "Timbersaw", "Winter Wyvern"],
        goodAgainst: ["Monkey King", "Phoenix", "Sven", "Templar Assassin", "Tinker", "Tiny", "Troll Warlord", "Ursa", "Wraith King"],
        goodWith: ["Lifestealer", "Nature's Prophet", "Phantom Assassin", "Spirit Breaker", "Sven", "Tinker", "Tiny", "Underlord", "Ursa"]
    },
    {
        name: "Brewmaster",
        badAgainst: ["Bane", "Death Prophet", "Lion", "Outworld Devourer", "Shadow Shaman", "Skywrath Mage"],
        goodAgainst: ["Huskar", "Lone Druid", "Lycan", "Templar Assassin", "Ursa"],
        goodWith: ["Dazzle", "Omniknight", "Oracle", "Tiny", "Invoker", "Ancient Apparition"]
    },
    {
        name: "Bristleback",
        badAgainst: ["Anti-Mage", "Doom", "Faceless Void", "Grimstroke", "Legion Commander", "Lion", "Necrophos", "Outworld Devourer", "Razor", "Silencer", "Slardar", "Timbersaw", "Viper", "Weaver"],
        goodAgainst: ["Arc Warden", "Broodmother", "Chaos Knight", "Huskar", "Jakiro", "Luna", "Lycan", "Meepo", "Phantom Lancer", "Pudge", "Riki", "Rubick", "Sand King"],
        goodWith: ["Crystal Maiden", "Dazzle", "Drow Ranger", "Keeper of the Light", "Outworld Devourer", "Skywrath Mage", "Venomancer"]
    },
    {
        name: "Centaur Warrunner",
        badAgainst: ["Disruptor", "Lifestealer", "Necrophos", "Nyx Assassin", "Omniknight", "Templar Assassin"],
        goodAgainst: ["Arc Warden", "Doom", "Nyx Assassin", "Phantom Assassin", "Phantom Lancer", "Sniper", "Windranger"],
        goodWith: ["Abaddon", "Mirana", "Sven", "Tusk", "Tiny", "Vengeful Spirit", "Grimstroke"]
    },
    {
        name: "Chaos Knight",
        badAgainst: ["Tinker", "Axe", "Lion", "Terrorblade", "Brewmaster", "Dragon Knight", "Earthshaker", "Enigma", "Jakiro", "Lich", "Magnus", "Monkey King", "Phantom Lancer", "Omniknight", "Pugna", "Sand King", "Sven", "Tidehunter", "Timbersaw", "Winter Wyvern", "Puck"],
        goodAgainst: ["Bounty Hunter", "Lone Druid", "Pudge", "Silencer", "Slark", "Techies", "Ursa", "Viper"],
        goodWith: ["Crystal Maiden", "DKeeper of the Lightazzle", "Morphling", "Shadow Demon"]
    },
    {
        name: "Clockwerk",
        badAgainst: ["Anti-Mage", "Chen", "Clinkz", "Dazzle", "Disruptor", "Ember Spirit", "Huskar", "Juggernaut", "Lifestealer", "Morphling", "Omniknight", "Phantom Lancer", "Phoenix", "Queen of Pain", "Terrorblade", "Ursa", "Visage"],
        goodAgainst: ["Earthshaker", "Drow Ranger", "Legion Commander", "Monkey King", "Pudge", "Sniper", "Spirit Breaker", "Tinker", "Windranger"],
        goodWith: ["Dark Seer", "Invoker", "Lifestealer", "Mirana", "Shadow Demon"]
    },
    {
        name: "Doom",
        badAgainst: ["Alchemist", "Centaur Warrunner", "Drow Ranger", "Lifestealer", "Lone Druid", "Medusa", "Necrophos", "Phantom Lancer", "Sniper", "Viper", "Wraith King"],
        goodAgainst: ["Axe", "Timbersaw", "Anti-Mage", "Bristleback", "Ember Spirit", "Invoker", "Omniknight", "Tinker", "Elder Titan", "Faceless Void", "Arc Warden"],
        goodWith: ["Ancient Apparition", "Crystal Maiden", "Sven"]
    },
    {
        name: "Dragon Knight",
        badAgainst: ["Ancient Apparition", "Bristleback", "Lich", "Necrophos", "Outworld Devourer", "Razor", "Timbersaw", "Viper"],
        goodAgainst: ["Bloodseeker", "Clinkz", "Nyx Assassin", "Riki", "Spirit Breaker", "Templar Assassin", "Witch Doctor"],
        goodWith: ["Chen", "Crystal Maiden", "Enigma", "Magnus", "Medusa", "Omniknight", "Treant Protector", "Vengeful Spirit"]
    },
    {
        name: "Earth Spirit",
        badAgainst: ["Abaddon", "Huskar", "Lycan", "Techies"],
        goodAgainst: ["Pudge", "Tinker", "Invoker", "Templar Assassin", "Enigma"],
        goodWith: ["Alchemist", "Bloodseeker", "Dark Seer", "Faceless Void", "Lifestealer", "Techies"]
    },
    {
        name: "Earthshaker",
        badAgainst: ["Clockwerk", "Disruptor", "Earth Spirit", "Lifestealer", "Skywrath Mage", "Sniper", "Spectre", "Zeus"],
        goodAgainst: ["Broodmother", "Chaos Knight", "Enigma", "Meepo", "Naga Siren", "Nature's Prophet", "Phantom Lancer"],
        goodWith: ["Dark Seer", "Enigma", "Magnus", "Naga Siren", "Puck", "Sand King"]
    },
    {
        name: "Elder Titan",
        badAgainst: ["Brewmaster", "Clockwerk", "Lich", "Lion", "Sven", "Juggernaut"],
        goodAgainst: ["Morphling", "Slark", "Terrorblade", "Viper", "Phantom Lancer"],
        goodWith: ["Disruptor", "Faceless Void", "Kunkka", "Slardar", "Luna"]
    },
    {
        name: "Huskar",
        badAgainst: ["Abaddon", "Alchemist", "Ancient Apparition", "Axe", "Bristleback", "Chaos Knight", "Enchantress", "Bloodseeker", "Juggernaut", "Lifestealer", "Naga Siren", "Slardar", "Timbersaw", "Ursa", "Windranger", "Necrophos"],
        goodAgainst: ["Weaver", "Clockwerk", "Dragon Knight", "Earthshaker", "Ember Spirit", "Nature's Prophet", "Phoenix", "Zeus"],
        goodWith: ["Ancient Apparition", "Beastmaster", "Dazzle", "Omniknight", "Oracle", "Necrophos", "Pugna", "Terrorblade", "Troll Warlord", "Witch Doctor"]
    },
    {
        name: "Io",
        badAgainst: ["Ancient Apparition", "Bloodseeker", "Bristleback", "Clinkz", "Disruptor", "Legion Commander", "Leshrac", "Luna", "Phantom Assassin", "Sniper", "Spirit Breaker", "Treant Protector", "Winter Wyvern"],
        goodAgainst: ["Drow Ranger", "Meepo", "Nature's Prophet", "Phoenix", "Pudge", "Underlord"],
        goodWith: ["Chaos Knight", "Gyrocopter", "Juggernaut", "Legion Commander", "Lifestealer", "Phantom Assassin", "Spirit Breaker", "Sven", "Tiny", "Ursa"]
    },
    {
        name: "Kunkka",
        badAgainst: ["Clinkz", "Ursa", "Silencer", "Mirana", "Phoenix", "Omniknight", "Huskar", "Juggernaut", "Lifestealer", "Sniper", "Outworld Devourer"],
        goodAgainst: ["Chaos Knight", "Broodmother", "Meepo", "Phantom Lancer", "Queen of Pain", "Spectre", "Sand King", "Warlock"],
        goodWith: ["Dark Seer", "Faceless Void", "Huskar", "Lifestealer", "Slark"]
    },
    {
        name: "Legion Commander",
        badAgainst: ["Abaddon", "Bane", "Dazzle", "Dragon Knight", "Io", "Medusa", "Omniknight", "Oracle", "Pudge", "Pugna", "Razor", "Treant Protector", "Underlord", "Ursa", "Visage", "Vengeful Spirit", "Winter Wyvern", "Witch Doctor"],
        goodAgainst: ["Anti-Mage", "Bristleback", "Broodmother", "Chen", "Drow Ranger", "Huskar", "Sniper", "Terrorblade", "Weaver"],
        goodWith: ["Ancient Apparition", "Disruptor", "Invoker", "Lifestealer", "Mirana", "Shadow Fiend", "Silencer", "Skywrath Mage", "Ursa", "Witch Doctor", "Zeus"],
    },
    {
        name: "Lifestealer",
        badAgainst: ["Ancient Apparition", "Bane", "Beastmaster", "Chaos Knight", "Clinkz", "Terrorblade", "Luna", "Monkey King", "Phantom Lancer", "Slark", "Ursa", "Weaver"],
        goodAgainst: ["Enchantress", "Spectre", "Techies", "Tinker"],
        goodWith: ["Clockwerk", "Queen of Pain", "Riki", "Slardar", "Spirit Breaker", "Storm Spirit", "Beastmaster"]
    },
    {
        name: "Lycan",
        badAgainst: ["Axe", "Beastmaster", "Bloodseeker", "Bristleback", "Omniknight", "Phantom Assassin", "Sven", "Timbersaw", "Faceless Void"],
        goodAgainst: ["Lich", "Techies", "Arc Warden", "Drow Ranger", "Ursa"],
        goodWith: ["Beastmaster", "Broodmother", "Chen", "Night Stalker", "Nature's Prophet"]
    },
    {
        name: "Magnus",
        badAgainst: ["Alchemist", "Night Stalker", "Phoenix", "Rubick", "Sniper", "Spectre", "Treant Protector", "Tinker", "Venomancer", "Wraith King", "Zeus"],
        goodAgainst: ["Chaos Knight", "Meepo", "Lifestealer", "Phantom Lancer"],
        goodWith: ["Anti-Mage", "Enigma", "Phantom Assassin", "Sven", "Troll Warlord"]
    },
    {
        name: "Night Stalker",
        badAgainst: ["Chaos Knight", "Huskar", "Lycan", "Meepo", "Naga Siren", "Omniknight", "Phantom Lancer", "Terrorblade", "Tidehunter", "Wraith King"],
        goodAgainst: ["Anti-Mage", "Bounty Hunter", "Clinkz", "Earthshaker", "Keeper of the Light", "Tinker", "Riki", "Slark", "Storm Spirit"],
        goodWith: ["Lycan", "Sniper", "Luna", "Magnus"]
    },
    {
        name: "Omniknight",
        badAgainst: ["Brewmaster", "Doom", "Invoker", "Naga Siren", "Oracle", "Outworld Devourer", "Rubick", "Silencer"],
        goodAgainst: ["Axe", "Chaos Knight", "Death Prophet", "Juggernaut", "Legion Commander", "Winter Wyvern"],
        goodWith: ["Clockwerk", "Crystal Maiden", "Keeper of the Light", "Pudge", "Phantom Assassin", "Storm Spirit"]
    },
    {
        name: "Phoenix",
        badAgainst: ["Troll Warlord", "Night Stalker", "Huskar", "Ursa", "Silencer", "Lifestealer", "Juggernaut", "Meepo", "Bloodseeker", "Viper", "Necrophos"],
        goodAgainst: ["Templar Assassin", "Phantom Assassin", "Legion Commander", "Monkey King", "Chen"],
        goodWith: ["Enigma", "Treant Protector", "Faceless Void", "Warlock", "Lifestealer", "Sven", "Tinker", "Keeper of the Light", "Invoker"]
    },
    {
        name: "Pudge",
        badAgainst: ["Abaddon", "Anti-Mage", "Bristleback", "Doom", "Legion Commander", "Lifestealer", "Tidehunter", "Timbersaw", "Weaver"],
        goodAgainst: ["Crystal Maiden", "Drow Ranger", "Luna", "Spectre", "Techies", "Templar Assassin", "Zeus", "Sniper", "Axe", "Bloodseeker"],
        goodWith: ["Techies", "Pugna", "Arc Warden", "Outworld Devourer", "Lifestealer", "Tiny"]
    },
    {
        name: "Sand King",
        badAgainst: ["Earth Spirit", "Kunkka", "Phoenix", "Rubick", "Silencer", "Zeus"],
        goodAgainst: ["Broodmother", "Meepo", "Nature's Prophet", "Phantom Assassin", "Slark", "Templar Assassin"],
        goodWith: ["Silencer", "Zeus", "Broodmother", "Meepo", "Nature's Prophet", "Phantom Assassin", "Slark", "Templar Assassin", "Crystal Maiden", "Keeper of the Light", "Omniknight", "Tidehunter", "Tiny", "Monkey King", "Warlock", "Earthshaker"]
    },
    {
        name: "Slardar",
        badAgainst: ["Oracle", "Abaddon", "Phantom Lancer", "Meepo"],
        goodAgainst: ["Riki", "Clinkz", "Bounty Hunter", "Weaver", "Shadow Fiend", "Alchemist", "Legion Commander"],
        goodWith: ["Bounty Hunter", "Vengeful Spirit", "Shadow Fiend", "Alchemist", "Lifestealer", "Phantom Assassin", "Templar Assassin"]
    },
    {
        name: "Spirit Breaker",
        badAgainst: ["Clockwerk", "Ember Spirit", "Outworld Devourer", "Enigma", "Invoker", "Medusa", "Meepo", "Phoenix", "Treant Protector", "Underlord", "Undying"],
        goodAgainst: ["Anti-Mage", "Clinkz", "Nature's Prophet", "Tinker", "Ursa"],
        goodWith: ["Bloodseeker", "Bounty Hunter", "Io", "Lifestealer"]
    },
    {
        name: "Sven",
        badAgainst: ["Clockwerk", "Enchantress", "Lifestealer", "Phantom Assassin", "Razor", "Omniknight", "Sniper", "Spectre", "Troll Warlord", "Venomancer", "Winter Wyvern", "Wraith King"],
        goodAgainst: ["Anti-Mage", "Broodmother", "Chaos Knight", "Chen", "Death Prophet", "Doom", "Meepo", "Pangolier", "Phantom Lancer", "Warlock"],
        goodWith: ["Crystal Maiden", "Dark Seer", "Enigma", "Io", "Lion", "Magnus", "Oracle", "Shadow Shaman", "Troll Warlord"]
    },
    {
        name: "Tidehunter",
        badAgainst: ["Disruptor", "Enigma", "Luna", "Outworld Devourer", "Rubick", "Silencer", "Slark", "Ursa"],
        goodAgainst: ["Batrider", "Slardar", "Windranger"],
        goodWith: ["Underlord", "Earthshaker"]
    },
    {
        name: "Timbersaw",
        badAgainst: ["Bane", "Doom", "Ember Spirit", "Faceless Void", "Invoker", "Necrophos", "Outworld Devourer", "Pangolier", "Pugna", "Skywrath Mage", "Silencer", "Storm Spirit", "Zeus"],
        goodAgainst: ["Broodmother", "Chaos Knight", "Chen", "Meepo", "Monkey King", "Nature's Prophet", "Phantom Assassin", "Phantom Lancer", "Razor", "Slark", "Terrorblade", "Treant Protector"],
        goodWith: ["Bounty Hunter", "Crystal Maiden", "Enigma", "Magnus", "Faceless Void"]
    },
    {
        name: "Tiny",
        badAgainst: ["Bristleback", "Juggernaut", "Lifestealer", "Lion", "Necrophos", "Slardar", "Viper"],
        goodAgainst: ["Broodmother", "Meepo", "Naga Siren"],
        goodWith: ["Earthshaker", "Io", "Magnus", "Slardar", "Tidehunter", "Pudge"]
    },
    {
        name: "Treant Protector",
        badAgainst: ["Nature's Prophet", "Phantom Lancer", "Rubick", "Slardar", "Timbersaw", "Venomancer", "Viper"],
        goodAgainst: ["Spirit Breaker", "Anti-Mage", "Lycan", "Storm Spirit", "Drow Ranger"],
        goodWith: ["Keeper of the Light", "Crystal Maiden", "Mirana", "Pudge", "Sven", "Warlock"]
    },
    {
        name: "Tusk",
        badAgainst: ["Anti-Mage", "Disruptor", "Earth Spirit", "Earthshaker", "Phantom Lancer", "Techies"],
        goodAgainst: ["Crystal Maiden", "Legion Commander", "Pugna", "Shadow Fiend", "Slark", "Sniper", "Viper"],
        goodWith: ["Omniknight", "Axe", "Juggernaut", "Legion Commander", "Lifestealer", "Tidehunter", "Tiny", "Meepo"]
    },
    {
        name: "Underlord",
        badAgainst: ["Bloodseeker", "Io", "Kunkka", "Nature's Prophet", "Spectre", "Sniper", "Treant Protector", "Winter Wyvern", "Rubick", "Shadow Fiend", "Visage", "Ursa"],
        goodAgainst: ["Drow Ranger", "Faceless Void", "Juggernaut", "Legion Commander", "Sven", "Templar Assassin"],
        goodWith: ["Disruptor", "Dragon Knight", "Elder Titan", "Leshrac", "Mirana", "Riki", "Rubick", "Timbersaw", "Vengeful Spirit"]
    },
    {
        name: "Undying",
        badAgainst: ["Alchemist", "Earthshaker", "Gyrocopter", "Luna", "Necrophos", "Silencer"],
        goodAgainst: ["Broodmother", "Spectre", "Ogre Magi", "Centaur Warrunner", "Winter Wyvern", "Sven", "Bristleback"],
        goodWith: ["Broodmother", "Crystal Maiden", "Naga Siren", "Warlock", "Winter Wyvern", "Lich", "Witch Doctor"]
    },
    {
        name: "Wraith King",
        badAgainst: ["Anti-Mage", "Chaos Knight", "Invoker", "Lion", "Phantom Lancer", "Riki", "Slark", "Terrorblade", "Weaver"],
        goodAgainst: ["Axe", "Bloodseeker", "Doom", "Legion Commander", "Necrophos", "Techies"],
        goodWith: ["Ursa", "Troll Warlord", "Bloodseeker"]
    },
    {
        name: "Anti-Mage",
        badAgainst: ["Axe", "Bane", "Bloodseeker", "Disruptor", "Doom", "Drow Ranger", "Grimstroke", "Legion Commander", "Meepo", "Night Stalker", "Outworld Devourer", "Phantom Assassin", "Slardar", "Slark", "Shadow Demon", "Templar Assassin", "Troll Warlord", "Viper"],
        goodAgainst: ["Ancient Apparition", "Abaddon", "Arc Warden", "Clockwerk", "Elder Titan", "Medusa", "Phoenix", "Pugna", "Spectre", "Storm Spirit", "Undying", "Venomancer", "Wraith King", "Zeus"],
        goodWith: ["Bane", "Bounty Hunter", "Dazzle", "Dark Seer", "Invoker", "Lion", "Magnus", "Oracle", "Shadow Demon", "Slardar", "Treant Protector"]
    },
    {
        name: "Arc Warden",
        badAgainst: ["Anti-Mage", "Bristleback", "Meepo", "Naga Siren", "Riki", "Phantom Lancer", "Chaos Knight"],
        goodAgainst: ["Mirana", "Terrorblade", "Phoenix", "Sand King", "Sniper", "Templar Assassin", "Drow Ranger", "Enchantress"],
        goodWith: ["Ancient Apparition", "Drow Ranger"]
    },
    {
        name: "Bloodseeker",
        badAgainst: ["Abaddon", "Dazzle", "Ember Spirit", "Faceless Void", "Medusa", "Morphling", "Omniknight", "Storm Spirit", "Techies", "Tinker", "Troll Warlord", "Underlord", "Wraith King"],
        goodAgainst: ["Anti-Mage", "Clinkz", "Huskar", "Lycan", "Meepo", "Pangolier", "Phoenix", "Riki", "Slark", "Sniper", "Timbersaw", "Weaver", "Windranger"],
        goodWith: ["Ancient Apparition", "Batrider", "Bounty Hunter", "Earthshaker", "Earth Spirit", "Invoker", "Jakiro", "Magnus", "Nature's Prophet", "Phoenix", "Queen of Pain", "Venomancer", "Warlock", "Zeus"]
    },
    {
        name: "Bounty Hunter",
        badAgainst: ["Rubick", "Slardar", "Spectre", "Spirit Breaker", "Zeus"],
        goodAgainst: ["Sniper", "Nyx Assassin", "Shadow Fiend", "Pudge"],
        goodWith: ["Invoker", "Nature's Prophet", "Tinker", "Spectre", "Zeus"]
    },
    {
        name: "Broodmother",
        badAgainst: ["Alchemist", "Axe", "Bristleback", "Dark Seer", "Earthshaker", "Ember Spirit", "Kunkka", "Legion Commander", "Lina", "Meepo", "Necrophos", "Shadow Fiend", "Storm Spirit", "Sven", "Tidehunter", "Timbersaw"],
        goodAgainst: ["Ancient Apparition", "Chen", "Drow Ranger", "Enchantress", "Nature's Prophet", "Phantom Assassin", "Sniper", "Treant Protector"],
        goodWith: ["Dazzle", "Lifestealer", "Lycan"]
    },
    {
        name: "Clinkz",
        badAgainst: ["Bounty Hunter", "Bloodseeker", "Enchantress", "Lion", "Slardar", "Spirit Breaker", "Treant Protector"],
        goodAgainst: ["Anti-Mage", "Ember Spirit", "Huskar", "Nature's Prophet"],
        goodWith: ["Drow Ranger", "Omniknight", "Vengeful Spirit"]
    },
    {
        name: "Drow Ranger",
        badAgainst: ["Tinker", "Tusk", "Axe", "Clockwerk", "Huskar", "Lycan", "Riki", "Phantom Lancer", "Pudge", "Chaos Knight", "Nyx Assassin", "Omniknight"],
        goodAgainst: ["Ember Spirit", "Juggernaut", "Anti-Mage", "Weaver", "Mirana"],
        goodWith: ["Visage", "Windranger", "Vengeful Spirit", "Weaver", "Medusa", "Enigma", "Clockwerk"]
    },
    {
        name: "Ember Spirit",
        badAgainst: ["Clinkz", "Lion", "Shadow Fiend", "Silencer", "Storm Spirit", "Faceless Void", "Omniknight", "Outworld Devourer", "Riki", "Nyx Assassin", "Kunkka"],
        goodAgainst: ["Meepo", "Chaos Knight", "Terrorblade", "Crystal Maiden", "Nature's Prophet", "Phantom Lancer", "Queen of Pain"],
        goodWith: ["Magnus", "Keeper of the Light", "Dazzle"]
    },
    {
        name: "Faceless Void",
        badAgainst: ["Abaddon", "Brewmaster", "Earth Spirit", "Night Stalker", "Phoenix", "Pudge", "Shadow Demon", "Silencer", "Vengeful Spirit", "Grimstroke"],
        goodAgainst: ["Slark", "Bristleback", "Invoker", "Weaver", "Sniper", "Anti-Mage"],
        goodWith: ["Enigma", "Disruptor", "Jakiro", "Invoker", "Kunkka", "Lich", "Phoenix", "Witch Doctor", "Outworld Devourer"]
    },
    {
        name: "Gyrocopter",
        badAgainst: ["Arc Warden", "Huskar", "Juggernaut", "Lina", "Lifestealer", "Omniknight", "Queen of Pain", "Timbersaw"],
        goodAgainst: ["Meepo", "Undying", "Phantom Lancer", "Chaos Knight", "Terrorblade"],
        goodWith: ["Bloodseeker", "Earthshaker", "Enigma", "Disruptor", "Magnus", "Rubick", "Warlock"]
    },
    {
        name: "Juggernaut",
        badAgainst: ["Axe", "Clinkz", "Omniknight", "Outworld Devourer", "Phantom Lancer", "Ursa"],
        goodAgainst: ["Dark Willow", "Invoker", "Keeper of the Light", "Necrophos", "Phoenix", "Templar Assassin", "Zeus"],
        goodWith: ["Crystal Maiden", "Dazzle", "Shadow Shaman", "Venomancer", "Zeus"]
    },
    {
        name: "Lone Druid",
        badAgainst: ["Phantom Assassin", "Faceless Void", "Legion Commander", "Slark", "Tinker"],
        goodAgainst: ["Nature's Prophet", "Silencer"],
        goodWith: ["Beastmaster", "Lycan", "Ogre Magi", "Omniknight"]
    },
    {
        name: "Luna",
        badAgainst: ["Arc Warden", "Bristleback", "Broodmother", "Huskar", "Juggernaut", "Lina", "Meepo", "Phantom Lancer", "Pudge", "Sniper", "Slark", "Techies", "Tinker", "Zeus"],
        goodAgainst: ["Chen", "Enchantress", "Legion Commander", "Lifestealer", "Pugna", "Bane", "Necrophos"],
        goodWith: ["Crystal Maiden", "Keeper of the Light", "Night Stalker", "Omniknight", "Vengeful Spirit", "Shadow Demon"]
    },
    {
        name: "Medusa",
        badAgainst: ["Anti-Mage", "Arc Warden", "Invoker", "Meepo", "Nyx Assassin", "Outworld Devourer", "Phantom Lancer", "Slark", "Sniper"],
        goodAgainst: ["Enchantress", "Lifestealer", "Morphling", "Necrophos", "Sven", "Undying", "Slardar", "Enigma", "Axe", "Spectre"],
        goodWith: ["Earthshaker", "Axe", "Drow Ranger", "Shadow Demon", "Witch Doctor"]
    },
    {
        name: "Meepo",
        badAgainst: ["Lich", "Axe", "Earthshaker", "Ember Spirit", "Kunkka", "Pangolier", "Sven", "Terrorblade", "Winter Wyvern"],
        goodAgainst: ["Anti-Mage", "Legion Commander", "Phantom Lancer", "Phoenix", "Queen of Pain", "Spirit Breaker", "Storm Spirit"],
        goodWith: ["Disruptor", "Kunkka", "Silencer", "Sven"]
    },
    {
        name: "Mirana",
        badAgainst: ["Puck", "Abaddon", "Meepo", "Arc Warden", "Slark"],
        goodAgainst: ["Crystal Maiden", "Drow Ranger", "Invoker", "Techies", "Witch Doctor"],
        goodWith: ["Axe", "Bane", "Batrider", "Clockwerk", "Shadow Demon", "Underlord"]
    },
    {
        name: "Monkey King",
        badAgainst: ["Batrider", "Beastmaster", "Bounty Hunter", "Brewmaster", "Clockwerk", "Disruptor", "Earth Spirit", "Enigma", "Keeper of the Light", "Magnus", "Pangolier", "Phantom Assassin", "Pudge", "Queen of Pain", "Slardar", "Spectre", "Spirit Breaker", "Storm Spirit", "Techies", "Timbersaw", "Vengeful Spirit", "Venomancer", "Visage", "Windranger"],
        goodAgainst: ["Chen", "Drow Ranger", "Nature's Prophet", "Shadow Fiend", "Silencer", "Skywrath Mage", "Sniper", "Witch Doctor"],
        goodWith: ["Beastmaster", "Crystal Maiden", "Dark Seer", "Elder Titan", "Keeper of the Light", "Magnus", "Nature's Prophet", "Oracle", "Puck", "Treant Protector"]
    },
    {
        name: "Morphling",
        badAgainst: ["Ancient Apparition", "Anti-Mage", "Arc Warden", "Earth Spirit", "Ember Spirit", "Elder Titan", "Lion", "Meepo", "Mirana", "Outworld Devourer", "Rubick", "Skywrath Mage"],
        goodAgainst: ["Bloodseeker", "Clockwerk", "Drow Ranger", "Lone Druid", "Phantom Assassin", "Razor", "Sniper"],
        goodWith: ["Drow Ranger", "Tiny", "Pugna"]
    },
    {
        name: "Naga Siren",
        badAgainst: ["Axe", "Enchantress", "Earthshaker", "Huskar", "Lion", "Outworld Devourer", "Timbersaw", "Zeus"],
        goodAgainst: ["Omniknight", "Nature's Prophet", "Legion Commander", "Templar Assassin", "Crystal Maiden", "Chen", "Winter Wyvern", "Bounty Hunter", "Viper", "Night Stalker", "Enigma", "Magnus", "Arc Warden"],
        goodWith: ["Dazzle", "Disruptor", "Kunkka", "Razor", "Tidehunter"]
    },
    {
        name: "Nyx Assassin",
        badAgainst: ["Bounty Hunter", "Slardar", "Bloodseeker", "Lifestealer", "Juggernaut", "Night Stalker", "Visage", "Arc Warden"],
        goodAgainst: ["Puck", "Crystal Maiden", "Sniper", "Enigma", "Phoenix", "Ember Spirit", "Storm Spirit", "Medusa", "Windranger", "Tinker", "Outworld Devourer"],
        goodWith: ["Invoker", "Legion Commander", "Lifestealer", "Bloodseeker"]
    },
    {
        name: "Pangolier",
        badAgainst: ["Anti-Mage", "Beastmaster", "Bloodseeker", "Centaur Warrunner", "Doom", "Faceless Void", "Medusa", "Naga Siren", "Necrophos", "Omniknight", "Outworld Devourer", "Queen of Pain", "Spirit Breaker", "Storm Spirit", "Treant Protector", "Vengeful Spirit"],
        goodAgainst: ["Arc Warden", "Broodmother", "Meepo", "Monkey King", "Phantom Lancer", "Terrorblade", "Timbersaw", "Visage", "Weaver"],
        goodWith: ["Abaddon", "Ancient Apparition", "Batrider", "Brewmaster", "Clockwerk", "Drow Ranger", "Earth Spirit", "Jakiro", "Medusa", "Undying", "Weaver"]
    },
    {
        name: "Phantom Assassin",
        badAgainst: ["Axe", "Bane", "Broodmother", "Centaur Warrunner", "Dragon Knight", "Lion", "Morphling", "Omniknight", "Phoenix", "Puck", "Razor", "Skywrath Mage", "Spectre", "Timbersaw", "Tinker", "Viper"],
        goodAgainst: ["Anti-Mage", "Crystal Maiden", "Dazzle", "Nature's Prophet", "Riki", "Sniper"],
        goodWith: ["Ancient Apparition", "Beastmaster", "Magnus", "Omniknight", "Slardar", "Troll Warlord", "Vengeful Spirit"]
    },
    {
        name: "Phantom Lancer",
        badAgainst: ["Axe", "Bristleback", "Centaur Warrunner", "Earthshaker", "Ember Spirit", "Gyrocopter", "Kunkka", "Leshrac", "Meepo", "Magnus", "Pangolier", "Phoenix", "Puck", "Sand King", "Storm Spirit", "Sven", "Witch Doctor"],
        goodAgainst: ["Arc Warden", "Bounty Hunter", "Chaos Knight", "Clockwerk", "Disruptor", "Lifestealer", "Lone Druid", "Slark", "Templar Assassin", "Treant Protector", "Ursa", "Viper", "Visage", "Wraith King"],
        goodWith: ["Bane", "Crystal Maiden", "Dazzle", "Jakiro", "Keeper of the Light", "Oracle", "Shadow Shaman", "Slardar", "Spirit Breaker", "Undying", "Venomancer"]
    },
    {
        name: "Razor",
        badAgainst: ["Anti-Mage", "Chaos Knight", "Earth Spirit", "Huskar", "Necrophos", "Outworld Devourer", "Queen of Pain", "Slark", "Sniper", "Viper", "Weaver"],
        goodAgainst: ["Bristleback", "Lifestealer", "Monkey King", "Phantom Assassin", "Troll Warlord"],
        goodWith: ["Death Prophet", "Shadow Demon", "Outworld Devourer", "Bane", "Naga Siren"]
    },
    {
        name: "Riki",
        badAgainst: ["Axe", "Bounty Hunter", "Bristleback", "Sven", "Legion Commander", "Faceless Void", "Razor", "Slardar", "Zeus"],
        goodAgainst: ["Arc Warden", "Chen", "Crystal Maiden", "Drow Ranger", "Meepo", "Skywrath Mage", "Sniper", "Ursa"],
        goodWith: ["Faceless Void", "Lifestealer", "Meepo", "Dark Seer", "Magnus", "Enigma", "Axe"]
    },
    {
        name: "Shadow Fiend",
        badAgainst: ["Axe", "Bane", "Bounty Hunter", "Disruptor", "Doom", "Pugna", "Sniper", "Spirit Breaker", "Ursa", "Viper", "Zeus"],
        goodAgainst: ["Clockwerk", "Meepo", "Nature's Prophet", "Silencer", "Slark"],
        goodWith: ["Bane", "Clockwerk", "Enigma", "Legion Commander", "Magnus", "Slardar", "Vengeful Spirit"]
    },
    {
        name: "Slark",
        badAgainst: ["Ancient Apparition", "Axe", "Bloodseeker", "Centaur Warrunner", "Chaos Knight", "Disruptor", "Earthshaker", "Meepo", "Omniknight", "Phantom Lancer", "Puck", "Tiny"],
        goodAgainst: ["Arc Warden", "Drow Ranger", "Luna", "Medusa", "Sniper", "Spectre", "Storm Spirit", "Templar Assassin", "Warlock"],
        goodWith: ["Bane", "Earthshaker", "Magnus", "Kunkka", "Omniknight", "Skywrath Mage", "Underlord", "Witch Doctor"]
    },
    {
        name: "Sniper",
        badAgainst: ["Bounty Hunter", "Axe", "Centaur Warrunner", "Weaver", "Clockwerk", "Invoker", "Lifestealer", "Omniknight", "Phantom Assassin", "Pudge", "Slark", "Spectre", "Spirit Breaker", "Storm Spirit", "Tusk"],
        goodAgainst: ["Drow Ranger", "Enigma", "Medusa", "Silencer"],
        goodWith: ["Drow Ranger", "Ogre Magi", "Lich", "Bloodseeker"]
    },
    {
        name: "Spectre",
        badAgainst: ["Anti-Mage", "Lycan", "Necrophos", "Lion", "Meepo", "Omniknight", "Juggernaut", "Pugna", "Riki", "Shadow Shaman", "Storm Spirit", "Terrorblade", "Undying", "Viper", "Winter Wyvern"],
        goodAgainst: ["Ancient Apparition", "Crystal Maiden", "Drow Ranger", "Sniper", "Lina", "Magnus", "Nature's Prophet", "Pudge", "Rubick", "Tinker", "Windranger"],
        goodWith: ["Treant Protector", "Bounty Hunter", "Chen", "Bloodseeker", "Earthshaker", "Magnus", "Enigma", "Outworld Devourer", "Warlock"]
    },
    {
        name: "Templar Assassin",
        badAgainst: ["Arc Warden", "Venomancer", "Phoenix", "Viper", "Dragon Knight", "Pudge", "Huskar"],
        goodAgainst: ["Shadow Fiend", "Lina", "Huskar", "Luna", "Necrophos", "Storm Spirit"],
        goodWith: ["Slardar", "Omniknight", "Drow Ranger"]
    },
    {
        name: "Terrorblade",
        badAgainst: ["Earth Spirit", "Elder Titan", "Ursa", "Lina", "Shadow Shaman", "Ember Spirit", "Dazzle", "Necrophos", "Outworld Devourer", "Razor", "Sven", "Tinker", "Zeus"],
        goodAgainst: ["Ancient Apparition", "Chaos Knight", "Viper", "Techies", "Shadow Fiend", "Pudge", "Anti-Mage", "Sniper", "Meepo"],
        goodWith: ["Dazzle", "Oracle", "Shadow Demon"]
    },
    {
        name: "Troll Warlord",
        badAgainst: ["Axe", "Bane", "Chaos Knight", "Crystal Maiden", "Lich", "Oracle", "Outworld Devourer", "Razor", "Sniper", "Timbersaw", "Underlord", "Winter Wyvern"],
        goodAgainst: ["Anti-Mage", "Huskar", "Juggernaut", "Lifestealer", "Phantom Assassin", "Phoenix", "Sven", "Undying"],
        goodWith: ["Faceless Void", "Legion Commander", "Slardar", "Tiny"]
    },
    {
        name: "Ursa",
        badAgainst: ["Bane", "Bristleback", "Lion", "Razor", "Riki", "Templar Assassin", "Viper", "Weaver", "Windranger"],
        goodAgainst: ["Lifestealer", "Lina", "Timbersaw", "Huskar", "Medusa", "Axe", "Underlord"],
        goodWith: ["Bristleback", "Dazzle", "Io", "Disruptor", "Shadow Shaman", "Lion", "Bane"]
    },
    {
        name: "Vengeful Spirit",
        badAgainst: ["Phantom Lancer", "Anti-Mage", "Spirit Breaker", "Tidehunter"],
        goodAgainst: ["Batrider", "Clockwerk", "Faceless Void", "Huskar", "Meepo", "Monkey King", "Morphling"],
        goodWith: ["Techies", "Shadow Fiend", "Slardar", "Drow Ranger", "Mirana", "Bloodseeker", "Crystal Maiden", "Weaver"]
    },
    {
        name: "Venomancer",
        badAgainst: ["Legion Commander", "Slark", "Rubick", "Anti-Mage", "Huskar", "Oracle", "Terrorblade", "Sniper"],
        goodAgainst: ["Axe", "Templar Assassin", "Techies", "Magnus"],
        goodWith: ["Ancient Apparition", "Undying"]
    },
    {
        name: "Viper",
        badAgainst: ["Bane", "Broodmother", "Chaos Knight", "Invoker", "Lifestealer", "Luna", "Omniknight", "Phantom Lancer", "Rubick", "Terrorblade", "Ursa", "Weaver", "Windranger"],
        goodAgainst: ["Abaddon", "Anti-Mage", "Axe", "Bristleback", "Dragon Knight", "Enchantress", "Huskar", "Leshrac", "Phantom Assassin", "Spectre", "Templar Assassin", "Venomancer", "Zeus"],
        goodWith: ["Ancient Apparition", "Clockwerk", "Crystal Maiden", "Dazzle", "Drow Ranger", "Faceless Void", "Io", "Ogre Magi", "Rubick", "Slardar", "Treant Protector", "Vengeful Spirit"]
    },
    {
        name: "Weaver",
        badAgainst: ["Bloodseeker", "Faceless Void", "Nyx Assassin"],
        goodAgainst: ["Ancient Apparition", "Brewmaster", "Lifestealer", "Undying", "Pudge", "Sven", "Ursa", "Wraith King"],
        goodWith: ["Crystal Maiden", "Alchemist", "Vengeful Spirit"]
    },


    {
        name: "Ancient Apparition",
        badAgainst: ["Anti-Mage", "Brewmaster", "Oracle", "Phantom Lancer", "Phoenix", "Terrorblade", "Viper", "Weaver"],
        goodAgainst: ["Abaddon", "Alchemist", "Chen", "Dazzle", "Death Prophet", "Huskar"],
        goodWith: ["Faceless Void", "Meepo", "Phantom Assassin", "Shadow Demon", "Slark", "Ursa"]
    },
    {
        name: "Bane",
        badAgainst: ["Rubick", "Pudge", "Slark", "Tidehunter"],
        goodAgainst: ["Faceless Void", "Legion Commander", "Medusa", "Phantom Assassin", "Troll Warlord"],
        goodWith: ["Grimstroke", "Mirana", "Omniknight", "Pudge", "Razor", "Skywrath Mage", "Tidehunter", "Underlord"]
    },
    {
        name: "Batrider",
        badAgainst: ["Abaddon", "Kunkka", "Legion Commander", "Nyx Assassin", "Oracle", "Tidehunter", "Ursa", "Vengeful Spirit", "Venomancer", "Weaver", "Slark"],
        goodAgainst: ["Chen", "Meepo", "Monkey King", "Techies", "Templar Assassin", "Treant Protector"],
        goodWith: ["Ursa", "Pugna", "Skywrath Mage", "Pudge"]
    },
    {
        name: "Chen",
        badAgainst: ["Enchantress", "Earthshaker", "Legion Commander", "Sven", "Lina", "Luna", "Monkey King", "Venomancer", "Abaddon", "Jakiro", "Sand King", "Timbersaw", "Necrophos", "Death Prophet", "Dazzle", "Dark Seer", "Broodmother", "Alchemist", "Clinkz", "Razor", "Phoenix", "Shadow Shaman", "Elder Titan", "Naga Siren", "Batrider", "Ancient Apparition", "Treant Protector", "Underlord", "Witch Doctor"],
        goodAgainst: ["Techies", "Arc Warden", "Visage", "Clockwerk"],
        goodWith: ["Vengeful Spirit"]
    },
    {
        name: "Crystal Maiden",
        badAgainst: ["Bounty Hunter", "Bristleback", "Clockwerk", "Doom", "Earth Spirit", "Legion Commander", "Naga Siren", "Nyx Assassin", "Tidehunter", "Tusk", "Visage"],
        goodAgainst: ["Slark", "Phantom Assassin", "Templar Assassin"],
        goodWith: ["Juggernaut", "Timbersaw", "Sven"]
    },
    {
        name: "Dark Seer",
        badAgainst: ["Anti-Mage", "Ember Spirit", "Oracle", "Sniper"],
        goodAgainst: ["Broodmother", "Templar Assassin", "Treant Protector", "Meepo", "Venomancer"],
        goodWith: ["Bounty Hunter", "Elder Titan", "Enigma", "Riki", "Sven", "Venomancer"]
    },
    {
        name: "Dark Willow",
        badAgainst: ["Anti-Mage", "Axe", "Bristleback", "Drow Ranger", "Ember Spirit", "Huskar", "Juggernaut", "Lifestealer", "Nyx Assassin", "Omniknight", "Oracle", "Puck", "Pudge", "Riki", "Silencer", "Storm Spirit"],
        goodAgainst: ["Bloodseeker", "Faceless Void", "Monkey King", "Meepo", "Spirit Breaker", "Timbersaw", "Troll Warlord", "Windranger"],
        goodWith: ["Rubick", "Ember Spirit", "Invoker", "Juggernaut", "Lina", "Mirana", "Phoenix", "Puck", "Warlock", "Weaver"]
    },
    {
        name: "Dazzle",
        badAgainst: ["Ancient Apparition", "Axe", "Naga Siren", "Outworld Devourer", "Phantom Lancer", "Silencer"],
        goodAgainst: ["Clockwerk", "Legion Commander", "Necrophos", "Venomancer"],
        goodWith: ["Brewmaster", "Broodmother", "Huskar", "Meepo", "Naga Siren", "Phantom Lancer"]
    },
    {
        name: "Death Prophet",
        badAgainst: ["Ancient Apparition", "Anti-Mage", "Doom", "Legion Commander", "Omniknight", "Shadow Fiend"],
        goodAgainst: ["Zeus", "Invoker", "Morphling", "Timbersaw", "Nature's Prophet"],
        goodWith: ["Enigma", "Faceless Void"]
    },
    {
        name: "Disruptor",
        badAgainst: ["Juggernaut", "Lifestealer", "Omniknight", "Phantom Lancer", "Pugna"],
        goodAgainst: ["Slark", "Queen of Pain", "Anti-Mage", "Tidehunter", "Storm Spirit", "Io"],
        goodWith: ["Zeus", "Anti-Mage", "Keeper of the Light", "Elder Titan", "Warlock", "Clinkz"]
    },
    {
        name: "Enchantress",
        badAgainst: ["Broodmother", "Chen", "Crystal Maiden", "Juggernaut", "Lifestealer", "Lina", "Luna", "Meepo", "Timbersaw", "Troll Warlord", "Windranger", "Riki"],
        goodAgainst: ["Ember Spirit", "Lycan", "Omniknight", "Spirit Breaker", "Ursa"],
        goodWith: ["Legion Commander", "Lich", "Troll Warlord", "Io", "Warlock"]
    },
    {
        name: "Enigma",
        badAgainst: ["Clockwerk", "Medusa", "Pudge", "Rubick", "Silencer", "Sniper", "Spectre", "Storm Spirit", "Vengeful Spirit", "Warlock", "Winter Wyvern"],
        goodAgainst: ["Anti-Mage", "Chaos Knight", "Omniknight", "Monkey King", "Lifestealer", "Crystal Maiden"],
        goodWith: ["Phoenix", "Warlock", "Dark Seer", "Witch Doctor", "Outworld Devourer", "Naga Siren"]
    },
    {
        name: "Grimstroke",
        badAgainst: ["Anti-Mage", "Huskar", "Omniknight", "Phoenix", "Riki", "Rubick", "Shadow Demon", "Silencer", "Sniper", "Vengeful Spirit"],
        goodAgainst: ["Broodmother", "Crystal Maiden", "Io", "Necrophos", "Phantom Lancer", "Terrorblade", "Timbersaw", "Weaver"],
        goodWith: ["Bane", "Crystal Maiden", "Lich", "Lion", "Lina", "Necrophos", "Phoenix", "Pugna", "Slark", "Witch Doctor"]
    },
    {
        name: "Invoker",
        badAgainst: ["Broodmother", "Anti-Mage", "Doom", "Faceless Void", "Night Stalker", "Nyx Assassin", "Queen of Pain", "Silencer", "Storm Spirit", "Templar Assassin", "Viper"],
        goodAgainst: ["Huskar", "Legion Commander", "Medusa", "Tinker", "Wraith King"],
        goodWith: ["Bloodseeker", "Dark Seer", "Disruptor", "Nature's Prophet", "Faceless Void", "Legion Commander"]
    },
    {
        name: "Jakiro",
        badAgainst: ["Anti-Mage", "Clockwerk", "Lifestealer", "Oracle", "Rubick", "Silencer", "Skywrath Mage"],
        goodAgainst: ["Axe", "Broodmother", "Chen", "Chaos Knight", "Meepo", "Nature's Prophet", "Phantom Lancer", "Riki", "Templar Assassin", "Treant Protector"],
        goodWith: ["Dark Seer", "Faceless Void", "Kunkka", "Magnus", "Shadow Demon", "Treant Protector"]
    },
    {
        name: "Keeper of the Light",
        badAgainst: ["Anti-Mage", "Huskar", "Legion Commander", "Lifestealer", "Night Stalker", "Nyx Assassin"],
        goodAgainst: ["Monkey King", "Wraith King"],
        goodWith: ["Lina", "Luna", "Pudge"]
    },
    {
        name: "Leshrac",
        badAgainst: ["Pugna", "Anti-Mage", "Clockwerk", "Lifestealer", "Nyx Assassin", "Keeper of the Light"],
        goodAgainst: ["Meepo", "Visage", "Chen", "Broodmother", "Io", "Shadow Demon", "Phantom Lancer"],
        goodWith: ["Dark Seer", "Enigma", "Magnus"]
    },
    {
        name: "Lich",
        badAgainst: ["Anti-Mage", "Broodmother", "Huskar", "Nature's Prophet", "Weaver"],
        goodAgainst: ["Meepo", "Chaos Knight"],
        goodWith: ["Magnus", "Treant Protector", "Witch Doctor", "Faceless Void", "Enigma", "Axe"]
    },
    {
        name: "Lina",
        badAgainst: ["Anti-Mage", "Lifestealer", "Faceless Void", "Nyx Assassin", "Phantom Lancer", "Silencer", "Slark", "Spectre", "Sven"],
        goodAgainst: ["Chen", "Crystal Maiden", "Enchantress", "Mirana", "Phantom Assassin", "Sand King", "Shadow Shaman", "Terrorblade"],
        goodWith: ["Shadow Demon", "Sven", "Pugna", "Bane"]
    },
    {
        name: "Lion",
        badAgainst: ["Abaddon", "Lifestealer", "Omniknight", "Puck", "Rubick", "Slark", "Nyx Assassin", "Tidehunter"],
        goodAgainst: ["Drow Ranger", "Ember Spirit", "Enchantress", "Medusa", "Phantom Assassin", "Weaver", "Wraith King"],
        goodWith: ["Anti-Mage", "Centaur Warrunner", "Leshrac", "Tinker", "Ursa"]
    },
    {
        name: "Nature's Prophet",
        badAgainst: ["Storm Spirit", "Clockwerk", "Batrider", "Broodmother", "Death Prophet", "Earthshaker", "Elder Titan", "Ember Spirit", "Jakiro", "Lina", "Luna", "Meepo", "Naga Siren", "Sand King", "Shadow Shaman", "Spectre", "Spirit Breaker", "Tinker", "Underlord", "Visage"],
        goodAgainst: ["Lich", "Techies", "Venomancer"],
        goodWith: ["Bloodseeker", "Invoker", "Lycan", "Windranger", "Riki"]
    },
    {
        name: "Necrophos",
        badAgainst: ["Ancient Apparition", "Anti-Mage", "Dazzle", "Meepo", "Omniknight", "Oracle", "Phantom Lancer", "Rubick"],
        goodAgainst: ["Bristleback", "Pudge", "Axe", "Phoenix", "Sven"],
        goodWith: ["Abaddon", "Axe", "Legion Commander", "Pugna"]
    },
    {
        name: "Ogre Magi",
        badAgainst: ["Chaos Knight", "Lifestealer", "Meepo", "Phantom Lancer", "Omniknight", "Oracle"],
        goodAgainst: ["Io", "Templar Assassin", "Treant Protector"],
        goodWith: ["Juggernaut", "Shadow Fiend", "Sniper", "Sven", "Wraith King"]
    },
    {
        name: "Oracle",
        badAgainst: ["Anti-Mage", "Axe", "Bristleback", "Faceless Void", "Shadow Demon"],
        goodAgainst: ["Ember Spirit", "Legion Commander", "Dark Willow", "Omniknight", "Rubick", "Ancient Apparition", "Silencer"],
        goodWith: ["Alchemist", "Ancient Apparition", "Death Prophet", "Huskar", "Io", "Legion Commander", "Monkey King", "Shadow Demon", "Timbersaw", "Ursa", "Leshrac"]
    },
    {
        name: "Outworld Devourer",
        badAgainst: ["Brewmaster", "Legion Commander", "Lone Druid", "Nyx Assassin", "Pugna", "Rubick", "Silencer", "Sniper", "Templar Assassin"],
        goodAgainst: ["Anti-Mage", "Huskar", "Legion Commander", "Winter Wyvern", "Morphling", "Timbersaw", "Wraith King", "Medusa"],
        goodWith: ["Ogre Magi", "Silencer", "Winter Wyvern", "Drow Ranger", "Luna"]
    },
    {
        name: "Puck",
        badAgainst: ["Arc Warden", "Faceless Void", "Jakiro", "Lycan", "Night Stalker", "Nyx Assassin", "Silencer", "Templar Assassin", "Venomancer", "Wraith King"],
        goodAgainst: ["Crystal Maiden", "Mirana", "Phoenix", "Sniper", "Terrorblade"],
        goodWith: ["Enigma", "Invoker", "Kunkka", "Phoenix", "Witch Doctor"]
    },
    {
        name: "Pugna",
        badAgainst: ["Nyx Assassin", "Clockwerk", "Sniper", "Phantom Lancer", "Anti-Mage", "Luna"],
        goodAgainst: ["Enchantress", "Juggernaut", "Outworld Devourer", "Timbersaw", "Leshrac", "Chaos Knight", "Shadow Fiend", "Faceless Void", "Invoker"],
        goodWith: ["Io", "Legion Commander", "Necrophos", "Medusa", "Skywrath Mage", "Shadow Shaman"]
    },
    {
        name: "Queen of Pain",
        badAgainst: ["Anti-Mage", "Arc Warden", "Bloodseeker", "Death Prophet", "Disruptor", "Luna", "Meepo", "Night Stalker", "Nyx Assassin", "Puck", "Skywrath Mage"],
        goodAgainst: ["Drow Ranger", "Enchantress", "Huskar", "Slark"],
        goodWith: ["Axe", "Dark Seer", "Enigma", "Faceless Void", "Lifestealer", "Magnus", "Omniknight"]
    },
    {
        name: "Rubick",
        badAgainst: ["Bristleback", "Clinkz", "Legion Commander", "Riki", "Silencer", "Slark"],
        goodAgainst: ["Crystal Maiden", "Earthshaker", "Enigma", "Invoker", "Lich", "Lina", "Lion", "Luna", "Magnus", "Morphling", "Omniknight"],
        goodWith: ["Alchemist", "Ancient Apparition", "Crystal Maiden", "Pudge"]
    },
    {
        name: "Shadow Demon",
        badAgainst: ["Ember Spirit", "Leshrac", "Oracle", "Storm Spirit", "Lion"],
        goodAgainst: ["Alchemist", "Anti-Mage", "Legion Commander", "Omniknight", "Necrophos", "Spectre", "Juggernaut", "Luna"],
        goodWith: ["Ancient Apparition", "Dazzle", "Luna", "Terrorblade", "Warlock"]
    },
    {
        name: "Shadow Shaman",
        badAgainst: ["Mirana", "Morphling", "Riki", "Wraith King", "Visage"],
        goodAgainst: ["Huskar", "Nature's Prophet", "Spirit Breaker", "Templar Assassin", "Terrorblade", "Weaver"],
        goodWith: ["Juggernaut", "Ursa", "Troll Warlord", "Pugna", "Legion Commander"]
    },
    {
        name: "Silencer",
        badAgainst: ["Broodmother", "Lycan", "Nyx Assassin", "Phantom Assassin", "Phantom Lancer", "Slark", "Sniper", "Ursa"],
        goodAgainst: ["Bristleback", "Crystal Maiden", "Enigma", "Outworld Devourer", "Pugna", "Timbersaw", "Tinker", "Windranger", "Zeus"],
        goodWith: ["Crystal Maiden", "Anti-Mage", "Pudge", "Outworld Devourer"]
    },
    {
        name: "Skywrath Mage",
        badAgainst: ["Anti-Mage", "Huskar", "Abaddon", "Pugna", "Nyx Assassin", "Wraith King", "Omniknight"],
        goodAgainst: ["Timbersaw", "Storm Spirit", "Enchantress", "Alchemist", "Vengeful Spirit", "Winter Wyvern"],
        goodWith: ["Faceless Void", "Undying", "Centaur Warrunner", "Pugna", "Silencer", "Legion Commander"]
    },
    {
        name: "Storm Spirit",
        badAgainst: ["Anti-Mage", "Doom", "Ember Spirit", "Night Stalker", "Nyx Assassin", "Riki", "Silencer", "Skywrath Mage"],
        goodAgainst: ["Arc Warden", "Ancient Apparition", "Bloodseeker", "Sniper", "Tinker", "Spectre", "Weaver"],
        goodWith: ["Keeper of the Light", "Omniknight", "Lifestealer", "Outworld Devourer"]
    },
    {
        name: "Techies",
        badAgainst: ["Death Prophet", "Beastmaster", "Night Stalker", "Visage", "Batrider", "Abaddon", "Anti-Mage", "Juggernaut", "Lifestealer", "Oracle", "Templar Assassin", "Wraith King", "Zeus", "Chen"],
        goodAgainst: ["Ember Spirit", "Meepo", "Monkey King", "Morphling", "Phantom Assassin", "Tinker"],
        goodWith: ["Batrider", "Crystal Maiden", "Dark Seer", "Magnus", "Pudge", "Tusk", "Tiny", "Vengeful Spirit"]
    },
    {
        name: "Tinker",
        badAgainst: ["Anti-Mage", "Clockwerk", "Dazzle", "Doom", "Legion Commander", "Lifestealer", "Luna", "Night Stalker", "Nyx Assassin", "Pudge", "Silencer", "Slark", "Storm Spirit", "Zeus", "Pugna"],
        goodAgainst: ["Bloodseeker", "Chaos Knight", "Faceless Void", "Shadow Fiend", "Terrorblade", "Timbersaw"],
        goodWith: ["Faceless Void", "Kunkka", "Nature's Prophet", "Spirit Breaker", "Bloodseeker", "Keeper of the Light", "Bounty Hunter", "Slardar"]
    },
    {
        name: "Visage",
        badAgainst: ["Axe", "Centaur Warrunner", "Gyrocopter", "Luna", "Rubick", "Timbersaw", "Tidehunter"],
        goodAgainst: ["Clockwerk", "Invoker", "Nature's Prophet", "Puck", "Pudge", "Shadow Shaman", "Spectre"],
        goodWith: ["Drow Ranger", "Slardar", "Lifestealer", "Beastmaster", "Elder Titan"]
    },
    {
        name: "Warlock",
        badAgainst: ["Weaver", "Anti-Mage", "Bloodseeker", "Silencer", "Dark Seer", "Ember Spirit"],
        goodAgainst: ["Huskar", "Meepo", "Templar Assassin", "Shadow Fiend"],
        goodWith: ["Sven", "Bloodseeker", "Axe", "Dark Seer", "Magnus", "Enigma", "Silencer", "Spectre"]
    },
    {
        name: "Windranger",
        badAgainst: ["Centaur Warrunner", "Venomancer", "Silencer", "Clockwerk", "Axe", "Tinker"],
        goodAgainst: ["Shadow Fiend", "Pudge", "Wraith King", "Phantom Assassin"],
        goodWith: ["Nature's Prophet", "Drow Ranger"]
    },
    {
        name: "Winter Wyvern",
        badAgainst: ["Ancient Apparition", "Invoker", "Luna", "Naga Siren", "Omniknight", "Outworld Devourer", "Pugna", "Skywrath Mage", "Slark", "Timbersaw", "Tinker", "Undying"],
        goodAgainst: ["Beastmaster", "Chaos Knight", "Lycan", "Legion Commander", "Meepo", "Troll Warlord"],
        goodWith: ["Dark Seer", "Enigma", "Magnus", "Venomancer", "Invoker"]
    },
    {
        name: "Witch Doctor",
        badAgainst: ["Omniknight", "Faceless Void", "Morphling", "Oracle", "Riki", "Rubick", "Silencer", "Vengeful Spirit"],
        goodAgainst: ["Lone Druid", "Lycan", "Monkey King", "Venomancer"],
        goodWith: ["Enigma", "Faceless Void", "Lich", "Magnus", "Underlord", "Undying"]
    },
    {
        name: "Zeus",
        badAgainst: ["Anti-Mage", "Faceless Void", "Chaos Knight", "Juggernaut", "Lifestealer", "Meepo", "Pudge", "Pugna", "Silencer", "Ursa", "Viper"],
        goodAgainst: ["Slardar", "Enchantress", "Timbersaw", "Bounty Hunter", "Winter Wyvern", "Lich", "Necrophos", "Tinker"],
        goodWith: ["Ancient Apparition", "Bloodseeker", "Dazzle", "Omniknight", "Tidehunter"]
    }
]

export default {
    matchups
}