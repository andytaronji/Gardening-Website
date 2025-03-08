const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01',
    name: 'garden-cleanup.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1513009673845-a826fb5f4c02',
    name: 'leaf-removal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558904541-c6c7003a3b2d',
    name: 'landscape-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    name: 'maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558904541-0e45b01d9f89',
    name: 'renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    name: 'tree-service.jpg'
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