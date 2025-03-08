const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1601579112934-35d37c9b0da3',
    name: 'garden-cleanup.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507484467459-0c01be16726e',
    name: 'leaf-removal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    name: 'landscape-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b',
    name: 'maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e',
    name: 'renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e',
    name: 'deweeding.jpg'
  }
];

const downloadImage = (url, filename) => {
  const dir = path.join(process.cwd(), 'public', 'images', 'portfolio');
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  const filepath = path.join(dir, filename);
  
  https.get(`${url}?w=800&q=80`, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

images.forEach(img => {
  downloadImage(img.url, img.name);
}); 