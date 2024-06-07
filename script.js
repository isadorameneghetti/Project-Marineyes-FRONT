document.getElementById('toggleAnimations').addEventListener('change', function() {
    var elements = document.querySelectorAll('.wave');
    elements.forEach(function(element) {
        if (this.checked) {
            element.classList.add('pause-animation');
        } else {
            element.classList.remove('pause-animation');
        }
    }.bind(this));
});