import { Router } from "express";

export const authRouter = Router();

authRouter.get("/login", (req, res) => {
  res.send("login auth!");
});

authRouter.get("/register", (req, res) => {
  res.send("register auth!");
});
