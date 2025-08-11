const icons = document.querySelectorAll(".socials-icons a");

icons.forEach(function(icon){

    //If icon.style.color is empty (no inline color is set), then use 'black' as the default.
    const originalColor = icon.style.color || 'black';
    const hoverColor = icon.getAttribute('icon-color');

    icon.addEventListener("mouseover", function(){
        icon.style.color = hoverColor;
    });

    icon.addEventListener("mouseout", function(){
        icon.style.color = originalColor;
    });

});