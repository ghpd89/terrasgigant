export interface TerrasMeubelType {
  id: string;
  naam: string;
  slug: string;
  icon: string;
  beschrijving: string;
  prijsVanaf: number;
  prijsTot: number;
  materialen: string[];
  bolQuery: string;
  coolblueQuery: string;
  populair: boolean;
}

export interface Materiaal {
  id: string;
  naam: string;
  slug: string;
  icon: string;
  voordelen: string[];
  nadelen: string[];
  onderhoud: string;
  levensduur: string;
  prijsklasse: string;
  geschiktVoor: string[];
}

function bolUrl(query: string): string {
  return `https://www.bol.com/nl/nl/s/?searchtext=${encodeURIComponent(query)}`;
}

function coolblueUrl(query: string): string {
  return `https://www.coolblue.nl/zoeken?query=${encodeURIComponent(query)}`;
}

export function getBolUrl(query: string): string {
  return bolUrl(query);
}

export function getCoolblueUrl(query: string): string {
  return coolblueUrl(query);
}

export const MEUBEL_TYPEN: TerrasMeubelType[] = [
  {
    id: 'loungeset',
    naam: 'Loungeset',
    slug: 'beste-loungeset',
    icon: '🛋️',
    beschrijving: 'Comfortabele zithoek voor het terras — ideaal voor ontspannen en gezellig samenzijn',
    prijsVanaf: 299,
    prijsTot: 2500,
    materialen: ['aluminium', 'polyrattan', 'teak'],
    bolQuery: 'loungeset tuin',
    coolblueQuery: 'loungeset tuin',
    populair: true,
  },
  {
    id: 'tuinset',
    naam: 'Tuinset',
    slug: 'beste-tuinset',
    icon: '🍽️',
    beschrijving: 'Tafel met stoelen voor buiten eten — van 2-persoons bistroset tot grote eettafel',
    prijsVanaf: 149,
    prijsTot: 3000,
    materialen: ['aluminium', 'teak', 'polyrattan', 'staal'],
    bolQuery: 'tuinset tafel stoelen',
    coolblueQuery: 'tuinset',
    populair: true,
  },
  {
    id: 'parasol',
    naam: 'Parasol',
    slug: 'beste-parasol',
    icon: '☂️',
    beschrijving: 'Bescherming tegen zon en regen — van kleine balkonparasol tot grote zweefparasol',
    prijsVanaf: 39,
    prijsTot: 800,
    materialen: ['aluminium', 'hout', 'staal'],
    bolQuery: 'parasol tuin',
    coolblueQuery: 'parasol tuin',
    populair: true,
  },
  {
    id: 'ligbed',
    naam: 'Ligbed',
    slug: 'beste-ligbed',
    icon: '🏖️',
    beschrijving: 'Zonnebed voor tuin of terras — van eenvoudig tot luxe met verstelbare rugleuning',
    prijsVanaf: 79,
    prijsTot: 1200,
    materialen: ['aluminium', 'teak', 'polyrattan'],
    bolQuery: 'ligbed tuin',
    coolblueQuery: 'ligbed tuinligbed',
    populair: true,
  },
  {
    id: 'tuinstoel',
    naam: 'Tuinstoel',
    slug: 'beste-tuinstoel',
    icon: '🪑',
    beschrijving: 'Losse stoel voor tuin of terras — stapelbaar, inklapbaar of vaste uitvoering',
    prijsVanaf: 29,
    prijsTot: 600,
    materialen: ['aluminium', 'teak', 'polyrattan', 'kunststof'],
    bolQuery: 'tuinstoel stapelbaar',
    coolblueQuery: 'tuinstoel',
    populair: true,
  },
  {
    id: 'tuinbank',
    naam: 'Tuinbank',
    slug: 'beste-tuinbank',
    icon: '🪵',
    beschrijving: 'Bank voor de tuin — voor twee of meerdere personen, met of zonder armleuningen',
    prijsVanaf: 99,
    prijsTot: 1500,
    materialen: ['teak', 'aluminium', 'polyrattan'],
    bolQuery: 'tuinbank 2 persoons',
    coolblueQuery: 'tuinbank',
    populair: false,
  },
  {
    id: 'overkapping',
    naam: 'Pergola / Overkapping',
    slug: 'beste-pergola',
    icon: '🏠',
    beschrijving: 'Overdekking voor het terras — van eenvoudige parasol-overkapping tot luxe pergola',
    prijsVanaf: 199,
    prijsTot: 5000,
    materialen: ['aluminium', 'hout'],
    bolQuery: 'pergola overkapping tuin aluminium',
    coolblueQuery: 'pergola tuin',
    populair: false,
  },
  {
    id: 'hangmat',
    naam: 'Hangmat',
    slug: 'beste-hangmat',
    icon: '🌴',
    beschrijving: 'Ontspanning op z\'n best — los hangend of met standaard, voor tuin of balkon',
    prijsVanaf: 29,
    prijsTot: 400,
    materialen: ['katoen', 'polyester', 'staal'],
    bolQuery: 'hangmat met standaard',
    coolblueQuery: 'hangmat tuin',
    populair: false,
  },
];

