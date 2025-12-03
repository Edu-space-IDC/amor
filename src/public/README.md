# 📁 Carpeta Public

Esta carpeta contiene todos los archivos estáticos de tu aplicación (imágenes, audios, etc.)

## 📂 Estructura de Carpetas

```
public/
├── avatar.jpg              ← Tu foto para la pantalla de bienvenida
├── welcome-audio.mp3       ← Tu mensaje de bienvenida grabado
├── audios/                 ← Carpeta para tus canciones
│   ├── cancion1.mp3
│   ├── cancion2.mp3
│   └── ...
└── photos/                 ← Carpeta para las fotos del álbum
    ├── foto1.jpg
    ├── foto2.jpg
    └── ...
```

## 🎤 AUDIO DE BIENVENIDA

**Archivo:** `avatar.jpg` y `welcome-audio.mp3`

### Cómo agregar tu audio de bienvenida:

1. **Graba tu mensaje:**
   - Abre tu grabadora de voz (teléfono, PC, etc.)
   - Di: "Hola mi amor, te hice esto para demostrarte cuánto te amo, así que, continuemos"
   - Guarda el archivo

2. **Convierte a MP3** (si es necesario):
   - Usa un conversor online como: https://online-audio-converter.com
   - Convierte a MP3

3. **Sube el archivo:**
   - Nómbralo EXACTAMENTE: `welcome-audio.mp3`
   - Súbelo aquí: `/public/welcome-audio.mp3`

### Cómo agregar tu avatar (foto):

1. **Prepara una foto tuya:**
   - Preferiblemente cuadrada o de tu cara
   - Tamaño recomendado: 400x400px o similar

2. **Sube el archivo:**
   - Nómbrala EXACTAMENTE: `avatar.jpg`
   - Súbela aquí: `/public/avatar.jpg`

---

## 🎵 AGREGAR CANCIONES

1. Graba o prepara tus canciones en formato MP3
2. Súbelas a `/public/audios/nombre-cancion.mp3`
3. Luego edita `/components/SongsSection.tsx` para que aparezcan

**Ejemplo:**
```
/public/audios/te-amo.mp3
/public/audios/mi-amor.mp3
/public/audios/para-ti.mp3
```

---

## 📷 AGREGAR FOTOS

1. Prepara tus fotos (JPG, PNG)
2. Súbelas a `/public/photos/nombre-foto.jpg`
3. Luego edita `/components/AlbumSection.tsx` para que aparezcan

**Ejemplo:**
```
/public/photos/nosotros1.jpg
/public/photos/primer-beso.jpg
/public/photos/aniversario.jpg
```

---

## ⚠️ NOMBRES DE ARCHIVOS

**IMPORTANTE:**
- ❌ NO uses espacios: `mi cancion.mp3`
- ✅ USA guiones: `mi-cancion.mp3`
- ❌ NO uses tildes: `canción.mp3`
- ✅ USA sin tildes: `cancion.mp3`
- ❌ NO uses mayúsculas innecesarias: `MiCancion.mp3`
- ✅ USA minúsculas: `mi-cancion.mp3`

---

## 🚀 SUBIR A VERCEL

Cuando subas tu proyecto a Vercel, todos estos archivos se subirán automáticamente. Solo asegúrate de que estén en las carpetas correctas antes de hacer el deploy.

---

¡Listo! Ahora solo necesitas agregar tus archivos aquí 💕
