const weatherCode = {
    100: ['100.svg', '500.svg'],
    101: ['101.svg', '501.svg'],
    102: ['102.svg', '502.svg'],
    103: ['102.svg', '502.svg'],
    104: ['104.svg', '504.svg'],
    105: ['104.svg', '504.svg'],
    106: ['102.svg', '502.svg'],
    107: ['102.svg', '502.svg'],
    108: ['102.svg', '502.svg'],
    110: ['110.svg', '510.svg'],
    111: ['110.svg', '510.svg'],
    112: ['112.svg', '512.svg'],
    113: ['112.svg', '512.svg'],
    114: ['112.svg', '512.svg'],
    115: ['115.svg', '515.svg'],
    116: ['115.svg', '515.svg'],
    117: ['115.svg', '515.svg'],
    118: ['112.svg', '512.svg'],
    119: ['112.svg', '512.svg'],
    120: ['102.svg', '502.svg'],
    121: ['102.svg', '502.svg'],
    122: ['112.svg', '512.svg'],
    123: ['100.svg', '500.svg'],
    124: ['100.svg', '500.svg'],
    125: ['112.svg', '512.svg'],
    126: ['112.svg', '512.svg'],
    127: ['112.svg', '512.svg'],
    128: ['112.svg', '512.svg'],
    130: ['100.svg', '500.svg'],
    131: ['100.svg', '500.svg'],
    132: ['101.svg', '501.svg'],
    140: ['102.svg', '502.svg'],
    160: ['104.svg', '504.svg'],
    170: ['104.svg', '504.svg'],
    181: ['115.svg', '515.svg'],
    200: ['200.svg', '200.svg'],
    201: ['201.svg', '601.svg'],
    202: ['202.svg', '202.svg'],
    203: ['202.svg', '202.svg'],
    204: ['204.svg', '204.svg'],
    205: ['204.svg', '204.svg'],
    206: ['202.svg', '202.svg'],
    207: ['202.svg', '202.svg'],
    208: ['202.svg', '202.svg'],
    209: ['200.svg', '200.svg'],
    210: ['210.svg', '610.svg'],
    211: ['210.svg', '610.svg'],
    212: ['212.svg', '212.svg'],
    213: ['212.svg', '212.svg'],
    214: ['212.svg', '212.svg'],
    215: ['215.svg', '215.svg'],
    216: ['215.svg', '215.svg'],
    217: ['215.svg', '215.svg'],
    218: ['212.svg', '212.svg'],
    219: ['212.svg', '212.svg'],
    220: ['202.svg', '202.svg'],
    221: ['202.svg', '202.svg'],
    222: ['212.svg', '212.svg'],
    223: ['201.svg', '601.svg'],
    224: ['212.svg', '212.svg'],
    225: ['212.svg', '212.svg'],
    226: ['212.svg', '212.svg'],
    228: ['215.svg', '215.svg'],
    229: ['215.svg', '215.svg'],
    230: ['215.svg', '215.svg'],
    231: ['200.svg', '200.svg'],
    240: ['202.svg', '202.svg'],
    250: ['204.svg', '204.svg'],
    260: ['204.svg', '204.svg'],
    270: ['204.svg', '204.svg'],
    281: ['215.svg', '215.svg'],
    300: ['300.svg', '300.svg'],
    301: ['301.svg', '701.svg'],
    302: ['302.svg', '302.svg'],
    303: ['303.svg', '303.svg'],
    304: ['300.svg', '300.svg'],
    306: ['300.svg', '300.svg'],
    308: ['308.svg', '308.svg'],
    309: ['303.svg', '303.svg'],
    311: ['311.svg', '711.svg'],
    313: ['313.svg', '313.svg'],
    314: ['314.svg', '314.svg'],
    315: ['314.svg', '314.svg'],
    316: ['311.svg', '711.svg'],
    317: ['313.svg', '313.svg'],
    320: ['311.svg', '711.svg'],
    321: ['313.svg', '313.svg'],
    322: ['303.svg', '303.svg'],
    323: ['311.svg', '711.svg'],
    324: ['311.svg', '711.svg'],
    325: ['311.svg', '711.svg'],
    326: ['314.svg', '314.svg'],
    327: ['314.svg', '314.svg'],
    328: ['300.svg', '300.svg'],
    329: ['300.svg', '300.svg'],
    340: ['400.svg', '400.svg'],
    350: ['300.svg', '300.svg'],
    361: ['411.svg', '811.svg'],
    371: ['413.svg', '413.svg'],
    400: ['400.svg', '400.svg'],
    401: ['401.svg', '801.svg'],
    402: ['402.svg', '402.svg'],
    403: ['403.svg', '403.svg'],
    405: ['400.svg', '400.svg'],
    406: ['406.svg', '406.svg'],
    407: ['406.svg', '406.svg'],
    409: ['403.svg', '403.svg'],
    411: ['411.svg', '811.svg'],
    413: ['413.svg', '413.svg'],
    414: ['414.svg', '414.svg'],
    420: ['411.svg', '811.svg'],
    421: ['413.svg', '413.svg'],
    422: ['414.svg', '414.svg'],
    423: ['414.svg', '414.svg'],
    425: ['400.svg', '400.svg'],
    426: ['400.svg', '400.svg'],
    427: ['400.svg', '400.svg'],
    450: ['400.svg', '400.svg']
  }
  
