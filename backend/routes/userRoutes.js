import express from "express";
import { registerUser } from "../controllers/userControllers.js";
import { authUser } from "../controllers/userControllers.js";
import { allUsers } from "../controllers/userControllers.js";
import protect from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.route("/login").post(authUser);

export default router;
