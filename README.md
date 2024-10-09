# interactive-rating-card


## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### screenshot
![](./screenshot.jpg) 

### Links

- Live Site URL: [live site](https://interactive-rating-card-app.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- SASS and CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://vite.dev/) - React framework

### What I learned

```JS
  {[1, 2, 3, 4, 5].map((id) => (
              <span style={activeButton === `button${id}` ? spanColor : defaultColor} key={id} onClickCapture={divHandleClick} onClick={() => handleButtonClick(`button${id}`)} >{id}</span>
            ))}
```



