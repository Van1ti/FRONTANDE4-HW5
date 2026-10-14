
const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z']
let currentKeyIndex = 0;

const keyEl = document.querySelector('#key')
const newGameBtn = document.querySelector('#new-game-btn')

function getRandomKeyIndex() {
  return Math.floor(Math.random() * keys.length)
}


function startNewGame() {
  currentKeyIndex = getRandomKeyIndex();
  keyEl.textContent = keys[currentKeyIndex];

  if (typeof PNotify !== 'undefined') {
    PNotify.success({
      title: 'Нова гра',
      text: 'Гра розпочалася! Натискайте потрібні клавіші.',
      delay: 200
    })
  }
}

currentKeyIndex = getRandomKeyIndex();
keyEl.textContent = keys[currentKeyIndex];


window.addEventListener('keydown', event => {
  const pressedKey = event.key.toLowerCase();
  const currentKey = keys[currentKeyIndex];

  if (typeof PNotify === 'undefined') return;

  if (pressedKey === currentKey) {
    PNotify.success({
      text: `Правильно! Ви натиснули клавішу "${pressedKey}"`,
      delay: 150
    });

    currentKeyIndex = getRandomKeyIndex()
    keyEl.textContent = keys[currentKeyIndex]
  } else {
    PNotify.error({
      text: `Помилка! Ви натиснули "${pressedKey}", а треба "${currentKey}"`,
      delay: 150
    })
  }
})


window.addEventListener('keypress', event => {
  event.preventDefault()
})


newGameBtn.addEventListener('click', () => {
  startNewGame()
})


const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true,
      tension: 0.1,
    },
  ],
};

const canvasElement = document.querySelector('#sales-chart')

const salesChart = new Chart(canvasElement, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});