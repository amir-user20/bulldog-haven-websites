import { PuppyType } from '@/data/bulldogs';

// Function to get a random selection of available bulldogs
export const getRandomBulldogs = (allBulldogs: PuppyType[], count: number): PuppyType[] => {
  // Filter only available bulldogs
  const availableBulldogs = allBulldogs.filter(bulldog => bulldog.available);
  
  // If we don't have enough bulldogs, return what we have
  if (availableBulldogs.length <= count) {
    return availableBulldogs;
  }
  
  // Get a random selection of bulldogs
  const shuffled = [...availableBulldogs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Function to initialize the rotation interval
export const setupRotation = (
  allBulldogs: PuppyType[], 
  setFeaturedBulldogs: (dogs: PuppyType[]) => void, 
  count: number = 3, 
  intervalMinutes: number = 30
) => {
  // Set initial featured bulldogs
  setFeaturedBulldogs(getRandomBulldogs(allBulldogs, count));
  
  // Set up rotation interval
  const rotationInterval = setInterval(() => {
    setFeaturedBulldogs(getRandomBulldogs(allBulldogs, count));
  }, intervalMinutes * 60 * 1000);
  
  // Return cleanup function
  return () => clearInterval(rotationInterval);
};
