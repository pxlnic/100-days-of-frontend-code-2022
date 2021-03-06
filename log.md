# 100 Days Of Code - Log

## Day 9: March 8, 2022

**Today's Progress:** Data Form reset confirmation Logic
- Started implementing logic for confirm data change in form
    - Added a field to state to set when modal opens
- Started creating modal component
- Need to add an async/await to allow for clicking on modal

**Thoughts:** Not a lot of time spent on this today (work stuff), but started to flesh out creating a confirmatio modal for when data would be lost in Modal.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** N/A

***

## Day 8: March 7, 2022

**Today's Progress:** Code clean up, enhanced logic planning, ...
- Planning for logic to check for and confirm a change in case data would be lost
    - i.e. editing a "Todo" and clicking the "Add" button (add logic to check if todo form has any data)
- NOTE: Returning to Weekday Coding (took a break due to busy work project and being in a friends wedding).

**Thoughts:** Took some time to plan out and think aobut how to work with confirmations. Added logic to check for FormData.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** N/A

***

## Day 7: February 28, 2022

**Today's Progress:** Fixed transition. localStorage working. Started Stats.
- Fixed "leave-active" styling (had a type)
- Got localStorage working with JSON.stringify and JSON.parse (forgot about these)
- Started on the stats page

**Thoughts:** Today was some cleanup primarily and getting things working a bit more smoothly. Also wanted to work on the stats "dashboard".

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** N/A

***

## Day 6: February 25, 2022

**Today's Progress:** Started localStorage implementation.
- Started re-familiarizing my self with localStorage
- Ran into some hiccups with how the data is being stored
- SIDE NOTE: Took a break for most of this week as I had an event I was involved in for a good chunk of it.

**Thoughts:** Spent a short amount of time on it today. Still getting familiar with using localStorage again.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** N/A

***

## Day 5: February 18, 2022

**Today's Progress:** Updated UI elements. Fixed sidebar transition on open/close.
- Updated todo item by truncating text to 1 line
- Updated icon colors to be gray by default and add color on hover
- Figured out width animation on sidebar (needed to add "transistion-width)

**Thoughts:** Got a little refresher on CSS animations, espcecially with Tailwind. Forgot to add the "all" parameter. I also wanted to make the buttons not stand out as much so as not to b a distraction. Limiting the "color" to being on hover feels better.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** N/A

***

## Day 4: February 17, 2022

**Today's Progress:** Reworked Icons. Details Form. Updated State Management. Added Add, Remove, and Edit functionality.
- Created an "icon" component to minimize svg code filling up files
- Added the "Todo Details" form which is tied to a Pinia state item with 2-way binding
- Moved most items over to Pinia from internal component data
- Added functionality to add, edit, and delete todos (no more dummy data)
- Played around with Composition API more and figured out emits a bit more (used [Program With Erik's video](https://www.youtube.com/watch?v=9uSNKIXH_AI))

**Thoughts:** I am feeling more confident in state management. It is still not perfect or even pretty, but works well. I am also feeling more confident with the Composition API and the "setup" tag after watching Erik's video. My plan tomorrow is to actually focus on transitions/animations more.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** ![Todos App List](_progress-images/20220217-vue-todo-app-list.png "Todos app list")

***

## Day 3: February 16, 2022

**Today's Progress:** UI Tweaks, animations, Pinia state, and more Composition API diving.
- Still toying with the Composition API and learning how best to use it
    - I tried working with "emits" but was having issues, will look into later
    - Moved most things into Pinia State as it was easier to maange that way
- Worked more with animations, but am struggling with making the sidenav slide open
    - Will be spending more time on this later and really mastering Vue's transitions
- Laid out more of the UI and looking for ways to breakup components to make them smaller and more concise
- Added details pane
- Added icons for routes, adding new todo, closing todo details pane
- Added filters for todos list
- Made general app and todo list page responsive

**Thoughts:** I am still in the "figuring" out stage. My plan is to poke around vue the rest of the week and rewrite the app next week to be more efficient, have cleaner code, and allow me to dissect the project. I have been referencing the docs more and am getting more comfortable with them.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** ![Todos App List](_progress-images/20220216-vue-todo-app-list.png "Todos app list")

***

## Day 2: February 15, 2022

**Today's Progress:** Composition API and transitions.
- I am learning the ins and outs of the composition API as I have not had a lot of experience with it
    - I have only really used the Options API previously
- I am learning to manage state better and working with Pinia
- Working with transitions, and more speicifically adding and removing items from the list
- Improving use of the documentation to increase comprehension of frameworks

**Thoughts:** My primary goal today was to work on using the composition API more, using Pinia for state management, and relearning transitions with Vue. I am trying to better utilize the documentation of web technology to accomplish my goals. I know what I am trying the make and the docs should have all the details I need to make it happen.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:** ![Todos App List](_progress-images/20220215-vue-todo-app-list.png "Todos app list")

***

## Day 1: February 14, 2022

**Today's Progress**: Started the Vue Todos App project
- Got most requirements gathered and started the Vue 3 project
    - Using Vue and TailwindCSS primarily
- Sketched general design to use
- Cleaned up the boilerplate/demo code and got the base structure down
- Noted most components that will be needed (still trying to identify some.)

**Thoughts:** A productive day and trying to take a measured approach to the apps design and evelopment. Still working on requirements and end design.

**Link to work:** In the 'vue-js-todo-app' folder

**Image:**
![Todo App Sketch](_progress-images/20220214-vue-todo-app-sketch.jpg "Todo app sketch")

***

## Day 0: February 13, 2022

**Today's Progress**: Created repository and planning my learning and projects out for the next 100 days.
- I will start by building a complete "to do" application with the four frontends I am going to learn.
- I am going to start with brushing up on Vue since I am already familiar with it.
- I will move on to Svelte after, then Solid JS, and lastly Alpine JS.
- From there I will build a different application with each.
- My goal is to start this tomorrow (2/14/2022)

**Thoughts:** I want to have some versatility when it comes to building web apps. I don't want to pigeonhole myself with only Vue. I don't know that I want to go down the React or Angular hold though.

**Link to work:** None currently.