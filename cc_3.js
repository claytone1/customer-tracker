// Customer Records Tracker with visible output

// Step 1 & 2: Create customers array with at least three customer objects
let customers = [
  {
    name: "Alice Johnson",
    email: "alice.j@example.com",
    purchases: ["Yoga Mat", "Protein Powder", "Running Shoes"]
  },
  {
    name: "Brian Smith",
    email: "brian.smith@example.com",
    purchases: ["Basketball", "Water Bottle"]
  },
  {
    name: "Catherine Lopez",
    email: "cat.lopez@example.com",
    purchases: ["Laptop Stand", "Wireless Mouse"]
  }
];

// Step 3: Add a new customer using .push()
customers.push({
  name: "David Lee",
  email: "dlee@example.com",
  purchases: ["Smartwatch"]
});

// Remove the first customer using .shift()
customers.shift(); // removes Alice

// Step 4: Update the email of Brian Smith (now index 0)
customers[0].email = "brian.newemail@example.com";

// Add a new purchase to Catherine Lopez (now index 1)
customers[1].purchases.push("Ergonomic Chair");

// Step 5: Loop through customers and display their info in the DOM
const outputDiv = document.getElementById("output");

customers.forEach((customer) => {
  const customerInfo = document.createElement("div");
  customerInfo.innerHTML = `
    <h3>${customer.name}</h3>
    <p>Email: ${customer.email}</p>
    <p>Total Purchases: ${customer.purchases.length}</p>
    <hr>
  `;
  outputDiv.appendChild(customerInfo);
});
