/**
 * FAAIZA MUNIR - AUTHOR DATA STORE
 * Centralised data architecture for books, upcoming events,
 * journal articles, and press coverage.
 */

window.AUTHOR_DATA = {
  author: {
    name: "Faaiza Munir",
    tagline: "British author writing character-led cosy crime & mystery with humour",
    bioShort: "Faaiza Munir is from Glasgow, Scotland but lives in London with her husband, three children, and a very unbothered cat. Her debut novel, Arranged Murder, is out in March 2027.",
    location: "London and Glasgow, UK",
    genre: "Cosy Crime / Mystery Fiction with Humour",
    instagram: "https://instagram.com/faaizamunir",
    agent: "Darley Anderson Agency & Associates (Camilla Bolton)",
    publicist: "Beth.Wright@quercusbooks.co.uk"
  },

  books: [
    {
      id: "arranged-murder",
      title: "Arranged Murder",
      series: "The Asghar Family Mysteries • Book 1",
      tagline: "Four sisters. One dead body. And a hunt for the perfect husband.",
      synopsis: "One of four sisters, south Londoner and British Pakistani Iman Asghar has so far been unlucky in love. So she decides to try an arranged marriage, allowing her widower mum, Raheela, to use a matchmaker to find the perfect husband. With everything planned for the big day, the family gather in their home to welcome her third potential match, Dawud. What isn’t planned is Dawud dropping dead in the Asghars’ living room. The police rule his death as an accident – a verdict that does little to change the minds of the community, who are convinced that Iman’s family murdered her potential match. In a bid to clear her family’s name, Iman decides to investigate. And as she gets to know Dawud’s extended family and friends, she begins to suspect that his death may not have been an accident after all . . .",
      publicationDate: "March 2027",
      publisher: "Quercus",
      formats: "Hardback, Paperback, eBook & Audiobook",
      coverImage: "assets/arranged-murder-cover.jpg",
      isDebut: true,
      retailers: [
        { name: "Waterstones", url: "#", icon: "📚" },
        { name: "Amazon UK", url: "#", icon: "📦" },
        { name: "Bookshop.org", url: "#", icon: "🏛️" },
        { name: "Foyles", url: "#", icon: "📖" }
      ]
    },
    {
      id: "asghar-mysteries-book-2",
      title: "The Asghar Family Mysteries: Book 2",
      series: "The Asghar Family Mysteries • Book 2",
      tagline: "Hafsa's story.",
      synopsis: "Faaiza is currently writing the second instalment in The Asghar Family Mysteries series, which follows the youngest sister, Hafsa. As the youngest in a loud, opinionated family, Hafsa is used to navigating the chaos of family life. However, when she unexpectedly stumbles upon a murder mystery of her own, she finds herself caught up in a case that she must solve.",
      publicationDate: "Forthcoming",
      publisher: "Quercus",
      formats: "Hardback, Paperback, eBook & Audiobook",
      coverImage: null,
      isDebut: false,
      retailers: []
    }
  ],

  events: [
    {
      id: "harrogate-crime-writing-festival",
      title: "Theakston Old Peculier Crime Writing Festival",
      festival: "Harrogate Crime Writing Festival",
      dateDay: "22–25",
      dateMonth: "Jul",
      year: "2027",
      location: "Old Swan Hotel, Harrogate, North Yorkshire",
      type: "Headline Festival & Panels",
      image: "assets/harrogate-festival-marquee.jpg",
      desc: "Join Faaiza Munir in Harrogate for the UK’s pinnacle crime writing festival weekend, featuring panel discussions, author signings, and festival marquee gatherings at the historic Old Swan Hotel.",
      ticketLink: "events.html"
    },
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
      image: "assets/writing-desk-reading-lamp.jpg",
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
