// Load preferences from local storage
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');
    
    // Check if there are saved preferences in local storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedListStyle = localStorage.getItem('listStyle') || 'default';

    // Apply saved preferences
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
    document.body.classList.add(savedListStyle);
    listStyleSelect.value = savedListStyle;

    // Dynamically add list items
    const list = document.getElementById('dynamic-list');
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        list.appendChild(li);
    }

    // Event listeners for preferences panel
    themeSelect.addEventListener('change', (e) => {
        const theme = e.target.value;
        document.body.classList.remove('light', 'dark', 'blue');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    });

    listStyleSelect.addEventListener('change', (e) => {
        const listStyle = e.target.value;
        document.body.classList.remove('default', 'ordered', 'unordered');
        document.body.classList.add(listStyle);
        localStorage.setItem('listStyle', listStyle);
    });
});
