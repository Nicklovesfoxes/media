const availableFonts = [
    "'Poppins', sans-serif",
    "'Merriweather', serif",
    "'Bebas Neue', sans-serif",
    "'Courier Prime', monospace",
    "'Roboto Slab', serif",
    "Impact, sans-serif",
    "Georgia, serif"
];

let currentCardIndex = 0;
const cards = document.querySelectorAll('.card');

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.remove('hidden', 'exiting');
            card.classList.add('active');
        } else if (i < index) {
            card.classList.remove('active', 'hidden');
            card.classList.add('exiting');
        } else {
            card.classList.remove('active', 'exiting');
            card.classList.add('hidden');
        }
    });
}

function nextCard() {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    }
}

function restart() {
    currentCardIndex = 0;
    showCard(currentCardIndex);
    document.getElementById('result-message').classList.add('hidden');
    document.getElementById('result-message').textContent = '';
}

function showResult(choice) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.classList.remove('hidden');
    
    if (choice === 'yes') {
        resultMessage.textContent = "Awesome! Glad we're on the same page. 🎉";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "That's okay! Thanks for hearing me out. 🤔";
        resultMessage.style.color = "orange";
    }
}

function spinHeadline(id, tone) {
    const display = document.getElementById(`spin-display-${id}`);
    
    // Reset classes to base
    display.className = 'spin-display';

    let text = "";
    let toneClass = "";

    switch(tone) {
        case 'positive':
            text = "Economy Booms! Steady Growth Continues.";
            toneClass = "tone-positive";
            break;
        case 'negative':
            text = "Stagnation: Growth Near Zero as Economy Stalls.";
            toneClass = "tone-negative";
            break;
        case 'fear':
            text = "THEFT SPIKE! IS YOUR NEIGHBORHOOD SAFE?";
            toneClass = "tone-fear";
            break;
        case 'calm':
            text = "Communities Safer as Overall Crime Drops.";
            toneClass = "tone-calm";
            break;
        case 'populist':
            text = "VICTORY! THE PEOPLE DEMAND CHANGE!";
            toneClass = "tone-populist";
            break;
        case 'elite':
            text = "Deeply Divided Nation Rushes Flawed Legislation.";
            toneClass = "tone-elite";
            break;
        case 'tech':
            text = "INNOVATION SURGE: EFFICIENCY UP 500%.";
            toneClass = "tone-tech";
            break;
        case 'labor':
            text = "Robots Replace Workers: 500 Livelihoods Lost.";
            toneClass = "tone-labor";
            break;
        case 'support':
            text = "Passionate Activists Rally for Justice.";
            toneClass = "tone-support";
            break;
        case 'dismiss':
            text = "Small Crowd Disrupts Downtown Traffic.";
            toneClass = "tone-dismiss";
            break;
    }

    display.textContent = text;
    display.classList.add(toneClass);
    
    // Trigger bounce
    display.style.animation = 'none';
    display.offsetHeight; 
    display.style.animation = 'bounce 0.5s';
}

// Initialize
showCard(currentCardIndex);