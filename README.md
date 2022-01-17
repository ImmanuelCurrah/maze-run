# Maze Running

[maze-running.com/whateveritsgoingtobe]()

## Project Description

This project will be a maze game build using react. The main functionality of the game will be a timed maze in which you can choose a character and a maze to participate in. There will be 4 different mazes that will each have a different theme. For example, a dungeon theme, or a grassy castle theme. The player will be able to choose between a number of characters. Once these are chosen the player will have a point system based on how much time they spent in the maze and also how many steps are taken. The point system will be tracked in this way; the player will start out with 10,000 points. For each step that they take x amount of points will be deducted. At the end of the maze the time they took will be saved, converted into seconds. And then for each second they spent in the maze another x amount of points will be deducted. Once they complete the maze a modal will pop and ast them for there name and then store their name score and time into the high scores data. There will also be another maze that will be generated randomly that will have its separate high scores along with it.

## Wireframes

[Here](https://whimsical.com/maze-running-desktop-dw7sXfW8EEE81JsP8Ry1F) is a link to my window wireframe. Showcases my vision of how the project will look in the browser.

[Here](https://whimsical.com/maze-running-mobile-6vDVnWRosksoYMPR7WWaWr) is a link to showcase my project for mobile. This mainly effects the gameplay screen where there will be arrows that a player can press on the screen to move the character, rather then the arrow keys of wasd.

## Component Hierarchy

[This](https://whimsical.com/app-components-hierarchy-B1QLBwQa5x8wacXGaVQPfM) is my component library and how I envision building out the component structure in react.

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recYs3JCSjR9oczog",
      "fields": {
        "score": "3000",
        "name": "Immanuel",
        "time": "12:34"
      },
      "createdTime": "2022-01-08T18:19:49.000Z"
    },
    {
      "id": "recemc0dDNqXAwMju",
      "fields": {},
      "createdTime": "2022-01-08T18:19:49.000Z"
    },
    {
      "id": "rec191vPTyhQRpInp",
      "fields": {},
      "createdTime": "2022-01-08T18:19:49.000Z"
    }
  ],
  "offset": "itrIMBM3THmSA0t7O/rec191vPTyhQRpInp"
}
```

#### MVP

_These are examples only. Replace with your own MVP features._

- Create a data base using AirTable to handle all my high scores data.
- Have a homepage that will have a hamburger menu and also ask you what maze you will like to do and with which character.
- Store the the players score and display it in high scores.
- Have four different mazes to choose from.
- Have a separate menu that takes the player to a random maze.
- Make sure that it has good styling utilizing a npm package.

#### PostMVP

- Adding levels to each Maze area, and change the point system to incorporate how long the player took to beat all the levels.
- Add enemies and jewels for the player to avoid and pick up.
- Give the player a certain amount of lives. Incorporate into the point system.
- Add combat items starting with a shield and move on the items to speed you up or a bomb to blow through the wall.

## Project Schedule

| Day           | Deliverable                                                         | Status     |
| ------------- | ------------------------------------------------------------------- | ---------- |
| January 8-10  | Prompt / Wireframes / Priority Matrix / Timeframes                  | Complete   |
| January 10    | Project Approval                                                    | Complete   |
| January 10-11 | Core structure, and basic styling, maze generation                  | Complete   |
| January 11-12 | Code to give maze running function and actually transverse the maze | Complete   |
| January 13    | Score counting and high scores api communication                    | Complete   |
| January 14    | Finish up all my MVPs                                               | Complete   |
| January 15-17 | Post-Mvp                                                            | Complete   |
| January 18    | Presentation                                                        | Incomplete |

## Timeframes

| Component                                                 | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Writing up proposal                                       |    H     |      2hrs      |     2hrs      |    2hrs     |
| Setting up AirTable                                       |    H     |      1hrs      |    2.5hrs     |   2.5hrs    |
| NavBar setup                                              |    H     |      1hr       |               |             |
| Drop down menu for mazes                                  |    H     |      2hrs      |               |             |
| Make drop down menu for character selection               |    H     |      2hrs      |               |             |
| Make a start button                                       |    H     |      1hr       |               |             |
| Create all routing in App                                 |    H     |      1hr       |               |             |
| Create the mazes                                          |    H     |      5hrs      |               |             |
| Make character models function                            |    H     |      3hrs      |               |             |
| Create the random maze generator page                     |    M     |      4hrs      |               |             |
| Style the maze component file                             |    H     |      3hrs      |               |             |
| Add the mazes to a specific route                         |    H     |      1hr       |               |             |
| Create character functionality                            |    H     |      2hrs      |               |             |
| Create win lose conditions and point system               |    H     |      3hrs      |               |             |
| Create settings component                                 |    M     |      2hrs      |               |             |
| Create high scores component for each maze                |    H     |      4hrs      |               |             |
| Create high scores component for random maze              |    M     |      3hrs      |               |             |
| Post mvp enemies                                          |    M     |      4hrs      |               |             |
| Post mvp shield and special items                         |    L     |      5hrs      |               |             |
| Post mvp create multiple levels and add mazes to each one |    L     |      6hrs      |               |             |
| Total                                                     |    H     |     61hrs      |               |             |

## SWOT Analysis

### Strengths:

- I genuinely enjoy using react at this point and feel a sense of excitement when I get errors.
- I picked up react during this course pretty well. And I love learning more about it and reading documentation on my own with things.
- I feel like I have the basics down which I can code out quickly and spend more time learning down things to implement.

### Weaknesses:

- I can have a hard time managing my time and get sucked in without taking a break and then get burnt out.
- Don't feel super comfortable using css and styling.
- There's still so much to learn and I can get overwhelmed.

### Opportunities:

- This is giving me a chance to build something I really feel excited about building and give me more insight into what game logic looks like.
- Learn more about programming as I think I am setting myself a higher bar then my first project.
- Learning more about npm packages and what they can do.

### Threats:

- I can get burnt out with styling and loose my steam near the end of the week.
- I don't know all the best ways to use packages so I may spend time writing out functionality that an external package may help me with.
- Getting overwhelmed looking at documentation or examples of other people's code.
