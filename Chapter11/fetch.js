fetch("https://dummyjson.com/products")
  .then((response) => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Resource not found");
      } else {
        throw new Error("Network response was not ok");
      }
    }
    return response.json();
  })
  .then((data) => {
    const products = data.products;
    products.forEach((product) => {
      console.log(product.title);
    });
  })
  .catch((error) => {
    if (error.message === "Resource not found") {
      console.error("Resource not found on server.");
    } else {
      console.error("Fetch error:", error);
    }
  });
