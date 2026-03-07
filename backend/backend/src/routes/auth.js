import { Router } from "express";
import {
  findUserByEmail,
  findUserById,
  createUser,
  updateUser,
  getUserPublicProfile,
} from "../utils/database.js";
import {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
  extractToken,
} from "../utils/auth.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.post("/auth/signup", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      age,
      gender,
      city,
      chronicConditions,
      medications,
      allergies,
      emergencyContact,
      caregiverContact,
    } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Missing required fields" });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, error: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ success: false, error: "Password must be at least 6 characters" });
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Email already registered" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age: age ? parseInt(age) : null,
      gender: gender || null,
      city: city || null,
      chronicConditions: chronicConditions || null,
      medications: medications || null,
      allergies: allergies || null,
      emergencyContact: emergencyContact || null,
      caregiverContact: caregiverContact || null,
    });

    const token = generateToken(newUser.id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: getUserPublicProfile(newUser),
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/auth/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Email and password required" });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid email or password" });
    }

    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid email or password" });
    }

    const token = generateToken(user.id);

    res.json({
      success: true,
      message: "Signed in successfully",
      token,
      user: getUserPublicProfile(user),
    });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/auth/me", authMiddleware, async (req, res) => {
  try {
    const user = await findUserById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    res.json({
      success: true,
      user: getUserPublicProfile(user),
    });
  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.put("/auth/profile", authMiddleware, async (req, res) => {
  try {
    const updates = req.body;
    delete updates.email;
    delete updates.password;
    delete updates.id;
    delete updates.createdAt;

    const updatedUser = await updateUser(req.userId, updates);

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: getUserPublicProfile(updatedUser),
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/auth/logout", authMiddleware, (_req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

export const authRouter = router;
