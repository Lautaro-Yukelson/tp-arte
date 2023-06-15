import { Trabajos } from "./trabajos.js";

console.log(Trabajos);

for (let tp of Trabajos) {
  let espacio = document.getElementById("tps");
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `
    <div class="card-container">
        <a href="/" class="hero-image-container">
          <img
            class="hero-image"
            src=${tp.pic}
            alt="img banda"
          />
        </a>
        <main class="main-content">
          <h1><a href="#">${tp.title}</a></h1>
          <p>${tp.desc}</p>
          <div class="flex-row">
            <div class="time-left">
              <img
                src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
                alt="clock"
                class="small-image"
              />
              <p>${tp.date}</p>
            </div>
          </div>
        </main>
        <div class="card-attribute">
          <img
            src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
            alt="avatar"
            class="small-avatar"
          />
          <p>Por <span>${tp.author}</span></p>
        </div>
      </div>
      `;
  espacio.appendChild(contenedor);
}
