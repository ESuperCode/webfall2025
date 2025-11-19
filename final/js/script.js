function show(button, div) {
    const toggleButton = document.getElementById(button);
    const targetElement = document.getElementById(div);
    toggleButton.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(targetElement).display;
    if (currentDisplay === 'inline') {    
        targetElement.style.display = 'block';
        
    } else {    
        targetElement.style.display = 'inline';
    
    }
    });
}
show('toggleButton', '1Dropdown');
