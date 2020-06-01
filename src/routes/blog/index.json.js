import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

const getAllPosts = () =>
	fs.readdirSync('src/content').map((fileName) => {
		const post = fs.readFileSync(
			path.resolve('src/content', fileName),
			'utf-8'
		);
		var p = grayMatter(post).data;
		p.slug = fileName.replace('.md', '');
		p.localeDate = new Date(p.date).toLocaleDateString('de-DE');
		return p;
	});

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});
	const posts = getAllPosts().sort((a, b) => b.date - a.date);
	res.end(JSON.stringify(posts));
}
