# Q1. What is box model in CSS

Ans:
Css box model is essentially a box that wraps around every HTML element. It consist of the actual content, padding, boarder, and margin.

- Cotent: the content of the box where the text and images appear
- Padding: clears the area around the content
- Border: wraps the content and padding
- Margin: It is the outer most layer wrapping the content
  CSS properties such as padding, boarder and margin are part of CSS Box model

# Q2. What are the different types of selectors in CSS & What are the advantages of them

Ans:

- Simple selectors: select elements based on name, id and class

```css
p {
  font-size: 18px;
  color: gray;
}
```

- Combinator selectors: select elements based on specific relationship between them

```css
/* descendant selector (space)*/
div p {
  font-family: Poppins;
}
/* child selector */
div > p {
  font-family: Poppins;
}
/* adjuscent subling selector */
div + p {
  font-family: Poppins;
}
/* general sibling selector */
div ~ p {
  font-family: Poppins;
}
```

- Pseudo class selectors: select elements based on a cirtain state

```css
/* unvisited link */
a:link {
  color: blue;
}
/* visited link */
a:visited {
  color: black;
}
/* mouse over */
a:hover {
  color: Red;
}
/* selected link */
a:active {
  color: green;
}
```

- Pesudo element selector: select certain part of an element

```css
p::first-line {
  color: blue;
  font-size: 20px;
}
```

- Attribute selector: select element based on an attribute or attribute value

```css
input[type="text"] {
  width: 150px;
}
```

# Q3. What is VW/VH?

Ans:
VW:(viewport width): is 1% of the width of the viewport. Since the body element is set to 100vw, 100% vw will take up the full width available to it
VH(viewport height): is 1% of the height of the viewport. vh 50% will take up half of the available viewport height

# Q4. What is the difference between inline, block and inline-block?

Ans:

- inline: inline element does not have a line break before of after it. It allows HTML element to stay next to it. It wont allow to set width and height
- Block: block element starts on a new line and will take up the entire width.
- inline-block: inline block element will tolarate HTML elements next to it but behaves as a block element. We can set both height and width to an inline-block element. Top, bottom margins and paddings are respected

# Q5. How is border box different from content box?

Ans:

- content-box: is the default value of box-sizing. The dimention of elements includes only height and widht and does not include border and padding given to the element. Padding and border takes space outside the element
- border-box: includes height, width, padding and margin inside of the box
  <br/>
  <br/>
  ![2](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/a21ae3c3-61d7-41c4-b487-fa2fcf484a98)

# Q6. What is z-index and how does it function?

Ans:
Z-index CSS property sets the order of positioned element. The element with greater z-index value is stays in front of the element that is with lower z-index value. It always works in positioned and direct children of display:flex elements. The elements with the z-index value -1 will be placed behind

# Q7. What is grid & flex and difference between them

Ans:

- CSS Grid: is a two dimentional grid-based layout. Means grid can work on both rows and columns at a time. It allows us to center items horizontally and virtically. Creating web pages is much easier with CSS grid without having to use positioning and floats. Grid gives you more flexibility to move around the blocks irrespective of your HTML markup. As in flex-box, it has special properties for parent and child elements
- Flexbox: is a powerfull one dimentional layout model. Means flexbox can work on either rows or columns at a time. It helps to lay, align and distribute items(childern) efficiently inside a container(parent). It has it's own sets of properties. Using flex box we can easily allign elements to create beautiful websites

# Q8. Differentiate between absolute and relative and sticky and fixed positions, elplain with example

Ans:
The position properties determine where the element should be located in the document. There are 5 values of css properties, static, relative, absolute, fixed and sticky.

- Static : is the defalut value. Static-positined elements are not affected by the `top`, `bottom`, `left`, `right` and `z-index` properties. This has no use cases
- Relative: The elements original positon remains in the flow of the document but just like the static value, but now the `top`, `bottom`, `left` and the `right` will work. The position properties will nudge the element from the original position in that directin

```css
.child {
  position: relative;
  top: 80px;
  left: 80px;
}
```

![2](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/acbdb356-9c04-478c-8abb-886cb3748afe)

- Absolute: The element is removed from the flow of the document and other elements will behave as if it is not even there. All the positioning properties will work on it

```css
.child {
  position: absolute;
  top: 70px;
  left: 10px;
}
```

![3](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/011141ba-98a1-4238-9ce4-d6e5657498d2)

- Fixed: The element is removed from the flow of the document. It helps you to position the element anywhere relative to the document. However this value is unaffected by scrolling

[fixedE-xample](https://codepen.io/Zareel/pen/abKMZby)

- Sticky: It allows you to place an element anywhere in the document, and then once the user scrolled past any cirtain point in the viewport, the element persistanlty remain visible like the fixed value

[sticky-Example](https://codepen.io/Zareel/pen/BaVbzGj)

# Q9. Build periodic table

![3](https://github.com/Zareel/PPT-Web-Development-Assignments/assets/110910838/137ab43d-551d-4221-a0c1-b560338396e1)
