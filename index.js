    document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const height = document.getElementById('weight').value
    const weight = document.getElementById('height').value / 100

    height = parseFloat('height');
    weight = parseFloat('weight');

    const bmi = weight / (height * height);

    document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);

    // const result = () => {
        
    // }
}