// ============================================================
//  YORIK — COMBAT CODEX : ABILITIES
//  Edit this file to change Yorik's abilities. Each entry is one card.
//  Fields:
//    name    - ability title
//    timing  - when it triggers (e.g. 'Start of Combat', 'Bonus Action')
//    econ    - action economy style: 'special' | 'bonus' | 'free'
//    uses    - usage limit text (e.g. '1 / combat', '1 / long rest')
//    source  - the small line under the name (e.g. 'Command \u00b7 Order of the Hammers')
//    teaser  - one-line summary shown before expanding
//    ruling  - full rules text (HTML allowed, e.g. <strong>...</strong>)
//    locked  - true = hidden behind the 159 password until unlocked
// ============================================================

window.YORIK_ABILITIES = [
  {
    name:   "Marshal the Line",
    timing: "Start of Combat",
    econ:   "special",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Set the order of battle — swap two allies’ places in the initiative.",
    ruling: "After all initiative is rolled but before the first turn, <strong>swap the initiative results of two willing allies</strong> (you may choose yourself). They trade places in the order <strong>for the rest of the encounter</strong>.",
    locked: true
  },
  {
    name:   "By the Forge-Father’s Will",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Mark a foe for the Forge-Father. You and every ally who can hear you strike it truer.",
    ruling: "Choose one creature you can see. Until the start of your next turn, <strong>you and any ally who can hear you</strong> gain a <strong>+3 bonus to attack rolls</strong> against that creature.",
    locked: true
  },
  {
    name:   "Moradin’s Anvil",
    timing: "Free Action",
    econ:   "free",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Pin a foe between Hammers — surrounded, it cannot break away.",
    ruling: "Choose one creature within 5 feet. Until the start of your next turn, that creature <strong>cannot willingly move</strong> if at least two of your allies (or you and one ally) are <strong>adjacent to it</strong>.",
    locked: true
  },
  {
    name:   "Stride of the Stone Strider",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Bark an order and an ally surges forward, unhindered, before the foe can react.",
    ruling: "Choose one ally who can hear you. That ally may <strong>immediately move up to their full speed as a reaction</strong>. This movement <strong>does not provoke opportunity attacks</strong>.",
    locked: true
  },
  {
    name:   "The Forge Tempers All",
    timing: "Free Action",
    econ:   "free",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Steady a faltering ally — grant them another chance to shake off what grips them.",
    ruling: "Choose yourself or one ally who can hear you. That creature may <strong>immediately make one saving throw</strong> against one effect currently afflicting them, with a <strong>bonus equal to your Wisdom modifier</strong>.",
    locked: true
  },
  {
    name:   "Grip of the Mountain",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Set your stance like bedrock — the foe that tries to flee finds it cannot.",
    ruling: "Choose one creature within 5 feet. Until the start of your next turn, if that creature attempts to <strong>move away from you</strong>, you may use your <strong>reaction to cancel that movement entirely</strong>.",
    locked: true
  },
  {
    name:   "Moradin’s Momentum",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Lend an ally the relentless drive of the mountain — they move swifter for the whole fight.",
    ruling: "Choose one ally who can hear you. Until the end of the encounter, that ally’s <strong>speed increases by 10 feet</strong>.",
    locked: true
  },
  {
    name:   "Strike of the Hidden Vein",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Point out the weak seam in the foe’s guard — an ally strikes at it with deadly precision.",
    ruling: "Choose one ally who can hear you. That ally may <strong>immediately make one weapon attack as a reaction</strong>, with <strong>advantage on the attack roll</strong>.",
    locked: true
  },
  {
    name:   "The Forge Encircles",
    timing: "Free Action",
    econ:   "free",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Wheel an ally around the foe — slipping through its space to a better angle of attack.",
    ruling: "Choose one willing ally adjacent to a creature within your reach. <strong>Move that ally to any other unoccupied space adjacent to that creature.</strong> This movement does not provoke opportunity attacks and <strong>may pass through the creature’s space</strong>.",
    locked: true
  },
  {
    name:   "Hammerfist of the Soul Forger",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Crack the foe’s guard wide open — every blow against it bites for the kill.",
    ruling: "Choose one creature within your reach. Until the start of your next turn, attack rolls against that creature <strong>score a critical hit on a roll of 18–20</strong>.",
    locked: true
  },
  {
    name:   "Moradin’s Earthshatter",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Bring the hammer down — the ground bucks and the whole warband piles in.",
    ruling: "Knock one creature within 5 feet <strong>prone</strong>. Every ally who can hear you may <strong>move up to 15 feet and make one melee weapon attack as a reaction</strong>. These attacks deal no damage but <strong>knock the target prone on a hit</strong>.",
    locked: true
  },
  {
    name:   "Blessing of Tempered Steel",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Sheathe your allies in forge-blessed resolve — steel enough to weather the next blow.",
    ruling: "Choose one or two allies who can hear you. Each chosen ally gains <strong>15 temporary hit points</strong>.",
    locked: true
  },
  {
    name:   "The Forge Finds Every Crack",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Drive the wound deep — it festers, and every Hammer that lands pries it wider.",
    ruling: "Choose one creature you hit with a melee weapon attack this turn. That creature takes <strong>5 ongoing damage</strong> (Constitution save ends, DC = 8 + your proficiency bonus + your Strength modifier). Until the end of the encounter, whenever you or an ally hits that creature, it takes an <strong>additional 5 ongoing damage</strong> (save ends).",
    locked: true
  },
  {
    name:   "Draw Out the Slag",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Goad the foe into spending its fury on you — and let your warband make it pay.",
    ruling: "Choose one creature within your reach. Until the end of the encounter, that creature gains a <strong>+2 bonus to attack and damage rolls against you</strong>, but whenever it attacks you, <strong>one ally who can hear you may make one weapon attack against it as a reaction</strong>.",
    locked: true
  },
  {
    name:   "March of the Dwarven Host",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Sound the advance — the entire warband surges forward as one, heedless of the foe.",
    ruling: "Each ally who can hear you may <strong>immediately move up to their full speed as a reaction</strong>. This movement <strong>does not provoke opportunity attacks</strong>.",
    locked: true
  },
  {
    name:   "Quench the Strike",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Wait on the foe’s blow — then close the distance and hammer it before it lands.",
    ruling: "Choose one creature within your reach. Until the start of your next turn, if that creature attacks, you may use your <strong>reaction to move up to 20 feet and make one melee weapon attack against it</strong>. On a hit, the creature takes a <strong>penalty to the triggering attack roll equal to your Wisdom modifier</strong>.",
    locked: true
  },
  {
    name:   "Let the Anvils Ring",
    timing: "Bonus Action",
    econ:   "bonus",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Set the rhythm of the forge — every ally hammers out an extra blow on the beat.",
    ruling: "Until the start of your next turn, <strong>every ally who can hear you</strong> may make <strong>one additional weapon attack</strong> immediately after they take an action.",
    locked: true
  },
  {
    name:   "The Clan Strikes as One",
    timing: "Free Action",
    econ:   "free",
    uses:   "1 / long rest",
    source: "Command · Order of the Hammers",
    teaser: "Call the kill — every Hammer ringing the foe falls on it at once.",
    ruling: "Every ally adjacent to one creature within your reach may <strong>make one melee weapon attack against it as a reaction</strong>.",
    locked: true
  },
  {
    name:   "Between Hammer and Anvil",
    timing: "Free Action",
    econ:   "free",
    uses:   "1 / combat",
    source: "Command · Order of the Hammers",
    teaser: "Hammer drives, anvil holds — catch the foe between your blow and an ally’s.",
    ruling: "After hitting a creature with a melee weapon attack this turn, <strong>one ally adjacent to that creature may make one melee weapon attack against it as a reaction</strong>. If that ally hits, <strong>you may make one additional melee weapon attack</strong> against the creature.",
    locked: true
  },
];
