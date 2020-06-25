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
			const { data, content } = grayMatter(post);
			data.slug = fileName.replace('.md', '');
			data.localeDate = formatDate(data.date);
			data.words = content.split(' ').length;
			data.minRead = Math.ceil(data.words / 250);
			return data;
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
	var posts = (cat == undefined || cat == ''
		? getAllPosts()
		: getByCategory(cat.toLowerCase())
	).sort((a, b) => b.id - a.id);
	res.end(JSON.stringify(posts));
}
