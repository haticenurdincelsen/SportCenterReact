import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(0);

    const calculateBMI = () => {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);
        const calculatedResult = weightInKg / (heightInMeters * heightInMeters);

        setResult(calculatedResult.toFixed(2)); // BMI'yi iki ondalık basamağa yuvarla

        // BMI'ye göre stil güncelleme fonksiyonu çağrılabilir
    };

    const bmiData = {
        title: 'BMI Index',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit ',
        image: '../src/assets/bmi-index.jpg'
    };

    return (
        <div className="bmi-calculator">
            <div className="calculator-img">
                <div className="bmi-description">
                    <h2>{bmiData.title}</h2>
                    <p>{bmiData.description}</p>
                </div>
                <img src={bmiData.image} alt={bmiData.title} />
            </div>
            <div className="calculator-content">
                <input
                    type="text"
                    id="height"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input
                    type="text"
                    id="weight"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <button onClick={calculateBMI}>Calculate BMI</button>
                <div className="calculator-result">Your BMI: {result}</div>
            </div>
        </div>
    );
};

export default BMICalculator;
