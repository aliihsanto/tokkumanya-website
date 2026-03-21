import type { APIRoute } from 'astro';
import { LANGUAGES, slugs } from '@data/i18n';
import { ports } from '@data/ports';
import { services } from '@data/services';

const SITE = 'https://www.tokkumanya.com';

function url(path: string, priority: string, changefreq: string): string {
  return `  <url>
    <loc>${SITE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export const GET: APIRoute = () => {
  const urls: string[] = [];

  for (const lang of LANGUAGES) {
    // Homepage
    urls.push(url(`/${lang}/`, '1.0', 'weekly'));

    // Port listing
    urls.push(url(`/${lang}/${slugs.ports[lang]}/`, '0.9', 'weekly'));

    // Individual ports
    for (const port of ports) {
      urls.push(url(`/${lang}/${slugs.ports[lang]}/${port.id}/`, '0.8', 'monthly'));
    }

    // Service listing
    urls.push(url(`/${lang}/${slugs.services[lang]}/`, '0.9', 'weekly'));

    // Individual services
    for (const service of services) {
      const serviceSlug = slugs.serviceIds[service.id]?.[lang] ?? service.id;
      urls.push(url(`/${lang}/${slugs.services[lang]}/${serviceSlug}/`, '0.8', 'monthly'));
    }

    // About
    urls.push(url(`/${lang}/${slugs.about[lang]}/`, '0.7', 'monthly'));

    // Contact
    urls.push(url(`/${lang}/${slugs.contact[lang]}/`, '0.7', 'monthly'));
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
