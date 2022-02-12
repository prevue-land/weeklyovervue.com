const fs = require('fs');
const path = require('path');
const frontmatter = require('front-matter');

const articlesDir = path.resolve(__dirname, '../../articles');
const articleFiles = fs.readdirSync(articlesDir);

const data = [];

for (const file of articleFiles) {
  const articleFilePath = path.join(articlesDir, `/${file}`);
  const fileContent = fs.readFileSync(articleFilePath, {
    encoding: 'utf-8'
  });

  const { attributes } = frontmatter(fileContent);
  const { title, date, description, cover } = attributes;

  const [slug] = file.split('.');
  const link = `/articles/${slug}.html`;

  data.push({
    id: slug,
    title,
    description,
    link,
    date: new Date(date).getTime(),
    cover: cover.replace('blog/public', 'images')
  });
}

data.sort((a, b) => b.date - a.date);

const articlesJson = JSON.stringify(data);

fs.writeFileSync(path.resolve(__dirname, '../../articles.json'), articlesJson);
console.log('articles.json generated successfully');
process.exit();
