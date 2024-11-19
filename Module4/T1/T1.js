document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the page from reloading when you submit the form

  const query = document.getElementById('query').value.trim(); // Get the value typed by the user

  if (query) {
    // Make an API request to the TVMaze API to search for TV shows
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => response.json()) // Convert the response into JSON format
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Handle any errors
      });
  } else {
    console.log('Please enter a TV series name'); // If no input is given
  }
});
