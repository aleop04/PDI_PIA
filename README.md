# El Rincón del Beisból — boceto interactivo

Prototipo de interacción (sin backend real, sin AR real todavía) para la app
de realidad aumentada de beisbol. Corre 100% en el navegador — abre
`index.html` directamente, no necesita build ni servidor.

## Estructura

```
index.html                 shell de la app 
css/styles.css              tipografias + estilos
js/app.js                   router central + estado global en memoria
js/screens/
  login.js                  login 
  register.js               registro
  home.js                   inicio 
  scan.js                   escaneo -> visor AR -> dispara trivia enlazada
  gallery.js                galería tipo TCG (cartas bloqueadas/desbloqueadas)
  trivia.js                 banco de preguntas, se puede entrar directo o desde scan.js
js/components/
  bottom-nav.js              donde se encuentra para poder acceder a inicio, escanear, galeria y trivia desde cualquier pantalla
  header.js                  header para pantallas despues de ingresar, todas lo incluyen excepto la pagina de escaner
js/services/scanner.js       runtime JS del modelo POO (Poster/QR/Objeto uniformes)
ts/scannable.ts              el mismo modelo, tipado — fuente de verdad para cuando
                              se incorpore un bundler (Vite/tsc)
data/schema.sql              propuesta de base de datos para el backend futuro
```

## Por qué está dividido así

- **Cada pantalla es su propio módulo** (`js/screens/*.js`), cada uno exporta
  una función `renderX(container, ctx)`. `app.js` solo decide cuál montar —
  así se pueden tocar/editar por separado sin tocar las demás.
- **El escaneo es POO uniforme.** `ScannableElement` es la clase base;
  `PosterMarker`, `QRMarker` y `ObjectMarker` heredan de ella. El
  `ScannerService` nunca pregunta "¿qué tipo eres?" — todos exponen
  `match()` y `toCollectionCard()`. Esto es lo que hace que un póster, un QR
  y un objeto físico entren "uniformemente" al mismo flujo, tal como se
  pidió. `ts/scannable.ts` es la versión tipada de ese mismo diseño.
- **El login trae el rango de colores** (`THEMES` en `login.js` +
  `.theme-*` en `styles.css`). Elegir un color cambia `--accent` en toda la
  app (botones, HUD). Son 6 opciones — fácil agregar más swatches.
- **Escanear activa la trivia.** Cada `ScannableElement` puede traer
  `linkedQuizId`. Al reconocerlo, el visor AR muestra un botón "Trivia
  desbloqueada"; `scan.js` guarda ese id en `ctx.pendingQuizId` y
  `trivia.js` lo consume al montarse.
- **La galería es tipo TCG.** Lee el registro completo del scanner
  (`ctx.scanner.registry`) y lo cruza contra `ctx.state.collection` (los ids
  ya escaneados) para mostrar cartas bloqueadas o reveladas, con rareza
  (Novato / Titular / Estrella / Leyenda) y flip al tocarlas.

## Próximos pasos sugeridos

1. Conectar `js/services/scanner.js` a MindAR/8th Wall real (reemplazar
   `match()` en cada subclase por la comparación contra el image-target).
2. Migrar a `ts/scannable.ts` con un bundler ligero (Vite) cuando el
   proyecto crezca — el diseño de clases ya es el mismo.
3. Implementar `data/schema.sql` en Postgres/Supabase y sustituir
   `ctx.state` (en memoria) por llamadas reales a esa API.
4. `ctx.state.user` hoy es un objeto simulado; conectar `login.js` a la
   tabla `users` cuando exista el backend.
