import { en, type LocalizedDictionary } from "./en";

function prefixDeep(value: unknown): unknown {
  if (typeof value === "string") return `[EL] ${value}`;
  if (Array.isArray(value)) return value.map(prefixDeep);
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, v]) => [key, prefixDeep(v)]),
    );
  }
  return value;
}

// Auto-derived placeholder for every section that doesn't have real Greek
// copy yet — each string is the English original prefixed with "[EL] ".
// This guarantees structural parity with en.ts (TypeScript errors on drift)
// and makes any untranslated string immediately visible on the page.
const placeholder = prefixDeep(en) as LocalizedDictionary;

// ---------------------------------------------------------------------------
// Real, hand-authored Greek copy. Filled in section by section as it's
// supplied — an independent editorial adaptation (not a literal translation)
// in the same Kinfolk / architecture-editorial register as the English
// copy, written for developers, hoteliers, architects and investors.
// International/brand terms (Monocoque, CLT, Module, Typology, Hospitality,
// Boutique Hotel, Eco Resort, WHITE, Turnkey, Developer, Operator, Investor)
// are kept in English throughout, as in the source copy.
// ---------------------------------------------------------------------------

const meta: LocalizedDictionary["meta"] = {
  titleTemplate: "%s — Monocoque",
  defaultTitle: "Monocoque — Προκατασκευασμένα Συστήματα CLT για τη Σύγχρονη Φιλοξενία",
  defaultDescription:
    "Το Monocoque είναι ένα προκατασκευασμένο σύστημα Cross-Laminated Timber για τη σύγχρονη φιλοξενία — ακριβές στην κατασκευή, βιώσιμο, σχεδιασμένο με την P4Architecture για τη WHITE.",
};

const nav: LocalizedDictionary["nav"] = {
  home: "Αρχική",
  theLogic: "The Logic",
  typologies: "Typologies",
  sustainability: "Sustainability",
  b2bValue: "B2B Value",
  enquire: "Επικοινωνία",
};

const footer: LocalizedDictionary["footer"] = {
  description:
    "Ένα modular timber hospitality system, βασισμένο σε ένα ενιαίο engineered 2.40 × 4.05m CLT Module.",
  exploreHeading: "Πλοήγηση",
  contactHeading: "Επικοινωνία",
  email: "info@monocoque.gr",
  forDevelopersHeading: "For Developers",
  forDevelopersText:
    "Συζητήστε μαζί μας τις απαιτήσεις του έργου σας και λάβετε μια πρώτη αξιολόγηση, ενδεικτικό χρονοδιάγραμμα υλοποίησης και προτεινόμενη διαμόρφωση Monocoque.",
  getInTouch: "Get in Touch",
  copyright: "© {year} Monocoque.",
  creditLine: "Δημιουργία της WHITE, σε συνεργασία με την P4Architecture.",
};

const common: LocalizedDictionary["common"] = {
  ctaEyebrow: "Ξεκινήστε τη Συζήτηση",
  ctaPrimaryLabel: "Συζητήστε το έργο σας",
};

