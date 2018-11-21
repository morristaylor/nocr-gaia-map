const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.oregonhikers.org/field_guide/Category:Coast_Range'

// function getLinks() {
//   request(url, (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//       const $ = cheerio.load(html);
//       Array.from($('a[title~="Trailhead"]')).forEach((trailhead) => {
//         trailheadURLs.push('https://www.oregonhikers.org' + trailhead.attribs.href);
//       })
//     };
//   });
// }

function getLinks() {
  request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      let trailheadURLs = []
      const $ = cheerio.load(html);
      var trailheads = $('a[title~="Trailhead"]')
      for (i=0; i<trailheads.length; i++) {
        trailheadURLs.push('https://www.oregonhikers.org' + trailheads[i].attribs.href);
      };
    }
  })console.log(trailheadURLs)
};

getLinks();

module.exports = {
  getLinks
};
