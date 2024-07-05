function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        const data = 'This is some data!';
        resolve(data);
      }, 2000); // Delay for 2 seconds
    });
  }
  
  fetchDataPromise('https://example.com/data')
    .then((data) => {
      console.log(data); // Output: This is some data! after 2 seconds
    })
    .catch((error) => {
      console.error(error);
    });