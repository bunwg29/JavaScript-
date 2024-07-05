async function fetchDataAsync(url) {
    // Simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 seconds
    return 'This is some data!';
  }
  
  fetchDataAsync('https://example.com/data')
    .then((data) => {
      console.log(data); // Output: This is some data! after 2 seconds
    })
    .catch((error) => {
      console.error(error);
    });