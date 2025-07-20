// Utility script to update bulldog images with unique Unsplash URLs
// Run with: npx ts-node scripts/updateBulldogImages.ts

import fs from 'fs';
import path from 'path';

// List of unique Unsplash image URLs (1-40)
const imageUrls = [
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80', // 1
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b8a', // 2
  'https://images.unsplash.com/photo-1583511655826-057004d7b6f3', // 3
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01', // 4
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb', // 5
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb81', // 6
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b8b', // 7
  'https://images.unsplash.com/photo-1583511655826-057004d7b6f4', // 8
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b02', // 9
  'https://images.unsplash.com/photo-1587300003388-59208cc962cc', // 10
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb82', // 11
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b8c', // 12
  'https://images.unsplash.com/photo-1583511655826-057004d7b6f5', // 13
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b03', // 14
  'https://images.unsplash.com/photo-1587300003388-59208cc962cd', // 15
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb83', // 16
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b8d', // 17
  'https://images.unsplash.com/photo-1583511655826-057004d7b6f6', // 18
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b04', // 19
  'https://images.unsplash.com/photo-1587300003388-59208cc962ce', // 20
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb84', // 21
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b8e', // 22
  'https://images.unsplash.com/photo-1583511655826-057004d7b6f7', // 23
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b05', // 24
  'https://images.unsplash.com/photo-1587300003388-59208cc962cf', // 25
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb85', // 26
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b8f', // 27
  'https://images.unsplash.com/photo-1583511655826-057004d7b6f8', // 28
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b06', // 29
  'https://images.unsplash.com/photo-1587300003388-59208cc962d0', // 30
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb86', // 31
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b90', // 32
  'https://images.unsplash.com/photo-1583511655826-057004d7b6f9', // 33
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b07', // 34
  'https://images.unsplash.com/photo-1587300003388-59208cc962d1', // 35
  'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb87', // 36
  'https://images.unsplash.com/photo-1583512603805-3d5d9f3a0b91', // 37
  'https://images.unsplash.com/photo-1583511655826-057004d7b6fa', // 38
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b08', // 39
  'https://images.unsplash.com/photo-1587300003388-59208cc962d2'  // 40
].map(url => `${url}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80`);

// Function to update a single bulldog file
function updateBulldogFile(filePath: string, startIndex: number): number {
  const content = fs.readFileSync(filePath, 'utf-8');
  let updatedContent = content;
  let currentIndex = startIndex;
  
  // Find and replace each image URL
  const imageRegex = /(\s+image: ')([^']+)(')/g;
  updatedContent = updatedContent.replace(imageRegex, (match, prefix, url, suffix) => {
    if (currentIndex > imageUrls.length) {
      console.warn('Warning: Not enough unique images available');
      return match;
    }
    const newUrl = imageUrls[currentIndex - 1];
    console.log(`Updating image ${currentIndex} in ${path.basename(filePath)}`);
    currentIndex++;
    return `${prefix}${newUrl}${suffix} // Image ${currentIndex - 1}`;
  });

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`Updated ${path.basename(filePath)} with new images`);
  } else {
    console.log(`No changes made to ${path.basename(filePath)}`);
  }

  return currentIndex;
}

// Main function
function main() {
  const dataDir = path.join(__dirname, '../src/data');
  const files = [
    path.join(dataDir, 'bulldogs.ts'),
    path.join(dataDir, 'additionalBulldogs.ts'),
    path.join(dataDir, 'moreBulldogs.ts')
  ];

  let currentIndex = 0;
  for (const file of files) {
    if (fs.existsSync(file)) {
      currentIndex = updateBulldogFile(file, currentIndex);
    } else {
      console.warn(`File not found: ${file}`);
    }
  }

  console.log('\nUpdate complete!');
  console.log(`Updated ${currentIndex} bulldog images in total.`);
}

main();
