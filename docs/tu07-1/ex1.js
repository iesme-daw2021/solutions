const createUser = () => {
  const user = {};
  user.name = 'John';
  user.surname = 'Smith';
  user['name'] = 'Pete';
  delete user.name;

  return user;
};

export default createUser;
