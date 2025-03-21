document.getElementById("locationButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    let mapContainer = document.getElementById("mapContainer");

    // Replace static image with an interactive map
    mapContainer.innerHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0412859270164!2d-80.017864684594!3d40.43972247936139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f2266c0d6405%3A0xa2a763b4c26c6b08!2sDuquesne%20Incline!5e0!3m2!1sen!2sus!4v1618241344371!5m2!1sen!2sus" 
            width="100%" 
            height="200px" 
            style="border-radius: 5px;" 
            allowfullscreen="" 
            loading="lazy">
        </iframe>
    `;
});