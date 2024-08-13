import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();

    const user2 = await User.findOne({ email });

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: user2._id,
        fullname: user2.fullname,
        email: user2.email,
      },
    });
  } catch (err) {
    console.log("Error is: ", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const compPassword = await bcryptjs.compare(password, user.password); // comparing passwords

    if (!compPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("Error: ", err.message);
  }
};
