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
