const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157',
    name: 'garden-cleanup.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542320260-f8f651de8c12',
    name: 'leaf-removal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    name: 'landscape-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d',
    name: 'maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2',
    name: 'renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e',
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