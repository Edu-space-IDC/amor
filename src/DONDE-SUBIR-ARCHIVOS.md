# 📍 ¿DÓNDE SUBO CADA ARCHIVO?

## 🎯 GUÍA VISUAL RÁPIDA

```
┌─────────────────────────────────────────────────────┐
│  ¿QUÉ QUIERO AGREGAR?                               │
└─────────────────────────────────────────────────────┘

🎤 TU FOTO DE AVATAR
   └─→ /public/avatar.jpg
       
🔊 TU AUDIO DE BIENVENIDA  
   └─→ /public/welcome-audio.mp3

🎵 UNA CANCIÓN
   └─→ /public/audios/nombre-cancion.mp3
   └─→ Luego edita: /components/SongsSection.tsx

📷 UNA FOTO
   └─→ /public/photos/nombre-foto.jpg
   └─→ Luego edita: /components/AlbumSection.tsx

📖 UN POEMA
   └─→ Edita directamente: /components/PoemsSection.tsx
```

---

## 🗂️ ESTRUCTURA COMPLETA DE CARPETAS

```
tu-proyecto/
│
├── 📁 public/
│   │
│   ├── 📄 avatar.jpg                    ← TU FOTO
│   ├── 🔊 welcome-audio.mp3             ← TU MENSAJE DE VOZ
│   │
│   ├── 📁 audios/
│   │   ├── 🎵 cancion1.mp3
│   │   ├── 🎵 cancion2.mp3
│   │   ├── 🎵 mi-amor.mp3
│   │   └── 🎵 para-ti.mp3
│   │
│   └── 📁 photos/
│       ├── 📷 foto1.jpg
│       ├── 📷 nosotros.jpg
│       ├── 📷 primer-beso.jpg
│       └── 📷 aniversario.jpg
│
└── 📁 components/
    ├── 📝 SongsSection.tsx              ← EDITAR PARA AGREGAR INFO DE CANCIONES
    ├── 📝 PoemsSection.tsx              ← EDITAR PARA AGREGAR POEMAS
    └── 📝 AlbumSection.tsx              ← EDITAR PARA AGREGAR INFO DE FOTOS
```

---

## 🎬 PASO A PASO: AGREGAR CONTENIDO

### 1️⃣ AGREGAR TU AVATAR Y AUDIO DE BIENVENIDA

```
1. Prepara tu foto → Nómbrala: avatar.jpg
2. Súbela a: /public/avatar.jpg

3. Graba tu mensaje → Nómbralo: welcome-audio.mp3
4. Súbelo a: /public/welcome-audio.mp3

✅ ¡YA ESTÁ! No necesitas editar código
```

---

### 2️⃣ AGREGAR UNA CANCIÓN

```
PARTE 1: SUBIR EL ARCHIVO
1. Prepara tu MP3 → Nómbralo: mi-cancion.mp3
2. Súbelo a: /public/audios/mi-cancion.mp3

PARTE 2: AGREGAR LA INFORMACIÓN
3. Abre: /components/SongsSection.tsx
4. Busca la línea que dice: const defaultSongs: Song[] = [
5. Agrega ANTES del último ]:

{
  id: 3,
  title: "Mi Canción",
  description: "Para ti con amor",
  audioUrl: "/audios/mi-cancion.mp3",
  date: "2024-12-03"
},

✅ ¡LISTO! Tu canción aparecerá
```

---

### 3️⃣ AGREGAR UN POEMA

```
SOLO UNA PARTE: EDITAR EL CÓDIGO
1. Abre: /components/PoemsSection.tsx
2. Busca la línea que dice: const defaultPoems: Poem[] = [
3. Agrega ANTES del último ]:

{
  id: 4,
  title: "Tu Nombre",
  content: "Primera línea\nSegunda línea\nTercera línea",
  date: "2024-12-03"
},

✅ ¡LISTO! Tu poema aparecerá
```

---

### 4️⃣ AGREGAR UNA FOTO

```
PARTE 1: SUBIR EL ARCHIVO
1. Prepara tu foto → Nómbrala: nuestra-foto.jpg
2. Súbela a: /public/photos/nuestra-foto.jpg

PARTE 2: AGREGAR LA INFORMACIÓN
3. Abre: /components/AlbumSection.tsx
4. Busca la línea que dice: const defaultPhotos: Photo[] = [
5. Agrega ANTES del último ]:

{
  id: 2,
  imageUrl: "/photos/nuestra-foto.jpg",
  caption: "Nuestro amor ❤️",
  date: "2024-12-03"
},

✅ ¡LISTO! Tu foto aparecerá en el álbum
```

---

## 🚨 ERRORES COMUNES

### ❌ ERROR: "El audio no se reproduce"
**PROBLEMA:** El nombre del archivo no coincide

**SOLUCIÓN:**
- Si escribiste: `audioUrl: "/audios/cancion1.mp3"`
- El archivo DEBE llamarse EXACTAMENTE: `cancion1.mp3`
- Y estar en: `/public/audios/cancion1.mp3`

---

### ❌ ERROR: "La foto no aparece"
**PROBLEMA:** La ruta es incorrecta

**SOLUCIÓN:**
- Si escribiste: `imageUrl: "/photos/foto1.jpg"`
- El archivo DEBE llamarse EXACTAMENTE: `foto1.jpg`
- Y estar en: `/public/photos/foto1.jpg`

---

### ❌ ERROR: "Mi avatar no se ve"
**PROBLEMA:** El nombre del archivo es incorrecto

**SOLUCIÓN:**
- El archivo DEBE llamarse EXACTAMENTE: `avatar.jpg`
- Y estar en: `/public/avatar.jpg`
- NO: `Avatar.jpg`, `mi-avatar.jpg`, `foto.jpg`

---

## 🎯 CHECKLIST ANTES DE SUBIR A VERCEL

Antes de desplegar tu página, verifica:

```
☐ Mi foto de avatar está en: /public/avatar.jpg
☐ Mi audio de bienvenida está en: /public/welcome-audio.mp3
☐ Todas mis canciones están en: /public/audios/
☐ Todas mis fotos están en: /public/photos/
☐ Edité /components/SongsSection.tsx con la info de mis canciones
☐ Edité /components/PoemsSection.tsx con mis poemas
☐ Edité /components/AlbumSection.tsx con la info de mis fotos
☐ Los nombres de archivos NO tienen espacios ni tildes
☐ Todos los nombres coinciden exactamente
```

---

## 💡 MÉTODO ALTERNATIVO: DEVTOOLS

Si no quieres editar código, usa DevTools:

```javascript
// 1. Abre la consola (F12)
enableDevMode()

// 2. Recarga la página (F5)

// 3. Usa los botones "Agregar ___" que aparecen
```

**⚠️ NOTA:** El contenido con DevTools solo se guarda en tu navegador. Para que tu novia lo vea, debes editar los archivos de código.

---

## 📚 MÁS INFORMACIÓN

- **Guía completa:** `/GUIA-COMPLETA.md`
- **DevTools detallado:** `/COMO-USAR-DEVTOOLS.md`
- **Estructura de public:** `/public/README.md`

---

¡Ahora sabes exactamente dónde va cada archivo! 🎉💕
