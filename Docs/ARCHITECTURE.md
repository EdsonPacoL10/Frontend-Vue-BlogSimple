# Arquitectura BlogSimple

La aplicación utiliza una arquitectura modular inspirada en MVC y Domain Driven Design.

---

## api/

Configuración global de Axios.

Responsabilidades:

* Cliente HTTP
* Interceptores
* Manejo de tokens
* Configuración de endpoints

Ejemplo:

```text
api/

axios.ts
auth.api.ts
posts.api.ts
```

---

## assets/

Recursos estáticos.

Contendrá:

```text
assets/

images/
icons/
scss/
fonts/
```

---

## components/

Componentes reutilizables.

Ejemplos:

```text
components/

BaseButton.vue
BaseInput.vue
Navbar.vue
Footer.vue
```

---

## composables/

Lógica reutilizable utilizando Composition API.

Ejemplos:

```text
useAuth.ts

useFetch.ts

usePagination.ts
```

---

## controllers/

Controladores encargados de coordinar vistas y servicios.

Ejemplos:

```text
AuthController.ts

PostController.ts

CommentController.ts
```

Responsabilidades:

* Validaciones
* Coordinación
* Procesamiento de datos

---

## layouts/

Plantillas visuales.

Ejemplos:

```text
AdminLayout.vue

PublicLayout.vue

AuthLayout.vue
```

---

## models/

Entidades del negocio.

Ejemplos:

```text
User.ts

Post.ts

Comment.ts
```

Representan estructuras de datos.

---

## modules/

Organización por dominios.

Cada módulo tendrá:

```text
modules/

posts/
users/
comments/
```

Cada módulo será autónomo.

---

## router/

Configuración de rutas.

Ejemplo:

```text
index.ts
```

Responsabilidades:

* Navegación
* Guards
* Lazy loading

---

## services/

Comunicación con backend.

Ejemplos:

```text
AuthService.ts

PostService.ts

CommentService.ts
```

---

## store/

Estado global usando Pinia.

Ejemplos:

```text
auth.store.ts

posts.store.ts
```

---

## utils/

Funciones auxiliares.

Ejemplos:

```text
formatDate.ts

validators.ts

constants.ts
```

---

## views/

Pantallas completas.

Ejemplos:

```text
HomeView.vue

LoginView.vue

DashboardView.vue

PostDetailView.vue
```

Cada View representa una página.
