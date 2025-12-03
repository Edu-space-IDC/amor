# 💝 Página Web Romántica - Instrucciones

## 🎯 ¿Cómo funciona?

Tu página web tiene **DOS formas** de agregar contenido:

1. **📄 Editando archivos JSON** (Permanente - para cuando subas a Vercel)
2. **🛠️ Usando DevTools** (Temporal - solo para pruebas en tu navegador)

---

## 📁 Estructura de Archivos

```
tu-proyecto/
├── public/                      ← Archivos estáticos
│   ├── avatar.jpg              ← Tu foto
│   ├── welcome-audio.mp3       ← Tu mensaje de voz
│   ├── audios/                 ← Tus canciones MP3
│   └── photos/                 ← Fotos del álbum
│
├── data/                        ← Archivos JSON (EDITAR AQUÍ)
│   ├── songs.json              ← Info de canciones
│   ├── poems.json              ← Tus poemas
│   └── photos.json             ← Info de fotos
│
└── components/                  ← Componentes React
```

---

## 🎵 AGREGAR CANCIONES

### Paso 1: Sube tu archivo MP3
Coloca tu canción en:
```
/public/audios/mi-cancion.mp3
```

### Paso 2: Edita `/data/songs.json`
Agrega tu canción al array:

```json
[
  {
    "id": 1,
    "title": "Mi Primera Canción Para Ti",
    "description": "Una canción especial",
    "audioUrl": "/audios/cancion1.mp3",
    "date": "2024-01-15"
  },
  {
    "id": 2,
    "title": "Nuestro Amor",
    "description": "Dedicada a ti mi amor",
    "audioUrl": "/audios/cancion2.mp3",
    "date": "2024-02-14"
  },
  {
    "id": 3,
    "title": "Tu Nueva Canción",
    "description": "Para ti con todo mi amor",
    "audioUrl": "/audios/mi-cancion.mp3",
    "date": "2024-12-03"
  }
]
```

⚠️ **IMPORTANTE:** El `audioUrl` debe coincidir EXACTAMENTE con el nombre del archivo.

---

## 📖 AGREGAR POEMAS

### Edita `/data/poems.json`

Agrega tu poema al array:

```json
[
  {
    "id": 1,
    "title": "Tus Ojos",
    "content": "Hay luces que nunca quisiera que se apaguen,\ntus ojos, por ejemplo.",
    "date": "2024-12-03"
  },
  {
    "id": 2,
    "title": "Mi Nuevo Poema",
    "content": "Primera línea del poema\nSegunda línea\nTercera línea\nCuarta línea",
    "date": "2024-12-03"
  }
]
```

💡 **TIP:** Usa `\n` para crear saltos de línea entre versos.

---

## 📷 AGREGAR FOTOS

### Paso 1: Sube tu foto
Coloca tu imagen en:
```
/public/photos/nuestra-foto.jpg
```

### Paso 2: Edita `/data/photos.json`
Agrega tu foto al array:

```json
[
  {
    "id": 1,
    "imageUrl": "/photos/foto1.jpg",
    "caption": "Nuestro amor es infinito ❤️",
    "date": "2024-12-03"
  },
  {
    "id": 2,
    "imageUrl": "/photos/nuestra-foto.jpg",
    "caption": "Un momento especial juntos",
    "date": "2024-12-03"
  }
]
```

---

## 🎤 AGREGAR AUDIO DE BIENVENIDA Y AVATAR

### Avatar (Tu foto)
1. Prepara una foto tuya (preferiblemente cuadrada)
2. Nómbrala EXACTAMENTE: `avatar.jpg`
3. Súbela a: `/public/avatar.jpg`

### Audio de Bienvenida
1. Graba tu mensaje: *"Hola mi amor, te hice esto para demostrarte cuánto te amo, así que, continuemos"*
2. Nómbralo EXACTAMENTE: `welcome-audio.mp3`
3. Súbelo a: `/public/welcome-audio.mp3`

---

## 🛠️ USAR DEVTOOLS (OPCIONAL)

