console.info('Starting, please wait...');

//import fs for file reading
const { readFileSync } = require('fs');
const fetch = require('sync-fetch');

//read start and end messages from file
const message = {
	start: readFileSync('./messages/start.txt', 'utf-8'),
	separator: readFileSync('./messages/separator.txt', 'utf-8'),
	end: readFileSync('./messages/end.txt', 'utf-8')
};

//single-url sitemaps for testing
const sitemaps = [
	"https://pastebin.com/raw/LrJgyF8s",
	"https://pastebin.com/raw/b6kwGBSP"
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

//for each sitemap...
for (let sitemap of sitemaps){
	//import sitemapper (sitemap parser) and waybackarchiver
	const SitemapperModule = require('sitemapper');
	const sitemapper = new SitemapperModule();
	
	//configure sitemapper
	sitemapper
	 .fetch(sitemap)
	 .then(function(sitesRaw){ 
		const sites = sitesRaw.sites;
	
		console.info('Archiving', sites.length, 'sites from', sitemap);
	
		//...archive every site
		for (let url of sites){
			fetch('https://web.archive.org/save/'+url)
			console.info('✔️  Archived', url)
		}

		console.info(message.separator)
	})

}
