import { renderHistoryTeam } from "../../components/renderHistoryTeam.js";

export function renderHistoria(container, ctx) {

  const equipos = [
    {
      nombre: "Acereros de Monclova",
      color: "#174189",
      historia: `
        La historia de los Acereros de Monclova comenzó en 1974, cuando el béisbol profesional llegó por primera vez a la ciudad. 
        En 1975 se inauguró el Estadio Monclova, su actual casa, y en 1980 nació oficialmente el nombre de Acereros de Monclova. 
        Tras algunos cambios de nombre y etapas de transición, en 1983 el equipo se estableció definitivamente en la ciudad. <br><br>
        En 1992 inició una nueva era bajo Grupo Acerero del Norte y, en 2017, la familia Benavides Dávila tomó el control del club, impulsando una etapa de mayor protagonismo y aspiraciones deportivas. 
        Desde entonces, los Acereros se han consolidado como una de las franquicias más importantes de la Liga Mexicana de Béisbol.
      `,
      imagen: "../images/acereros.jpg"
    },

    {
      nombre: "Algodoneros de Unión Laguna",
      color: "#6B1A31",
      historia: `
        El 31 de marzo de 1940 nacieron los Algodoneros del Unión Laguna y debutaron en la Liga Mexicana de Beisbol enfrentándose a Tecolotes de Nuevo Laredo.
        Muchas personas piensan que la Unión hace referencia a la hermandad entre las ciudades laguneras, pero en realidad fue gracias a la Unión Jabonera, una empresa que dio origen y sustento a una de las novenas más antiguas y tradicionales del circuito mexicano. <br><br>

        Así, el equipo, a pocos años de su fundación, que coincide en un 15 de septiembre, como el salto que dio la Villa del Torreón a ciudad, logró su primer campeonato, en 1942 y luego un segundo, en 1950. 
        Mientras tanto, la región crecía gracias al algodón, a la industria y al trabajo incansable de las generaciones anteriores. <br><br>
        A partir de esa fecha han jugado durante 41 temporadas y desde su ingreso al profesionalismo el Club de Beisbol Torreón es uno de los equipos con más rica historia y tradición.
      `,
      imagen: "../images/algodoneros.webp"
    },

    {
      nombre: "Charros de Jalisco",
      color: "#F9A51A",
      historia: `
        Los antecedentes de la novena albiazul se remontan a la desaparecida Liga del Centro, donde participaron de 1946 a 1949, bajo el nombre de Pozoleros. 
        Posteriormente, el club tuvo diversas etapas en la Liga Mexicana de Beisbol (LMB): de 1949-1952, 1964-1975, 1988 y 1991-1995, ya como Charros de Jalisco, denominación acuñada por el empresario Miguel Cintrón. <br><br>
        Fue durante su segunda etapa en la LMB cuando alcanzó sus primeros grandes éxitos, al conquistar los campeonatos de 1967 y 1971. Este último permanece como uno de los episodios más memorables en la historia del beisbol mexicano, al imponerse de manera épica en la Final a Saraperos de Saltillo.
        Sin embargo, tras ese periodo de gloria, la franquicia enfrentó múltiples cambios de sede y pausas en su participación profesional, incluyendo su salida en 1976, su breve retorno en 1988 y su última etapa hasta 1995, antes de una prolongada ausencia. <br><br>
        El 18 de agosto de 1971 quedó marcado como una fecha imborrable. En la Serie Final contra Saraperos, Charros protagonizó una de las mayores gestas del deporte profesional en México: remontar un 3-0 adverso para ganar cuatro juegos consecutivos y conquistar el título.
        Dirigidos por Benjamín “Cananea” Reyes, los jaliscienses demostraron un espíritu competitivo excepcional, basado en el coraje, la disciplina y el orgullo. Aquella hazaña no solo consolidó la grandeza del equipo, sino que cimentó una identidad que perdura hasta nuestros días.      
      `,
      imagen: "../images/charros.webp"
    },

    {
      nombre: "Dorados de Chihuahua",
      color: "#592C81",
      historia: `
        La primera epoca para el equipo fue en 1940, donde sólo había siete equipos en la liga y Chihuahua quedó en último lugar con 14 ganados y 67 perdidos, a 42 juegos del campeón Azules del Veracruz y a 16 juegos de su más cercano perseguidor que fueron los Tecolotes de Nuevo Laredo. 
        Fue prácticamente debut y despedida del equipo profesional ya que la franquicia desapareció y para 1941 la liga tuvo 6 equipos. <br><br>
        La segunda época fue a mediados de los 70's cuando la liga pasaba por una de sus mejores épocas. En 1973 la LMB estaba en expansión y surgieron como nuevos integrantes los Dorados de Chihuahua e Indios de Ciudad Juárez. 
        En su temporada de debut, Dorados quedó en último lugar de la División Oeste a 44.5 juegos del líder Saraperos de Saltillo, el equipo fue dirigido por Mario Ruiz y terminó Mauro Contreras. Entre lo destacado para el equipo de la capital del estado grande se puede mencionar que el jugador de Dorados Ángel Bravo se llevó el título de bases robadas de la temporada con 39.
      `,
      imagen: "../images/dorados.jpg"
    },

    {
      nombre: "Rieleros de Aguascalientes",
      color: "#AC2F2D",
      historia: `
        Desde 1975 que debutaron teniendo como presidente a José Ortiz Benavides, además de Raúl Medina Reyes y Pedro Barbosa. 
        Este equipo aparece en la Ciudad de Aguascalientes, cuando la franquicia de los Rojos del Águila de Veracruz, siendo el dueño Don Pablo Machado Llosas, por situaciones que nunca se dieron a conocer, pero la vox populi mencionan pobre relación y apoyo con el gobierno estatal, baja asistencia del público al estadio, desempeño mediocre del equipo, contratos con la cervecera que surtía el producto en el estadio y la transmisión por radio de los partidos, vendió la franquicia a empresarios de Aguasclientes. <br><br>
        Nadie se imaginó que el equipo jarocho se fuera hasta Aguascalientes. No fue hasta finales del 2003 se anuncia que la franquicia de los Cafeteros de Córdoba se mudaría a Aguascalientes a partir de la temporada 2004. <br><br>
        En su primera temporada los Rieleros logran clasificar a los playoffs, sin embargo en las otras dos no les sonríe la suerte. El equipo desaparecería en el 2007 para dar paso a la franquicia de los Tecolotes de Nuevo Laredo.
        Durante su tercera etapa, el lunes 7 de noviembre de 2011 se anunció su regreso al circuito, durante el primer día de trabajos de la Asamblea de Presidentes de la Liga Mexicana de Béisbol.
      `,
      imagen: "../images/rieleros.jpg"
    },

    {
      nombre: "Saraperos de Saltillo",
      color: "#00AA9F",
      historia: `
        Los Saraperos de Saltillo, arribaron a la Liga Mexicana de Béisbol en 1970. 
        Tuvieron su origen en una cena que celebraron los integrantes del Comité Pro-Obras de la Catedral de Saltillo, cuyo presidente era don Jorge Torres Casso.
        Los reunidos empezaron a solicitar datos sobre el costo de dicha franquicia, como adquirir jugadores y otras referencias necesarias para quienes deseaban iniciar una interesante aventura en el rey de los deportes. <br><br>
        Ahora con el apoyo del Gobernador y el Presidente Municipal de Saltillo, se integró la primera directiva de los Saraperos con don Jorge Torres Casso como presidente, Ing. Flavio Treviño, Javier López del Bosque y Gustavo Lara Ramos como vice-presidentes; Eleazar Galindo, tesorero y Eustolio Valdez Flores como secretario.
        Fue en 1999 en que se inició la nueva etapa en la historia del Club Verde al ser adquirido por la organización Ley, la de mayor permanencia en el béisbol mexicano tras sus más de 4 décadas de promover este deporte operando a los Tomateros de Culiacán en la Liga Mexicana del Pacífico.
      `,
      imagen: "../images/saraperos.jpeg"
    },

    {
      nombre: "Sultanes de Monterrey",
      color: "#001E42",
      historia: `
        El Carta Blanca de Monterrey, como se conoció al club en los primeros años, data desde la lejana temporada de 1939. 
        Fue precisamente el 20 de mayo que los regios jugaron su primer encuentro en la Sultana del Norte, teniendo a Epitacio "La Mala" Torres como su gran ídolo deportivo. <br><br>
        La mejor época del Club se dio en los años 40 al obtener hasta cuatro gallardetes, incluyendo el tricampeonato de 1947 al 49, teniendo al frente al cubano Lázaro Salazar, el mejor manager de todos los tiempos.
        Los Sultanes tuvieron un mal inicio en los años 50 al chocar su autobús contra un camión carguero muriendo dos de sus elementos. 
        Además, se retiraron sus peloteros más importantes como Daniel La Coyota Ríos, Lázaro Salazar y Epitacio La Mala Torres, resaltando las labores de Eddie Moore y Eddie Locke que destacaron con el bat y en la lomita, respectivamente.
        Remontandonos en los años 80, iniciaron mal con la huelga de beisbolistas. El Club fue adquirido por el Ing. José Maiz García e inició la construcción del Estadio Monterrey. El sueño de la afición regiomontana comenzaba a hacerse realidad, mientras la ciudad se modernizaba a pasos agigantados. <br><br>
        Si lo construyes ellos vendrán, como la frase de la película El Campo de los Sueños, el Estadio Monterrey se convirtió en un panorama monumental, acorde a los tiempos actuales. 
        Los Sultanes tuvieron el privilegio de ser campeones en su primera temporada completa en su nuevo escenario.
      `,
      imagen: "../images/sultanes.jpg"
    },

    {
      nombre: "Tecolotes de los Dos Laredos",
      color: "#E50512",
      historia: `
        La novena fronteriza inició su historia en la temporada veraniega de 1940, bajo el nombre de La Junta de Nuevo Laredo, en honor a la Junta Federal de Mejoras Materiales, dependencia gubernamental encargada de obra pública municipal, siendo el parque del mismo nombre donde realizaron sus primeros juegos.
        En 1949 el equipo cambió de nombre a Tecolotes de Nuevo Laredo, mientras que en 1985 se convirtió en el primer equipo en jugar en dos países, México y Estados Unidos, convirtiéndose así en Los Tecolotes de los Dos Laredos. <br><br>
        Algunos de los años importantes en su carrera, es 1953, el primer campeonato del equipo, año en que se lanzó el primer juego perfecto de la liga, por Ramiro Cuevas. En 1954 es cuando obtienen su segundo titulo y primer biocampeonato, con manager campeón Adolfo Luqye. El tercer campeonato con marca de 75
        ganados y 45 perdidos, manager campeón José "cheo" Ramos. Su cuarto campeonato sucede al derrotar en 5 juegos a los Diablos Rojos del México, manager campeón Jorge Fitch. por último, su quinto campeonato surge al derrotar en 6 juegos a los Leones de Yucatán, manager campeón José "Zacatillo" Guerrero.
      `,
      imagen: "../images/tecos.jpg"
    },

    {
      nombre: "Toros de Tijuana",
      color: "#B22226",
      historia: `
        La historia de Toros de Tijuana se divide en dos etapas: La primera en 2004 con la llegada del equipo a la ciudad para participar una temporada en la Liga Mexicana de Beisbol y la segunda a partir del 2014 cuando el “rey de los deportes” regresó para quedarse.
        Los Toros de Tijuana conquistaron el campeonato de la Liga Mexicana de Beisbol en 2017 y en 2021, además también suman tres gallardetes de la Zona Norte (2016, 2017, 2021).
        Desde mediados del siglo pasado, Tijuana ha sido una zona beisbolera y esta frontera ha sido sede de equipos como Potros de Tijuana en la Liga Mexicana del Pacífico y Toros de Tijuana en la Liga Mexicana de Beisbol, ambos con campeonatos en su historia. <br><br>
        La actual franquicia de Toros de Tijuana llegó en 2014 procedente de Minatitlán, Veracruz, donde fueron conocidos como Petroleros. La del 2019 fue la séptima temporada consecutiva y la octava en su historia.
        En el 2004, año de fundación de Toros de Tijuana, el equipo se asentó en la ciudad luego de ser conocidos como Tecolotes de los Dos Laredos, sin embargo, sólo jugaron una campaña antes de cambiar su nombre a Potros de Tijuana en 2005, para luego pasar a Reynosa y jugar como Broncos en 2009.
      `,
      imagen: "../images/toros.jpg"
    },

    {
      nombre: "Caliente de Durango",
      color: "#000000",
      historia: `
        Con la adquisición de la franquicia 21 de la Liga Mexicana de Beisbol, en marzo del 2024, el corporativo impulsó la creación del club Caliente de Durango, que se formó para rescatar lo que parecía una inminente salida de la capital duranguense del mapa del circuito veraniego más importante de Latinoamérica.
        Con su ingreso a la LMB, Emilio Hank se consolida como uno de los empresarios deportivos más importantes de todo México y, desde que Caliente tomó las riendas del equipo de beisbol, se ha comenzado a construir un nuevo proyecto que encabeza como presidente ejecutivo, Carlos Cedillo, quien busca forjar una novena ganadora, que sea símbolo de orgullo de toda la gran afición al deporte de la pelota en Durango y en todo México. <br><br>
        La organización de Caliente de Durango es la encargada de fortalecer un proyecto deportivo, mercadológico y comunicacional como una de las mejores empresas de entretenimiento que existen en el beisbol de México.
      `,
      imagen: "../images/caliente.webp"
    }

  ];


  container.innerHTML = `
    <div class="historia-screen">

      <div class="historia-banner"></div>

      <div class="historia-content">

        <h1>Historia</h1>

        <p>Conoce sus orígenes</p>


        <div class="historia-teams">

          ${equipos.map(renderHistoryTeam).join("")}

        </div>

      </div>

    </div>
  `;


  // Abrir y cerrar historias
  container.querySelectorAll(".historia-team-button").forEach((button) => {

    button.addEventListener("click", () => {

      const item = button.closest(".historia-team-item");

      const abierto = item.classList.toggle("open");

      const chevron = button.querySelector(".historia-chevron");

      chevron.src = abierto
        ? "../images/Chevron up.svg"
        : "../images/Chevron down.svg";

    });

  });

}