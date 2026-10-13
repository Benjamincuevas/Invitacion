# Invitación · Benjamín & Talina

Invitación web de la boda (7 de noviembre de 2026).

- `index.html` — la invitación completa (fotos, video y música incluidos).
- Cada invitado tiene su enlace personal: `https://<dominio>/?i=CODIGO`.
  Al abrirlo ve su nombre en el sobre y confirma ahí mismo.
- Panel de los novios: `https://<dominio>/?panel` (pide la clave).
- Las respuestas se guardan en Supabase (tablas `invitados`, `confirmaciones`).

Se publica automáticamente en Vercel con cada cambio en la rama `main`.
