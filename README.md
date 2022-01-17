# Maze Running

[https://peaceful-wiles-aa2f8d.netlify.app/]()

## Project Description

This project will be a maze game. The player will start at the beginning and have to evade a number of enemies to get to the chest. Once they open the chest they finish. Once they are done the score and time will be posted into the high scores. Only the best will be shown.

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
      "id": "reca0qUGVz3v01A9m",
      "fields": {
        "score": 350,
        "maze": "Snowy Blizzard",
        "time": "0:51"
      },
      "createdTime": "2022-01-17T20:59:25.000Z"
    },
    {
      "id": "recNfNfivw8v9IaSl",
      "fields": {
        "score": -488,
        "maze": "Beach",
        "time": "0:13"
      },
      "createdTime": "2022-01-17T21:00:11.000Z"
    },
    {
      "id": "recVlob6ha8EzVYxR",
      "fields": {
        "maze": "Dungeon",
        "score": -92,
        "time": "0:19"
      },
      "createdTime": "2022-01-17T23:09:32.000Z"
    }
  ],
  "offset": "itroAGHhr4tHJ0ZN7/recVlob6ha8EzVYxR"
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
