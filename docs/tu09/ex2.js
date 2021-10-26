export default function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