const home: LocalizedDictionary["home"] = {
  hero: {
    eyebrow: "Προκατασκευασμένα Συστήματα CLT για τη Σύγχρονη Φιλοξενία",
    headline: "Η αρχιτεκτονική ως χώρος ηρεμίας",
    paragraph1:
      "Το Monocoque βασίζεται σε μια απλή αρχή: το κέλυφος και ο χώρος αποτελούν ένα ενιαίο σύνολο. Μέσα από το Cross-Laminated Timber (CLT) δημιουργείται μια αυτοφερόμενη κατασκευή χωρίς εσωτερικές κολόνες, η οποία κατασκευάζεται στο εργοστάσιο, μεταφέρεται ολοκληρωμένη και τοποθετείται στο έργο με γερανό μέσα σε μία μόνο κατασκευαστική περίοδο.",
    paragraph2:
      "Το Monocoque είναι ένα modular timber hospitality system, σχεδιασμένο και κατασκευασμένο για Boutique Hotels, Eco Resorts και luxury retreat developments. Κάθε μονάδα ολοκληρώνεται στο εργοστάσιο, μεταφέρεται έτοιμη και συναρμολογείται στο οικόπεδο μέσα σε λίγες εβδομάδες — όχι μήνες.",
    ctaPrimary: "Ανακαλύψτε τη λογική του συστήματος",
    ctaSecondary: "Συζητήστε το έργο σας",
  },
  philosophy: {
    quoteLead:
      "Το όνομα Monocoque περιγράφει ακριβώς τη φιλοσοφία του: ένα κέλυφος που αποτελεί ταυτόχρονα τη δομή και τον χώρο.",
    quoteRest:
      "Ένα συμπαγές, αυτοφερόμενο σύστημα από engineered timber, χωρίς κρυφές κολόνες ή περιττά στοιχεία — κατασκευασμένο εκτός εργοταξίου και συναρμολογημένο μέσα σε λίγες ημέρες, αντικαθιστώντας τις καθυστερήσεις και τις αβεβαιότητες της συμβατικής κατασκευής με μια πιο ελεγχόμενη και προβλέψιμη διαδικασία.",
    sleepLine1:
      "Η ίδια μάζα ξυλείας και η συνεχής θερμομόνωση που προσδίδουν στο κέλυφος αντοχή, δημιουργούν ταυτόχρονα ένα ήσυχο, προστατευμένο εσωτερικό — εδώ εκφράζεται η",
    sleepPhilosophy: "φιλοσοφία ύπνου",
    sleepLine2: " που η WHITE ανέπτυξε για τον χώρο της φιλοξενίας, σε κάθε Monocoque υπνοδωμάτιο.",
    stats: [
      {
        value: "2.40 × 4.05m",
        label: "Η βασική διάσταση CLT Module πάνω στην οποία αναπτύσσεται κάθε Typology.",
      },
      {
        value: "0%",
        label: "Σταθερή εργοστασιακή τιμολόγηση, πριν ξεκινήσουν οι εργασίες στο έργο.",
      },
      {
        value: "1",
        label: "Μία κατασκευαστική περίοδος, από την παραγγελία έως την εγκατάσταση της μονάδας.",
      },
    ],
  },
  theLogic: {
    eyebrow: "Η Λογική του Συστήματος",
    title: "Ένα προϊόν. Όχι ένα εργοτάξιο.",
    description:
      "Το Monocoque αντιμετωπίζει την κατασκευή ως ένα ολοκληρωμένο βιομηχανικό προϊόν. Παράγεται στο εργοστάσιο, μεταφέρεται στο έργο με φορτηγό και τοποθετείται με γερανό. Η συναρμολόγηση ολοκληρώνεται μέσα σε λίγες ημέρες, με προβλέψιμο κόστος και πλήρη διαφάνεια ως προς τον χρόνο και τον προϋπολογισμό.",
    bullets: [
      "Κάθε Module σχεδιάζεται στην ίδια σταθερή διάσταση 2.40 × 4.05m.",
      "Η παραγωγή στο εργοστάσιο εξελίσσεται παράλληλα με την προετοιμασία του οικοπέδου.",
      "Ξηρή συναρμολόγηση με γερανό, χωρίς χρόνους ωρίμανσης και καθυστερήσεις από τις καιρικές συνθήκες.",
    ],
    linkLabel: "Δείτε τη λογική του συστήματος",
  },
  typologiesPreview: {
    eyebrow: "Typologies",
    title: "Ένα Module. Πολλαπλές εφαρμογές.",
    description:
      "Κάθε Typology βασίζεται στο ίδιο 2.40 × 4.05m CLT Module, το οποίο επαναλαμβάνεται και συνδέεται σε διαφορετικές διαμορφώσεις. Η ακολουθία αλλάζει. Η δομική λογική παραμένει σταθερή.",
    viewAll: "Δείτε όλες τις Typologies",
    items: [
      {
        name: "Small",
        note: "19 m² — Sleep + Service Pod",
        useCase: "Σχεδιασμένο για Boutique Hotel rooms, Glamping Villas ή αυτόνομες μονάδες retreat.",
      },
      {
        name: "Medium",
        note: "29 m² — Sleep + Service Pod + Live",
        useCase:
          "Μια premium σουίτα για μεγαλύτερες διαμονές — ευέλικτη για ζευγάρια ή Business Travellers.",
      },
      {
        name: "Large",
        note: "49 m² — Full Module Sequence",
        useCase:
          "Η ολοκληρωμένη εκδοχή του συστήματος. Ιδανική για Family Villas, Honeymoon Suites ή flagship μονάδες πολυτελών resorts.",
      },
    ],
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Μια κατασκευή που σέβεται το τοπίο",
    description:
      "Το κέλυφος του Monocoque είναι αρκετά ελαφρύ και ταυτόχρονα άκαμπτο ώστε να απαιτεί ελάχιστη παρέμβαση στο έδαφος. Οι μονάδες στηρίζονται σε αναστρέψιμες βάσεις θεμελίωσης ή μικρά βάθρα σκυροδέματος — η κατάλληλη λύση επιλέγεται ανάλογα με τις συνθήκες κάθε τοποθεσίας. Εφόσον χρειαστεί, μπορούν να αποσυναρμολογηθούν και να μετακινηθούν, αφήνοντας το φυσικό τοπίο όπως ήταν πριν.",
    bullets: [
      "Χωρίς εκσκαφές — το κέλυφος φτάνει ολοκληρωμένο στο έργο.",
      "Αναστρέψιμα συστήματα θεμελίωσης, προσαρμοσμένα στο έδαφος.",
      "Μια μονάδα φιλοξενίας που μπορεί να μετακινηθεί χωρίς να αφήσει μόνιμο αποτύπωμα.",
    ],
    linkLabel: "Ανακαλύψτε τη φιλοσοφία βιωσιμότητας",
  },
  b2bValuePreview: {
    eyebrow: "B2B Value",
    title: "Για Developers, Operators & Investors",
    description:
      "Το Monocoque δημιουργεί μια πιο προβλέψιμη προσέγγιση στην ανάπτυξη έργων σύγχρονης φιλοξενίας, προστατεύοντας τον χρόνο, τον προϋπολογισμό και τη συνοχή του brand.",
    quote: "Κάθε μήνας που εξοικονομείται στην κατασκευή είναι ένας επιπλέον μήνας λειτουργίας και εσόδων.",
    values: [
      {
        title: "Ταχύτερη υλοποίηση",
        copy: "Η παραγωγή εκτός εργοταξίου εξελίσσεται παράλληλα με τις εργασίες στο οικόπεδο, μειώνοντας τον χρόνο από την παραγγελία έως την έναρξη λειτουργίας.",
      },
      {
        title: "Βεβαιότητα κόστους",
        copy: "Η εργοστασιακά ελεγχόμενη διαδικασία καθορίζει νωρίς το κόστος υλικών και εργασίας, μειώνοντας τις αποκλίσεις και το επενδυτικό ρίσκο.",
      },
      {
        title: "Σταθερή ποιότητα εμπειρίας",
        copy: "Κάθε Module κατασκευάζεται με τις ίδιες προδιαγραφές, διασφαλίζοντας σταθερή εμπειρία επισκέπτη και συνέπεια σε κάθε ανάπτυξη.",
      },
    ],
    linkLabel: "Δείτε τη συνολική επιχειρηματική αξία",
  },
  cta: {
    title: "Ας μιλήσουμε για το project σας",
    description: "Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.",
  },
};

export const el: LocalizedDictionary = {
  ...placeholder,
  meta,
  nav,
  footer,
  common,
  home,
};
