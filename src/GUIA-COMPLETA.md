# 💝 GUÍA COMPLETA - Página Web Romántica

## 📋 Tabla de Contenidos
1. [Estructura del Proyecto](#estructura)
2. [Agregar Audio de Bienvenida y Avatar](#bienvenida)
3. [Agregar Canciones](#canciones)
4. [Agregar Poemas](#poemas)
5. [Agregar Fotos](#fotos)
6. [Usar DevTools (Modo Desarrollador)](#devtools)
7. [Desplegar en Vercel](#vercel)

---

## 📁 ESTRUCTURA DEL PROYECTO {#estructura}

```
tu-proyecto/
├── public/                          ← Archivos estáticos (audios, fotos, etc.)
│   ├── avatar.jpg                  ← Tu foto (pantalla de bienvenida)
│   ├── welcome-audio.mp3           ← Tu mensaje de voz
│   ├── audios/                     ← Tus canciones
│   │   ├── cancion1.mp3
│   │   └── cancion2.mp3
│   └── photos/                     ← Fotos del álbum
│       ├── foto1.jpg
│       └── foto2.jpg
│
├── components/                      ← Componentes React
│   ├── WelcomeScreen.tsx           ← Pantalla de bienvenida
│   ├── MainScreen.tsx              ← Pantalla principal
│   ├── SongsSection.tsx            ← Sección de canciones (EDITAR AQUÍ)
│   ├── PoemsSection.tsx            ← Sección de poemas (EDITAR AQUÍ)
│   └── AlbumSection.tsx            ← Sección de fotos (EDITAR AQUÍ)
│
└── App.tsx                          ← Componente principal
```

---

## 🎤 AGREGAR AUDIO DE BIENVENIDA Y AVATAR {#bienvenida}

### Avatar (Tu foto)

1. **Prepara una foto tuya**
   - Preferiblemente cuadrada (ej: 400x400px)
   - Formato: JPG o PNG
   - Tamaño: Menos de 1MB

2. **Nombre el archivo EXACTAMENTE:**
   ```
   avatar.jpg
   ```

3. **Súbelo a:**
   ```
   /public/avatar.jpg
   ```

### Audio de Bienvenida

1. **Graba tu mensaje:**
   - Con tu grabadora de voz (teléfono, PC, etc.)
   - Di: *"Hola mi amor, te hice esto para demostrarte cuánto te amo, así que, continuemos"*
   - O personaliza el mensaje como quieras

2. **Convierte a MP3** (si es necesario):
   - Usa: https://online-audio-converter.com

3. **Nombre el archivo EXACTAMENTE:**
   ```
   welcome-audio.mp3
   ```

4. **Súbelo a:**
   ```
   /public/welcome-audio.mp3
   ```

---

## 🎵 AGREGAR CANCIONES {#canciones}

### Método 1: DevTools (Más Fácil)

1. Abre la consola del navegador (`F12`)
2. Escribe: `enableDevMode()`
3. Recarga la página (`F5`)
4. Ve a la sección "Canciones"
5. Clic en **"Agregar Canción"**
6. Sube tu archivo MP3 y completa los datos
7. ¡Listo! Se guarda automáticamente

### Método 2: Editar Código (Permanente)

**Paso 1:** Sube tu archivo MP3

```
/public/audios/mi-cancion.mp3
```

**Paso 2:** Edita `/components/SongsSection.tsx`

Busca el array `defaultSongs` y agrega:

```typescript
{
  id: 3,
  title: "Mi Canción Para Ti",
  description: "Dedicada con todo mi corazón",
  audioUrl: "/audios/mi-cancion.mp3",
  date: "2024-12-03"
}
```

**Ejemplo completo:**
```typescript
const defaultSongs: Song[] = [
  {
    id: 1,
    title: "Mi Primera Canción Para Ti",
    description: "Una canción especial",
    audioUrl: "/audios/cancion1.mp3",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Nuestro Amor",
    description: "Dedicada a ti mi amor",
    audioUrl: "/audios/cancion2.mp3",
    date: "2024-02-14"
  },
  {
    id: 3,
    title: "Mi Canción Para Ti",
    description: "Dedicada con todo mi corazón",
    audioUrl: "/audios/mi-cancion.mp3",
    date: "2024-12-03"
  }
];
```

---

## 📖 AGREGAR POEMAS {#poemas}

### Método 1: DevTools (Más Fácil)

1. Abre la consola del navegador (`F12`)
2. Escribe: `enableDevMode()`
3. Recarga la página (`F5`)
4. Ve a la sección "Poemas"
5. Clic en **"Agregar Poema"**
6. Escribe tu poema y completa los datos
7. ¡Listo!

### Método 2: Editar Código (Permanente)

Edita `/components/PoemsSection.tsx`

Busca el array `defaultPoems` y agrega:

```typescript
{
  id: 4,
  title: "Mi Nuevo Poema",
  content: "Primera línea del poema\nSegunda línea del poema\nTercera línea",
  date: "2024-12-03"
}
```

**Ejemplo completo:**
```typescript
const defaultPoems: Poem[] = [
  {
    id: 1,
    title: "Tus Ojos",
    content: "Hay luces que nunca quisiera que se apaguen,\ntus ojos, por ejemplo.",
    date: "2024-12-03"
  },
  {
    id: 2,
    title: "Tu Sonrisa",
    content: "Tu sonrisa ilumina mis días,\nTus ojos son mi guía,\nEn ti encontré la alegría,\nEres todo lo que quería.",
    date: "2024-01-20"
  },
  {
    id: 3,
    title: "Juntos",
    content: "Cada momento a tu lado,\nEs un sueño realizado,\nContigo he encontrado,\nEl amor que había buscado.",
    date: "2024-02-10"
  },
  {
    id: 4,
    title: "Mi Nuevo Poema",
    content: "Primera línea del poema\nSegunda línea del poema\nTercera línea",
    date: "2024-12-03"
  }
];
```

**💡 Tip:** Usa `\n` para crear saltos de línea entre versos

---

## 📷 AGREGAR FOTOS {#fotos}

### Método 1: DevTools (Más Fácil)

1. Abre la consola del navegador (`F12`)
2. Escribe: `enableDevMode()`
3. Recarga la página (`F5`)
4. Ve a la sección "Nuestro Álbum"
5. Clic en **"Agregar Foto"**
6. Sube tu foto y agrega una descripción
7. ¡Listo!

### Método 2: Editar Código (Permanente)

**Paso 1:** Sube tu foto

```
/public/photos/nuestra-foto.jpg
```

**Paso 2:** Edita `/components/AlbumSection.tsx`

Busca el array `defaultPhotos` y agrega:

```typescript
{
  id: 2,
  imageUrl: "/photos/nuestra-foto.jpg",
  caption: "Nuestro primer día juntos ❤️",
  date: "2024-12-03"
}
```

---

## 🛠️ USAR DEVTOOLS (MODO DESARROLLADOR) {#devtools}

### ¿Qué es DevTools?

Es un modo especial que te permite agregar contenido (poemas, canciones, fotos) directamente desde la interfaz web, sin editar código.

### Activar DevTools

1. **Abre la Consola del Navegador:**
   - Presiona `F12`
   - O clic derecho → Inspeccionar → Console

2. **Escribe y presiona Enter:**
   ```javascript
   enableDevMode()
   ```

3. **Verás el mensaje:**
   ```
   ✅ Modo Desarrollador Activado
   🔄 Recarga la página para ver los botones
   ```

4. **Recarga la página:**
   - Presiona `F5` o `Ctrl + R`

5. **¡Listo!** Verás botones nuevos:
   - 🟣 "Agregar Poema" en Poemas
   - 🔴 "Agregar Canción" en Canciones
   - 🔵 "Agregar Foto" en Álbum

### Desactivar DevTools

```javascript
disableDevMode()
```

### ⚠️ Importante sobre DevTools

- El contenido se guarda en **localStorage** (solo en tu navegador)
- Si tu novia abre la página, NO verá el contenido agregado con DevTools
- Para contenido permanente, edita los archivos de código

**📖 Guía detallada:** Lee `/COMO-USAR-DEVTOOLS.md`

---

## 🚀 DESPLEGAR EN VERCEL {#vercel}

### Primera Vez

1. **Crea cuenta en GitHub** (si no tienes)
   - Ve a: https://github.com
   - Regístrate gratis

2. **Sube tu proyecto a GitHub**
   - Crea un nuevo repositorio
   - Sube todos tus archivos

3. **Crea cuenta en Vercel** (si no tienes)
   - Ve a: https://vercel.com
   - Regístrate con tu cuenta de GitHub

4. **Importa tu proyecto**
   - Clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Clic en "Deploy"
   - ¡Espera 1-2 minutos!

5. **¡Listo!** Vercel te dará una URL como:
   ```
   https://tu-proyecto.vercel.app
   ```

### Actualizar Contenido

Hay dos formas:

#### Opción A: Desde GitHub (Web)
1. Ve a tu repositorio en GitHub
2. Navega al archivo que quieres editar
3. Clic en el ícono del lápiz ✏️
4. Haz tus cambios
5. Clic en "Commit changes"
6. Vercel actualiza automáticamente en 1-2 minutos

#### Opción B: Subir Archivos (Audios, Fotos)
1. Ve a tu repositorio en GitHub
2. Navega a la carpeta `/public/audios/` o `/public/photos/`
3. Clic en "Add file" → "Upload files"
4. Arrastra tus archivos
5. Clic en "Commit changes"
6. Vercel actualiza automáticamente

---

## ⚠️ REGLAS IMPORTANTES DE NOMBRES

### ✅ HACER:
```
mi-cancion.mp3
nuestra-foto.jpg
primer-beso.png
te-amo.mp3
```

### ❌ NO HACER:
```
mi cancion.mp3        ← Espacios
canción.mp3           ← Tildes
MiCancion.mp3         ← Mayúsculas innecesarias
mi_canción@2024.mp3   ← Caracteres especiales
```

---

## 💡 TIPS Y CONSEJOS

### Para Audios:
- Calidad mínima: 128kbps
- Formato preferido: MP3
- Tamaño máximo: 10MB por canción

### Para Fotos:
- Optimiza con: https://tinypng.com
- Fotos cuadradas se ven mejor
- Tamaño recomendado: 1000x1000px
- Tamaño máximo: 3MB por foto

### Para Poemas:
- Usa `\n` para saltos de línea
- Mantén los versos cortos
- Usa emojis si quieres ❤️

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### El audio de bienvenida no suena
- Verifica que el archivo se llame EXACTAMENTE `welcome-audio.mp3`
- Verifica que esté en `/public/welcome-audio.mp3`
- Verifica que sea formato MP3

### Las canciones no se reproducen
- Verifica que el nombre del archivo coincida con `audioUrl`
- Ejemplo: Si dice `audioUrl: "/audios/cancion1.mp3"`, el archivo debe ser `/public/audios/cancion1.mp3`

### Las fotos no aparecen
- Verifica que el nombre coincida con `imageUrl`
- Verifica que las fotos estén en `/public/photos/`

### DevTools no funciona
- Asegúrate de escribir exactamente: `enableDevMode()`
- Recarga la página después de activar
- Revisa que no haya errores en la consola

---

## 📞 AYUDA ADICIONAL

Si algo no funciona:

1. Revisa las guías específicas:
   - `/public/README.md` - Estructura general
   - `/public/audios/README.md` - Para canciones
   - `/public/photos/README.md` - Para fotos
   - `/COMO-USAR-DEVTOOLS.md` - Para DevTools

2. Revisa la consola del navegador (`F12`) para ver errores

3. Verifica que todos los nombres de archivos coincidan exactamente

---

¡Disfruta creando tu página romántica! 💕✨

**Hecho con amor ❤️**
