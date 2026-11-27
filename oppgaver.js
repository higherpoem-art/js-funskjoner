// =====================================================
// Oppgaver: Funksjoner
//
//   function pluss(a, b) {   // a og b er parametre (verdier inn)
//     return a + b;          // return sender svaret ut
//   }
//   pluss(2, 3);             // kaller funksjonen -> 5
//
//   Se README.md for mer informasjon om oppgaven.
// Der det ikke er oppgitt variabel, lager du egen. Eks temperatur. 
// =====================================================


// #####################################################
// DEL 1: VÆRAPPEN (oppgave 1–9)
// #####################################################

// Data: temperaturer i Tromsø en uke i mørketida (grader celsius).
// Du skal bruke arrayen "temperaturer" i oppgavene som handler om temperatur.
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];


// ---------- GRØNN ----------

// Oppgave 1: Når en spiller logger inn på Minecraft-serveren, skal hun få en hilsen.
//     hilsen("Ola") -> "Hei, Ola!"
//     Tips: bruk en template literal: `Hei, ${navn}!`
function hilsen(navn) {
    return (`Hei, ${navn}!`)
}

// Oppgave 2: Hvor mange blokker trengs til gulvet i en hytte på 4 x 5 blokker?
//     Returner arealet av et rektangel (bredde ganger høyde)
function rektangelAreal(bredde, hoyde) {
  return (bredde * hoyde)
}

// Oppgave 3: En venn i USA spør på Discord hvor kaldt det er i Tromsø.
//     Temperaturen er -6 grader C. 
//     Gjør om celsius til fahrenheit.  Formel: F = C * 9/5 + 32
//     (Den motsatte formelen er C = (F - 32) * 5/9.)
function celsiusTilFahrenheit(celsius) {
  return (celsius * 9/5 + 32)
}


// ---------- GUL ----------

// Oppgave 4: Værappen skal regne ut ukas gjennomsnitt. Første steg: summen.
//     Returner summen av alle tallene i en array. Bruk en for-løkke.
function sum(tall) {
    let sum = 0;
    for (i = 0; i<tall.length; i++){
      sum = sum + tall[i]
    }
    return (sum)
}
console.log(sum(temperaturer))

// Oppgave 5: Returner gjennomsnittet av tallene. Gjenbruk sum()!
function gjennomsnitt(tall) {
  return(sum(tall)/tall.length)
}

console.log(gjennomsnitt(temperaturer))


// Oppgave 6: Hvor mange dager med kuldegrader var det? (Trenger du vinterdekk?)
//     Returner HVOR MANGE tall som er under 0. Bruk for-løkke + if.
function antallUnderNull(tall) {
    let sum = 0
  for (i = 0; i<tall.length; i++) {
    if (tall[i] < 0) {
        sum = sum + 1 
    }
  }
  return(sum)
}

console.log(antallUnderNull(temperaturer))

// ---------- RØD ----------

// Oppgave 7: Hva var den varmeste dagen? Samme logikk som en highscore-liste.
//     Returner det største tallet i arrayen – UTEN Math.max og UTEN .sort()
function storste(tall) {
    let høyeste = tall[0]
  for (i = 1; i<tall.length; i++) {
    if (tall[i]>høyeste) {
        høyeste = tall[i]
    }
  }
  return(høyeste)
}

console.log(storste(temperaturer))

// Oppgave 8: Returner en NY array med bare kuldegradene (tall under 0).
//     Den opprinnelige arrayen skal ikke endres.
function bareKuldegrader(tall) {
  const kuldegrader = []
  for (i = 0; i<tall.length; i++) {
    if (tall[i] < 0) {
      kuldegrader.push(tall[i])
      console.log(kuldegrader)
    }
  }
  return(kuldegrader)
}

console.log(bareKuldegrader(temperaturer))

