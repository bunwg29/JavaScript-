//This code demonstrate about fetch method use in Js and url is not correct
fetch('https://api.example.com/data') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming JSON data
  })
  .then(data => {
    console.log(data);
    // Process the data received from the server
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });