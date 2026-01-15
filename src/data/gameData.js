export const stages = [
  // -------- Stage 1 --------
  {
    id: 1,
    intro: [
      "💚✨ ECO-DATE ADVENTURE – STAGE 1 ✨💚\n\n",
      "🚗🚲 HOW ARE YOU GETTING TO THE DATE? 🚲🚗\n\n",
      "OMG! Your crush just texted you! 📱💕\n",
      "They picked this AMAZING café for your first date together! ☕✨\n",
      "You check the location – it's 5km away from your place 📍\n\n",
      "Your heart is racing! 💓 You want to make a great first impression!\n",
      "But you also care about the planet 🌍💚\n\n",
      "Your initial eco-compatibility meter: ${score}% 💚\n\n",
      "So... how are you getting there? 🤔\n",
      "Your choice says a LOT about you! 🌱✨\n"
    ],
    outcomes: [
      { keywords: ["bike", "cycle", "bicycle", "scooter"], score: 10, text: ["🚲💨 You hop on your bicycle and pedal your way there!\n\nYou arrive with slightly messy hair but a bright smile! 😊\nYour crush's eyes light up: \"You cycled here?! That's so cool! I love that you care about the environment!\" 😍\n\nZero emissions AND great exercise! Plus, you just scored major points! 🌟💚\nYour crush is totally impressed by your eco-warrior energy! ⚡\n"] },
      { keywords: ["walk", "foot", "jog", "run"], score: 10, text: ["🚶‍♀️👟 You decide to walk there, enjoying the fresh air!\n\nYou arrive feeling energized and grounded! 🌿\nYour crush greets you warmly: \"You walked all this way? That's amazing! Most people would just take a cab!\" 💕\n\nou saved a lot of  carbon emissions!! 🏞️💚\n"] },
      { keywords: ["bus", "metro", "train", "public", "carpool", "subway", "share", "auto"], score: 8, text: ["🚌✨ You hop on the bus/metro and enjoy the ride!\n\nYou arrive right on time, feeling pretty good about yourself! 😊\nYour crush smiles: \"Public transport, nice! I do the same. It's cheaper and better for the planet, right?\" 🌍\n\nSharing is caring for the environment! Your crush appreciates your practical thinking! 💚\nYou both bond over stories about funny commute experiences! 😄\n"] },
      { keywords: ["motor", "cycle", "car", "drive", "uber", "ola", "taxi", "rapido"], score: 3, text: ["🚗💨 You book a cab/drive your car to get there quickly!\n\nYou arrive super comfortable and right on time! ⏰\nYour crush notices: \"Oh, you came by car? I usually try to avoid that for short distances...\" 😅\n\nQuick and convenient, but they seem a little disappointed! 😬\nYour crush is wondering if you both share the same values... 🤔💭\n"] }
    ],
    fallback: { score: -2, text: ["🤔 You're still deciding how to get there... but time's running out! ⏰\n\nYour crush sends another text: \"Hey, you on your way?\" 📱\nYou're gonna be late if you don't decide soon! Better pick something fast! 💨\n"] }
  },

  // -------- Stage 2 --------
  {
    id: 2,
    intro: [
      "💚✨ ECO-DATE ADVENTURE – STAGE 2 ✨💚\n\n",
      "🍽️☕ WHAT ARE YOU ORDERING? ☕🍽️\n\n",
      "You made it to the café! The vibe is perfect! ✨\n",
      "You and your crush are sitting across from each other, smiling nervously 😊💕\n",
      "The waiter hands you both the menu 📋\n\n",
      "Your crush is watching what you order! 👀\n",
      "This is your chance to show what you care about! 🌍\n",
      "The menu has SO many delicious options... 🤤\n\n",
      "Your eco-compatibility meter: ${score}% 💚\n\n",
      "What catches your eye? What are you gonna order? 🥗🍔\n"
    ],
    outcomes: [
      { keywords: ["vegan", "plant", "salad", "veggies"], score: 10, text: ["🥗🌱 You confidently order the vegan bowl with fresh veggies!\n\nYour crush's face literally LIGHTS UP! 😍\n\"No way! I'm plant-based too! This is so rare to find!\" 💚\n\nYou both geek out about your favorite vegan spots! 🌿\nThe conversation flows naturally – you're totally vibing! ✨\nYour crush keeps smiling and leaning in closer! 💕\n\nPlant-based power couple energy unlocked! 🌟\n"] },
      { keywords: ["vegetarian", "paneer", "cheese"], score: 7, text: ["🧀🥪 You order something vegetarian – paneer tikka sounds perfect!\n\nYour crush nods approvingly! 😊\n\"Nice choice! I try to avoid meat too. Better for the planet, you know?\" 🌍\n\nYou both chat about reducing your carbon footprint! 💚\nThe conversation is flowing really well! There's definitely a connection here! ✨\nYour crush seems happy you made a conscious choice! 💕\n\nNot bad at all – you're on the same wavelength! 🌿\n"] },
      { keywords: ["chicken", "fish", "meat"], score: 4, text: ["🍗🐟 You order chicken or fish – it's your favorite!\n\nYour crush raises an eyebrow slightly... 🤔\n\"Oh, you eat meat? I mean, that's cool... I've been trying to cut down though.\" 😅\n\nThere's a brief awkward pause... 😬\nYour crush is polite but you can sense they're a bit disappointed! 💭\nThe conversation continues but the energy shifted a little! ⚡\n\nNot a dealbreaker, but maybe not perfectly aligned! 🌍\n"] },
      { keywords: ["beef", "steak", "burger", "red meat"], score: 2, text: ["🍔🥩 You order the beef burger – you're craving it!\n\nYour crush's smile fades a bit... 😕\n\"Oh... beef? That's actually got the highest carbon footprint...\" They look genuinely concerned! 🌍\n\nAwkward silence for a moment... 😬\nYour crush tries to change the subject but seems less enthusiastic now! 💔\nYou can tell this matters a lot to them! 💭\n\nYikes... maybe you should've checked their vibe first! 🙈\n"] }
    ],
    fallback: { score: -2, text: ["🤔 You're staring at the menu, overwhelmed by choices!\n\nYour crush giggles: \"Take your time! But I'm starving!\" 😄\nThe waiter is waiting... you better decide soon! ⏰\n"] }
  },

  // -------- Stage 3 --------
  {
    id: 3,
    intro: [
      "💚✨ ECO-DATE ADVENTURE – STAGE 3 ✨💚\n\n",
      "🛍️💳 SURPRISE SHOPPING SPREE! 💳🛍️\n\n",
      "The date is going AMAZING so far! 😍✨\n",
      "After the café, your crush suggests: \"Let's walk around the mall!\" 🏬\n",
      "You're both laughing and having the best time! 💕\n\n",
      "Suddenly, your crush stops in front of a store! 😊\n",
      "\"Hey, I want to get you something! A little gift!\" 🎁\n",
      "Your heart is MELTING right now! 💓\n\n",
      "You walk into the store together... 👀\n",
      "Your eco-compatibility meter: ${score}% 💚\n\n",
      "What section are you naturally drawn to? 🌿✨\n"
    ],
    outcomes: [
      { keywords: ["thrift", "second", "vintage", "preloved"], score: 10, text: ["♻️👗 Your eyes go straight to the thrift/vintage section!\n\n\"Wait, you're into thrifting?!\" Your crush is BEAMING! 😍\n\"OMG, me too! Second-hand is literally the BEST! Each piece has a story!\" 💕\n\nYou both start hunting through the racks together! 🛍️\nYour crush finds the perfect vintage jacket for you and insists on buying it! 🧥\nYou're both geeking out about sustainable fashion! ✨\n\n\"You're literally perfect,\" your crush whispers! 💚\nThis is going INCREDIBLY well! You're totally in sync! 🌟\n"] },
      { keywords: ["local", "handmade", "artisan", "craft"], score: 9, text: ["🎨🧵 You're drawn to the handmade section with local artisan pieces!\n\nYour crush's eyes widen with excitement! 😊\n\"You appreciate local craftsmanship? That's so cool!\" 💚\n\nYou both admire the unique handmade jewelry and bags! ✨\nYour crush picks a beautiful handwoven bracelet for you! 💕\n\"Supporting local artists is so important,\" they say thoughtfully! 🌿\n\nYou're having deep conversations about sustainability and community! 💭\nYour crush keeps holding your hand while browsing! 😍\nDefinitely soulmate material right here! 🌟\n"] },
      { keywords: ["sustainable", "organic", "eco", "ethical"], score: 8, text: ["🌿👕 You head toward the sustainable/organic brand section!\n\nYour crush smiles: \"I shop from eco-brands too! Quality over quantity, right?\" 😊\n\nYou both check out the organic cotton tees and bamboo accessories! 👕\nYour crush insists on getting you something from the collection! 💚\nThe conversation flows about ethical fashion and conscious choices! ✨\n\nYour crush seems impressed but maybe hoped you'd go even greener! 🌱\nStill, you're definitely compatible! The vibe is really good! 💕\n"] },
      { keywords: ["fast", "zara", "h&m", "trendy", "brand"], score: 3, text: ["👗⚡ You naturally walk toward the fast fashion section with trendy pieces!\n\nYour crush follows but seems hesitant... 😕\n\"Oh, you like fast fashion? I used to, but... the environmental impact is pretty intense.\" 🌍\n\nAwkward energy fills the air... 😬\nThey still offer to buy you something but without the earlier enthusiasm! 💔\nYou notice they're checking price tags and labels more carefully now! 👀\n\nThe conversation becomes a bit forced... 💭\nMaybe you two aren't as aligned as you thought? 🙈\n"] }
    ],
    fallback: { score: -2, text: ["🤔 You're overwhelmed by all the options and can't decide!\n\nYour crush laughs: \"Take your time! I want it to be something you'll actually love!\" 😊\nBut you can see they're curious about what you'll choose! 👀\n"] }
  },

  // -------- Stage 4 --------
  {
    id: 4,
    intro: [
      "💚✨ ECO-DATE ADVENTURE – FINAL STAGE ✨💚\n\n",
      "🏖️🌴 PLANNING A VACATION TOGETHER! 🌴🏖️\n\n",
      "WOW! This date turned into an entire day together! ☀️\n",
      "You've been hanging out for hours and it feels SO natural! 💕\n",
      "You're sitting on a bench, watching the sunset together 🌅\n\n",
      "Your crush turns to you with sparkling eyes: ✨\n",
      "\"Hey... what if we plan a trip together? Like, a week-long vacation?\" 😍\n",
      "Your heart is RACING! This is getting serious! 💓\n\n",
      "They pull out their phone to start planning! 📱\n",
      "Your eco-compatibility meter: ${score}% 💚\n\n",
      "Where would you want to go? What kind of trip speaks to you? 🗺️\n"
    ],
    outcomes: [
      { keywords: ["local", "nearby", "domestic", "train"], score: 10, text: ["🚂🏞️ \"Let's take a train to the mountains or the countryside!\" you suggest!\n\nYour crush JUMPS with excitement! 😍\n\"YES! I was hoping you'd say that! Train journeys are the BEST!\" 🌟\n\nYou both immediately start planning – looking up scenic train routes! 🗺️\nYour crush grabs your hand: \"Low carbon footprint AND we get to see everything along the way!\" 💚\nYou're already imagining cozy train rides together! ✨\n\n\"I think I'm falling for you,\" your crush admits shyly! 💕\nYou two are PERFECT for each other! Complete eco-soulmates! 🌍✨\n"] },
      { keywords: ["road", "drive", "car trip"], score: 7, text: ["🚗🗺️ \"What about a road trip? We could explore at our own pace!\" you suggest!\n\nYour crush thinks for a moment... 🤔\n\"Road trip could be fun! If we carpool and plan efficiently, it's not too bad!\" 😊\n\nYou both start discussing routes and stops along the way! 🛣️\nYour crush suggests camping to reduce hotel waste! 🏕️\n\"We should make it as sustainable as possible,\" they add thoughtfully! 💚\n\nYour crush seems happy with the compromise! They appreciate your planning! ✨\nYou're both willing to work together – that's what matters! 💕\n"] },
      { keywords: ["flight", "domestic", "india", "short"], score: 5, text: ["✈️🇮🇳 \"Maybe we could fly somewhere within India? Like Goa or Kerala?\" you suggest!\n\nYour crush's excitement fades a little... 😕\n\"Oh... I try to avoid flying when possible. The carbon emissions are pretty high...\" 🌍\n\nAwkward pause... you can feel the energy shift! 😬\nYour crush suggests: \"What if we take a train there instead? It'll be an adventure!\" 🚂\nThey're trying to find middle ground but seem a bit disappointed! 💭\n\nYou're not perfectly aligned, but they're willing to compromise! 💚\nMaybe you need to learn more about sustainable travel together? 🌱\n"] },
      { keywords: ["international", "abroad", "foreign", "overseas"], score: 2, text: ["✈️🌏 \"Let's go international! Europe or Bali!\" you say excitedly!\n\nYour crush's face falls... 😟\n\"International flights? That's... that's a huge carbon footprint. I can't do that.\" 🌍\n\nThe mood suddenly gets heavy... 💔\nYour crush looks genuinely upset: \"I thought we were on the same page about this stuff...\" 😢\nThere's a long, uncomfortable silence! 😬\n\nThey stand up, clearly conflicted! 💭\n\"Maybe we should think about what we really want...\" they say quietly! 🙈\n\nThis might be a dealbreaker... your values don't align! 💔🌍\n"] }
    ],
    fallback: { score: -2, text: ["🤔 \"I'm not sure... I've never really thought about it!\" you admit!\n\nYour crush looks a bit concerned... 😕\n\"Really? You don't have any preference?\" They seem to want you to care more! 💭\nMaybe you should think about what matters to you? 🌍\n"] }
  }
];