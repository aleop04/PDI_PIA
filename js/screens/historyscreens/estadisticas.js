import { renderTeamStats } from "../../components/renderTeamStats.js";

export function renderEstadisticas(container, ctx) {

  const equipos = [
    {
      nombre: "Acereros de Monclova",
      color: "#174189",
      bateo: [
        ["Ramon Hernandez", ".351", "52", "14", "63", "4"],
        ["Juan Mora", ".324", "56", "3", "33", "19"],
        ["Rodolfo Amador", ".321", "35", "12", "69", "1"],
        ["Luis González", ".290", "40", "6", "32", "4"],
        ["Alan Trejo", ".287", "42", "7", "32", "0"]
      ],
      pitcheo: [
        ["Jackson Goddard", "4.20", "4", "75", "0", "1.45"],
        ["Wilmer Rios", "4.80", "3", "65", "0", "1.40"],
        ["Jake McSteen", "4.94", "7", "71", "0", "1.34"]
      ]
    },

    {
      nombre: "Algodoneros de Unión Laguna",
      color: "#6B1A31",
      bateo: [
        ["Albert Lara", ".344", "55", "8", "45", "16"],
        ["Mason Martin", ".282", "48", "18", "68", "2"],
        ["Brian O'Grady", ".279", "43", "11", "41", "5"],
        ["Adrian Tovalin", ".272", "34", "9", "38", "1"],
        ["Didi Gregorius", ".268", "39", "7", "35", "3"]
      ],
      pitcheo: [
        ["Aldo Montes", "4.12", "6", "68", "0", "1.38"],
        ["Tyler Scott", "4.35", "5", "62", "0", "1.35"],
        ["Thomas Mcilarith", "2.84", "3", "45", "14", "1.18"],
        ["Matt Foster", "3.42", "4", "38", "1", "1.24"],
        ["Jacob Barnes", "3.98", "2", "33", "0", "1.31"]
      ]
    },

    {
      nombre: "Charros de Jalisco",
      color: "#F9A51A",
      bateo: [
        ["Eric Filia", ".363", "39", "0", "33", "0"],
        ["Reynaldo Rodriguez", ".347", "33", "4", "30", "5"],
        ["Fernando Villegas", ".330", "23", "2", "30", "3"],
        ["Ramon Rios", ".327", "32", "5", "30", "11"],
        ["River Town", ".324", "28", "1", "15", "9"]
      ],
      pitcheo: [
        ["Darel Torres", "2.13", "6", "62", "0", "1.09"],
        ["David Reyes", "2.44", "6", "38", "0", "1.20"],
        ["Felipe Gonzalez", "2.78", "5", "60", "0", "1.18"],
        ["Odrisamer Deespaigne", "2.95", "7", "43", "0", "1.28"],
        ["Orlando Lara", "3.44", "4", "34", "0", "1.33"]
      ]
    },

    {
      nombre: "Dorados de Chihuahua",
      color: "#592C81",
      bateo: [
        ["Leobaldo Piña", ".327", "45", "11", "48", "6"],
        ["Brainer Bonaci", ".317", "54", "8", "39", "14"],
        ["Juan Carlos Negret", ".284", "41", "14", "52", "3"],
        ["Sebastián Elizalde", ".279", "36", "6", "31", "5"],
        ["Manny García", ".271", "33", "9", "35", "2"]
      ],
      pitcheo: [
        ["Zach Mort", "3.82", "7", "82", "0", "1.21"],
        ["Cam Alldred", "4.15", "5", "64", "0", "1.32"],
        ["Wilmer Font", "4.68", "4", "59", "0", "1.41"],
        ["Brad Case", "3.24", "3", "29", "1", "1.19"],
        ["Danis Correa", "3.65", "2", "34", "11", "1.26"]
      ]
    },

    {
      nombre: "Rieleros de Aguascalientes",
      color: "#AC2F2D",
      bateo: [
        ["Matt McDermott", ".345", "58", "10", "46", "19"],
        ["Andretty Cordero", ".318", "49", "15", "62", "1"],
        ["Ángel Reyes", ".294", "52", "12", "51", "8"],
        ["Leonardo Reginatto", ".288", "38", "7", "39", "4"],
        ["Wilfredo Tovar", ".281", "42", "5", "33", "7"]
      ],
      pitcheo: [
        ["Tyler Wilson", "3.95", "6", "74", "0", "1.28"],
        ["Derek West", "4.22", "5", "68", "0", "1.34"],
        ["JC Ramírez", "4.61", "4", "55", "0", "1.40"],
        ["Luis Pacheco", "3.12", "3", "31", "2", "1.22"],
        ["Jojanse Torres", "3.54", "2", "38", "13", "1.25"]
      ]
    },

    {
      nombre: "Saraperos de Saltillo",
      color: "#00AA9F",
      bateo: [
        ["Brandon Villarreal", ".373", "51", "6", "40", "11"],
        ["Oscar Colás", ".307", "43", "16", "43", "4"],
        ["Tairo Estrada", ".298", "49", "9", "45", "6"],
        ["J.P. Martínez", ".284", "46", "15", "48", "8"],
        ["Fernando Villegas", ".279", "38", "7", "36", "2"]
      ],
      pitcheo: [
        ["Wilmer Font", "3.92", "6", "100", "0", "1.27"],
        ["Alex Claudio", "4.18", "4", "55", "0", "1.34"],
        ["Anibal Cervantes", "4.65", "4", "48", "1", "1.42"],
        ["Jesús Cruz", "3.32", "3", "41", "3", "1.21"],
        ["Jorge López", "3.58", "2", "36", "15", "1.24"]
      ]
    },

    {
      nombre: "Sultanes de Monterrey",
      color: "#001E42",
      bateo: [
        ["Juan Carlos Gamboa", ".371", "56", "11", "76", "7"],
        ["Harold Ramírez", ".367", "71", "7", "57", "23"],
        ["Franklin Barreto", ".358", "84", "19", "88", "17"],
        ["Gaige Howard", ".357", "56", "3", "43", "3"],
        ["Julian Ornelas", ".352", "96", "22", "81", "38"]
      ],
      pitcheo: [
        ["Daniel Martinez", "1.94", "7", "70", "0", "1.03"],
        ["Ronnie Williams", "2.65", "7", "89", "0", "1.17"],
        ["Adonis Medina", "2.86", "8", "77", "0", "1.13"],
        ["Zac Grotz", "2.91", "9", "82", "0", "1.14"],
        ["Daniel Mengden", "3.00", "7", "87", "0", "1.18"]
      ]
    },

    {
      nombre: "Tecolotes de los Dos Laredos",
      color: "#E50512",
      bateo: [
        ["Alí Castillo", ".331", "54", "4", "41", "10"],
        ["Zoilo Almonte",".314", "48", "19", "63", "2"],
        ["Luis de los Santos", ".296", "45", "11", "49", "4"],
        ["Kennys Vargas", ".278", "39", "15", "52", "0"],
        ["Ryan Aguilar", ".265", "41", "8", "36", "6"]
      ],
      pitcheo: [
        ["Daniel Mengden", "3.68", "7", "78", "0", "1.22"],
        ["Leam Méndez", "3.94", "6", "71", "0", "1.29"],
        ["Nathan Antone", "4.45", "5", "58", "0", "1.37"],
        ["Jackson Rees", "2.95", "3", "34", "4", "1.15"],
        ["Ryan Hendrix", "3.21", "2", "40", "16", "1.20"]
      ]
    },

    {
      nombre: "Toros de Tijuana",
      color: "#B22226",
      bateo: [
        ["Justin Turner", ".328", "51", "14", "56", "2"],
        ["Jack Mayfield", ".312", "59", "11", "48", "8"],
        ["Phillip Evans", ".298", "46", "9", "43", "4"],
        ["Junior Lake", ".285", "54", "16", "51", "12"],
        ["Aderlín Rodríguez", ".274", "38", "15", "53", "1"]
      ],
      pitcheo: [
        ["Daniel Martínez", "3.24", "8", "84", "0", "1.14"],
        ["David Reyes", "3.85", "7", "71", "0", "1.25"],
        ["Matt Dermody", "4.12", "6", "68", "0", "1.31"],
        ["Zac Rosscup", "2.82", "4", "39", "2", "1.16"],
        ["Roel Ramírez", "3.16", "3", "42", "18", "1.19"]
      ]
    },

    {
      nombre: "Caliente de Durango",
      color: "#0F0E13",
      bateo: [
        ["Joshua Lester", ".334", "52", "15", "56", "2"],
        ["Elier Hernández", ".318", "49", "15", "51", "5"],
        ["Jonathan Villar", ".295", "58", "8", "43", "18"],
        ["Reynaldo Rodríguez", ".288", "47", "12", "48", "4"],
        ["Carlos Hinojosa", ".279", "36", "6", "32", "1"]
      ],
      pitcheo: [
        ["Nico Tellache", "3.84", "6", "69", "0", "1.25"],
        ["Jake Thompson", "4.15", "5", "61", "0", "1.34"],
        ["José Valdez", "4.62", "5", "66", "0", "1.41"],
        ["Erick Casillas", "3.28", "3", "32", "2", "1.22"],
        ["Neftalí Feliz", "3.51", "2", "39", "14", "1.26"]
      ]
    },
  ];

  container.innerHTML = `
    <div class="stadistics-screen">

      <div class="stadistics-banner"></div>

      <div class="stadistics-content">

        <h1>Estadisticas</h1>

        <p>Consulta sus números</p>

        <div class="stadistics-teams">
          ${equipos.map(renderTeamStats).join("")}
        </div>

      </div>

    </div>
  `;

  // Eventos de los acordeones
  container.querySelectorAll(".stadistics-team").forEach((button) => {

    button.addEventListener("click", () => {

      const item = button.closest(".stadistics-team-item");
      const content = item.querySelector(".stadistics-team-content");

      if (!content) return;

      const chevron = button.querySelector(".stadistics-chevron");

      const abierto = item.classList.toggle("open");

      chevron.src = abierto
        ? "../images/Chevron up.svg"
        : "../images/Chevron down.svg";
    });

  });
}