# 🎯 PASO A PASO: Cómo Agregar Archivos Multimedia

## ⚠️ PROBLEMA ACTUAL

Tu código está **100% CORRECTO**, pero los archivos multimedia **NO EXISTEN** en tu proyecto.

Es como tener un álbum de fotos vacío - el álbum funciona, solo necesita las fotos.

---

## 📍 DÓNDE ESTÁS AHORA

```
❌ /public/avatar.jpg - NO EXISTE
❌ /public/welcome-audio.mp3 - NO EXISTE
❌ /public/audios/cancion1.mp3 - NO EXISTE
❌ /public/audios/cancion2.mp3 - NO EXISTE
❌ /public/photos/foto1.jpg - NO EXISTE
❌ /public/photos/foto2.jpg - NO EXISTE
❌ /public/photos/foto3.jpg - NO EXISTE
```

---

## 🎯 SOLUCIÓN: Agregar los Archivos

Tienes **3 opciones** para agregar archivos:

---

## OPCIÓN 1: VS Code (Desarrollo Local) ⭐ MÁS FÁCIL

### Paso 1: Abre tu proyecto en VS Code

### Paso 2: Prepara tus archivos

**Tu foto de avatar:**
- Busca una foto tuya
- Renómbrala a: `avatar.jpg` (exactamente así, minúsculas)

**Tu audio de bienvenida:**
- Graba tu mensaje
- Convierte a MP3 si es necesario
- Renómbralo a: `welcome-audio.mp3` (exactamente así)

**Tus canciones:**
- Prepara tus canciones en MP3
- Renómbralas a: `cancion1.mp3`, `cancion2.mp3`, etc.

**Tus fotos:**
- Selecciona las fotos que quieres
- Renómbralas a: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, etc.

### Paso 3: Arrastra los archivos

En VS Code, arrastra:
- `avatar.jpg` → carpeta `/public/` (raíz de public)
- `welcome-audio.mp3` → carpeta `/public/` (raíz de public)
- `cancion1.mp3, cancion2.mp3, ...` → carpeta `/public/audios/`
- `foto1.jpg, foto2.jpg, foto3.jpg, ...` → carpeta `/public/photos/`

### Paso 4: Verifica

Tu estructura debería verse así:

```
public/
├── avatar.jpg ✅
├── welcome-audio.mp3 ✅
├── audios/
│   ├── cancion1.mp3 ✅
│   └── cancion2.mp3 ✅
└── photos/
    ├── foto1.jpg ✅
    ├── foto2.jpg ✅
    └── foto3.jpg ✅
```

### Paso 5: Recarga tu app

- Guarda todo (Ctrl+S)
- Recarga el navegador (F5)
- ¡Debería funcionar! 🎉

---

## OPCIÓN 2: GitHub Web Interface

Si ya subiste tu proyecto a GitHub:

### Para avatar y welcome-audio:

1. Ve a tu repositorio en GitHub
2. Navega a la carpeta `/public/`
3. Clic en **"Add file"** → **"Upload files"**
4. Arrastra `avatar.jpg` y `welcome-audio.mp3`
5. Escribe un mensaje: "Agregando avatar y audio"
6. Clic en **"Commit changes"**

### Para canciones:

1. Ve a tu repositorio en GitHub
2. Navega a `/public/audios/`
3. Clic en **"Add file"** → **"Upload files"**
4. Arrastra `cancion1.mp3`, `cancion2.mp3`, etc.
5. Escribe un mensaje: "Agregando canciones"
6. Clic en **"Commit changes"**

### Para fotos:

1. Ve a tu repositorio en GitHub
2. Navega a `/public/photos/`
3. Clic en **"Add file"** → **"Upload files"**
4. Arrastra `foto1.jpg`, `foto2.jpg`, etc.
5. Escribe un mensaje: "Agregando fotos"
6. Clic en **"Commit changes"**

---

## OPCIÓN 3: Terminal / Línea de Comandos

Si sabes usar Git:

