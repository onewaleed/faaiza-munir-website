/**
 * FAAIZA MUNIR - AUTHOR DATA STORE
 * Centralised data architecture for books, upcoming events,
 * journal articles, and press coverage.
 */

window.AUTHOR_DATA = {
  author: {
    name: "Faaiza Munir",
    tagline: "British author writing character-led cosy crime & mystery with humour",
    bioShort: "Faaiza Munir is a British author whose crime writing is shaped by sharp observation, eccentric families, and warm Scottish humour. Based between Scotland and London, she is fascinated by theatre, brilliant dialogue, and the messy secrets ordinary people try to keep.",
    location: "Scotland & London, UK",
    genre: "Cosy Crime / Mystery Fiction with Humour",
    instagram: "https://instagram.com/faaizamunir",
    agent: "Fletcher & Co Literary Agency, London (UK & Translation Rights)",
    publicist: "UK & International Publicity Enquiries: press@faaizamunir.com"
  },

  books: [
    {
      id: "arranged-murder",
      title: "Arranged Murder",
      series: "The Asghar Family Mysteries • Book 1",
      tagline: "Four sisters. One dead body. And a hunt for the perfect husband.",
      synopsis: "When a family gathering to discuss matrimonial prospects ends with an unexpected corpse in the drawing room, four fiercely opinionated British-Pakistani sisters realise that one of the potential suitors might just be a killer. Armed with boundless wit, family loyalties, and an absurdly unreliable suspect list, they must untangle the truth before wedding season turns deadly.",
      publicationDate: "Publishing 2027",
      formats: "Hardback, Paperback, eBook & Audiobook",
      coverImage: "assets/arranged-murder-cover.jpg",
      isDebut: true,
      retailers: [
        { name: "Waterstones", url: "#", icon: "📚" },
        { name: "Amazon UK", url: "#", icon: "📦" },
        { name: "Bookshop.org", url: "#", icon: "🏛️" },
        { name: "Foyles", url: "#", icon: "📖" }
      ]
    }
    /* Future Book 2, Book 3 can be appended here cleanly without redesigning */
  ],

  events: [
    {
      id: "brighton-festival",
      title: "Debut Crime Writers Panel: Humour in Mystery",
      festival: "Brighton Book Festival",
      dateDay: "14",
      dateMonth: "Jun",
      year: "2027",
      location: "Seaside Marquee, Brighton Pier",
      type: "Panel & Book Signing",
      image: "assets/event-brighton.jpg",
      desc: "Join Faaiza Munir alongside fellow UK debut mystery authors discussing family dynamics, comedy timing, and why cosy crime is Britain's favourite antidote to grim headlines.",
      ticketLink: "#"
    },
    {
      id: "london-agency-gathering",
      title: "Autumn Literary Showcase & New Voices in Crime",
      festival: "London Publishing Showcase",
      dateDay: "28",
      dateMonth: "Jul",
      year: "2027",
      location: "Bloomsbury Publishing Hall, London",
      type: "Reading & Q&A",
      image: null,
      desc: "An evening of readings and conversation celebrating character-led fiction and modern British cosy crime.",
      ticketLink: "#"
    },
    {
      id: "independent-bookshops-tour",
      title: "Independent Bookshop Tour & Reader Evening",
      festival: "Edinburgh Book Week",
      dateDay: "18",
      dateMonth: "Sep",
      year: "2027",
      location: "The Portobello Bookshop, Edinburgh",
      type: "Book Signing & Talk",
      image: null,
      desc: "Faaiza in conversation on writing murder over tea, Scottish storytelling traditions, and crafting relatable sisters.",
      ticketLink: "#"
    }
  ],

  journal: [
    {
      id: "murder-over-marmalade",
      title: "On Writing Murder Over Marmalade: Why Cosy Crime Needs Humour",
      category: "On Writing",
      categoryClass: "badge--green",
      publishDate: "October 2026",
      readTime: "4 min read",
      image: "assets/journal-writing.jpg",
      excerpt: "Why the darkest mysteries are often best served with buttered toast, neurotic family WhatsApp groups, and a touch of Scottish dry wit."
    },
    {
      id: "five-books-dialogue",
      title: "Five Books That Taught Me How to Write Dialogue People Actually Speak",
      category: "Reading List",
      categoryClass: "badge--orange",
      publishDate: "August 2026",
      readTime: "5 min read",
      image: null,
      excerpt: "From Alan Bennett to P.G. Wodehouse, how theatre and playwrights shaped the rhythm of the four sisters in Arranged Murder."
    },
    {
      id: "scotland-to-london",
      title: "From Edinburgh Rain to London Theatres: A Writer's Notebook",
      category: "Essays & Life",
      categoryClass: "badge--purple",
      publishDate: "July 2026",
      readTime: "3 min read",
      image: null,
      excerpt: "Observations on living between two literary capitals and finding the eccentric details that turn everyday awkwardness into plot twists."
    }
  ],

  latest: [
    {
      type: "Book News",
      badgeClass: "badge--green",
      title: "Announcing Arranged Murder: Coming in 2027",
      date: "Autumn 2026",
      excerpt: "Thrilled to share the first look at my debut novel, a character-led cosy mystery celebrating family, tea, and unexpected murder.",
      link: "#featured-book"
    },
    {
      type: "Upcoming Event",
      badgeClass: "badge--orange",
      title: "Faaiza Speaking at Brighton Book Festival",
      date: "June 2027",
      excerpt: "Catch me on the seaside panel discussing comedy, murder, and why readers love eccentric sisterhoods.",
      link: "#events"
    },
    {
      type: "Journal Article",
      badgeClass: "badge--purple",
      title: "On Writing Murder Over Marmalade",
      date: "October 2026",
      excerpt: "An essay exploring the delicate balance between genuine mystery intrigue and laugh-out-loud family chaos.",
      link: "#journal"
    }
  ]
};
