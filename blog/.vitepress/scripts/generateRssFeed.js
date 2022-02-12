const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');
const Feed = require('feed').Feed;

const articles = require('../../articles.json');

dotenv.config();

const currentYear = new Date().getFullYear();
const baseUrl =
  process.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'https://weeklyovervue.com';

const feed = new Feed({
  title: 'Weekly OverVue RSS Feed',
  description: 'RSS feed for the latest Weekly OverVue articles',
  id: 'weekly-overvue',
  link: `${baseUrl}/articles`,
  copyright: `${currentYear} Weekly OverVue`,
  author: {
    name: 'Maciej Pędzich',
    email: 'mac@weeklyovervue.com',
    link: 'https://maciejpedzi.ch'
  }
});

for (const article of articles) {
  const { id, title, description, cover, link, date } = article;

  feed.addItem({
    id,
    title,
    description,
    image: `${baseUrl}${cover}`,
    link: `${baseUrl}${link}`,
    date: new Date(date)
  });
}

fs.writeFileSync(path.resolve(__dirname, '../../public/rss.xml'), feed.rss2());
console.log('RSS feed generated successfully');
process.exit();
