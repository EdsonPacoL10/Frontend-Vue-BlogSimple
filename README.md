# BlogSimple

Aplicación de Blog desarrollada con **Vue 3** siguiendo una arquitectura modular y escalable, orientada a empresas grandes que requieren alta disponibilidad y mantenibilidad.

## 🚀 Tecnologías

- Vue 3 (Composition API)
- TypeScript
- Pinia (gestión de estado)
- Axios (consumo de APIs REST)
- Vite (bundler y optimización)
- Jest + Cypress (testing unitario y e2e)
- SCSS (estilos escalables)

## 🏗️ Arquitectura

El proyecto sigue un enfoque **MVC extendido** con separación por dominios:

- **Models** → Representan entidades del negocio (Posts, Users, Comments).
- **Views** → Pantallas de usuario (Home, Dashboard, Login).
- **Controllers** → Lógica de interacción y coordinación entre modelos y vistas.
- **Services** → Comunicación con APIs externas.
- **Components** → Elementos reutilizables de UI.
- **Layouts** → Plantillas de estructura (AdminLayout, PublicLayout).
- **Composables** → Hooks reutilizables (`useAuth`, `useFetch`).
- **Store** → Estado global centralizado con Pinia.
- **Utils** → Funciones auxiliares (formatters, validators).

## 📂 Estructura de carpetas
src/
├── api/              # Configuración de Axios y módulos de endpoints
├── assets/           # Estilos globales, imágenes, íconos
├── components/       # Componentes comunes y de layout
├── composables/      # Hooks reutilizables
├── controllers/      # Lógica de interacción
├── layouts/          # Plantillas de páginas
├── models/           # Entidades del negocio
├── modules/          # Módulos por dominio (posts, users, comments)
├── router/           # Configuración de rutas
├── services/         # Comunicación con APIs
├── store/            # Estado global (Pinia)
├── utils/            # Funciones auxiliares
├── views/            # Pantallas principales
├── App.vue           # Componente raíz
└── main.ts           # Punto de entrada


## ✨ Funcionalidades

- [Login](ca://s?q=Login_en_proyecto_Vue)
- [Gestión de Posts](ca://s?q=Gestión_de_posts_en_Vue)
- [Comentarios](ca://s?q=Comentarios_en_proyecto_Vue)
- [Dashboard de administración](ca://s?q=Dashboard_en_Vue)
- [Internacionalización](ca://s?q=Internacionalización_en_Vue) (multi-idioma)
- [Testing](ca://s?q=Pruebas_unitarias_en_Vue) (unitario y e2e)

## 📸 Capturas

_(Agregar imágenes de la aplicación en funcionamiento)_

## ⚙️ Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar pruebas unitarias
npm run test:unit

# Ejecutar pruebas end-to-end
npm run test:e2e

