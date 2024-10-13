# 🎬 Urbanitae Tech Interview - Listado de Películas

Este proyecto ha sido desarrollado como parte de una prueba técnica para **Urbanitae**. El objetivo es mostrar un listado de películas populares, permitiendo la navegación por las diferentes páginas del catálogo de películas, y la visualización del detalle de cada película, incluyendo actores, director, sinopsis y más.

## 🚀 Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **React 18** - Biblioteca para crear interfaces de usuario.
- **TypeScript** - Superconjunto de JavaScript que añade tipado estático.
- **React Query** - Manejo eficiente de datos asincrónicos (fetch, cache, sincronización).
- **Zod** - Librería para validación y parsing de esquemas.
- **SCSS** - Preprocesador CSS que añade características como variables y mixins.
- **Vitest** - Framework de pruebas para un entorno moderno de desarrollo.
- **Happy DOM** - Entorno DOM ligero para pruebas de front-end.
- **Biome** - Linter para garantizar la calidad del código.

## 🏗️ Estructura del Proyecto

```bash
├── src/
│   ├── components/            # Componentes reutilizables
│   │   ├── MovieDetail/        # Componente para mostrar el detalle de una película
│   │   ├── MovieList/          # Componente para mostrar el listado de películas
│   │   ├── Paginator/          # Componente de paginación
│   │   └── ...                 # Otros componentes
│   ├── context/                # Implementación del contexto para MovieDetail y MovieList
│   ├── hooks/                  # Custom hooks
│   ├── icons/                  # Iconos personalizados
│   ├── models/                 # Esquemas y tipos para las películas (con Zod)
│   ├── services/               # Funciones para hacer fetch a la API de películas
│   └── App.tsx                 # Componente principal de la aplicación
├── tests/                      # Pruebas unitarias y de integración
│   ├── __mocks__/              # Mock de datos para pruebas
│   ├── MovieList.test.tsx      # Pruebas para MovieList
│   ├── MovieDetail.test.tsx    # Pruebas para MovieDetail
│   └── ...                     # Otros tests
├── public/                     # Archivos públicos (favicons, etc.)
├── .env                        # Claves y variables de entorno
└── package.json                # Dependencias y scripts del proyecto
```

## ⚙️ Configuración y Ejecución del Proyecto

### Paso 1: Clonar el repositorio

Clona el repositorio del proyecto en tu máquina local:

```bash
git clone https://github.com/martaju29/urbanitae-tech-interview.git
```

### Paso 2: Instalar dependencias

```bash
pnpm install
```

### Paso 3: Configurar variables de entorno
El proyecto requiere una clave de API de The Movie Database (TMDb) para funcionar. Añade el API_KEY al archivo .env

```bash
VITE_API_KEY={API_KEY}
```

### Paso 4: Ejecutar el proyecto en modo desarrollo
Ejecuta el servidor de desarrollo para ver el proyecto en `http://localhost:5173`

```bash
pnpm run dev
```

### Paso 5: Ejecutar las pruebas
El proyecto incluye pruebas unitarias y de integración que se pueden ejecutar con:
```bash
pnpm run test
```

## 🧪 Pruebas

El proyecto utiliza **Vitest** y **Testing Library** para pruebas. Algunas de las funcionalidades probadas incluyen:

- Correcta renderización del listado de películas.
- Comportamiento de los botones de paginación.
- Renderización y cierre del modal de detalle de una película.

## 🎨 Estilos y Temas
El proyecto utiliza SCSS para gestionar los estilos y cuenta con un archivo de variables globales en `src/styles/_variables.scss`.