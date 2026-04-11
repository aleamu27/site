/**
 * In-house news: each entry is a real route at /news/:slug.
 * imageSrc: path under public/ (e.g. /news/my-photo.jpg). Swap for real photography when ready.
 */
export const NEWS_ARTICLES = [
  {
    slug: 'first-party-attribution',
    title: 'Why first-party data matters for B2B attribution',
    publishedAt: '2025-04-02',
    date: '2 April 2025',
    imageSrc: '/cta-image.png',
    imageAlt: 'Coastal landscape',
    paragraphs: [
      'Marketing teams are under pressure to prove which channels actually produce revenue, not just clicks. Third-party cookies and borrowed identifiers are disappearing, and with them the easy answers vendors used to sell.',
      'First-party data means information collected directly from your own properties: your site, your product, your forms. It is tied to real behaviour on assets you control, which makes it both more accurate for attribution and easier to defend under privacy rules.',
      'For B2B organisations, the shift is not optional. Long sales cycles and multiple stakeholders mean you need a clear picture of every meaningful touch, not a black box score from an ad network.',
      'Hepta builds Calar OS around that principle: one line of code on your site, first-party capture of journeys, and scoring that your sales team can trust. The goal is simple: know who is on your site, what they did, and when they are ready for a conversation.',
    ],
  },
  {
    slug: 'shipping-silmaril',
    title: 'What we learned shipping continuous infrastructure monitoring',
    publishedAt: '2025-03-18',
    date: '18 March 2025',
    imageSrc: '/devimage.png',
    imageAlt: 'Development workspace',
    paragraphs: [
      'The project started as an internal tool: we needed to see SSL, DNS, and HTTP configuration drift across many domains without opening a spreadsheet every Monday.',
      'Running scans on a schedule sounds easy until you factor in rate limits, flaky resolvers, and the fact that a single false positive trains teams to ignore the product. We invested early in structured results, deduplication, and clear severity so alerts mean something.',
      'The product runs as a distributed system so we can parallelise work and keep latency predictable as customers add domains. That architecture cost more up front than a cron script, but it is what allows the service to stay reliable as usage grows.',
      'The lesson for us was the same one we bring to client work: operational software has to earn trust every week. Monitoring that cries wolf is worse than no monitoring at all.',
    ],
  },
  {
    slug: 'regulated-sectors',
    title: 'Building web systems when exposure is not an option',
    publishedAt: '2025-02-10',
    date: '10 February 2025',
    imageSrc: '/development-launch.png',
    imageAlt: 'Product launch',
    paragraphs: [
      'Some organisations cannot afford a flashy site that falls over under load or leaks data through a misconfigured header. Their digital surface is part of operational risk, not just marketing.',
      'That changes how we scope projects. Performance, accessibility, and security baselines are not stretch goals; they are part of the definition of done. Documentation and handover matter as much as the first deploy.',
      'We work best with teams that want a partner who will say no to shortcuts that create debt. The output is slower to ship sometimes, but it is maintainable, auditable, and built for the long arc most enterprises actually live in.',
    ],
  },
];

export function getArticleBySlug(slug) {
  return NEWS_ARTICLES.find(a => a.slug === slug) ?? null;
}
