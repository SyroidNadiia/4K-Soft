const students = [
  { name: 'John', age: 21, grade: 90 },
  { name: 'Jane', age: 20, grade: 85 },
  { name: 'Alice', age: 22, grade: 90 },
  { name: 'Bob', age: 20, grade: 80 },
  { name: 'David', age: 21, grade: 85 },
];

// Очікуваний результат:
// [
//   { name: 'Alice', age: 22, grade: 90 },
//   { name: 'John', age: 21, grade: 90 },
//   { name: 'David', age: 21, grade: 85 },
//   { name: 'Jane', age: 20, grade: 85 },
//   { name: 'Bob', age: 20, grade: 80 }
// ]

const sortStudents = students => {
  const sortedStudents = [...students].sort((a, b) => {
    if (a.grade !== b.grade) {
      return b.grade - a.grade; 
    } else if (a.age !== b.age) {
      return b.age - a.age; 
    } else {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }
  });
  console.log(sortedStudents);
  return sortedStudents;
};

sortStudents(students);
