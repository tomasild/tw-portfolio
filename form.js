const $form = document.getElementById("contact-form");
const $modal = document.getElementById("my-modal");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this);
    try {
        const response = await fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });
        const responseData = await response.json(); // Obtener los datos de la respuesta en formato JSON
        if (response.ok) {
            $form.reset();
            $modal.classList.add("block");
        } else {
            throw new Error(responseData.error || "Error al enviar el formulario. Por favor, intenta nuevamente.");
        }
    } catch (error) {
        console.error(error);
        alert("Se produjo un error al enviar el formulario. Por favor, intenta nuevamente.");
    }
}


// Limpieza para prevenir scripts malicioso

function limpiarHTML(texto) {
    const etiquetasPermitidas = ['p', 'br', 'a']; // Lista de etiquetas permitidas
    const parser = new DOMParser();
    const documento = parser.parseFromString(texto, 'text/html');
    const elementos = documento.querySelectorAll('*');

    elementos.forEach(elemento => {
      if (!etiquetasPermitidas.includes(elemento.tagName.toLowerCase())) {
        elemento.parentNode.removeChild(elemento);
      }
    });

    return documento.body.innerHTML;
  }

  const form = document.getElementById('contact-form');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function (event) {
    const cleanedMessage = limpiarHTML(messageInput.value);
    messageInput.value = cleanedMessage;
  });
