import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import moment from 'moment';

const getAllPosts = () =>
	fs
		.readdirSync('src/content')
		.map((fileName) => {
			const post = fs.readFileSync(
				path.resolve('src/content', fileName),
				'utf-8'
			);
			var p = grayMatter(post).data;
			p.slug = fileName.replace('.md', '');
			p.localeDate = formatDate(p.date);
			return p;
		})
		.filter((post) => post.published);

const getByCategory = (category) =>
	getAllPosts().filter((post) => post.categories.includes(category));

const formatDate = (date) => moment(date).format('YYYY-MM-DD');

export function get(req, res) {
	const cat = req.query.cat;
	res.writeHead(200, {
		'Content-Type': 'application/json',
	});
	const posts = (cat == undefined
		? getAllPosts()
		: getByCategory(cat.toLowerCase())
	).sort((a, b) => b.date - a.date);
	res.end(JSON.stringify(posts));
}
