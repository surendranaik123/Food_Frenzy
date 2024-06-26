import UserModel from "../models/UserData.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
const secretKey = 'yourSecretKey'; // Replace with your actual secret key


class userController {
 

  static createUser = async (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;
  
    try {
      if (!firstName || !lastName || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      // Check if password and confirmPassword match
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
  
      // Create a new user instance with hashed password
      const newUser = new UserModel({
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      res.status(201).json(savedUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({ message: "Failed to create user", error: error.message });
    }
  };

  static getAllUsers = async (req, res) => {
    try {
      const allUsers = await UserModel.find({});
      if (allUsers) {
        return res.status(200).json(allUsers);
    
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  }


  static updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getUpdatedData = await UserModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json(getUpdatedData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getDeletedData = await UserModel.findByIdAndDelete(id);
        return res.status(200).json(getDeletedData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

 
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });

      res.status(200).json({ token });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Failed to log in", error: error.message });
    }
  }
        
static logout = async (req, res) => {
  res.clearCookie('token'); // Clear the token or session cookie
  res.sendStatus(200);
}


static getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const getSingleData = await UserModel.findById(id);
      return res.status(200).json(getSingleData);
    } else {
      return res.status(400).json({ message: "Id not found" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};


}


export default userController;
