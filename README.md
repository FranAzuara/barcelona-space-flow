# The Studiez - Alquiler de Sala Polivalente en Barcelona

¡Bienvenido al repositorio de **The Studiez**! Esta es una aplicación web moderna diseñada para la gestión y promoción de una sala polivalente en el corazón de Barcelona, ideal para actividades como baile, yoga, pilates y eventos especiales.

## 🚀 Sobre el Proyecto

**The Studiez** es una plataforma integral que permite a los usuarios conocer las instalaciones, consultar tarifas, verificar la disponibilidad en tiempo real y solicitar reservas de forma sencilla. El proyecto destaca por un diseño profesional, animaciones fluidas y una experiencia de usuario optimizada tanto para escritorio como para dispositivos móviles.

## ✨ Características Principales

- **Página de Inicio Impactante**: Con secciones de Hero, Beneficios, Actividades y Características.
- **Calendario de Disponibilidad Interactivo**: Consulta en tiempo real los huecos libres y ocupados (integrado con API).
- **Sistema de Gestión (Admin)**: Interfaz para que los administradores puedan actualizar la disponibilidad del calendario mediante inicio de sesión.
- **Formulario de Reserva/Contacto**: Integración para solicitudes directas de los clientes.
- **Diseño Responsivo**: Adaptado perfectamente a móviles, tablets y ordenadores.
- **Optimización SEO**: Estructura de componentes pensada para un buen posicionamiento.
- **Ubicación Integrada**: Sección detallada con información sobre cómo llegar (Metro L1 y L5).

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza las últimas tecnologías en el ecosistema de desarrollo web:

- **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Herramienta de Construcción**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Shadcn UI](https://ui.shadcn.com/) (basado en Radix UI)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Gestión de Datos**: [TanStack Query](https://tanstack.com/query/latest) (React Query) y [Axios](https://axios-http.com/)
- **Formularios**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animaciones**: Animaciones personalizadas sobre scroll.

## 📦 Estructura del Proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes reutilizables (UI, Layout, etc.)
├── hooks/           # Custom hooks para lógica compartida
├── lib/             # Utilidades y configuraciones (p. ej. axios, utils)
├── pages/           # Páginas principales de la aplicación
├── types/           # Definiciones de tipos TypeScript
└── App.tsx          # Configuración de rutas y layout principal
```

## 💻 Configuración Local

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-directorio>
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   # O si usas bun:
   bun install
   ```

3. **Variables de Entorno**:
   Crea un archivo `.env` en la raíz y configura la URL de la API:
   ```env
   VITE_API_URL=tu_url_de_api
   ```

4. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

## 🌐 Despliegue

Este proyecto está configurado para ser desplegado fácilmente a través de [Lovable](https://lovable.dev/) o cualquier plataforma compatible con Vite (Vercel, Netlify, etc.).

Para generar una versión de producción:
```bash
npm run build
```

---

Desarrollado con ❤️ para **The Studiez**.
