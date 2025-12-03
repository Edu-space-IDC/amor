# 📷 Carpeta de Fotos / Álbum

## ¿Qué va aquí?

Aquí van todas las fotos que quieres mostrar en la sección "Nuestro Álbum".

## 📝 Cómo Agregar una Foto

### Paso 1: Prepara tu foto
- Selecciona una foto especial de ustedes
- Formatos aceptados: JPG, PNG, GIF
- Tamaño recomendado: No más de 2-3MB por foto
- Nómbrala sin espacios, ejemplo: `primer-beso.jpg`

### Paso 2: Sube el archivo aquí
Coloca tu archivo en esta carpeta:
```
/public/photos/primer-beso.jpg
```

### Paso 3: Agrega la información en el código
Abre `/components/AlbumSection.tsx` y agrega tu foto al array:

```typescript
{
  id: 2,
  imageUrl: "/photos/primer-beso.jpg",
  caption: "Nuestro primer beso ❤️",
  date: "2024-12-03"
}
```

## 📁 Ejemplo de Estructura

```
/public/photos/
├── foto1.jpg
├── primer-dia.jpg
├── aniversario.png
├── vacaciones-playa.jpg
└── nuestra-primera-cita.jpg
```

## ⚠️ Reglas Importantes

✅ **HACER:**
- Usar nombres descriptivos: `primer-aniversario.jpg`
- Usar solo letras minúsculas
- Usar guiones en lugar de espacios
- Formatos: JPG, PNG, GIF

❌ **NO HACER:**
- Espacios: `primer dia.jpg` ✗
- Tildes: `aniversário.jpg` ✗
- Mayúsculas innecesarias: `PrimerDia.jpg` ✗
- Caracteres especiales: `1er_día@2024.jpg` ✗

## 💡 Consejos

- **Calidad:** Usa fotos de buena resolución pero no demasiado pesadas
- **Optimización:** Comprime tus fotos antes de subirlas (usa https://tinypng.com)
- **Proporciones:** Las fotos cuadradas se ven mejor en el álbum
- **Cantidad:** No hay límite, pero 10-20 fotos es una buena cantidad inicial

## 🎨 Ideas de Fotos

- Primera cita
- Primer beso
- Cumpleaños juntos
- Viajes
- Selfies divertidas
- Momentos especiales
- Aniversarios
- Lugares favoritos

---

¡Crea un álbum hermoso con sus recuerdos! 📸💕
