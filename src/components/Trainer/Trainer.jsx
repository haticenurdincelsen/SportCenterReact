import React from 'react';
import './Trainer.css';

const Trainer = () => {
    return (
        <div className="trainer">
            <div className="trainer-info">
                <br /><br />
                <h2>Our Best Trainers</h2><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p> <br /><p>incididunt ut labore 
                     dolore magna aliqua. Ut enim ad minim veniam,</p><br /><p> quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    .</p><br /><br />
            </div>
            <div className="trainer-list">
                <div className="trainer-card">
                    <img src="../src/assets/trainer1.jpg" alt="Trainer 1" />
                    <h3>John Doe</h3>
                    <p>Yoga Instructor</p>
                </div>
                <div className="trainer-card">
                    <img src="../src/assets/trainer2.jpg" alt="Trainer 2" />
                    <h3>Jane Smith</h3>
                    <p>Fitness Trainer</p>
                </div>
                <div className="trainer-card">
                    <img src="../src/assets/trainer3.jpg" alt="Trainer 3" />
                    <h3>David Johnson</h3>
                    <p>Pilates Instructor</p>
                </div>
            </div>
        </div>
    );
};

export default Trainer;
