// selects all elements with class panel ad puts it on a NodeList like a list of array
const panels = document.querySelectorAll(".panel");

// console.log(panels[0]); // displays the first panel
// console.log(panels); // displays the list of panels

// Loop a NodeList using a forEach method
panels.forEach((panel) => {
    // loop thru each panel and show each panel
    // console.log(panel);

    // add event listener on each panel and something happens when clicked using a callback
    panel.addEventListener("click", () => {
        // removes the active class on ALL the panels
        removeActiveClasses();
        // console.log("Image clicked");

        // adds a class active to the panel that has been clicked
        panel.classList.add("active");
    });
});

// loop thru all the panels and remove the active class
const removeActiveClasses = () => {
    panels.forEach((panel) => {
        // remove the active class from class panel
        panel.classList.remove("active");
    });
};
