const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Main service images
  {
    url: 'https://images.unsplash.com/photo-1599685315640-9ceec9fb3896',
    name: 'garden-cleanup.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1444392061186-9fc38f84f726',
    name: 'leaf-removal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe',
    name: 'landscape-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1586280268958-9483002d016a',
    name: 'maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d',
    name: 'renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
    name: 'deweeding.jpg'
  },
  // Additional garden and landscape images
  {
    url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec',
    name: 'roses-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1470755008296-2939845775eb',
    name: 'cottage-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1465919292275-c60ba49da6ae',
    name: 'spring-flowers.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    name: 'garden-path.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e',
    name: 'herb-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea',
    name: 'vegetable-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599685315640-9ceec9fb3896',
    name: 'garden-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    name: 'garden-tools.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e',
    name: 'seasonal-planting.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d',
    name: 'irrigation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    name: 'hardscaping.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    name: 'garden-bed.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe',
    name: 'planting-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1599685315640-9ceec9fb3896',
    name: 'garden-consultation.jpg'
  }
];

const consultationImages = [
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    filename: 'garden-design-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f',
    filename: 'garden-design-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1470755008296-2939845775eb',
    filename: 'garden-design-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1605059910420-ed7a7c1788f8',
    filename: 'video-consultation.jpg'
  }
];

const downloadImage = (url, filename, baseDir = 'portfolio') => {
  const dir = path.join(process.cwd(), 'public', 'images', baseDir);
  
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  const filepath = path.join(dir, path.basename(filename));
  
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        console.log(`Following redirect for ${filename}...`);
        downloadImage(response.headers.location, filename, baseDir)
          .then(resolve)
          .catch(reject);
        return;
      }

      // Check if the response is successful
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        // Verify file size
        const stats = fs.statSync(filepath);
        if (stats.size < 1000) { // Less than 1KB is probably an error
          fs.unlinkSync(filepath); // Delete the invalid file
          reject(new Error(`Downloaded file ${filename} is too small (${stats.size} bytes)`));
          return;
        }
        console.log(`Downloaded: ${filename} (${Math.round(stats.size / 1024)}KB)`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete partial file
        console.error(`Error writing ${filename}:`, err.message);
        reject(err);
      });
    });

    request.on('error', (err) => {
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });

    // Set a timeout
    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${filename}`));
    });
  });
};

async function downloadAllImages() {
  const failedDownloads = [];

  try {
    // Download portfolio images
    for (const img of images) {
      try {
        await downloadImage(img.url + '?w=1200&q=85', img.name);
      } catch (error) {
        console.error(`Failed to download ${img.name}:`, error.message);
        failedDownloads.push(img);
      }
    }

    // Download consultation images
    for (const image of consultationImages) {
      try {
        await downloadImage(image.url + '?w=1200&q=85', path.basename(image.filename), 'consultations');
      } catch (error) {
        console.error(`Failed to download ${image.filename}:`, error.message);
        failedDownloads.push(image);
      }
    }
    
    if (failedDownloads.length > 0) {
      console.log('\nFailed downloads:', failedDownloads.length);
      console.log('Retrying failed downloads...');
      
      // Retry failed downloads with alternative URLs
      for (const img of failedDownloads) {
        try {
          const altUrl = img.url.replace('?w=1200&q=85', '') + '?auto=format&fit=crop&w=1200&q=80';
          await downloadImage(altUrl, img.name || path.basename(img.filename), img.filename ? 'consultations' : 'portfolio');
        } catch (error) {
          console.error(`Final attempt failed for ${img.name || img.filename}:`, error.message);
        }
      }
    }

    console.log('\nDownload process completed!');
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

// Start the download process
downloadAllImages(); 