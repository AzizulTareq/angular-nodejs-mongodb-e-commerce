import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserById,
  logoutUser
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser)
router.post("/login", authUser);
router.route("/:id").get(protect, admin, getUserById);
router.post('/logout', logoutUser);

export default router;
