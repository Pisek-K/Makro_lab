const prisma = require("../config/prisma");
const createError = require("../utils/createError");

exports.login = (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      return createError(400, "User should be provided");
    }

    if (typeof password !== "string" && password.length < 8) {
      return createError(400, "Password incorrect format");
    }
    res.json({ message: "Login" });
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return createError(400, "Email to be provided");
    }

    if (typeof email !== "string") {
      return createError(400, "Email should be string");
    }

    if (!email.includes("@")) {
      return createError(400, "Incorrect fornat");
    }

    const isEmailExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (isEmailExist) {
      return createError(400, "Email already exist");
    }

    const newUser = await prisma.user.create({
      data:{
        email,
      },
    })

  } catch (err) {
    next(err);
  }

  res.json({ message: "Register" });
};

exports.forgetPassword = (req, res, next) => {
  res.json({ message: "Forget-Password" });
};

exports.resetPassword = (req, res, next) => {
  res.json({ message: "Reset-Password" });
};
