/* variables */

const chart = document.querySelector(".bar-chart");
const bars = document.querySelectorAll(".bar");
console.log(bars);

/* bar value */

function getBarValue(bar) {
    const value = bar.querySelector(".bar-value");
    return Number(value.innerText);
}

/* max value */

function getMaxValue(values){
    return Math.max(...values);
}

/* % value function */

function getPercentageValue(value, maxValue) {
    return (value / maxValue) * 100;
}

/* values board */

const valuesBoard = Array.from(bars).map((bar) => getBarValue(bar));

/* max value */

const maxValue = getMaxValue(valuesBoard);

/* % value const */

const percentageValues = valuesBoard.map((value) => {
    return getPercentageValue(value,maxValue)

});

/* height calculation */

const maxHeight = 150
function getHeight(PercentageValue, maxHeight) {
    return (PercentageValue * maxHeight/100)
}

/* heightChange */

const barsFill = document.querySelectorAll('.bar-fill');

bars.forEach((bar, index) => {
    const newHeight = getHeight(percentageValues[index], maxHeight);
    const x = barsFill[index]
    x.style.height = `${newHeight}px`
});

function updateChart() {
    const valuesBoard = Array.from(bars).map((bar) => getBarValue(bar));

    const maxValue = getMaxValue(valuesBoard);

    const percentageValues = valuesBoard.map((value) => {
        return getPercentageValue(value, maxValue);
    });

    bars.forEach((bar, index) => {
        const newHeight = getHeight(percentageValues[index], maxHeight);

        const barFill = barsFill[index];

        barFill.style.height = `${newHeight}px`;
    });
}

/* random values */

const originalValues = document.querySelectorAll('.bar-value')

function getRandom() {
    return Math.floor(Math.random() * 100);
}

const valueChanger = document.querySelector('.value-changer')

valueChanger.addEventListener('click', () => {
    
    originalValues.forEach((value, index) => {
    const originalValue = originalValues[index];
    const newValue = getRandom();
    originalValue.innerHTML = newValue; 
    })
    updateChart();
});

