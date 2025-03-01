# Gym_app


Introduction
Gym_app is a React-based application designed to help users generate customized workout plans. The application allows users to select workout types, muscle groups, and set fitness goals.

Table of Contents
Introduction
Installation
Usage
File Structure
Configuration
Components
Contributing


To get started with Gym_app, follow these steps:

Clone the repository:

bash
git clone https://github.com/harshelke180502/Gym_app.git
cd Gym_app
 Public code references from 1 repository
Install dependencies:

bash
npm install
 Public code references from 1 repository
Start the development server:


npm run dev

Build for production:

npm run build

Usage:

This application can be used to generate workout plans by following these steps:

Navigate to the home page.
Click on the "Accept & Begin" button in the hero section.
Select your workout type, muscle groups, and fitness goals.
Generate your workout plan and start your exercises.
File Structure
The project structure is as follows:

Code
Gym_app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── ExcerciseCard.jsx
│   │   ├── Generator.jsx
│   │   ├── Hero.jsx
│   │   ├── SectionWrapper.jsx
│   │   ├── Workout.jsx
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
└── README.md
 Public code references from 1 repository
Configuration
There are no specific configuration files required for this project. However, you may need to update the environment variables or other settings in the src/utils folder as required.

Components

Button.jsx:
This file exports a functional React component called Button. It takes in text and func as props and renders a button element. The button has an onClick event handler set to the func prop and displays the text prop inside a paragraph element.

ExcerciseCard.jsx:

This file exports a functional React component called ExcerciseCard. It renders a card displaying exercise details such as name, type, muscles involved, description, reps, rest, and tempo. It also maintains and displays the number of sets completed.


Generator.jsx

This file exports a functional React component called Generator. It helps users generate a workout by selecting workout type, muscle groups, and setting goals. It uses state to manage the selected options and toggles a modal for muscle group selection.

Hero.jsx
This file exports a functional React component called Hero. It renders a hero section with a title and a button that navigates to the 'generate' section when clicked.

SectionWrapper.jsx:

This file exports a functional React component called SectionWrapper. It wraps its children content within a section element and includes a header with a title.

Workout.jsx:

This file exports a functional React component called Workout. It renders a list of ExcerciseCard components based on the given workout data.


Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature-branch-name.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-branch-name.
Open a pull request detailing your changes.
