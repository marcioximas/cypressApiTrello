## Trello API Automation Tests

Automation project using Cypress

### Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)

### Project Description

Project to practice automation of REST API tests System under test: http://api.trello.com

### Features
1.  Board Api Test
    - create a Board 
    - delete a Board
2. Card Api Test
    - create a Card
    - delete a Card

### Getting Started

1. Install node.js latest version, make sure to install npm

   - git clone on this repository
   - run the npm install in the root of the project ( 'npm install')
   - create a cypress.env.json with: 
        - "TRELLO_API_KEY"
        - "TRELLO_TOKEN"
    How to get? https://developer.atlassian.com/cloud/trello/
### Usage

Useful commands:

- "cy:open" : runs the test execution on live 
- "cy:run" : runs the test execution in headless mode 

### Contact Information 

- Email: marcioximas@gmail.com
- Linkedin: https://www.linkedin.com/in/marcio-ximenes/
