# retro-wall
A retrospective todo-wall for managing action items

### User Story
A retrospective wall to plan a product development, having four categories to create cards with added features for deleting and swapping cards between those categories.

#### How to run :
Download / Clone the repo, and just run <b>`npm start`</b> to start the application in <b><i>`http://localhost:3000/`</i></b> 

#### project-timeline :
1. Created a react application using `npx create-react-app retro-wall --use-npm`
2. Added bootstrap for responsive grid system.
3. Removed boiler-plate code and created the Card creation functionality.
4. Added categories.
5. Added functionality to delete a card and swap cards among categories.
6. Modularized the code by creating a separate component for Category and Card.

#### Application Walkthrough :

* Initial page
![alt text](https://github.com/dashinglokie/retro-wall/blob/master/res/initial-page.png?raw=true)

* Add notes under categories
![alt text](https://github.com/dashinglokie/retro-wall/blob/master/res/add-notes.png?raw=true)

* Basic validation to check empty card
![alt text](https://github.com/dashinglokie/retro-wall/blob/master/res/basic-validation.png?raw=true)

* First Retro notes
![alt text](https://github.com/dashinglokie/retro-wall/blob/master/res/retro-in-action.png?raw=true)

* Swapping cards between categories
![alt text](https://github.com/dashinglokie/retro-wall/blob/master/res/swap-cards.png?raw=true)

#### What Next :
- This is a basic implementation of Retro-board using React. This can be further improved by,
* Providing store/state management to persist data on refresh
* Create categories dynamically
* Adding a created timestamp on the card
* Adding sub-notes for a created card
* History of deleted cards

                                ***[`Happy Hacking`]***
