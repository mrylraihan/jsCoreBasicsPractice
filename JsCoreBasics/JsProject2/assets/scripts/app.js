const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 100;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 15;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_PLAYER_BONUS_LIFE = 'PLAYER_BONUSLIFE';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enterValue = prompt('Maxium life for you and the Monster.', '100');

const playerList = ['player', 'monster'];
const betvalue = prompt('who are you betting on ?', 'place bet, 0 for player 1 for monster');
const newBetValue = playerList[parseInt(betvalue)];

console.log(`your bet is that the ${newBetValue} will win, Good luck !`);


let chosenMaxLife = parseInt(enterValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
    alert('you life is now 100 because its either not a number or health is too low');
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
            break;
    }

    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry.target = 'PLAYER';
    // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry.target = 'PLAYER';
    // }
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You got lucky bro!');
        writeToLog(LOG_EVENT_PLAYER_BONUS_LIFE, 'BONUS LIFE USED', currentMonsterHealth, currentPlayerHealth);

    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Won!');
        if (betvalue == 0) {
            console.log(`your bet for ${newBetValue} was correct`)
        } else {
            console.log(`your bet for ${newBetValue} was incorrect`)
        }
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lose!');
        if (betvalue == 1) {
            console.log(`your bet for ${newBetValue} was correct`)
        } else {
            console.log(`your bet for ${newBetValue} was incorrect`)
        }
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);

    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have Draw!!!');
        console.log(`your bet was wrong everyone loses Bitch!`)
        writeToLog(LOG_EVENT_GAME_OVER, 'DRAW', currentMonsterHealth, currentPlayerHealth);

    }
    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    // let maxDamage;
    // let logEvent;
    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    // }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
    endRound();
}
function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert('you cant heal to more then max health.');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();
}




function printLogHandler() {
    // console.log(battleLog);
    //forloops
    // for (let i = 0; i < 3; i++) {
    //     console.log('______________');
    // }
    // for (let i = 0; i < battleLog.length; i++) {
    //     console.log(battleLog[i]);
    // }
    //while loops
    let j = 0;
    while(j<3){
        console.log('____________');
        j++;
    }

    let randomNumbers = [];
    let finished = false;
    while(!finished){
        const randomNumbers = Math.random();
        if(randomNumbers > 0.5){
            finished = true;
            console.log(randomNumbers);
        }
    }

    //for of loop
    // let i = 0 // manually inserting an index
    // for(const logEntry of battleLog){
    //     console.log(logEntry);
    //     console.log(i);// manually inserting an index
    //     i++;// manually inserting an index
    // }

    //for-in loop
    let i= 0;
    for(const logEntry of battleLog){
        console.log(`#${i}`);
        for(const key in logEntry){
            console.log(`${key} => ${logEntry[key]} `);
        }
        i++
    }

}

function betPlacer() {

}

attackBtn.addEventListener('click', attackHandler);

strongAttackBtn.addEventListener('click', strongAttackHandler);

healBtn.addEventListener('click', healPlayerHandler);

logBtn.addEventListener('click', printLogHandler);