// Oppgave 9: Sorter tallene fra lavest til høyest – UTEN .sort().
//     Lag din egen sorteringsalgoritme (f.eks. boblesortering).
//     Returner en NY array, ikke endre den opprinnelige.
function sorterStigende(tall) {
  const sortert_temperaturer = tall.slice()
  let sortert = false
  while (sortert==false) {
    sortert = true
    for (i=0; i<sortert_temperaturer.length;i++){
      if (sortert_temperaturer[i]>sortert_temperaturer[i+1]) {
        [sortert_temperaturer[i], sortert_temperaturer[i+1]] = [sortert_temperaturer[i+1], sortert_temperaturer[i]]
        sortert = false
      }
    }
  }
  return(sortert_temperaturer)
}
//[array[indexFrom], array[indexTo]] = [array[indexTo], array[indexFrom]]; 

console.log(sorterStigende(temperaturer))
console.log(temperaturer)

// #####################################################
// DEL 2: SPILL (oppgave 10–14)
// #####################################################

// Data: poeng per runde i en turnering
const runder = [120, 85, 140, 95, 110];


// ---------- GRØNN ----------

// Oppgave 10: Du lager en ny bruker i WoW Forever, og vi ønsker årstallet spilleren er født
// skal inkluderes i brukernavnet. Vi får da: Gamertag = navn + tall.
//     lagGamertag("Ola", 99) -> "Ola99"
function lagGamertag(navn, tall) {
  return(`${navn}${tall}`)
}

console.log(lagGamertag("Ola", 99))

// Oppgave 11: Er spilleren gammel nok til spillet? Returner true eller false.
//     erGammelNok(16, 18) -> false
//     erGammelNok(18, 18) -> true
//     Tips: return alder >= grense;  (sammenligningen gir true/false)
function erGammelNok(alder, grense) {
  if (alder >= grense) {
    return true
  } else{
    return false
  }
}

console.log(erGammelNok(16, 18))
console.log(erGammelNok(18, 18))

// Oppgave 12: BreiLAN innfører billettpriser. VG1 betaler 100 kr og resten av skolen 150 kr.
//     Lag en funksjon som sjekker om eleven går på VG1 og gir riktig pris.
//     billettpris(true)  -> 100
//     billettpris(false) -> 150
//     Tips: bruk if og else.
function billettpris(erVG1) {
  if (erVG1 === true) {
    return (100)
  } else {
    return (150)
  }
}

console.log(billettpris(true))
// ---------- GUL ----------

// Oppgave 13: Blizzard ønsker at fraksjonene fordeles likt så mulig for å unngå at en fraksjon tar overhånd,
// dette er særlig viktig på PvP-servere. Lag en funksjon som sjekker dette når brukeren lager en ny karakter.
// Funksjonen skal returnere feilmeldingen "The faction is currently unavailable on this ruleset due to population imbalance"
// hvis det er en overvekt av en fraksjon på serveren. Ellers returnerer den "Welcome to the <fraksjon>!"
// Overvekt betyr at fraksjonen spilleren velger har MER enn 50 % av spillerne.
//     velgFraksjon(5000, 5000, "Horde")    -> "Welcome to the Horde!"
//     velgFraksjon(4500, 5500, "Alliance") -> "Welcome to the Alliance!"
//     velgFraksjon(4500, 5500, "Horde")    -> "The faction is currently unavailable on this ruleset due to population imbalance"
//
//     Tips: andel = antall i valgt fraksjon / totalt * 100
function velgFraksjon(alliance, horde, valg) {
  if (valg = "Horde"){
    let andel = horde/(horde+alliance) * 100
    if (andel > 50){
      return("The faction is currently unavailable on this ruleset due to population imbalance")
    }
    else {
      return("Welcome to the Horde!")
    }
  }
  else if (valg = "Alliance"){
    let andel = horde/(horde+alliance) * 100
    if (andel > 50){
      return("The faction is currently unavailable on this ruleset due to population imbalance")
    }
    else {
      return("Welcome to the Alliance!")
    }
  }
  else {
    return ("This is not a faction")
  }
}

console.log(velgFraksjon(5000, 5000, "Horde"))


