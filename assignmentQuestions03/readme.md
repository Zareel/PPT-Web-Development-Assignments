# Q1 What is media query in CSS, What is it's purpose?

Ans: Media queries allow you to apply CSS styles depending on a divece's general type (such as print vs screen) or other characteristics such as screen resolution or browser viewport width.

### It's purposes

Media queries can be used to check many things such as

- width and height of the viewport
- width and height of the device
- orientation (is the tab/ phone in landscape or portrait)
- resolution

<br/>

# Q2. How do you define a media query in CSS?

Ans: Media queruies are basically a way to write conditional css. That means CSS markup that the browser will only render if certain conditions are met. It is used in responsive design where its a way to tell the browser to change the display of website elements when above or below certain screen size

### syntax

```css
@media screen and (min-width: 680px);
```

<br/>

# Q3. Explain the concept of breakpoints in responsive web design and how they are used in media queries?

Ans: Breaking points are building blocks of responsive design. Its a value that determines a website's size and layout across different screen sizes.
Breakpoints creates a responsive website design when implemented with a CSS media query

# Q4. What is the purpose of using media queries for print media?

Ans: Media queries can also be used to create print styles using `@media print`

```css
@media print {
  #header,
  #footer,
  #nav {
    display: none !important;
  }
}
```

# Q5. What is the purpose of the `orientation` media feature?

Ans: The orientation CSS media feature can be used to test the orientation of the viewport.
The orientation feature is specified as a keyword value chosen from the list below

- potrait: that is the height is greater or equal to the width
- lanscape: the width is greater than the height

# Q6. The OneCard website clone- fully responsive

![1](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/74fbb102-2831-42fb-8188-43b48e765eba)
![2](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/c18327e3-a750-45d0-9c9d-387e80813f39)
![3](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/920f848e-a198-4095-b5ae-80320e59d9e9)
