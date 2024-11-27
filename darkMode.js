// Create a new file called darkMode.js
function initDarkMode() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize dark mode on page load
initDarkMode();

/**
 * 
 * @param {IntersectionObserverEntry} entries 
 * @param {IntersectionObserver} observer 
 */
function handleIntersection(entries, observer) {
     // entries = array of elements being observed
    // observer = the IntersectionObserver instance
    entries.forEach(entry => {
        if (entry.isIntersecting) { // if element is visible
            entry.target.classList.add('visible'); // add class
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1 // trigger when 10% visible
})

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});