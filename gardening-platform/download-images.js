const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1627105994388-d1bce4e9e2bf',
    name: 'garden-cleanup.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1604324571460-9e7bed23d135',
    name: 'leaf-removal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558435186-d31d126391fa',
    name: 'landscape-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600698480320-fbc86021f0d7',
    name: 'maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    name: 'renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562684750-0553aea79845',
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