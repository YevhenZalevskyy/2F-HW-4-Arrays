const students = ['Божена', 'Данило', 'Володимир', 'Микола', 'Соломія', 'Зоряна'];
const themes = ['Variables and types', 'Cycles and branching', 'Functions'];
const marks = [4, 5, 3, 4, 5, 5];

function getPairs(arr) {
  const arrSort = [...arr].sort();
  const pairs = [];
  for (let i = 0; i < arrSort.length; i=i+2) {
    pairs.push([arrSort[i], arrSort[i+1]]);
  }
  return pairs;
}
const pairs = getPairs(students);

function addThemes(arr1, arr2) {
  const pairsThemes = [];
  for (let i = 0; i < arr2.length; i++) {
    pairsThemes[i] = [...arr1[i]].join(' і ').split();
    pairsThemes[i].push(arr2[i])
  }
  return pairsThemes;
}
const pairsThemes = addThemes(pairs, themes);



console.log(pairs);
console.log(pairsThemes);
