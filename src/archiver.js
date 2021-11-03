#!/usr/bin/env node

/*
	Slightly modified version of https://github.com/plibither8/wayback-sitemap-archive
*/

const fetch = require('node-fetch');
const Sitemapper = require('sitemapper');

const WAYBACK_SAVE = 'https://web.archive.org/save/';

const main = async () => {
	const SITEMAP_URL = process.env.SITEMAP_URL;

	if (!SITEMAP_URL) {
		console.error('No URL provided.');
		process.exit(1);
	}

	console.info('Archiving the sitemap', SITEMAP_URL)

	await fetch(SITEMAP_URL)
			.then(res => {
				if (res.ok) {
					console.info('✔️', 'Archived the sitemap');
				}
			})
			.catch(err => {
				console.error('❌', 'Failed to archive the sitemap');
				console.error(err);
			});

	console.info('Fetching sitemap for', SITEMAP_URL);

	const sitemap = new Sitemapper();
	const {sites} = await sitemap
		.fetch(SITEMAP_URL)
		.catch(err => {
			console.error('Failed to fetch sitemap.');
			console.error(err);
			process.exit(1);
		});

	if (sites.length === 0) {
		console.error('No sites found at', SITEMAP_URL);
		console.error('Try specifying a different URL.');
		process.exit(1);
	}

	for (const site of sites) {
		await fetch(WAYBACK_SAVE + site)
			.then(res => {
				if (res.ok) {
					console.info('✔️', 'Archived', site);
				}
			})
			.catch(err => {
				console.error('❌', 'Failed to archive site:', site);
				console.error(err);
			});
	}
};

module.exports = (async () => await main())()
