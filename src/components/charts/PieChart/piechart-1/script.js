const items = document.querySelectorAll(".pie-chart-item");
const graph = document.querySelector(".pie-chart-graph");
const valueChanger = document.querySelector(".value-changer");

function getRandomValue() {
    return Math.floor(Math.random() * 101);
}

function getPieValues() {
    return Array.from(items).map((item) => {
        const value = item.querySelector(".pie-chart-value");

        return Number(value.innerText);
    });
}

function drawPieChart() {
    const values = getPieValues();

    const total = values.reduce((sum, value) => sum + value, 0);

    let currentAngle = 0;

    graph.innerHTML = "";

    values.forEach((value, index) => {
        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        const radius = 70;
        const circumference = 2 * Math.PI * radius;
        const percentage = value / total;
        const dashLength = percentage * circumference;

        circle.setAttribute("cx", "100");
        circle.setAttribute("cy", "100");
        circle.setAttribute("r", radius);

        circle.setAttribute("fill", "none");
        circle.setAttribute("stroke-width", "40");

        circle.setAttribute(
            "stroke-dasharray",
            `${dashLength} ${circumference - dashLength}`
        );

        circle.setAttribute(
            "stroke-dashoffset",
            -currentAngle * circumference
        );

        circle.setAttribute(
            "transform",
            "rotate(-90 100 100)"
        );

        circle.style.stroke = `hsl(${index * 80}, 70%, 50%)`;

        graph.appendChild(circle);

        currentAngle += percentage;
    });
}

valueChanger.addEventListener("click", () => {

    items.forEach((item) => {
        const value = item.querySelector(".pie-chart-value");

        value.innerText = getRandomValue();
    });

    drawPieChart();
});

drawPieChart();