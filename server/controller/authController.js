
import jwt from "jsonwebtoken";

export const verifyUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All inputs are required" });
    }
    
    const token = jwt.sign({ id: email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    if (email=="portfoliolive@gmail.com" && password=="123456789") {
        res.status(200).json({ message: "Login Successfull", token });
    } else {   
        res.status(400).json({ message: "Login Failed" });
    }
    
  } catch (error) {
    console.log(error);
        res.status(500).json({ message: "Login Failed"});
  }
};