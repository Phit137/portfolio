import React from 'react';
import styles from './About.module.css';

function About() {
    return (
        <div className={styles.container}>
            <h2>About Me</h2>
            <p>My name is Phi Tran, and I am a college student with enthusiasm for front-end web design and react projects!</p>
            <p>Some of the things I focus on are react projects, javascript, PHP, and HTML.</p>
            <br></br>
            <p>Some interests I have on the side as well are painting, guitar, and games! I especially enjoy roguelikes, and I do fingerstyle guitar.</p>
        </div>
    );
}

export default About;