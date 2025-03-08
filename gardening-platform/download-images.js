const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01',
    name: 'garden-cleanup.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1636197061911-64764db9bb34',
    name: 'leaf-removal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94',
    name: 'landscape-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d',
    name: 'maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    name: 'renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    name: 'deweeding.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542478080-8c03409bbf22',
    name: 'backup-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605197788044-b8aef4bffd4b',
    name: 'backup-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
    name: 'backup-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590',
    name: 'backup-4.jpg'
  }
];

const consultationImages = [
  {
    url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01',
    filename: 'images/consultations/garden-design-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    filename: 'images/consultations/garden-design-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1636197061911-64764db9bb34',
    filename: 'images/consultations/garden-design-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542478080-8c03409bbf22',
    filename: 'images/consultations/video-consultation.jpg'
  }
];

const downloadImage = (url, filename, baseDir = 'portfolio') => {
  const dir = path.join(process.cwd(), 'public', 'images', baseDir);
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  const filepath = path.join(dir, path.basename(filename));
  
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

for (const image of consultationImages) {
  downloadImage(image.url, path.basename(image.filename), 'consultations');
} 