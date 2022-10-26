# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)  
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox 
- Mobile-first workflow
- Vanilla JavaScrip

### What I learned

```css
.wrapper input[type="submit"] {
  border-radius: 60px;
  margin-left: -40px;
  cursor: pointer;
  background: url(./images/icon-arrow.svg),
    linear-gradient(135deg, hsl(0, 100%, 98%), hsl(0, 74%, 74%));
  background-position: center;
  background-repeat: no-repeat;
  border-style: none;
  color: transparent;
}

```
```js
function checker(){
    iconImg.style.display="inline-block";
 
    if(emailId.value.match(mailRegex)){
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #2ecc71';
    }
 
    else if(emailId.value == ""){
        iconImg.style.display = 'none';
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #d1d3d4';
    }
 
    else{
        iconImg.innerHTML = '<img class="icon" src="./images/icon-error.svg"></img>';
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #444';
    }
}
```

