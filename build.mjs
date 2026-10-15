// Genera la carpeta "dist" para Vercel: la invitación (/) y su copia en inglés (/en),
// que solo cambia el idioma y la vista previa al compartir el enlace (WhatsApp, iMessage…).
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
cpSync("media", "dist/media", { recursive: true });
cpSync("preview.jpg", "dist/preview.jpg");
const html = readFileSync("index.html", "utf8");
writeFileSync("dist/index.html", html);

const cambios = [
  ['<html lang="es">', '<html lang="en">'],
  ["<title>Boda de Benjamín &amp; Talina</title>", "<title>Benjamín &amp; Talina's Wedding</title>"],
  ['content="Toca para abrir tu invitación y descubrir todos los detalles de nuestra boda."', 'content="Tap to open your invitation and discover all the details of our wedding."'],
  ['content="¡Estás invitado a nuestra boda! 💍"', 'content="You\'re invited to our wedding! 💍"'],
  ['content="Toca para abrir tu invitación y descubrir todos los detalles."', 'content="Tap to open your invitation and discover all the details."'],
  ['content="Benjamín y Talina caminando de la mano en el jardín"', 'content="Benjamín and Talina walking hand in hand in the garden"'],
  ['<meta property="og:site_name" content="Boda de Benjamín &amp; Talina" />', '<meta property="og:site_name" content="Benjamín &amp; Talina\'s Wedding" />\n  <meta property="og:locale" content="en_US" />'],
];
let en = html;
for (const [a, b] of cambios) {
  if (!en.includes(a)) throw new Error("No se encontró en index.html: " + a);
  en = en.replace(a, b);
}
writeFileSync("dist/en.html", en);
console.log("dist listo: index.html + en.html");
