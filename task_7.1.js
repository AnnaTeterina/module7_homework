function cityInfo(city) {
  for (let key in city) {
    console.log(key+ ': ' + city[key]);
  }
}

const cityMoscow = {
  name: 'Moscow',
  population: 13010112,
  founded: 1147
}

cityInfo(cityMoscow);