export const MATERIALEN: Materiaal[] = [
  {
    id: 'aluminium',
    naam: 'Aluminium',
    slug: 'aluminium-terrasmeubelen',
    icon: '🔩',
    voordelen: ['Roestvrij', 'Lichtgewicht', 'Vrijwel onderhoudsloos', 'Lange levensduur', 'Weersbestendig'],
    nadelen: ['Warmer in direct zonlicht', 'Minder warm/natuur uitstraling'],
    onderhoud: 'Minimaal — af en toe afspoelen met water volstaat',
    levensduur: '20–30 jaar',
    prijsklasse: 'middensegment tot premium',
    geschiktVoor: ['moderne tuin', 'minimalistische stijl', 'weinig onderhoudstijd'],
  },
  {
    id: 'teak',
    naam: 'Teak hout',
    slug: 'teak-terrasmeubelen',
    icon: '🌳',
    voordelen: ['Prachtige uitstraling', 'Nat. olieën beschermen hout', 'Warm en naturel gevoel', 'Duurzaam FSC-hout'],
    nadelen: ['Jaarlijks onderhoud (teak-olie)', 'Zwaarder dan aluminium', 'Duurder in aanschaf'],
    onderhoud: '1× per jaar schuren en teak-olie aanbrengen',
    levensduur: '25–50 jaar',
    prijsklasse: 'middensegment tot premium',
    geschiktVoor: ['klassieke tuin', 'houten vlonder', 'like\'s natural beauty'],
  },
  {
    id: 'polyrattan',
    naam: 'Polyrattan',
    slug: 'polyrattan-terrasmeubelen',
    icon: '🧺',
    voordelen: ['Comfortabele look', 'Weersbestendig', 'Makkelijk schoon te maken', 'Lichtgewicht'],
    nadelen: ['Kleur kan vervagen na jaren', 'Minder exclusieve uitstraling'],
    onderhoud: 'Afspoelen met tuinslang, optioneel zeepwater',
    levensduur: '10–15 jaar',
    prijsklasse: 'budget tot midden',
    geschiktVoor: ['lounge stijl', 'kleurrijke accenten', 'prijs-kwaliteit'],
  },
  {
    id: 'kunststof',
    naam: 'Kunststof / Resin',
    slug: 'kunststof-terrasmeubelen',
    icon: '🪣',
    voordelen: ['Goedkoopste optie', 'Stapelbaar', 'Lichtgewicht', 'Kleurvast'],
    nadelen: ['Minder luxe uitstraling', 'Kan door wind omwaaien'],
    onderhoud: 'Gewoon afspoelen',
    levensduur: '5–10 jaar',
    prijsklasse: 'budget',
    geschiktVoor: ['balkon', 'kamperen', 'gastenstoelen'],
  },
];

export const VERGELIJKINGEN: [string, string, string][] = [
  ['aluminium', 'teak', 'Aluminium vs Teak — welk materiaal wint?'],
  ['aluminium', 'polyrattan', 'Aluminium vs Polyrattan — voor- en nadelen'],
  ['loungeset', 'tuinset', 'Loungeset of tuinset — wat past bij jou?'],
  ['teak', 'polyrattan', 'Teak vs Polyrattan — materiaalvergelijking'],
];

export const POPULAIRE_ZOEKTERMEN = [
  { term: 'loungeset 4-delig', slug: 'beste-loungeset', icon: '🛋️' },
  { term: 'loungeset 6-delig', slug: 'beste-loungeset', icon: '🛋️' },
  { term: 'tuinset 4 personen', slug: 'beste-tuinset', icon: '🍽️' },
  { term: 'zweefparasol', slug: 'beste-parasol', icon: '☂️' },
  { term: 'aluminium tuinstoelen', slug: 'aluminium-terrasmeubelen', icon: '🔩' },
  { term: 'teak tuintafel', slug: 'teak-terrasmeubelen', icon: '🌳' },
];
