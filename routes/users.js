import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
  },
];

router.get("/", (req, res) => {
  const getUsers = users;
  res.status(201).json({
    data: getUsers,
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`${user.first_name} has been added to database`).status(201);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((item) => item?.id === id);
  res.send(foundUser || { message: "user not found" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((item) => item?.id != id);
  res.send(`user id${id} removed successfully`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((item) => item.id == id);
  Object.keys(req.body).forEach((key) => {
    if (user.hasOwnProperty(key)) {
      user[key] = req.body[key];
    }
  });

  res.send("user updated successfully");
});


export default router;
