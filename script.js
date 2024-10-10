document.getElementById('imageUpload').addEventListener('change', previewImage);
document.getElementById('enhanceBtn').addEventListener('click', enhanceImage);

function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    const previewImage = document.getElementById('previewImage');
    previewImage.src = e.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

function enhanceImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const image = document.getElementById('previewImage');

  image.onload = function() {
    // Configura el tamaño del canvas para el reescalado (doblando tamaño como ejemplo)
    canvas.width = image.width * 2;
    canvas.height = image.height * 2;

    // Mejora de calidad (reescalado)
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Convierte el canvas a imagen descargable
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = canvas.toDataURL('image/png');
    downloadLink.style.display = 'block';
  };

  if (image.src) {
    image.onload();
  }
}
