const fs = require('fs');
const request = require('request');
const rp = require('request-promise-native');
const cheerio = require('cheerio');

// Takes Oregon Hikers Coast Range landmarks page, scrapes trailhead-only URLs, saves them to json for getTrailheadInfo script
function getTrailheadURL() {
  const nocUrl = 'https://www.oregonhikers.org/field_guide/Category:Coast_Range'
  rp(nocUrl).then((html) => {
    let trailheadURLs = [];
    const $ = cheerio.load(html);
    Array.from($('a[title~="Trailhead"]')).forEach((trailhead) => {
      trailheadURLs.push('https://www.oregonhikers.org' + trailhead.attribs.href)
    })
    fs.writeFileSync('trailhead-urls.json', JSON.stringify(trailheadURLs));
  })
}

getTrailheadURL();
