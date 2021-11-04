export function transformJson(json) {
  const daw = JSON.parse(json);
  const student = {
    name: 'student 3',
    age: 22,
    male: true,
    hobbies: ['outdoor activities', 'playing an instrument', 'writing'],
  };

  delete daw.teacher.age;
  daw.students.push(student);
  daw.province = 'Valencia';

  return daw;
}

export function showJSON(json) {
  console.log(JSON.stringify(json));
}
