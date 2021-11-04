import { transformJson, showJSON } from '../../docs/tu13/exercise';

describe('JSON test suite', () => {
  const json = `{
      "year": 2021,
      "city": "Gandia",
      "school": "IES Maria Enriquez",
      "active": true,
      "numberOfStudents": 12,
      "teacher": {
        "name": "Xavi",
        "age": 46,
        "car": {
          "brand": "Seat",
          "model": "Leon",
          "year": 2015
        }
      },
      "students": [
        {
          "name": "student 1",
          "age": 21,
          "male": false,
          "hobbies": ["reading", "travel", "playing football"]
        },
        {
          "name": "student 2",
          "age": 32,
          "male": true,
          "hobbies": ["cooking", "gaming", "theater"]
        }
      ]
    }`;

  it('validates json transformation', () => {
    const daw = transformJson(json);

    expect(daw.teacher.age).toBeUndefined();
    expect(daw.province).toBe('Valencia');
    expect(daw.students.length).toBe(3);
  });

  it('validates showJSON', () => {
    const daw = transformJson(json);
    console.log = jest.fn();
    showJSON(daw);
    expect(console.log).toHaveBeenCalled();
  });
});
