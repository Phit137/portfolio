import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.container}>
            <h2>My Projects</h2>
            <ul className={styles['project-list']}>
                <li><strong>Project 1:</strong> <a href="https://github.com/Phit137/ExerciseTracker"> React Native Exercise App </a> In this app, I created an exercise app that will display different exercises, as well as ways to track them. In each exercise, it also includes a recommended exercise for the user. </li>
                <li><strong>Project 2:</strong> <a href="https://github.com/Phit137/menu-app"> Menu App </a> In this app, there is a menu that displays items, their descriptions, prices, and allows you to make a list of what you want. </li>
                <li><strong>Project 3:</strong> <a href="https://github.com/Phit137/todolist"> To-do List </a> In this app, there is a to-do list showing items, their descriptions, as well as the ability to add and remove items that you want, or have been completed.</li>
            </ul>

        </div>
    );
}

export default Projects;