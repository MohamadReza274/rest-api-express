import express from "express";
import UserSchema from "./UserSchema.js";
import {
  getAllUsers,
  addNewUser,
  deleteUserById,
  getUserById,
  updateUserById,
} from "../Model/UserModel.js";

// get all users
const getUsers = (req, res) => {
  const users = getAllUsers();
  if (users.length === 0) {
    return res.status(404).json({ msg: "There is no user" });
  }
  res.status(200).json(users);
};

// get user by ID
const getUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const user = getUserById(userId);

  if (!user) {
    return res.status(404).json({ msg: `User with id ${userId} not found` });
  }
  res.status(200).json(user);
};

// add new user
const addUser = (req, res) => {
  const newUser = req.body;

  const validation = UserSchema.safeParse(newUser);

  if (!validation.success) {
    return res.status(400).json(validation.error.format());
  }

  const added = addNewUser(newUser);

  res.status(201).json({ msg: "User successfully added", newUser: added });
};

// update part of a user
const updateUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;
  const users = getAllUsers();

  const validation = UserSchema.safeParse(updatedUser);

  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.format() });
  }

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ msg: `User with id ${userId} not found` });
  }

  const updated = updateUserById(userId, updatedUser);

  res
    .status(201)
    .json({ msg: "User successfully updated", UpdatedUser: updated });
};

const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const users = getAllUsers();

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ msg: `User with id ${userId} not found` });
  }

  const deleted = deleteUserById(userId);

  res.status(201).json({
    msg: `User with id ${userId} successfully deleted`,
    DeletedUser: deleted,
  });
};

export { getUsers, getUser, deleteUser, updateUser, addUser };
