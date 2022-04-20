const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From my own own own smarty Pant!!");
});

const users = [
  {
    id: 1,
    name: "Shabana",
    email: "shaban@gmail.com",
    phone: "0178888888",
  },
  {
    id: 2,
    name: "shabnur",
    email: "shabnur@gmail.com",
    phone: "0178888888",
  },
  {
    id: 3,
    name: "Bobita",
    email: "Bobita@gmail.com",
    phone: "0178888888",
  },
  {
    id: 4,
    name: "Ruposhi",
    email: "Ruposhi@gmail.com",
    phone: "0178888888",
  },
  {
    id: 5,
    name: "popi",
    email: "popi@gmail.com",
    phone: "0178888888",
  },
  {
    id: 6,
    name: "sabila nur",
    email: "sabila@gmail.com",
    phone: "0178888888",
  },
  {
    id: 7,
    name: "shuchonda",
    email: "shuchonda@gmail.com",
    phone: "0178888888",
  },
];
app.get("/users", (req, res) => {
  console.log("query", req.query);

  // filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((u) => u.name.toLowerCase().includes(search));
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "banana", "Nuts"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour sour fazle flavour");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
