// Question 3:

function displayProductDetails(product) {
  console.log("Make:", product.make);
  console.log("Model:", product.model);
  console.log("Price:", product.price);
}

const newProduct = {
  make: "Z-Corp",
  model: "SZ-201",
  price: 19.99,
};

displayProductDetails(newProduct);
