document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading animation after 1 second
    setTimeout(function() {
        var loadingContainer = document.querySelector('.loading-container');
        loadingContainer.style.display = 'none';
    }, 1000); // 1 second
});
