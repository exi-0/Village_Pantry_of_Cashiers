const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'http://localhost:4173/';
const widths = [320, 360, 375, 414, 768, 1024, 1280, 1440];

(async () => {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let anyOverflow = false;

  for (const width of widths) {
    await page.setViewport({ width, height: 900 });
    await page.goto(URL, { waitUntil: 'networkidle0' });

    const offenders = await page.evaluate(() => {
      const docW = document.documentElement.clientWidth;
      const out = [];
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        const overflowBy = Math.round(r.right - docW);
        if (overflowBy > 1) {
          const id = el.id ? `#${el.id}` : '';
          const cls = typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : '';
          out.push({
            tag: el.tagName.toLowerCase() + id + cls,
            overflowBy,
            rect: { right: Math.round(r.right), width: Math.round(r.width) }
          });
        }
      });
      return out;
    });

    if (offenders.length > 0) {
      anyOverflow = true;
      console.log(`❌ Overflow found at ${width}px (${offenders.length} elements):`);
      offenders.slice(0, 5).forEach((o) => {
        console.log(`   - ${o.tag} sticks out by ${o.overflowBy}px`);
      });
    } else {
      console.log(`✓ ${width}px: Clean layout, ZERO horizontal overflow`);
    }

    if (width === 375) {
      await page.screenshot({ path: path.join(__dirname, 'screenshot_mobile_375.jpg'), fullPage: false });
      console.log('Captured screenshot_mobile_375.jpg');
    }
    if (width === 1280) {
      await page.screenshot({ path: path.join(__dirname, 'screenshot_desktop_1280.jpg'), fullPage: false });
      console.log('Captured screenshot_desktop_1280.jpg');
    }
  }

  await browser.close();

  if (anyOverflow) {
    console.log('\nOVERFLOW DETECTED: Fix offending elements per mobile-responsive skill.');
    process.exit(1);
  } else {
    console.log('\nSUCCESS: 100% Mobile Responsive & Overflow-Free across all device viewports (320px - 1440px)!');
    process.exit(0);
  }
})();

