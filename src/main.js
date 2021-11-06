console.info('Starting, please wait...');

//import fs for file reading
const { readFileSync } = require('fs');

//read start and end messages from file
const message = {
	start: readFileSync('./messages/start.txt', 'utf-8'),
	separator: readFileSync('./messages/separator.txt', 'utf-8'),
	end: readFileSync('./messages/end.txt', 'utf-8')
};

//single-url sitemaps for testing
const sitemaps = [
	"https://pastebin.com/raw/4rgzVQDX",
	"https://pastebin.com/raw/7saQEW3e"
]

const sitemapsDisabled = [
	"https://winx.fandom.com/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/bg/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/ca/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/cs/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/es/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/fi/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/fr/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/gl/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/hr/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/hu/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/it/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/nl/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/oc/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/pl/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/pt-br/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/pt/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/ro/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/sl/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/sr/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/th/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/tr/sitemap-newsitemapxml-index.xml",
	"https://winx.fandom.com/uk/sitemap-newsitemapxml-index.xml"
];

console.info(message.start);

//for each sitemap archive its contents
for (let sitemap of sitemaps){
	process.env.SITEMAP_URL = sitemap;

	require('./archiver');
}
