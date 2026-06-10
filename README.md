# 🚀 BlogSimple

> Plataforma de gestión de contenido (CMS) desarrollada con Vue 3 y TypeScript, diseñada bajo principios de arquitectura modular y escalable para aplicaciones empresariales de mediana y gran escala.

---

## 📋 Descripción General

BlogSimple es una aplicación web moderna que permite la administración y publicación de contenido mediante una interfaz intuitiva y altamente mantenible.

La solución está construida utilizando Vue 3 (Composition API) y sigue una arquitectura basada en dominios, facilitando la escalabilidad, el trabajo colaborativo entre equipos y la evolución del producto a largo plazo.

---

## ✨ Características Principales

### Gestión de Contenido

* Creación y edición de artículos
* Gestión de categorías y etiquetas
* Sistema de comentarios
* Publicación y despublicación de contenido

### Administración

* Dashboard administrativo
* Gestión de usuarios y roles
* Control de permisos
* Estadísticas y métricas básicas

### Experiencia de Usuario

* Diseño responsive
* Navegación optimizada
* Internacionalización (i18n)
* Componentes reutilizables

### Calidad de Software

* Testing unitario
* Testing End-to-End
* Tipado estático con TypeScript
* Arquitectura desacoplada

---

## 🛠️ Stack Tecnológico

| Categoría         | Tecnologías       |
| ----------------- | ----------------- |
| Frontend          | Vue 3, TypeScript |
| Estado Global     | Pinia             |
| Comunicación HTTP | Axios             |
| Routing           | Vue Router        |
| Build Tool        | Vite              |
| Testing Unitario  | Jest              |
| Testing E2E       | Cypress           |
| Estilos           | SCSS              |
| Calidad de Código | ESLint, Prettier  |

---

## 🏗️ Arquitectura

El proyecto implementa una arquitectura modular inspirada en MVC y Domain-Driven Design (DDD).

### Principios Aplicados

* Separation of Concerns (SoC)
* Single Responsibility Principle (SRP)
* Modular Architecture
* Reusability First
* Scalability by Design

### Capas Principales

#### Models

Representan las entidades de negocio.

Ejemplos:

* Post
* User
* Comment

#### Views

Pantallas y páginas de la aplicación.

Ejemplos:

* Home
* Login
* Dashboard
* Post Details

#### Controllers

Orquestan la interacción entre la interfaz y la lógica de negocio.

#### Services

Gestionan la comunicación con APIs externas y servicios backend.

#### Store

Administración centralizada del estado mediante Pinia.

#### Composables

Lógica reutilizable encapsulada siguiendo Composition API.

#### Components

Biblioteca de componentes reutilizables para toda la aplicación.

---

## 📁 Estructura del Proyecto

```text
src/
├── api/
├── assets/
├── components/
├── composables/
├── controllers/
├── layouts/
├── models/
├── modules/
│   ├── posts/
│   ├── users/
│   └── comments/
├── router/
├── services/
├── store/
├── utils/
├── views/
├── App.vue
└── main.ts
```

### Organización por Dominios

Cada módulo encapsula:

* Componentes
* Servicios
* Controladores
* Tipos
* Pruebas

Esto reduce el acoplamiento y mejora la mantenibilidad.

---

## 🔒 Buenas Prácticas Implementadas

* Arquitectura basada en módulos
* Type Safety con TypeScript
* Componentes desacoplados
* Gestión centralizada de estado
* Validación de formularios
* Manejo global de errores
* Configuración por entornos
* Código documentado

---

## 🧪 Testing

### Unit Testing

Cobertura de:

* Composables
* Services
* Controllers
* Store

### End-to-End Testing

Escenarios críticos:

* Inicio de sesión
* Creación de publicaciones
* Gestión de comentarios
* Navegación principal

---

## 📸 Capturas de Pantalla

### Página Principal

### Dashboard Administrativo

### Gestión de Publicaciones

---

## ⚙️ Instalación

### Clonar repositorio

```bash
git clone https://github.com/usuario/blogsimple.git
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar entorno de desarrollo

```bash
npm run dev
```

### Generar build de producción

```bash
npm run build
```

### Ejecutar pruebas unitarias

```bash
npm run test:unit
```

### Ejecutar pruebas E2E

```bash
npm run test:e2e
```

---

## 📈 Roadmap

* [ ] Sistema de notificaciones
* [ ] Editor Markdown avanzado
* [ ] Panel de analítica
* [ ] Autenticación OAuth2
* [ ] Dark Mode
* [ ] Dockerización completa

---

## 👨‍💻 Autor

**Tu Nombre**

Full Stack Developer

### Tecnologías principales

* Vue.js
* ASP.NET Core
* Python
* Flutter
* SQL
* Data Analytics

---

## 📄 Licencia

Este proyecto se distribuye bajo licencia MIT.
