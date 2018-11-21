const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.oregonhikers.org/field_guide/Beaver_Falls_Trailhead';

request(url, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const name = $('#mainContent > h1').text().trim();
    const lat = parseFloat($('#mw-content-text > ul > li:nth-child(1)').slice(0,1).text().slice(11).trim());
    const lng = parseFloat($('#mw-content-text > ul > li:nth-child(2)').text().slice(12).trim());
    const driveTime = $('#mw-content-text > ul > li').slice(4, 5).text().slice(29).trim();

    console.log(name);
    console.log(url);
    console.log(driveTime);
    console.log(lat)
    console.log(lng)

    // TODO object creation
    // TODO build array of trailhead URLs and forEach them with the function above

  }
})
