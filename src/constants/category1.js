const intakeColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];
 
export const activityCategories = [
  { activity: 'Sedentary', height: 0, age:0,weight:0,water:750, color: intakeColors[0] },
  { activity: 'Light action',age:0, height: 0,weight:0,water:900,color: intakeColors[1] },
  { activity: 'Light', height: 0,age:0,weight:0,water:1050,color: intakeColors[2] },
  { activity: 'Moderately active', height: 0,age:0,weight:0,water:1500, color: intakeColors[3] },
  { activity: 'Active', height: 0,age:0,weight:0,water:1750,color: intakeColors[4] },
  { activity: 'Very active', height: 0,age:0,weight:0,water:2000, color: intakeColors[5] },
  { activity: 'Extremely active', height: 0,age:0,weight:0,water:2500, color: intakeColors[6] },
];
export const weatherCategories = [
  { weather: 'Sunny', height: 0, age:0,weight:0,water:750, color: intakeColors[0] },
  { weather: 'Cloudy',age:0, height: 0,weight:0,water:900,color: intakeColors[1] },
  { weather: 'Rainy', height: 0,age:0,weight:0,water:1050,color: intakeColors[2] },
  { weather: 'Moist', height: 0,age:0,weight:0,water:1500, color: intakeColors[3] },
  { weather: 'Overcast', height: 0,age:0,weight:0,water:1750,color: intakeColors[4] },
  { weather: 'Drizzle', height: 0,age:0,weight:0,water:2000, color: intakeColors[5] },
  { weather: 'Stormy', height: 0,age:0,weight:0,water:2500, color: intakeColors[6] },
];
export const moodCategories = [
  { mood: 'Cheerful', height: 0, age:0,weight:0,water:750, color: intakeColors[0] },
  { mood: 'Reflective',age:0, height: 0,weight:0,water:900,color: intakeColors[1] },
  { mood: 'Gloomy', height: 0,age:0,weight:0,water:1050,color: intakeColors[2] },
  { mood: 'Melancholy', height: 0,age:0,weight:0,water:1500, color: intakeColors[3] },
  { mood: 'Idyllic', height: 0,age:0,weight:0,water:1750,color: intakeColors[4] },
  { mood: 'Whimsical', height: 0,age:0,weight:0,water:2000, color: intakeColors[5] },
  { mood: 'Romantic', height: 0,age:0,weight:0,water:2500, color: intakeColors[6] },
];
export const fitnessCategories = [
  { fitness: 'Fit', height: 0, age:0,weight:0,water:750, color: intakeColors[0] },
  { fitness: 'Skinny',age:0, height: 0,weight:0,water:900,color: intakeColors[1] },
  { fitness: 'Fat', height: 0,age:0,weight:0,water:1050,color: intakeColors[2] },
  { fitness: 'Muscular', height: 0,age:0,weight:0,water:1500, color: intakeColors[3] },
  { fitness: 'Aerobatic', height: 0,age:0,weight:0,water:1750,color: intakeColors[4] },
]; 
export const resetCategories = () => {
    fitnessCategories.forEach((c) => c.height = 0);
    moodCategories.forEach((c) => c.age = 0);
    weatherCategories.forEach((c) => c.weight = 0);
    activityCategories.forEach((c) => c.weight = 0);
};