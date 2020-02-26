require('dotenv').config();
const { generateSitemap } = require('./sitemap');
generateSitemap('ryanboriswrites.codes', './out/');
