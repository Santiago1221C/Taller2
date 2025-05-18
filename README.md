# Pokenea Pokedex

Una aplicación Express que muestra información sobre Pokeneas (Pokémon de Antioquia).

## Requisitos

- Node.js
- npm

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

## Ejecución

Para ejecutar en modo desarrollo (con recarga automática):
```bash
npm run dev
```

Para ejecutar en modo producción:
```bash
npm start
```

## Rutas disponibles

1. `/pokenea` - Devuelve un JSON con información básica de un Pokenea aleatorio
   - Incluye: id, nombre, altura, habilidad y containerId

2. `/pokenea/filosofia` - Muestra una página web con la imagen y frase filosófica de un Pokenea aleatorio
   - Incluye: imagen, frase filosófica y containerId

## Notas

- La aplicación utiliza el hostname del sistema como containerId
- Los Pokeneas son seleccionados aleatoriamente de un conjunto predefinido
- Las imágenes son obtenidas de la PokeAPI 