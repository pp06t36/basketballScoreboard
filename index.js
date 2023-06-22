// Home team points
let homeCountEl = document.getElementById('homeCount-el');
let count = 0;

function increment() {
    count += 1;
    homeCountEl.textContent = count;
    console.log(count);
}

function incrementTwo() {
    count += 2;
    homeCountEl.textContent = count;
    console.log(count);
}

function incrementThree() {
    count += 3;
    homeCountEl.textContent = count;
    console.log(count);
}

// Visitor team points
let guestCountEl = document.getElementById('guestCount-el');
let countGuest = 0;

function guestIncrement() {
    countGuest += 1;
    guestCountEl.textContent = countGuest;
    console.log(countGuest);
}

function guestIncrementTwo() {
    countGuest += 2;
    guestCountEl.textContent = countGuest;
    console.log(countGuest);
}

function guestIncrementThree() {
    countGuest += 3;
    guestCountEl.textContent = countGuest;
    console.log(countGuest);
}

// Game counters
let homeGameEl = document.getElementById('homeGame-el');
let visitorGameEl = document.getElementById('visitorGame-el');

// Timer
let timer = 60 * 1,
    timerDisplay = document.querySelector('#timerMin-el'),
    timerInterval;

document.querySelector('#gameStart-btn').addEventListener('click', function () {
    startTimer(timer, timerDisplay);
});

function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;

    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timer = duration;
        }
    }, 1000);
}

function incrementGame(gameEl) {
    let gameCount = parseInt(gameEl.textContent);
    gameCount++;
    gameEl.textContent = gameCount < 10 ? '0' + gameCount : gameCount;
}

document.querySelector('#saveGame-btn').addEventListener('click', function () {
    // Determine which team has the most points
    const homeScore = parseInt(homeCountEl.textContent);
    const guestScore = parseInt(guestCountEl.textContent);

    if (homeScore > guestScore) {
        incrementGame(homeGameEl);
        document.getElementById('name--tigers').style.borderBottom = '2px solid #eec22a';
        document.getElementById('name--visitor').style.borderBottom = 'none';
    } else if (homeScore < guestScore) {
        incrementGame(visitorGameEl);
        document.getElementById('name--visitor').style.borderBottom = '2px solid #eec22a';
        document.getElementById('name--tigers').style.borderBottom = 'none';
    } else {
        // Scores are equal
        incrementGame(homeGameEl);
        incrementGame(visitorGameEl);
        document.getElementById('name--tigers').style.borderBottom = 'none';
        document.getElementById('name--visitor').style.borderBottom = 'none';

        // Reset the border bottom if scores are equal
        if (homeGameEl.textContent === visitorGameEl.textContent) {
            document.getElementById('name--tigers').style.borderBottom = 'none';
            document.getElementById('name--visitor').style.borderBottom = 'none';
        }
    }

    // Reset timer and scores
    clearInterval(timerInterval);
    timer = 60 * 1;
    timerDisplay.textContent = '00:00';
    homeCountEl.textContent = '00';
    guestCountEl.textContent = '00';
    count = 0; // Reset home team count
    countGuest = 0; // Reset guest team count
});

document.querySelector('#Resetgame-btn').addEventListener('click', function () {
    clearInterval(timerInterval);
    timer = 60 * 1;
    timerDisplay.textContent = '00:00';
    homeCountEl.textContent = '00';
    guestCountEl.textContent = '00';
    homeGameEl.textContent = '00';
    visitorGameEl.textContent = '00';
});
