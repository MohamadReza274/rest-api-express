const users = [
  { id: 1, name: "ahmad", email: "ahmad@gmail.com" },
  { id: 2, name: "fahim", email: "fahim@gmail.com" },
  { id: 3, name: "Mohamad", email: "mohamad@gmail.com" },
];

const getAllUsers = () => users;

const getUserById = (userId) => users.find((user) => user.id === userId);

const deleteUserById = (userId) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    return deletedUser;
  }
  return null;
};

const updateUserById = (userId, data) => {
  let updatedUser = null;
  users.map((user) => {
    if (user.id === userId) {
      updatedUser = { id: userId, ...data };
      return data;
    }
    return user;
  });
  return updatedUser;
};

const addNewUser = (user) => {
  const newUser = { id: users.length + 1, ...user };
  users.push(newUser);
  return newUser;
};

export { getAllUsers, getUserById, deleteUserById, updateUserById, addNewUser };

export default getAllUsers;
