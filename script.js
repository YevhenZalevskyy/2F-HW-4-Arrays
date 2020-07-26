const students = ['Божена', 'Данило', 'Володимир', 'Микола', 'Соломія', 'Зоряна'];
const themes = ['Variables and types', 'Cycles and branching', 'Functions'];
const marks = [4, 5, 3, 4, 5, 5];

function getPairs(arr) {
  arr = [...arr].sort();
  const pairs = [];
  for (let i = 0; i < arr.length; i=i+2) {
    pairs.push([arr[i], arr[i+1]]);
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

function studentMark (arr1, arr2) {
  arr1 = [...arr1];
  arr2 = [...arr2];
  for (let i = 0; i < arr2.length; i++) {
    arr1[i] = arr1[i].split();
    arr1[i].push(arr2[i]);
  }
  return arr1;
}
const studentsMarks = studentMark(students, marks);

console.log(pairs);
console.log(pairsThemes);
console.log(studentsMarks);
