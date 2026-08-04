// Light metadata for full reviews (the full text lives in its own page inside /fullreviews/<slug>.html)
// Each entry here is only the "summary" shown in the fullreviews.html listing.
//
// The visual generator (review-generator.html, "Reseña completa" tab) automatically
// builds both the entry here and the HTML page.

const fullReviews = [
   {
        title: "Beautiful Cyberpunk Tower Defense! Beacon of Neyda.",
        date: "Aug 4, 2026",
        tags: "Tower Defense,TD,Pixelart",
        excerpt: "Beacon of Neyda is a cyberpunk tower defense with a strong identity. Set in a post apocalyptic world where machines rebel against humanity, the story feels very...",
        slug: "beacon-of-neyda",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000970/b685f92322fc507583f1e3d0aecb59f9044548da/header.jpg?t=1779136540"
    },
    {
        title: "*Most Wanted* drifting game on steam! CarX Drift Racing Online.",
        date: "Aug 3, 2026",
        tags: "Racing,Drift,Multiplayer",
        excerpt: "CarX Drift Racing Online is a racing game focused on drifting, with a mix of arcade feel and realistic physics. It’s easy to get into, but it takes time to real...",
        slug: "carx",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/635260/7f8fd0c0df1572fa14c9505abe70e2a599cae8e7/header.jpg?t=1782415005"
    },
    {
        title: "The most beautiful roommates are back! Five Hearts Under One Roof season2.",
        date: "Aug 1, 2026",
        tags: "Live Action,FMV,Dating Sim",
        excerpt: "Five Hearts Under One Roof Season 2 keeps the FMV dating sim formula, but with some important changes. Sadly, part of the original cast is gone. Not all the gir...",
        slug: "5hearts2",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3731020/5ccf1a9cbd09cff29e03856469b346a74278f376/header.jpg?t=1785319088"
    },
    {
        title: "A fun, easy 2p co-op cute ‘em up! Viral Reload Ex.",
        date: "Jul 27, 2026",
        tags: "Anime,2D,Shoot'Em Up,Pixelart",
        excerpt: "Viral Reload EX is a cute ‘em up with a simple and colorful anime style. The pixel art is not very complex, but it works well and gives the game a clear identit...",
        slug: "viral-reload",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2096020/276aa18bac8e0c6f3476ac59645790b0e20a86f4/header_alt_assets_1.jpg?t=1785183457"
    },
    {
        title: "A very unique gem of a run & gun game!! Raimodula.",
        date: "Jul 26, 2026",
        tags: "Pixelart,2D,2D Platformer,Run and Gun",
        excerpt: "Raimodula is a fast run and gun shooter with a very unique pixel art style. The colors and pixelart visuals stand out a lot, giving the game a strong identity t...",
        slug: "Raimodula",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2091300/header.jpg?t=1776204378"
    },
    {
        title: "What a gem of a game! Momodora: Reverie Under The Moonlight",
        date: "Jul 23, 2026",
        tags: "Anime,Metroidvania,Pixelart,2D,2D Platformer",
        excerpt: "Momodora: Reverie Under The Moonlight is a classic metroidvania with beautiful pixel art and a very clean visual style. The environments, animations, and overal...",
        slug: "momodora",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/428550/header.jpg?t=1734415917"
    },
    {
        title: "I Had to Buy Her the Tightest Stockings… Five Hearts Under One Roof.",
        date: "Feb 18, 2026",
        tags: "Live Action,FMV,Full Motion Video,Dating Sim",
        excerpt: "This fantastic game and more on Hardcore Reviews! ⚡Five Hearts Under One Roof is a romantic FMV story that went viral thanks to its stunning cast of beauties an...",
        slug: "five-hearts",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3021100/4ab74951e6dda36589267f3866f523a0b82d787b/header_alt_assets_0.jpg?t=1784873613"
    },
    {
        title: "Time to feed and clean some Bugcat poop!. Capoo Pals.",
        date: "Jan 24, 2026",
        tags: "Desktop,Creature Collector,Cozy",
        excerpt: "Check this fantastic game and more on Hardcore Reviews! ⚡Capoo Pals is a very colorful, cute and cozy desktop companion game where you interact with adorable Bu...",
        slug: "capoo-pals",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2253470/header.jpg?t=1708505018"
    },
    {
        title: "Build the momentum!!. SomnaBuster.",
        date: "Jan 4, 2026",
        tags: "2D Platformer,2D,Pixelart,Indie Game",
        excerpt: "Check this fantastic game and more on Hardcore Reviews! ⚡SomnaBuster is another banger from one of my favorite indie developers, PD_CGT. It’s an extremely fun a...",
        slug: "somnabuster",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2598190/header.jpg?t=1727193356"
    },
    {
        title: "🎅🏿 A hot cursed nun ghoul thirsty for blood? For me? Thanks, Santa!! Soul Demon Hunters.",
        date: "Dec 23, 2025",
        tags: "Roguelike,Pixelart,Anime,2D",
        excerpt: "Check this game and more on Hardcore Reviews! ⚡Soul Demon Hunters stand out as a very fun fast paced roguelite that combines twin stick shooter action with deck...",
        slug: "soul-demon-hunters",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3966010/320ce3e0ed20eb6fc7f948c108eb0c6f13b43e8d/header.jpg?t=1766818125"
    },
    {
        title: "🎄A Roguelite for Christmas! Folk Hero.",
        date: "Dec 21, 2025",
        tags: "Roguelike,Pixelart,Exploration",
        excerpt: "Check this game and more on Hardcore Reviews! ⚡Folk Hero is an addictive rogue-lite hack’n slash with beautiful, minimalistic pixel art graphics and extremely f...",
        slug: "folk-hero",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2342150/header.jpg?t=1777274333"
    },
    {
        title: "🎄 The perfect toy story for Christmas! Toy Smash Kaboom!",
        date: "Dec 12, 2025",
        tags: "Minigames,Roguelike,PVP,Cartoon",
        excerpt: "Toy Smash Kaboom! is an extremely fun tabletop backpack-like autobattler PVP game with beautiful cartoon artwork and cool, adorable characters. It offers addict...",
        slug: "toy-smash-kaboom",
        img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3573070/ebf7c1340d0d6d55fa3efd93e8e20d645cfd6073/header.jpg?t=1784282568"
    },
    // Add more entries here (or let the generator add them for you)
];
