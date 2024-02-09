import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserById,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser)
router.post("/login", authUser);
router.route("/:id").get(protect, admin, getUserById);

export default router;
