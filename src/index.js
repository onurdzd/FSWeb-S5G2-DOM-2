import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

// mouseover+
// keydown+
// wheel -
// load +
// focus -
// resize +
// scroll +
// select -
// dblclick +
// drag / drop -

const colors = [
  "#4c212aff",
  "#01172fff",
  "#00635dff",
  "#08a4bdff",
  "#446df6ff",
];

// mouseover+
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.transform = "scale(1.3)";
    e.target.style.transition = "transform .9s";
  });
  item.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1)";
  });
});

// keydown+
document.querySelector("body").addEventListener("keydown", (e) => {
  let randomNumber = Math.round(Math.random() * 4);
  e.target.style.backgroundColor = colors[randomNumber];
});

// dblclick+
window.addEventListener("dblclick", (event) => {
  console.info(
    "Paddingsiz genişlik: ",
    event.target.clientWidth,
    "Paddingsiz yükseklik: ",
    event.target.clientHeight
  );
  console.info(
    "Paddingli genişlik: ",
    event.target.offsetWidth,
    "Paddingli yükselik: ",
    event.target.offsetHeight
  );
});

// wheel -
document.querySelector(".intro img").addEventListener("wheel", (e) => {
  e.target.style.transform = "scale(1.1)";
  e.target.style.transition = "0.9s";
  if (e.target.style.transform === "scale(1.1)") {
    removeEventListener("wheel", e);
  }
});

// load +

// window.addEventListener("load", () => {
//   prompt("Siteye girmek için ok yaz");
//   alert("Sayfa açıldı!");
// });

// focus -
document.querySelectorAll("p").forEach((item) => {
  item.addEventListener("focus", (e) => {
    e.target.style.color = "green";
  });
}, true);

// resize +

function reportWindowSize() {
  console.log(window.innerHeight, window.innerWidth);
}

window.addEventListener("resize", reportWindowSize);

// scroll+

window.addEventListener("scroll", (e) => {
  if (
    document.documentElement.scrollTop > 10 &&
    document.documentElement.scrollTop < 1000
  ) {
    document.querySelector("body").style.width = "40vw";
    document.querySelector("body").style.margin = "0 auto";
  } else {
    document.querySelector("body").style.width = "100vw";
    document.querySelector("body").style.margin = "0 auto";
  }
});

// select -

const text = document.querySelector("p");
const sonuc = document.createElement("select");
const option = document.createElement("option");
sonuc.appendChild(option);
text.appendChild(sonuc);
document.querySelector("option").textContent = "Volvo";

window.addEventListener("select", (e) => {
  const selectSonuc = document.createElement("div");
  selectSonuc.textContent = e.target.textContent;
  text.appendChild(selectSonuc);
});

// drag / drop -