// #####################################################
// DEL 3: BREILAN (oppgave 15–17)
// #####################################################
//
// BreiLAN trenger funksjoner til påmeldingssiden på hjemmesiden.
// Det er turneringer i flere spill, og hvert spill har en aldersgrense.
// Siden må sjekke om deltakerne er gamle nok, regne ut billettinntektene
// og vise hvem som vant.
//
// Her får du bruk for funksjonene fra del 2.

// Aldersgrenser i turneringene. Slik henter du en verdi: aldersgrenser["GTA 6"] -> 18
const aldersgrenser = {
  "GTA 6": 18,
  "CS2": 18,
  "Fortnite": 12,
  "WoW Forever": 12,
  "Minecraft": 7,
};

// Påmeldte deltakere. Slik henter du en verdi: deltakere[0].navn -> "Ola"
const deltakere = [
  { navn: "Ola", alder: 16, spill: "Fortnite", vg1: true },
  { navn: "Kari", alder: 18, spill: "GTA 6", vg1: false },
  { navn: "Ali", alder: 17, spill: "GTA 6", vg1: true },
  { navn: "Emma", alder: 15, spill: "Minecraft", vg1: false },
  { navn: "Jonas", alder: 19, spill: "CS2", vg1: true },
  { navn: "Sara", alder: 16, spill: "WoW Forever", vg1: true },
];

// Resultater fra finalen
const resultater = [
  { navn: "Ola", poeng: 340 },
  { navn: "Kari", poeng: 520 },
  { navn: "Ali", poeng: 410 },
  { navn: "Emma", poeng: 290 },
  { navn: "Jonas", poeng: 480 },
];


// ---------- GRØNN ----------

// Oppgave 15: BreiLAN trenger en funksjon som sjekker aldersgrensen før
//     påmelding til en turnering. Gjenbruk erGammelNok() fra oppgave 11!
//     Hent grensen fra objektet: aldersgrenser[spill]
//     kanDelta(16, "GTA 6")    -> false
//     kanDelta(16, "Fortnite") -> true
function kanDelta(alder, spill) {
  return(erGammelNok(alder, aldersgrenser[spill]))
}

console.log(kanDelta(16, "Fortnite"))

// ---------- GUL ----------

// Oppgave 16: BreiLAN trenger å vite hvor mye billettene gir til sammen.
//     Gjenbruk billettpris() fra oppgave 12! deltakere[i].vg1 er true eller false.
//     totalInntekt(deltakere) -> 700
function totalInntekt(deltakere) {
  let totalInntekt = 0
  for (i = 0; i < deltakere.length; i ++) {
    totalInntekt=totalInntekt+billettpris(deltakere[i].vg1)
  }
  return totalInntekt
}

console.log(totalInntekt(deltakere))

// ---------- RØD ----------

// Oppgave 17: BreiLAN trenger en resultattavle med de tre beste.
//     Returner en NY array med navnene, fra flest til færrest poeng.
//     UTEN .sort(). Arrayen resultater skal ikke endres.
//     toppTre(resultater) -> ["Kari", "Jonas", "Ali"]
function toppTre(resultater) {
  let sortert = false
  let toppTre = resultater.slice()
  while (sortert==false) {
    sortert = true
    for (i=0; i<toppTre.length-1;i++){
      if (toppTre[i].poeng<toppTre[i+1].poeng) {
        [toppTre[i+1].poeng, toppTre[i].poeng] = [toppTre[i].poeng, toppTre[i+1].poeng] 
        sortert = false
      }
    }
  }
  for (i=0; i<toppTre.length;i++){
    if (i>2){
      const index = toppTre.indexOf(i);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
  }
  toppTre = toppTre.slice(0,3)
  return toppTre.map(spiller => spiller.navn);
}

console.log(toppTre(resultater))



// #####################################################
// EGENVURDERING
// #####################################################
//
// Skriv en kort egenvurdering av arbeidet ditt. Skriv rett etter kolonet.
// Dette fikk jeg godt til: jeg synes jeg fikk det meste gankse bra til
// Dette var vanskelig: det var noen av oppgavene som var lit utfordrene å forstå hva de ba om
// Dette vil jeg øve mer på: jeg synes det var litt interesant å sortere. så det kunne jeg tenke meg å gjøre mer av
