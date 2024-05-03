// script.js
window.onload = function() {
    showSection('project-creator');
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('.book-info, .author-info');
    const buttons = document.querySelectorAll('.btn');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    buttons.forEach(button => {
        if (button.id === sectionId + 'Btn') {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}
