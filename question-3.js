// Question 3:

function displayProductDetails({ make, model, price }) {
  console.log('Make:', make);
  console.log('Model:', model);
  console.log('Price:', price);
}

const newProduct = {
  make: 'Z-Corp',
  model: 'SZ-201',
  price: 19.99,
};

displayProductDetails(newProduct);
