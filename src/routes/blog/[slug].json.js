import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';
import moment from 'moment';

const getPost = (fileName) =>
	fs.readFileSync(path.resolve('src/content', `${fileName}.md`), 'utf-8');

const formatDate = (date) => moment(date).format('YYYY-MM-DD');

export function get(req, res, next) {
	const { slug } = req.params;
	const post = getPost(slug);
	const renderer = new marked.Renderer();
	const { data, content } = grayMatter(post);
	data.slug = slug;
	data.localeDate = formatDate(data.date);
	data.words = content.split(' ').length;
	data.minRead = Math.ceil(data.words / 250);
	const html = marked(content, { renderer });

	if (html) {
		res.writeHead(200, {
			'Content-Type': 'application/json',
		});

		res.end(JSON.stringify({ html, ...data }));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json',
		});

		res.end(
			JSON.stringify({
				message: `Not found`,
			})
		);
	}
}
