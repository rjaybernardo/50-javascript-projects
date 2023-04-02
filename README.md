- Setup html, css and js file
- Live server
- link stylesheet
- add script.js
- add font-awesome
  - cdnjs.com
  - copy the link tag

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

- google-fonts roboto
  - roboto | regular | 400
  - use import - do not copy the style tag
  - paste inside the style.css

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
```

- align-items: center = horizontal
- justify-content: center = vertical
- overflow: hidden = no scrollbar
