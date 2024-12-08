document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach((item, index) => {
        // Define um tempo de atraso para cada item
        setTimeout(() => {
            item.classList.add("visible");
        }, index * 300); // 300ms de intervalo entre cada item
    });
});