// 都市ごとのAPIエンドポイントを設定
const cityUrls = {
  tokyo: "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json",
  osaka: "https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json",
  nagoya: "https://www.jma.go.jp/bosai/forecast/data/forecast/230000.json"
};

let selectedCity = "tokyo"; // 初期設定は東京
const dayList = ["日", "月", "火", "水", "木", "金", "土"];

function updateWeather() {
  const url = cityUrls[selectedCity];

  fetch(url)
      .then((response) => response.json())
      .then((weather) => {
          document.getElementById("location").textContent = weather[1].timeSeries[0].areas[0].area.name;

          const timeDefines = weather[0].timeSeries[0].timeDefines;
          const weatherCodes = weather[0].timeSeries[0].areas[0].weatherCodes;
          const temps = weather[0].timeSeries[2].areas[0].temps;

          const isTodaysData = timeDefines.length === 4;
          const weatherCodeList = [weatherCodes[0], weatherCodes[1], weatherCodes[2]];
          const tempsMinList = isTodaysData ? [
              temps[0] === temps[1] ? "--" : temps[0],
              temps[2],
              temps[4] // 明後日
          ] : ["--", temps[0], temps[2]];

          const tempsMaxList = isTodaysData ? [
              temps[1],
              temps[3],
              temps[5] // 明後日
          ] : ["--", temps[1], temps[3]];

          const dateElements = document.getElementsByClassName("date");
          const weatherImgElements = document.getElementsByClassName("weatherImg");
          const tempMinElements = document.getElementsByClassName("tempMin");
          const tempMaxElements = document.getElementsByClassName("tempMax");
          const todayWeekday = new Date(timeDefines[0]).getDay();

          weatherCodeList.forEach((code, i) => {
              const weekday = (todayWeekday + i) % 7;
              dateElements[i].textContent = i === 0 ? "今日" : i === 1 ? "明日" : "明後日";
              dateElements[i].style.color = weekday === 0 ? "red" : weekday === 6 ? "blue" : "black";
              weatherImgElements[i].src = `https://www.jma.go.jp/bosai/forecast/img/${weatherCode[code][0]}`;
              tempMinElements[i].textContent = tempsMinList[i] || "--";
              tempMaxElements[i].textContent = tempsMaxList[i] || "--";
          });
      })
      .catch((error) => {
          console.error("Error fetching weather data:", error);
      });
}

// 都市の切り替え
function changeCity(city) {
  selectedCity = city;
  updateWeather();
}

// 初期データの読み込み
document.addEventListener("DOMContentLoaded", () => {
  updateWeather();
  document.getElementById("citySelector").addEventListener("change", (event) => {
      changeCity(event.target.value);
  });
});
