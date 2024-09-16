document.addEventListener('DOMContentLoaded', () => {
    const fetchDataButton = document.getElementById('fetchData');
    const dataDiv = document.getElementById('data');

    fetchDataButton.addEventListener('click', () => {
        // URL for the Dog API
        const apiUrl = 'https://dog.ceo/api/breeds/image/random';

        // Clear previous data or error message
        dataDiv.innerHTML = '';

        // Fetch data from API
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    // Display the dog image
                    const img = document.createElement('img');
                    img.src = data.message;
                    img.alt = 'Random Dog';
                    dataDiv.appendChild(img);
                } else {
                    throw new Error('API response was not successful');
                }
            })
            .catch(error => {
                // Display error message
                dataDiv.innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
            });
    });
});
