import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../Controller/UserController.js";

const router = express.Router();

// Get all users
router.get("/", getUsers);

// Add User
router.post("/", addUser);

// get one user by ID
router.get("/:id", getUser);

// Update User
router.patch("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;
