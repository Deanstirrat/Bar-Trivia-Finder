const searchPlaceholderValues = () => {
    const cities = [  "New York",  "Los Angeles",  "Chicago",  "Houston",  "Phoenix",  "Philadelphia",  "San Antonio",  "San Diego",  "Dallas",  "San Jose",  "Austin",  "Jacksonville",  "Fort Worth",  "Columbus",  "San Francisco",  "Charlotte",  "Indianapolis",  "Seattle",  "Denver",  "Washington",  "Boston",  "El Paso",  "Detroit",  "Nashville",  "Portland",  "Memphis", "Istanbul",  "Moscow",  "London",  "St. Petersburg",  "Berlin",  "Madrid",  "Kyiv",  "Rome",  "Paris",  "Bucharest",  "Minsk",  "Vienna",  "Kiev",  "Sofia",  "Brussels",  "Hamburg",  "Munich",  "Milan",  "Prague",  "Warsaw",  "Budapest",  "Barcelona",  "Cologne",  "Stockholm",  "Zurich"];
    return cities[Math.floor(Math.random()*(cities.length-1))];
}

export default searchPlaceholderValues;