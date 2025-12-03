# 🎵 Carpeta de Audios / Canciones

## ¿Qué va aquí?

Aquí van todos los archivos MP3 de tus canciones que quieres compartir con tu novia.

## 📝 Cómo Agregar una Canción

### Paso 1: Prepara tu canción
- Graba o prepara tu canción
- Guárdala en formato MP3, WAV u OGG
- Nómbrala sin espacios ni tildes, ejemplo: `mi-cancion-favorita.mp3`

### Paso 2: Sube el archivo aquí
Coloca tu archivo MP3 en esta carpeta:
```
/public/audios/mi-cancion-favorita.mp3
```

### Paso 3: Agrega la información en el código
Abre `/components/SongsSection.tsx` y agrega tu canción al array:

```typescript
{
  id: 3,
  title: "Mi Canción Favorita",
  description: "Una canción especial para ti",
  audioUrl: "/audios/mi-cancion-favorita.mp3",
  date: "2024-12-03"
}
```

## 📁 Ejemplo de Estructura

```
/public/audios/
├── cancion1.mp3
├── cancion2.mp3
├── te-amo.mp3
├── mi-amor-eterno.mp3
└── para-ti.mp3
```

## ⚠️ Reglas Importantes

✅ **HACER:**
- Usar nombres descriptivos: `mi-primera-cancion.mp3`
- Usar solo letras minúsculas
- Usar guiones en lugar de espacios
- Formato MP3 preferiblemente

❌ **NO HACER:**
- Espacios: `mi cancion.mp3` ✗
- Tildes: `canción.mp3` ✗
- Mayúsculas innecesarias: `MiCancion.mp3` ✗
- Caracteres especiales: `mi_canción@2024.mp3` ✗

## 💡 Consejos

- **Calidad de audio:** Usa al menos 128kbps para buena calidad
- **Tamaño:** Procura que los archivos no sean muy pesados (máximo 10MB)
- **Nombre coincidente:** El nombre en `audioUrl` debe ser EXACTAMENTE igual al archivo

---

¡Sube tus canciones y enamórala con tu voz! 🎤💕
