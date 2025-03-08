const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Main service images
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    name: 'garden-cleanup.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1636978862412-f5c9a1fcf614',
    name: 'leaf-removal.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558904541-efa843a96f01',
    name: 'landscape-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    name: 'maintenance.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1530379769497-883c410c01c2',
    name: 'renovation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e',
    name: 'deweeding.jpg'
  },
  // Additional garden and landscape images
  {
    url: 'https://images.unsplash.com/photo-1501685532562-aa6846b14a0e',
    name: 'roses-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558350315-8aa00e8e4590',
    name: 'cottage-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a',
    name: 'spring-flowers.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558693168-c370615b54e0',
    name: 'garden-path.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2',
    name: 'herb-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e',
    name: 'vegetable-garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    name: 'garden-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e',
    name: 'garden-tools.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b',
    name: 'seasonal-planting.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1580600301354-0ce8faef576c',
    name: 'irrigation.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2',
    name: 'hardscaping.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1584479898061-15742e14f50d',
    name: 'garden-bed.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1632571401005-458e9d244591',
    name: 'planting-design.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    name: 'garden-consultation.jpg'
  }
];

const consultationImages = [
  {
    url: 'https://images.unsplash.com/photo-1501685532562-aa6846b14a0e',
    filename: 'garden-design-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1558693168-c370615b54e0',
    filename: 'garden-design-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a',
    filename: 'garden-design-3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e',
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