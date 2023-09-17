const { Router } = require("express");
const { passPort } = require("../oAuths/GoogleOAuth");
const { UserModel } = require("../models/User.model");
const { userLoginSuccess } = require("../controllers/Users.controllers");

const userRouter = Router();

userRouter.get(
  "/login",
  passPort.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

userRouter.get(
  "/login/success",
  passPort.authenticate("google", {
    failureMessage: "Failed to Signup with your account",
    failureRedirect: "http://localhost:3000",
  }),
  async(req, res) => {
    const userData={}
    userData.name=req?.user?._json?.name
    userData.image=req?.user?._json?.picture
    userData.email=req?.user?._json?.email
    userLoginSuccess(req,res,userData);
  }
);



userRouter.get("/logout", (req, res) => {
  req.logout(() => {});
  req.logOut(() => {});
  res.json({ msg: req.body });
});

module.exports = {
  userRouter,
};
