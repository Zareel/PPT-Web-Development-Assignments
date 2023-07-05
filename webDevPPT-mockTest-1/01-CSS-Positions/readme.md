# Mock Test 1 Web Develpoment PPT iNeuron

## 1. Explain all the CSS positions(static, fixed, sticky, relative, absolute) with one code example each

Ans: The position property can help you manipulate the position of an element

### project setup

![1 (2)](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/a619ae7f-3592-40f3-8e72-f50510f75a9d)

<br/>
<br/>

- Static => Every element has a static position by default, so the element will stick to the normal page flow. So if there is a left, right, top, bottom, z-index set there will be no effect on that element
  <br/>
  <br/>
- fixed => The element is removed from the flow of the document. It can help you position an element anywhere relative to the document, however this value is unaffected by scrolling
  ![4](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/c820471f-4962-403b-9ac4-e912db4a7ddd)
  <br/>
  <br/>
- sticky => It allows you to position an element relative to anything on the document and then, once the user has scrolled past a certain point in the viewport, fix the position of the element to that location so it remains persistently displayed like an element with a fixed value
  ![5](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/f9c298fa-a75a-4674-b0ee-0da1d178e1f5)
  <br/>
  <br/>
- relative => An element's original position remains in the flow of the document just like the static value. But now left, right, top, bottom, z-index will work. The position properties nudge the element from the original position in that direction
  ![2](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/acbdb356-9c04-478c-8abb-886cb3748afe)
  <br/>
  <br/>
- absolute => The element is removed from the flow of the document, and other elements will behave as if it is not even there whilst all the other positional properties will work on it
  ![3](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/011141ba-98a1-4238-9ce4-d6e5657498d2)
