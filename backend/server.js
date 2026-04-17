const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let customers = [
  { id: 1, name: "Rahul", balance: 5000, status: "active" },
  { id: 2, name: "Priya", balance: 8000, status: "active" }
];

let transactions = [
  { id: 1, user: "Rahul", type: "deposit", amount: 2000 },
  { id: 2, user: "Priya", type: "withdraw", amount: 1000 }
];

app.get("/", (req, res) => {
  res.send("Net Banking Backend Running");
});

app.get("/api/customers", (req, res) => {
  res.json(customers);
});

app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

app.post("/api/transfer", (req, res) => {
  const { user, amount } = req.body;
  transactions.push({
    id: transactions.length + 1,
    user,
    type: "transfer",
    amount
  });
  res.json({ message: "Transfer successful" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));