```bash
# 1. Ve a tu carpeta del proyecto
cd tu-proyecto

# 2. Copia tus archivos a las carpetas correctas
cp /ruta/a/tu/foto.jpg public/avatar.jpg
cp /ruta/a/tu/audio.mp3 public/welcome-audio.mp3
cp /ruta/a/cancion1.mp3 public/audios/
cp /ruta/a/cancion2.mp3 public/audios/
cp /ruta/a/foto1.jpg public/photos/
cp /ruta/a/foto2.jpg public/photos/
cp /ruta/a/foto3.jpg public/photos/

# 3. Commit y push
git add public/
git commit -m "Agregando archivos multimedia"
git push
```

---

## ⚠️ ERRORES COMUNES

### ❌ Error: "Subí el archivo pero no funciona"

**Causas posibles:**

1. **Nombre incorrecto:**
   - Pusiste: `Avatar.jpg` 
   - Debe ser: `avatar.jpg` (minúsculas)

2. **Ubicación incorrecta:**
   - Pusiste: `/audios/cancion1.mp3`
   - Debe ser: `/public/audios/cancion1.mp3`

3. **Nombre no coincide con JSON:**
   - En JSON dice: `"audioUrl": "/audios/mi-cancion.mp3"`
   - Pero el archivo se llama: `cancion1.mp3`
   - Solución: Cambiar el nombre del archivo o cambiar el JSON

---

## 🔍 VERIFICAR QUE TODO ESTÉ BIEN

### Checklist de nombres:

```
ARCHIVO                           NOMBRE EXACTO
────────────────────────────────────────────────────────
Avatar                            avatar.jpg
Audio bienvenida                  welcome-audio.mp3
Canción 1 (según songs.json)      cancion1.mp3
Canción 2 (según songs.json)      cancion2.mp3
Foto 1 (según photos.json)        foto1.jpg
Foto 2 (según photos.json)        foto2.jpg
Foto 3 (según photos.json)        foto3.jpg
```

### Checklist de ubicaciones:

```
✅ /public/avatar.jpg
✅ /public/welcome-audio.mp3
✅ /public/audios/cancion1.mp3
✅ /public/audios/cancion2.mp3
✅ /public/photos/foto1.jpg
✅ /public/photos/foto2.jpg
✅ /public/photos/foto3.jpg
```

---

## 💡 TIPS IMPORTANTES

### Para nombres de archivos:

✅ **USAR:**
- Minúsculas: `cancion.mp3`
- Guiones: `mi-cancion.mp3`
- Sin espacios: `primera-cancion.mp3`

❌ **NO USAR:**
- Mayúsculas: `Cancion.mp3`
- Espacios: `mi cancion.mp3`
- Tildes: `canción.mp3`
- Caracteres especiales: `canción_2024@.mp3`

### Para tamaños:

- **MP3:** Máximo 10MB por archivo
- **Fotos:** Máximo 3MB por archivo
- **Avatar:** Idealmente 400x400px

### Para formatos:

- **Audio:** MP3, WAV, OGG
- **Fotos:** JPG, PNG, GIF
- **Avatar:** JPG o PNG

---

## 🆘 SI AÚN NO FUNCIONA

1. **Abre la consola del navegador** (F12)
2. **Ve a la pestaña "Console"**
3. **Busca errores** que digan "404" o "Not Found"
4. Esos errores te dirán exactamente qué archivo falta

Ejemplo de error:
```
GET http://localhost:3000/audios/cancion1.mp3 404 (Not Found)
```

Significa que el archivo `cancion1.mp3` no está en `/public/audios/`

---

## ✅ CUANDO TODO FUNCIONE

Deberías ver:
- ✅ Tu foto en la pantalla de bienvenida
- ✅ El botón de audio funciona y se reproduce
- ✅ Las canciones se reproducen en la sección de música
- ✅ Las fotos se muestran en el álbum

---

¡Sigue estos pasos y todo funcionará perfectamente! 🎉💕
