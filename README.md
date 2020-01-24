# Habit Tracker

## Brief
- Users should be able to login
- Users should be able to choose a habit they want to track (e.g water, exercise, 8 hours of sleep) and choose the frequency at which they want to track the habit.
- Users should be able to track a habit and mark it as complete for the day.
- Users should be able to see if they have completed a habit for the day and see if they have a streak of completing their habits.
- Your website should have the following technical functionality:
- Developers should host a database to store the daily information about users locally.

## How to start the project
1. Clone the repo:
``` git clone https://github.com/harry-pm/HabitHub.git ```

2. Go into the HabitHub directory:
``` cd HabitHub ```

3. Install the dependencies:
``` npm install ```

4. Go into the backend directory:
``` cd backend ```

5. Run the server
``` node server.js ```

5. Seed the test database by navigating to http://localhost:4000/seedTest on your web browser

6. Stop running the server:
``` CTRL + C ```
``` Y ```

7. Test api routes:
``` npm test ```

8. Return to the HabitHub directory:
``` cd.. ```

9. Run the frontend tests:
``` npm test ```

10. Run React app:
``` npm start ```

11. Open new terminal window

12. Go into backend directory:
``` cd HabitHub/backend ```

13. Comment out the following lines in server.js
```
const seedDataTest = require("./test/seedTest.js")
seedDataTest()
```

14. Run backend server:
``` node server.js ```

15.  Seed the database by navigating to http://localhost:4000/test on your web browser

16. Enjoy at localhost:3000 on your web browser :)

## Project 

## User stories (MVP)
- As a user, I want to be able to enter a username/password, so I can login
- As a new user, I want to be able to sign up, so I have an account
- As a user, I want be able to add a habit, so it can be tracked
- As a user, I want to toggle the progress of a habit, so my progress is tracked
- As a user, I want to view my streak, so I know how long I have been keeping it up

### User Stories (Extra)
- As a user, I want to know if my login was incorrect, so I re enter my credentials
- As a user, I want to be able to remove a habit, so I can stop a habit
- As a user, I want to be able to choose how I track my habit, so I can tailor it to habit

## Technologies
Frontend:
- JavaScript
- React
- CSS
- Bootstrap
- Axios

Backend:
- JavaScript
- Node.js
- Express
- Date-streaks package

Database technologies:
- MongoDB
- Mongoose

Testing frameworks:
- Jest
- Mocha
- Chai
- Enzyme

## Planning

### Data object stored in database
- Id
- Username
- Password
- Habit array (name, streak, lastCompleted, [])

## MVP
Pages:
- Login page
- Habit page to view and and add a habit
- Sign up page
- Express routes

Stretch goals:
- Categorise habits
- Colour coding habits
- Handling login errors
- Multi-stage habits
- Choose from a selection of pre-existing habits

## Standups

### Tuesday

Yusaf/Josh (back end):
- Achieved: Seeding, db setup, reading files
- Struggles: Async, db connections
- Blockers: Reading files

Lauren/Harry (front end and TDD):
- Achieved: React app setup, rendering basic components, tests for rendering
- Struggles: Manipulating data from backend and testing
- Blockers: See above

### Wednesday

- Lauren/Josh (back end):
- Achieved: Finished routes for the MVP
- Struggles: Querying the database properly (may need to refactor)
- Blockers: None

Yusaf/Harry (front end and TDD): 
- Achieved: Set up more rendering tests
- Struggles: Issues with TDD terminology, a test that needs to be refactored
- Blockers: None

Mob programming:
- Achieved: Got user and habit data from API
- Struggles: Redirecting from Login page to Habits page
- Blockers: Redirecting from Login page to Habits page

## Thursday

Harry/Josh/Lauren:
- Achieved: Registering a user, logging in a user, adding a habit
- Problems: Incorrect habits showing and delay in adding habits
- Blockers: Bracket in wrong place

Josh/Lauren: 
- Achieved: Implementing frequency for habits, fixed habit bugs
- Problems: Handling streaks, updating habits
- Blockers: Handling streaks, updating habits

Harry:
- Achieved: Testing config
- Problems: Problems with getting testing running/seeding
- Blockers: Problems with getting test running/seeding

## Friday

- Harry/Lauren:
- Achieved: Configuring backend testing
- Problems: Seeding test db
- Blockers: See above

Yusaf/Josh:
- Achieved: Updating habits to state, saving habits upon exiting habit page
- Problems: Updating to state
- Blockers: None

Yusaf/Lauren 
- Achieved: A little CSS styling
- Problems: Aligninment issues, better development framework
- Blockers: None

Josh/Harry:
- Achieved: Wrote initial db testing
- Problems: Seeding issues
- Blockers: See above
