const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      fetch('https://dummyjson.com/products')
        .then(response => {
          if (!response.ok) {
            if (response.status === 404) {
              reject(new Error('Resource not found'));
            } else {
              reject(new Error('Network response was not ok'));
            }
          }
          return response.json();
        })
        .then(data => {
          resolve(data.products); 
        })
        .catch(error => {
          reject(error); 
        });
    });
  };
  
  fetchProducts()
    .then(products => {
      products.forEach(product => {
        console.log(product.title);
      });
    })
    .catch(error => {
      if (error.message === 'Resource not found') {
        console.error('Resource not found on server.');
      } else {
        console.error('Fetch error:', error);
      }
    });