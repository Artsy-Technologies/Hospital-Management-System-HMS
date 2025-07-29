import prisma from "../DB/db.config.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Role-based login
export const login = async (req, res) => {
  const { username, password, role } = req.body;
  console.log(username);
  try {
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    console.log("User");
    // Check role
    if (user.role !== role) {
      return res.status(403).json({ error: `Unauthorized: Not a ${role}` });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    console.log("User:", user);
    console.log("JWT_SECRET:", process.env.JWT_SECRET);
    console.log("Token:", token);
    return res.json({ token, msg: "login succesfull" });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

//Admin : create doctor or staff
export const createUser = async (req, res) => {
  const { username, password, role } = req.body;

  console.log("Received request body:", req.body);
  // Validate role

  if (!["doctor", "staff", "admin", "patient"].includes(role)) {
    return res
      .status(400)
      .json({ error: "Invalid role. Allowed: doctor, staff, admin" });


  }
  try {
    // Check if username already exists
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists." });
    }

    // Create new user (storing password in plaintext, NOT RECOMMENDED)
    const newUser = await prisma.user.create({
      data: { username, password, role },
    });

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error); // Log the error
    return res.status(500).json({ error: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // make sure `req.user` exists (authentication middleware!)
    console.log("backend id", userId)
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }


    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {

        username: true,
        role: true,
        id: true,
        // add other fields if needed
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      username: user.username,
      role: user.role,
      id: user.id,
      message: "Profile fetched successfully",
    });
  } catch (error) {
    console.error("getProfile error:", error); // **log the actual error**
    res.status(500).json({ error: "Server error" });
  }
};
