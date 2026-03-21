const puppeteer = require('puppeteer');
const sharp = require('sharp');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  const filePath = 'file:///' + path.resolve('og-card.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 15000 });
  await page.screenshot({ path: 'public/images/og-screenshot.png', type: 'png' });
  await browser.close();

  const info = await sharp('public/images/og-screenshot.png').webp({ quality: 92 }).toFile('public/images/og-preview.webp');
  require('fs').unlinkSync('public/images/og-screenshot.png');
  console.log('OG card generated: ' + Math.round(info.size/1024) + 'KB (' + info.width + 'x' + info.height + ')');
})();
