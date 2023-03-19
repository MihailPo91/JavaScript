function attachGradientEvents() {
    const result = document.getElementById("result");
    const gradient = document.getElementById("gradient");

    gradient.addEventListener("mousemove", (event) => {

        const percentage = Math.floor((event.offsetX / gradient.clientWidth) * 100);

        result.textContent = percentage + "%";
    });
}