// Define tracks from the spreadsheet
const tracks = [
  { fileName: "001 - Lumina Luxe Ad.mp3", displayName: "Ad - Lumina Luxe", image: "lumina_luxe.png" },
  { fileName: "002 - Glow Pit Club Ad.mp3", displayName: "Ad - Glow Pit Club", image: "glow_pit.png" },
  { fileName: "003 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "004 - Echo - Ladies.mp3", displayName: "Ladies by Echo", image: "Echo_Album.webp" },
  { fileName: "005 - Hexblade Harmony - Monstarrr.mp3", displayName: "Monstarrr by Hexblade Harmony", image: "hexblade_harmony.png" },
  { fileName: "006 - Blaze Legion - Hey Uh.mp3", displayName: "Hey Uh by Blaze Legion", image: "BlazeLegion_Album.jpg" },
  { fileName: "007 - News With Trinity - Rise of MegaCorps.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "008 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "009 - DJ Luna Interview - Neon Nova.mp3", displayName: "Lumina Radio - Luna and Neon Nova", image: "dj_luna.png" },
  { fileName: "010 - Neon Nova - Guilty.mp3", displayName: "Guilty by Neon Nova", image: "NeonNova_Album.jpg" },
  { fileName: "011 - Savage Block - Rags 2 Riches.mp3", displayName: "Rags 2 Riches by Savage Block", image: "savage_block.png" },
  { fileName: "012 - Photon Pulse - Gods Menu.mp3", displayName: "God's Menu by Photon Pulse", image: "PhotonPulse_Album.png" },
  { fileName: "013 - Vibe Stream Ad.mp3", displayName: "Ad - VibeStream", image: "vibe_stream.png" },
  { fileName: "014 - StressBuster 9000 Ad.mp3", displayName: "Ad - StressBuster 9000", image: "stressbuster_9000.png" },
  { fileName: "015 - Electric Luminaries - New American.mp3", displayName: "New Lumina by Electric Luminaries", image: "ElectricLuminaries_Album.jpg" },
  { fileName: "016 - Celestial Havoc - Pisces.mp3", displayName: "Pisces by Celestial Havoc", image: "CelestialHavoc_Album.jpg" },
  { fileName: "017 - Frost Echo ft Thorn Requiem - WORM.mp3", displayName: "Worm by Frost Echo feat. Thorn Requiem", image: "FrostEcho_Album.jpg" },
  { fileName: "018 - News Round Up with Marcus Steele.mp3", displayName: "LCRN - News Round Up with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "019 - News with Morton - Another Day MegaCorp.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "020 - Cyber Bite Ad.mp3", displayName: "Ad - CyberBite", image: "cyber_bites.png" },
  { fileName: "021 - Odurim MMORPG Ad.mp3", displayName: "Ad - Odurim MMORPG", image: "odurim.png" },
  { fileName: "022 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "023 - News Round Up with Marcus Steele.mp3", displayName: "LCRN - News Round Up with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "024 - Atomic Ale Ad.mp3", displayName: "Ad - Atomic Ale", image: "Atomic_Ale.png" },
  { fileName: "025 - Street Life Ad.mp3", displayName: "Ad - Street Life", image: "street_life.png" },
  { fileName: "026 - Luminara Trails - Black.mp3", displayName: "Black by Luminara Trails", image: "LuminaraTrails_Album.jpg" },
  { fileName: "027 - Nebula Surge - Say It To My Face.mp3", displayName: "Say it to my Face by Nebula Surge", image: "NebulaSurge_Album.jpg" },
  { fileName: "028 - Obsidian Revolt - Tekkno Train.mp3", displayName: "Tekkno Train by Obsidian Revolt", image: "ObsidianRevolt_Album.png" },
  { fileName: "029 - Nexus Threads Ad.mp3", displayName: "Ad - Nexus Threads", image: "nexus_threads.png" },
  { fileName: "030 - Freaky Fridays Ad.mp3", displayName: "Ad - Freaky Fridays", image: "freaky_fridays.png" },
  { fileName: "031 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "032 - Obisidian Revolt feat. Neon Nova - RATATATA.mp3", displayName: "Ratatata by Obsidian Revolt feat. Neon Nova", image: "ObsidianRevolt_Album.png" },
  { fileName: "033 - Sonic Seduction - Whore.mp3", displayName: "Whore by Sonic Seduction", image: "SonicSeduction_Album.jpg" },
  { fileName: "034 - Thorn Requiem - Drown.mp3", displayName: "Drown by Thorn Requiem", image: "ThornRequiem_Album.webp" },
  { fileName: "035 - News with Trinity.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "036 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "037 - Blaze Legion - Scratch & Claw.mp3", displayName: "Scratch and Claw by Blaze Legion", image: "BlazeLegion_Album.jpg" },
  { fileName: "038 - Echo - Yum.mp3", displayName: "Yum by Echo", image: "Echo_Album.webp" },
  { fileName: "039 - Shotgun Willy - Bombs Away.mp3", displayName: "Bombs Away by Shotgun Willy", image: "shotgun_willy.png" },
  { fileName: "040 - Zen Garden Ad.mp3", displayName: "Ad - Zen Garden", image: "zen_garden.png" },
  { fileName: "041 - Hen House Grill Ad.mp3", displayName: "Ad - Hen House Grill", image: "henhouse_grill.png" },
  { fileName: "042 - Hellstorm - Bad Romance.mp3", displayName: "Bad Romance by Hellstorm", image: "hellstorm.png" },
  { fileName: "043 - Vespera Fury - Psycho.mp3", displayName: "Psycho by Vespera Fury", image: "VesperaFury_Album.jpg" },
  { fileName: "044 - Willow Serenade - Devil Like You.mp3", displayName: "Devil Like You by Willow Serenade", image: "WillowSerenade_Album.jpg" },
  { fileName: "045 - Lumina Report with Morton Dean.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "046 - NexGen Firearms Ad.mp3", displayName: "Ad - NexGen Firearms", image: "nexgen_firearms.png" },
  { fileName: "047 - Mega Burrito Ad.mp3", displayName: "Ad - Mega Burrito", image: "mega_burrito.png" },
  { fileName: "048 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "049 - Blaze Legion Concert Ad.mp3", displayName: "Ad - Blaze Legion Concert", image: "BlazeLegion_Album.jpg" },
  { fileName: "050 - HERO Ad.mp3", displayName: "Ad - HERO", image: "hero.png" },
  { fileName: "051 - Blaze Legion - I Ain't Depressed.mp3", displayName: "I ain't Depressed by Blaze Legion", image: "BlazeLegion_Album.jpg" },
  { fileName: "052 - Luminous Echo - She Wants Me Dead.mp3", displayName: "She Wants me Dead by Luminous Echo", image: "LuminousEcho_Album.jpg" },
  { fileName: "053 - Riot Pulse - Hedonist.mp3", displayName: "Hedonist by Riot Pulse", image: "RiotPulse_Album.png" },
  { fileName: "054 - Star Crossed Love Movie Ad.mp3", displayName: "Ad - Star Crossed Love", image: "star_crossed.png" },
  { fileName: "055 - LCPD Ad.mp3", displayName: "Ad - LCPD", image: "lcpd_ad.png" },
  { fileName: "056 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "057 - Cybernetic Distortion - Kitty Girl.mp3", displayName: "Kitty Girl by Cybernetic Distortion", image: "CyberneticDistortion_Album.jpg" },
  { fileName: "058 - sKitz Shade - Creep Little Baby.mp3", displayName: "Creep Little Baby by sKitz Shade", image: "SkitzShade_Album.jpg" },
  { fileName: "059 - SynthSonic Groove - Sunset Drive.mp3", displayName: "Sunset Drive by SynthSonic Groove", image: "SynthSonicGroove_Album.jpg" },
  { fileName: "060 - DJ Luna with Velvet Whispers.mp3", displayName: "Lumina Radio - Luna and Velvet Whispers", image: "dj_luna.png" },
  { fileName: "061 - News with Trinity.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "062 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "063 - Void Enclave - Die Motherfucker Die.mp3", displayName: "Die Motherfucker Die by Void Enclave", image: "VoidEnclave_Album.jpg" },
  { fileName: "064 - Hellstorm - Freak Like Me.mp3", displayName: "Freak Like Me by Hellstorm", image: "hellstorm.png" },
  { fileName: "065 - Savage Block - Kick Doe Click.mp3", displayName: "Kick Doe Click by Savage Block", image: "savage_block.png" },
  { fileName: "066 - Turbo Charge Ad.mp3", displayName: "Ad - Turbo Charge", image: "turbo_charge.png" },
  { fileName: "067 - City Brew Ad.mp3", displayName: "Ad - City Brew", image: "City_Brew.png" },
  { fileName: "068 - Celestial Havoc - Judgement & Punishment.mp3", displayName: "Judgement and Punishment by Celestial Havoc", image: "CelestialHavoc_Album.jpg" },
  { fileName: "069 - sKitz Shade - Bad Temper.mp3", displayName: "Bad Temper by sKitz Shade", image: "SkitzShade_Album.jpg" },
  { fileName: "070 - Sonic Seduction - Sex Metal Barbie.mp3", displayName: "Sex Metal Barbie by Sonic Seduction", image: "SonicSeduction_Album.jpg" },
  { fileName: "071 - Marcus Steel Interview with Tommy Reese.mp3", displayName: "LCRN - Morning Buzz with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "072 - Lumina Report with Morton Dean.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "073 - Neon Lounge Ad.mp3", displayName: "Ad - Neon Lounge", image: "neon_lounge.png" },
  { fileName: "074 - Game of Shame Ad.mp3", displayName: "Ad - Game of Shame", image: "game_of_shame.png" },
  { fileName: "075 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "076 - DJ Volt Interview with Skitz Shade.mp3", displayName: "Lumina Radio - Volt and Skitz Shade", image: "dj_volt.png" },
  { fileName: "077 - Lumina Fizz Ad.mp3", displayName: "Ad - Lumina Fizz", image: "lumina_fizz.png" },
  { fileName: "078 - Lumina Real Estate Ad.mp3", displayName: "Ad - Lumina Real Estate", image: "lcre.png" },
  { fileName: "079 - Cybernetic Distortion - D4TM.mp3", displayName: "D4TM by Cybernetic Distortion", image: "CyberneticDistortion_Album.jpg" },
  { fileName: "080 - Nebula Surge - Feel A Thing.mp3", displayName: "Feel a Thing by Nebula Surge", image: "NebulaSurge_Album.jpg" },
  { fileName: "081 - Photon Pulse - Thunderous.mp3", displayName: "Thunderous by Photon Pulse", image: "PhotonPulse_Album.png" },
  { fileName: "082 - Meat Stuff Ad.mp3", displayName: "Ad - Meat Stuff", image: "meatstuff.png" },
  { fileName: "083 - Quickie Stop Ad.mp3", displayName: "Ad - Quickie Stop", image: "quickie_stop.png" },
  { fileName: "084 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "085 - Thorn Requiem - Make Me Famous.mp3", displayName: "Make Me Famous by Thorn Requiem", image: "ThornRequiem_Album.webp" },
  { fileName: "086 - Velvet Whispers - Easy.mp3", displayName: "Easy by Velvet Whispers", image: "VelvetWhispers_Album.jpg" },
  { fileName: "087 - Vespera Fury - I LUV U.mp3", displayName: "I LUV U by Vespera Fury", image: "VesperaFury_Album.jpg" },
  { fileName: "088 - News with Trinity.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "089 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "090 - Electric Luminaries - Ruby Soho.mp3", displayName: "Ruby Soho by Electric Luminaries", image: "ElectricLuminaries_Album.jpg" },
  { fileName: "091 - Luminara Trails - Together We Will Rise.mp3", displayName: "Together We Will Rise by Luminara Trails", image: "LuminaraTrails_Album.jpg" },
  { fileName: "092 - Neon Nova - Gmongda Ks.mp3", displayName: "Gmongda Ks by Neon Nova", image: "NeonNova_Album.jpg" },
  { fileName: "093 - Smoke and Slay Movie Ad.mp3", displayName: "Ad - Smoke and Slay", image: "smoke_slay.png" },
  { fileName: "094 - City Patrol Ad.mp3", displayName: "Ad - City Patrol", image: "city_patrol.png" },
  { fileName: "095 - Blaze Legion - GlitchGang.mp3", displayName: "GlitchGang by Blaze Legion", image: "BlazeLegion_Album.jpg" },
  { fileName: "096 - sKitz Shade - Locked & Loaded.mp3", displayName: "Locked & Loaded by sKitz Shade", image: "SkitzShade_Album.jpg" },
  { fileName: "097 - Shotgun Willy - Winnebago.mp3", displayName: "Winnebago by Shotgun Willy", image: "shotgun_willy.png" },
  { fileName: "098 - DJ Luna Interview with Venom Vox.mp3", displayName: "Lumina Radio - Luna and Venom Vox", image: "dj_luna.png" },
  { fileName: "099 - Lumina Report with Morton Dean.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "100 - Tech Blade Ad.mp3", displayName: "Ad - Tech Blade", image: "tech_blade.png" },
  { fileName: "101 - Thunder Volt Ad.mp3", displayName: "Ad - Thunder Volt", image: "thunder_volt.png" },
  { fileName: "102 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "103 - Marcus Steele Interview with Selene Veil.mp3", displayName: "LCRN - News with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "104 - Crunch Craze Ad.mp3", displayName: "Ad - Crunch Craze", image: "crunch_craze.png" },
  { fileName: "105 - Street Race Ad.mp3", displayName: "Ad - Street Race", image: "street_race.png" },
  { fileName: "106 - Luminous Echo - Sleepless.mp3", displayName: "Sleepless by Luminous Echo", image: "LuminousEcho_Album.jpg" },
  { fileName: "107 - Riot Pulse - Do It So Good.mp3", displayName: "Do it so Good by Riot Pulse", image: "RiotPulse_Album.png" },
  { fileName: "108 - SynthSonic Groove feat Velvet Whispers - Last Dance.mp3", displayName: "Last Dance by SynthSonic Groove feat. Velvet Whispers", image: "SynthSonicGroove_Album.jpg" },
  { fileName: "109 - City Patrol Ad.mp3", displayName: "Ad - City Patrol", image: "city_patrol.png" },
  { fileName: "110 - Neon Nova Concert Ad.mp3", displayName: "Ad - Neon Nova Concert", image: "NeonNova_Album.jpg" },
  { fileName: "111 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "112 - Neon Nova - Drama.mp3", displayName: "Drama by Neon Nova", image: "NeonNova_Album.jpg" },
  { fileName: "113 - Photon Pulse - Maniac.mp3", displayName: "Maniac by Photon Pulse", image: "PhotonPulse_Album.png" },
  { fileName: "114 - Velvet Whispers - She's My Religion.mp3", displayName: "She's My Religion by Velvet Whispers", image: "VelvetWhispers_Album.jpg" },
  { fileName: "115 - DJ Luna Interview with Tressa.mp3", displayName: "Lumina Radio - Luna and Tressa", image: "dj_luna.png" },
  { fileName: "116 - News with Trinity.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "117 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "118 - Celestial Havoc - I Speak Astronomy.mp3", displayName: "I Speak Astronomy by Celestial Havoc", image: "CelestialHavoc_Album.jpg" },
  { fileName: "119 - Cybernetic Distortion - The Strangers.mp3", displayName: "The Strangers by Cybernetic Distortion", image: "CyberneticDistortion_Album.jpg" },
  { fileName: "120 - Sonic Seduction - The Purge.mp3", displayName: "The Purge by Sonic Seduction", image: "SonicSeduction_Album.jpg" },
  { fileName: "121 - Passions Path Ad.mp3", displayName: "Ad - Passions Path", image: "passions_path.png" },
  { fileName: "122 - Lumina City Real Estate Ad.mp3", displayName: "Ad - Lumina Real Estate", image: "lcre.png" },
  { fileName: "123 - Echo - T N Biscuits.mp3", displayName: "T n Biscuits by Echo", image: "Echo_Album.webp" },
  { fileName: "124 - Frost Echo - Марw.mp3", displayName: "Mapw by Frost Echo", image: "FrostEcho_Album.jpg" },
  { fileName: "125 - Hexblade Harmony - Saccharine.mp3", displayName: "Saccharine by Hexblade Harmony", image: "hexblade_harmony.png" },
  { fileName: "126 - DJ Luna Interview with Sonic Seduction.mp3", displayName: "Lumina Radio - Luna and Sonic Seduction", image: "SonicSeduction_Album.jpg" },
  { fileName: "127 - Lumina Report with Morton Dean.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "128 - Lumitech Arms Ad.mp3", displayName: "Ad - Lumitech Arms", image: "lumitech_arms.png" },
  { fileName: "129 - Quantum Shield Ad.mp3", displayName: "Ad - Quantum Shield", image: "quantum_shield.png" },
  { fileName: "130 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "131 - Cluck Fusion Ad.mp3", displayName: "Ad - Cluck Fusion", image: "cluck_fusion.png" },
  { fileName: "132 - Eclipse Couture Ad.mp3", displayName: "Ad - Eclipse Couture", image: "eclipse_couture.png" },
  { fileName: "133 - Void Enclave - Unterwelt.mp3", displayName: "Unterwelt by Void Enclave", image: "VoidEnclave_Album.jpg" },
  { fileName: "134 - Willow Serenade - Unholy Hymns.mp3", displayName: "Unholy Hymns by Willow Serenade", image: "WillowSerenade_Album.jpg" },
  { fileName: "135 - Hellstorm - Mz Hyde.mp3", displayName: "Mz Hyde by Hellstorm", image: "hellstorm.png" },
  { fileName: "136 - Elysium Club Ad.mp3", displayName: "Ad - Elysium Club", image: "elysium_club.png" },
  { fileName: "137 - Lumina Luxe Ad.mp3", displayName: "Ad - Lumina Luxe", image: "lumina_luxe.png" },
  { fileName: "138 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "139 - Celestial Havoc - Teacher, Teacher!.mp3", displayName: "Teacher, Teacher! by Celestial Havoc", image: "CelestialHavoc_Album.jpg" },
  { fileName: "140 - Electric Luminaries - Time Bomb.mp3", displayName: "Time Bomb by Electric Luminaries", image: "ElectricLuminaries_Album.jpg" },
  { fileName: "141 - Luminara Trails - Nothing Left to Lose.mp3", displayName: "Nothing Left to Lose by Luminara Trails", image: "LuminaraTrails_Album.jpg" },
  { fileName: "142 - Marcus Steele Interview with Aric Voss.mp3", displayName: "LCRN - Future Pulse with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "143 - News with Trinity.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "144 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "145 - Nebula Surge - Brighter Days.mp3", displayName: "Brighter Days by Nebula Surge", image: "NebulaSurge_Album.jpg" },
  { fileName: "146 - Obsidian Revolt feat. Velvet Whispers - V.A.N..mp3", displayName: "V.A.N. by Obsidian Revolt feat. Velvet Whispers", image: "ObsidianRevolt_Album.png" },
  { fileName: "147 - Riot Pulse - Pyro Pyro.mp3", displayName: "Pyro Pyro by Riot Pulse", image: "RiotPulse_Album.png" },
  { fileName: "148 - Glow Pit Club Ad.mp3", displayName: "Ad - Glow Pit Club", image: "glow_pit.png" },
  { fileName: "149 - Vibe Stream Ad.mp3", displayName: "Ad - VibeStream", image: "vibe_stream.png" },
  { fileName: "150 - Savage Block - Johnny Dang.mp3", displayName: "Johnny Dang by Savage Block", image: "savage_block.png" },
  { fileName: "151 - Shotgun Willy - Dalai Lama.mp3", displayName: "Dalai Lama by Shotgun Willy", image: "shotgun_willy.png" },
  { fileName: "152 - sKitz Shade - That's All.mp3", displayName: "That's All by sKitz Shade", image: "SkitzShade_Album.jpg" },
  { fileName: "153 - DJ Luna Interview with Amarosa.mp3", displayName: "Lumina Radio - Luna and Amarosa", image: "dj_luna.png" },
  { fileName: "154 - Lumina Report with Morton Dean.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "155 - StressBuster 9000 Ad.mp3", displayName: "Ad - StressBuster 9000", image: "stressbuster_9000.png" },
  { fileName: "156 - Cyber Bite Ad.mp3", displayName: "Ad - CyberBite", image: "cyber_bites.png" },
  { fileName: "157 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "158 - Odurim MMORPG Ad.mp3", displayName: "Ad - Odurim MMORPG", image: "odurim.png" },
  { fileName: "159 - Atomic Ale Ad.mp3", displayName: "Ad - Atomic Ale", image: "Atomic_Ale.png" },
  { fileName: "160 - Cybernetic Distortion - Disobey.mp3", displayName: "Disobey by Cybernetic Distortion", image: "CyberneticDistortion_Album.jpg" },
  { fileName: "161 - Echo - Doorman.mp3", displayName: "Doorman by echo", image: "Echo_Album.webp" },
  { fileName: "162 - Frost Echo - VAMPIR.mp3", displayName: "VAMPIR by Frost Echo", image: "FrostEcho_Album.jpg" },
  { fileName: "163 - Street Life Ad.mp3", displayName: "Ad - Street Life", image: "street_life.png" },
  { fileName: "164 - Nexus Threads Ad.mp3", displayName: "Ad - Nexus Threads", image: "nexus_threads.png" },
  { fileName: "165 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "166 - Shotgun Willy - Married to the Bag.mp3", displayName: "Married to the Bag by Shotgun Willy", image: "shotgun_willy.png" },
  { fileName: "167 - SynthSonic Groove - Tears.mp3", displayName: "Tears by SynthSonic Groove", image: "SynthSonicGroove_Album.jpg" },
  { fileName: "168 - Thorn Requiem - Superhero.mp3", displayName: "Superhero by Thorn Requiem", image: "ThornRequiem_Album.webp" },
  { fileName: "169 - Marcus Steele Interview with Sgt Hatfield.mp3", displayName: "LCRN - News with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "170 - News with Trinity.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "171 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "172 - Velvet Whispers - Noises.mp3", displayName: "Noises by Velvet Whispers", image: "VelvetWhispers_Album.jpg" },
  { fileName: "173 - Vespera Fury - Billion Dollar Bitch.mp3", displayName: "Billion Dollar Bitch by Vespera Fury", image: "VesperaFury_Album.jpg" },
  { fileName: "174 - Void Enclave - Hellraiser.mp3", displayName: "Hellraiser by Void Enclave", image: "VoidEnclave_Album.jpg" },
  { fileName: "175 - Freaky Fridays Ad.mp3", displayName: "Ad - Freaky Fridays", image: "freaky_fridays.png" },
  { fileName: "176 - Zen Garden Ad.mp3", displayName: "Ad - Zen Garden", image: "zen_garden.png" },
  { fileName: "177 - Willow Serenade - Run From the Sun.mp3", displayName: "Run from the Sun by Willow Serenade", image: "WillowSerenade_Album.jpg" },
  { fileName: "178 - Photon Pulse - LaLaLaLa.mp3", displayName: "LaLaLaLa by Photon Pulse", image: "PhotonPulse_Album.png" },
  { fileName: "179 - Neon Nova - Universe.mp3", displayName: "Universe by Neon Nova", image: "NeonNova_Album.jpg" },
  { fileName: "180 - DJ Luna Interview with Vespera Fury.mp3", displayName: "Lumina Radio - Luna and Vespera Fury", image: "dj_luna.png" },
  { fileName: "181 - Lumina Report with Morton Dean.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "182 - Hen House Grill Ad.mp3", displayName: "Ad - Hen House Grill", image: "henhouse_grill.png" },
  { fileName: "183 - NexGen Firearms Ad.mp3", displayName: "Ad - NexGen Firearms", image: "nexgen_firearms.png" },
  { fileName: "184 - DJ Luna Interview with Echo.mp3", displayName: "Lumina Radio - Luna and Echo", image: "dj_luna.png" },
  { fileName: "185 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "186 - Mega Burrito Ad.mp3", displayName: "Ad - Mega Burrito", image: "mega_burrito.png" },
  { fileName: "187 - Blaze Legion Concert Ad.mp3", displayName: "Ad - Blaze Legion Concert", image: "BlazeLegion_Album.jpg" },
  { fileName: "188 - Electric Luminaries - Fall Back Down.mp3", displayName: "Fall Back Down by Electric Luminaries", image: "ElectricLuminaries_Album.jpg" },
  { fileName: "189 - Hexblade Harmony - Show Off.mp3", displayName: "Show Off by Hexblade Harmony", image: "hexblade_harmony.png" },
  { fileName: "190 - Luminous Echo feat. Zari - Blue Sky.mp3", displayName: "Blue Sky by Luminous Echo feat. Zari", image: "LuminousEcho_Album.jpg" },
  { fileName: "191 - HERO Ad.mp3", displayName: "Ad - HERO", image: "hero.png" },
  { fileName: "192 - Star Crossed Love Movie Ad.mp3", displayName: "Ad - Star Crossed Love", image: "star_crossed.png" },
  { fileName: "193 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "194 - Riot Pulse - The Void Stares Back.mp3", displayName: "The Void Stares Back by Riot Pulse", image: "RiotPulse_Album.png" },
  { fileName: "195 - Savage Block - Cowboy Killer.mp3", displayName: "Cowboy Killer by Savage Block", image: "savage_block.png" },
  { fileName: "196 - Willow Serenade - Witches' Wrath.mp3", displayName: "Witches' Wrath by Willow Serenade", image: "WillowSerenade_Album.jpg" },
  { fileName: "197 - Lumina Report with Morton Dean.mp3", displayName: "LCRN - Lumina Report with Morton Dean", image: "morton_dean.png" },
  { fileName: "198 - DJ Talk - Volt.mp3", displayName: "Lumina Radio - Volt", image: "dj_volt.png" },
  { fileName: "199 - Frost Echo - TRRST.mp3", displayName: "TRRST by Frost Echo", image: "FrostEcho_Album.jpg" },
  { fileName: "200 - Hexblade Harmony - Jealous.mp3", displayName: "Jealous by Hexblade Harmony", image: "hexblade_harmony.png" },
  { fileName: "201 - Luminous Echo feat Lyra Spark - Beam Me Up.mp3", displayName: "Beam Me Up by Luminous Echo feat. Lyra Spark", image: "LuminousEcho_Album.jpg" },
  { fileName: "202 - LCPD Ad.mp3", displayName: "Ad - LCPD", image: "lcpd_ad.png" },
  { fileName: "203 - Turbo Charge Ad.mp3", displayName: "Ad - Turbo Charge", image: "turbo_charge.png" },
  { fileName: "204 - Luminara Trails - Cruel Summer.mp3", displayName: "Cruel Summer by Luminara Trails", image: "LuminaraTrails_Album.jpg" },
  { fileName: "205 - Nebula Surge - Garden.mp3", displayName: "Garden by Nebula Surge", image: "NebulaSurge_Album.jpg" },
  { fileName: "206 - Obsidian Revolt - We Got the Moves.mp3", displayName: "We Got the Moves by Obsidian Revolt", image: "ObsidianRevolt_Album.png" },
  { fileName: "207 - Marcus Steele Interview with Sierra Vede.mp3", displayName: "LCRN - News with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "208 - News with Trinity.mp3", displayName: "LCRN - News with Trinity Lightfoot", image: "trinity_lightfoot.png" },
  { fileName: "209 - City Brew Ad.mp3", displayName: "Ad - City Brew", image: "City_Brew.png" },
  { fileName: "210 - Neon Lounge Ad.mp3", displayName: "Ad - Neon Lounge", image: "neon_lounge.png" },
  { fileName: "211 - DJ Talk - Luna.mp3", displayName: "Lumina Radio - Luna", image: "dj_luna.png" },
  { fileName: "212 - Marcus Steel Interview with Zero.mp3", displayName: "LCRN - Voices of the City with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "213 - Game of Shame Ad.mp3", displayName: "Ad - Game of Shame", image: "game_of_shame.png" },
  { fileName: "214 - Lumina Fizz Ad.mp3", displayName: "Ad - Lumina Fizz", image: "lumina_fizz.png" },
  { fileName: "215 - Sonic Seduction - Blood.mp3", displayName: "Blood by Sonic Seduction", image: "SonicSeduction_Album.jpg" },
  { fileName: "216 - SynthSonic Groove - Can't Stop Falling in Love.mp3", displayName: "Can't Stop Falling in Love by SynthSonic Groove", image: "SynthSonicGroove_Album.jpg" },
  { fileName: "217 - Hellstorm - I Get Off.mp3", displayName: "I Get Off by Hellstorm", image: "hellstorm.png" },
  { fileName: "218 - Lumina City Real Estate Ad.mp3", displayName: "Ad - Lumina Real Estate", image: "lcre.png" },
  { fileName: "219 - Lumina City Real Estate Ad.mp3", displayName: "Ad - Lumina Real Estate", image: "lcre.png" },
  { fileName: "220 - Meat Stuff Ad.mp3", displayName: "Ad - Meat Stuff", image: "meatstuff.png" },
  { fileName: "221 - Thorn Requiem - Seventy Thorns.mp3", displayName: "Seventy Thorns by Thorn Requiem", image: "ThornRequiem_Album.webp" },
  { fileName: "222 - Velvet Whispers - Eighteen.mp3", displayName: "Eighteen by Velvet Whispers", image: "VelvetWhispers_Album.jpg" },
  { fileName: "223 - Vespera Fury - Shut Up.mp3", displayName: "Shut Up by Vespera Fury", image: "VesperaFury_Album.jpg" },
  { fileName: "224 - Void Enclave - God is in the rain.mp3", displayName: "God is in the Rain by Void Enclave", image: "VoidEnclave_Album.jpg" },
  { fileName: "225 - News Round Up with Marcus Steel.mp3", displayName: "LCRN - News Round Up with Marcus Steele", image: "marcus_steele.png" },
  { fileName: "226 - sKitz Shade - Dead Silent.mp3", displayName: "Dead Silent by sKitz Shade", image: "SkitzShade_Album.jpg" },
  { fileName: "227 - HannahBee - Be The GAL.mp3", displayName: "Be the GAL by HannahBee", image: "hannahbee.png" },
  { fileName: "228 - Blaze Legion - Virus.mp3", displayName: "Virus by Blaze Legion", image: "BlazeLegion_Album.jpg" },
  { fileName: "229 - Zizizari - Fantasy.mp3", displayName: "Fantasy by Zizizari", image: "Zizizari_Album.png" },
  { fileName: "230 - Blaze Legion - Going Rogue.mp3", displayName: "Going Rogue by Blaze Legion", image: "BlazeLegion_Album.jpg" },
  { fileName: "231 - HannahBee - Otaku Love.mp3", displayName: "Otaku Love by HannahBee", image: "hannahbee.png" },
  { fileName: "232 - Zizizari - Gigolo.mp3", displayName: "Gigolo by Zizizari", image: "Zizizari_Album.png" },
  { fileName: "233 - Blaze Legion - Devil's Playground feat. Zara Echo.mp3", displayName: "Devil's Playground by Blaze Legion feat. Zara Echo", image: "BlazeLegion_Album.jpg" },
  { fileName: "234 - Hexblade Harmony - Insecure.mp3", displayName: "Insecure by Hexblade Harmony", image: "hexblade_harmony.png" },
  { fileName: "235 - HannahBee - My Type.mp3", displayName: "My Type by HannahBee", image: "hannahbee.png" },
  { fileName: "236 - Blaze Legion - Riot Music.mp3", displayName: "Riot Music by Blaze Legion", image: "BlazeLegion_Album.jpg" },
  { fileName: "237 - HannahBee - Pardon Me.mp3", displayName: "Pardon Me by HannahBee", image: "hannahbee.png" }
];

// Map file names to images for chat messages
const trackImages = {};
tracks.forEach(track => {
  trackImages[track.fileName] = track.image;
});

Hooks.once("ready", async () => {
  // Create or get the playlist
  const playlistName = "Lumina Radio Playlist";
  let playlist = game.playlists.getName(playlistName);
  if (!playlist) {
    playlist = await Playlist.create({ name: playlistName });
  }

  // Add sounds to the playlist if they don’t exist
  const existingSounds = playlist.sounds.map(s => s.name);
  for (const track of tracks) {
    if (!existingSounds.includes(track.fileName)) {
      const soundPath = encodeURI(`modules/luminacityradio/sounds/${track.fileName}`);
      console.log(`Creating sound with path: ${soundPath}`);
      const soundData = {
        name: track.fileName,  // Use fileName to include numbers
        path: soundPath,
        repeat: false,
        volume: 0.5
      };
      await playlist.createEmbeddedDocuments("PlaylistSound", [soundData]);
    }
  }

  // Sort the playlist by name (fileName includes numbers for sorting)
  const sortedSounds = playlist.sounds.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  await playlist.update({ sounds: sortedSounds });

  // Create macros if they don’t exist
  const macroData = [
    { name: "LR Volume Up", command: "window.luminaRadio.adjustVolume(0.05);", img: "volup.png" },
    { name: "LR Volume Down", command: "window.luminaRadio.adjustVolume(-0.05);", img: "voldown.png" },
    { name: "LR Play", command: "window.luminaRadio.setVolume(0.5);", img: "play.png" },
    { name: "LR Stop", command: "window.luminaRadio.setVolume(0);", img: "stop.png" }
  ];

  for (const { name, command, img } of macroData) {
    if (!game.macros.getName(name)) {
      const imgPath = encodeURI(`modules/luminacityradio/images/${img}`);
      console.log(`Creating macro with image: ${imgPath}`);
      await Macro.create({
        name,
        type: "script",
        img: imgPath,
        command
      });
    }
  }
});

// Hook to post chat messages when a track starts
Hooks.on("playlistSoundStart", (playlist, sound) => {
  console.log(`playlistSoundStart hook triggered for playlist: ${playlist.name}, sound: ${sound.name}`);
  if (playlist.name !== "Lumina Radio Playlist") return;

  const currentFileName = sound.name;
  const imagePath = encodeURI(`modules/luminacityradio/images/${trackImages[currentFileName]}`);
  console.log(`Attempting to post chat with image: ${imagePath}`);

  // Find the display name for the current track
  const currentTrack = tracks.find(t => t.fileName === currentFileName);
  const currentDisplayName = currentTrack ? currentTrack.displayName : "Unknown Track";

  // Simplified chat message for testing
  const chatContent = `<p>Track changed to: ${currentDisplayName}</p>`;

  ChatMessage.create({ content: chatContent });
});

// Define client-side volume control functions
window.luminaRadio = {
  adjustVolume: function(delta) {
    const playlist = game.playlists.getName("Lumina Radio Playlist");
    if (!playlist) return;
    const playingSound = playlist.sounds.find(s => s.playing);
    if (!playingSound) return;
    const soundId = playingSound.id;
    const audioContainer = game.audio.playing.get(soundId);
    if (audioContainer) {
      const currentVolume = audioContainer.volume;
      const newVolume = Math.max(0, Math.min(1, currentVolume + delta));
      audioContainer.volume = newVolume;
    }
  },
  setVolume: function(volume) {
    const playlist = game.playlists.getName("Lumina Radio Playlist");
    if (!playlist) return;
    const playingSound = playlist.sounds.find(s => s.playing);
    if (!playingSound) return;
    const soundId = playingSound.id;
    const audioContainer = game.audio.playing.get(soundId);
    if (audioContainer) {
      audioContainer.volume = volume;
    }
  }
};