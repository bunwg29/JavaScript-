function fetchData(url, callback) {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const data = 'This is some data!';
      callback(data);
    }, 2000); // Delay for 2 seconds
  }
  
  fetchData('https://example.com/data', (data) => {
    console.log(data); // Output: This is some data! after 2 seconds
  });