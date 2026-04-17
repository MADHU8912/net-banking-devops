import React from "react";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Net Banking DevOps Project</h1>
      <p>Frontend deployed successfully on Render.</p>

      <h2>Customer Panel</h2>
      <ul>
        <li>View Balance</li>
        <li>Transfer Money</li>
        <li>Transaction History</li>
      </ul>

      <h2>Employee Panel</h2>
      <ul>
        <li>View Customers</li>
        <li>Approve Accounts</li>
        <li>Manage Transactions</li>
      </ul>
    </div>
  );
}

export default App;