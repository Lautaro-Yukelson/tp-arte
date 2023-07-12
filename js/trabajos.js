import { Trabajos } from './listas.js';

function mostrarTrabajos(){
    console.log(Trabajos);
    for (let tp of Trabajos) {
      let container = document.getElementById("cards-container");
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <a href="${tp.link}" target="_BLANK">
            <div class="card-image">
                <img src="${tp.img}" alt="">
            </div>
            <p class="card-title">${tp.title}</p>
            <p class="card-body">
                ${tp.desc}
            </p>
            <p class="footerC">Por <span class="by-name">${tp.author}</span> - <span class="date">${tp.curso}</span></p>
        </a>
      `;
      container.appendChild(card);
    }    
}

mostrarTrabajos();