const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query) {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log(data);

      searchInput.value = "";
    } catch (error) {
      console.error("Fetch error:", error);
    }
  } else {
    console.warn("Please enter a show name to search.");
  }
});
