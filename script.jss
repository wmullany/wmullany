// Grab the theme toggle button and body element for manipulation
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Event listener to toggle between light and dark modes
themeToggleButton.addEventListener('click', () => {
    // Toggle class on the body to switch themes
    body.classList.toggle('dark');
    body.classList.toggle('light');
    
    // Update button text based on current theme for better UX
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Set default mode to light on initial load for consistent user experience
if (!body.classList.contains('dark')) {
    body.classList.add('light');
}