Si quieres probar cómo se ve antes de editar los archivos JSON:

1. Abre la consola del navegador (`F12`)
2. Escribe: `enableDevMode()`
3. Recarga la página (`F5`)
4. Verás botones **"Agregar ___"** en cada sección

⚠️ **NOTA:** El contenido agregado con DevTools solo se guarda en tu navegador. Para que tu novia lo vea cuando esté desplegado, debes editar los archivos JSON.

---

## ⚠️ REGLAS IMPORTANTES

### Nombres de Archivos

✅ **CORRECTO:**
```
mi-cancion.mp3
nuestra-foto.jpg
primer-beso.png
```

❌ **INCORRECTO:**
```
mi cancion.mp3        ← Espacios
canción.mp3           ← Tildes
MiCancion.mp3         ← Mayúsculas innecesarias
```

### IDs en JSON

- Cada elemento debe tener un ID único
- Los IDs deben ser números consecutivos: 1, 2, 3, 4...
- No repitas IDs

### Comas en JSON

```json
[
  { "id": 1, "title": "..." },    ← Coma aquí
  { "id": 2, "title": "..." },    ← Coma aquí
  { "id": 3, "title": "..." }     ← NO coma en el último
]
```

---

## 🚀 SUBIR A VERCEL

### Primera vez:

1. Sube tu proyecto a GitHub
2. Conecta tu cuenta de GitHub con Vercel
3. Importa tu repositorio
4. ¡Deploy automático!

### Actualizar contenido:

1. Ve a tu repositorio en GitHub
2. Edita el archivo JSON que necesites (botón del lápiz ✏️)
3. Haz commit de los cambios
4. Vercel actualiza automáticamente en 1-2 minutos

### Subir archivos (audios, fotos):

1. Ve a GitHub → carpeta `/public/audios/` o `/public/photos/`
2. Clic en "Add file" → "Upload files"
3. Arrastra tus archivos MP3 o JPG
4. Haz commit
5. Vercel actualiza automáticamente

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### ❌ "La canción no aparece"

**Causa:** Error en el archivo JSON

**Solución:**
1. Verifica que `/data/songs.json` esté bien formateado
2. Usa un validador JSON: https://jsonlint.com
3. Revisa que no falten comas o llaves

### ❌ "El audio no se reproduce"

**Causa:** El nombre del archivo no coincide

**Solución:**
- Si en `songs.json` pusiste: `"audioUrl": "/audios/cancion1.mp3"`
- El archivo DEBE llamarse: `cancion1.mp3`
- Y estar en: `/public/audios/cancion1.mp3`

### ❌ "Las fotos no se ven"

**Causa:** Ruta incorrecta

**Solución:**
- Si en `photos.json` pusiste: `"imageUrl": "/photos/foto1.jpg"`
- El archivo DEBE llamarse: `foto1.jpg`
- Y estar en: `/public/photos/foto1.jpg`

---

## 📚 MÁS GUÍAS

- **`/GUIA-COMPLETA.md`** - Guía detallada con todos los pasos
- **`/DONDE-SUBIR-ARCHIVOS.md`** - Guía visual rápida
- **`/COMO-USAR-DEVTOOLS.md`** - Detalles del modo desarrollador
- **`/public/README.md`** - Info sobre archivos estáticos

---

## ✅ CHECKLIST FINAL

Antes de subir a Vercel, verifica:

```
☐ Avatar está en: /public/avatar.jpg
☐ Audio de bienvenida está en: /public/welcome-audio.mp3
☐ Todas las canciones están en: /public/audios/
☐ Todas las fotos están en: /public/photos/
☐ /data/songs.json está actualizado y sin errores
☐ /data/poems.json está actualizado y sin errores
☐ /data/photos.json está actualizado y sin errores
☐ Todos los nombres de archivos coinciden con los JSON
☐ No hay espacios ni tildes en nombres de archivos
☐ Todos los JSON están bien formateados (valida en jsonlint.com)
```

---

¡Tu página web está lista para enamorar! 💕✨

**Hecho con amor ❤️**
