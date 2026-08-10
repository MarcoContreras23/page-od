# Landing · Ortodoncia Dra. Viviana Mogollón

Landing page de tratamiento de ortodoncia (Universidad Santo Tomás), hecha
con React + Vite, lista para publicar gratis en GitHub Pages.

## 1. Instalar dependencias

```bash
npm install
```

## 2. Editar el contenido

Todo el contenido está en `src/App.jsx` (textos, botones, número de
WhatsApp) y `src/App.css` (colores, tipografías, espaciados). Los colores
base están definidos como variables en `src/index.css`:

```css
--navy: #0a1650;     /* texto principal / fondo oscuro */
--paper: #eef2fa;    /* fondo claro */
--blue: #1a5ae0;     /* color de acento */
--gold: #f2b705;     /* detalle (logo Universidad Santo Tomás) */
--whatsapp: #25d366; /* botón y CTA de WhatsApp */
```

### Botón de WhatsApp

El número de contacto está centralizado en `src/App.jsx` en la constante
`WHATSAPP_NUMBER` (formato internacional sin signos, ej. `573157292452`).
Cámbialo ahí si el número cambia; se usa tanto en el botón flotante como en
los CTA del hero y del pie de página.

## 3. Ver en local

```bash
npm run dev
```

Abre la URL que te muestra la terminal (normalmente `http://localhost:5173`).

## 4. Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `mi-landing`.
2. En `vite.config.js`, cambia `base: '/mi-landing/'` por
   `base: '/NOMBRE-EXACTO-DE-TU-REPO/'`.
3. En `package.json`, cambia `"homepage"` por
   `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO`.
4. Sube el código:
   ```bash
   git init
   git add .
   git commit -m "Landing inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPO.git
   git push -u origin main
   ```
5. Publica:
   ```bash
   npm run deploy
   ```
   Esto genera el sitio y lo sube a la rama `gh-pages`.
6. En GitHub, ve a **Settings → Pages**, y en "Branch" selecciona `gh-pages`
   (carpeta `/root`). Guarda.
7. En 1-2 minutos tu landing estará en:
   `https://TU-USUARIO.github.io/NOMBRE-DE-TU-REPO/`

Cada vez que quieras actualizar el sitio, repite el paso `npm run deploy`.

## Dominio propio (opcional)

Si compras un dominio (por ejemplo en Cloudflare Registrar, ~10 USD/año):

1. Crea un archivo `public/CNAME` con tu dominio dentro, por ejemplo:
   ```
   www.tudominio.com
   ```
2. En tu proveedor de dominio, apunta un registro CNAME hacia
   `tu-usuario.github.io`.
3. Vuelve a correr `npm run deploy`.
