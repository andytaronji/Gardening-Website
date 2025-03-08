const fs = require('fs');
const path = require('path');

// Create components directory if it doesn't exist
const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// Move Navigation component back to components directory
const navigationSource = path.join(__dirname, 'src', 'app', 'components', 'Navigation.jsx');
const navigationDest = path.join(componentsDir, 'Navigation.jsx');
if (fs.existsSync(navigationSource)) {
  fs.renameSync(navigationSource, navigationDest);
}

// Update layout.js to point to the correct Navigation path
const layoutPath = path.join(__dirname, 'src', 'app', 'layout.js');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
layoutContent = layoutContent.replace(
  "import Navigation from './components/Navigation';",
  "import Navigation from '../components/Navigation';"
);
fs.writeFileSync(layoutPath, layoutContent); 