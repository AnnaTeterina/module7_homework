function checkProp(objKeyName, obj) {
    return (objKeyName in obj);
}

const cityMoscow = {
  name: 'Moscow',
  population: 13010112,
  founded: 1147
}

console.log(checkProp('founded', cityMoscow));  // true
console.log(checkProp('area', cityMoscow));  // false