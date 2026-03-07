import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.resolve(__dirname, "../../data/users.json");
const DATA_DIR = path.resolve(__dirname, "../../data");

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function ensureDBFile() {
  await ensureDataDir();
  try {
    await fs.access(DB_PATH);
  } catch {
    await fs.writeFile(DB_PATH, JSON.stringify({ users: [] }, null, 2));
  }
}

export async function getAllUsers() {
  await ensureDBFile();
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const parsed = JSON.parse(data);
    return parsed.users || [];
  } catch (error) {
    console.error("Error reading users:", error);
    return [];
  }
}

export async function findUserByEmail(email) {
  const users = await getAllUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export async function findUserById(id) {
  const users = await getAllUsers();
  return users.find((u) => u.id === id);
}

export async function createUser(userData) {
  await ensureDBFile();
  const users = await getAllUsers();

  const existingUser = users.find(
    (u) => u.email.toLowerCase() === userData.email.toLowerCase()
  );
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const newUser = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    ...userData,
  };

  users.push(newUser);
  await fs.writeFile(DB_PATH, JSON.stringify({ users }, null, 2));

  return newUser;
}

export async function updateUser(id, updates) {
  await ensureDBFile();
  const users = await getAllUsers();
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users[userIndex] = {
    ...users[userIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  await fs.writeFile(DB_PATH, JSON.stringify({ users }, null, 2));
  return users[userIndex];
}

export function getUserPublicProfile(user) {
  const { password, ...profile } = user;
  return profile;
}
