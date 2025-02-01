// Function to move the "No" button when hovered
function moveButton(button) {
    let margin = 20; // Padding to keep the button inside the viewport
    let maxX = window.innerWidth - button.offsetWidth - margin;
    
    // Limit Y-axis movement so it doesn't go too low
    let maxY = window.innerHeight * 0.5 - button.offsetHeight - margin; // Limits movement to the top half

    let x = Math.random() * (maxX - margin) + margin;
    let y = Math.random() * (maxY - margin) + margin; 

    button.style.position = 'absolute'; // Ensure absolute positioning
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Function to start the quiz after clicking "Yes"
function startQuiz() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showHeartConfetti();
}

// Function to generate heart-shaped confetti
function showHeartConfetti() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);

        let size = Math.random() * 20 + 10; // Random size between 10px and 30px
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;

        heart.style.animation = `float ${Math.random() * 3 + 2}s linear infinite`;

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Adding CSS dynamically for heart animation
const style = document.createElement('style');
style.innerHTML = `
    .heart {
        position: absolute;
        color: red;
        font-size: 24px;
        animation: float 3s linear infinite;
    }
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Function to show next question in the quiz
function nextQuestion(num) {
    if (num === 1) {
        document.getElementById('q2').style.display = 'block';
    } else if (num === 2) {
        document.getElementById('q3').style.display = 'block';
    }
}

// Function to show the final message after completing the quiz
function showFinalMessage() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}



