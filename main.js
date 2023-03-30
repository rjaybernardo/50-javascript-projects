const panels = document.querySelectorAll(".panel");

// console.log(panels[0]);

panels.forEach((panel) => {
    // console.log(panel);
    panel.addEventListener("click", () => {
        removeActiveClasses();
        // console.log("Image clicked");
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};
