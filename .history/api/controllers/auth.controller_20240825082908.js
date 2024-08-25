import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

//REGISTER
export const register = async (req, res) => {
    const {username, email, password} = req.body;
    try {
        // HASH THE PASSWORD
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        console.log(hashedPassword);
    
        // CREATE A NEW USER AND SAVE TO DB
        const newUser = await prisma.user.create({
          data: {
            username,
            email,
            password: hashedPassword,
          },
        });
    
        console.log(newUser);
    
        res.status(201).json({ message: "User created successfully" });
      } 
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user!" });
    }
    
};

//LOGIN
export const login = async (req, res) => {
    res.send("Login route");
};

//LOGOUT
export const logout = async (req, res) => {
    res.send("Logout route");
};