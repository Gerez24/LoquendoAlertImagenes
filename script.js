// Función para mostrar la vista previa de la imagen cargada
document.getElementById("imageUpload").addEventListener("change", function(event) {
    const imageFile = event.target.files[0];
    const previewImage = document.getElementById("previewImage");
  
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
        };
        reader.readAsDataURL(imageFile);
    }
});

// Función para mejorar la imagen usando Claid AI
async function enhanceImageWithClaidAPI() {
    const imageFile = document.getElementById("imageUpload").files[0];
  
    if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
    
        const response = await fetch("https://api.claid.ai/v1/enhance", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 810c8b09b5a64b1d98c56bfc7e2f99b3" // API Key
            },
            body: formData
        });

        if (response.ok) {
            const result = await response.json();
            const enhancedImageUrl = result.data.output_url;
      
            // Mostrar la imagen mejorada
            const enhancedImage = document.getElementById("enhancedImage");
            enhancedImage.src = enhancedImageUrl;
        } else {
            console.error("Error al mejorar la imagen");
        }
    } else {
        alert("Por favor, sube una imagen antes de mejorarla.");
    }
}

// Añadir evento al botón de mejorar imagen
document.getElementById("enhanceButton").addEventListener("click", enhanceImageWithClaidAPI);
