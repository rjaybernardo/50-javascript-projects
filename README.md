Expanding Cards

- Add a background image and heading to each panel
  - inline styling for background image
- Flexbox to align everything
- Add javascript
  - When a panel is clicked add a class of "active"
  - Then expands with css transition

Javascript for event listeners
CSS transitions for smooth effect

Heading will come in until the card is fully expanded

- use of delay in transition

---

We use:

- Use of Flexbox
- Inline style for background image for each panel
- Position relative for panel and position absolute for h3
- transition for animation
- use of opacity to hide a panel
- use of media query

---

Panel when clicked:

- .panel
  - it will widen
- .panel h3
  - no display
  - will display
    - from opacity:0 into opacity: 1
    - transition: opacity 0.3s ease-in 0.7s
    - transition: [target] [start time] [animation] [time delay]

---

Inline style

```
 <div style="background-image: url('www.usplash.com')"> </div>

```
