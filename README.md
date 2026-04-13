# 📸 Portfolio de Fotógrafo Freelancer

Un sitio web responsivo y moderno que exhibe el portafolio de un fotógrafo profesional. Proyecto de práctica en desarrollo web front-end con enfoque en diseño limpio, experiencia de usuario y funcionalidades interactivas.

---

## 🎯 Sobre el Proyecto

Este proyecto fue creado como parte de un curso de desarrollo web para demostrar habilidades en:
- Maquetación responsiva moderna
- Diseño visual atractivo
- Programación JavaScript interactiva
- Integración de servicios web (Formspree)

**Cliente Ficticio:** John Doe - Fotógrafo Freelancer

---

## ✨ Características Principales

### 🏠 Página Principal (Inicio)
- Héroe visual con imagen y llamada a la acción
- Catálogo de 3 servicios principales con iconos SVG
- Formulario de contacto integrado con [Formspree](https://formspree.io/)
- Información de ubicación y contacto

### 👤 Sección Sobre mí
- Biografía profesional expandida
- Foto de perfil circular de alta calidad
- Enlaces a redes sociales (Instagram, LinkedIn)
- Descripción de experiencia y habilidades

### 🖼️ Galería de Trabajos
- **Carrusel interactivo** con 9 imágenes
- Navegación con botones y teclas de flecha
- Modal **Lightbox** para visualización ampliada
- Diseño responsivo que adapta tamaños según pantalla
- Bordes elegantes y sombras profesionales

### 📱 Responsividad
- Breakpoints optimizados: móvil, tablet, desktop
- Media Queries para adaptación fluida
- Estilos específicos para pantallas < 768px y > 1024px

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|-----------|------------|
| **HTML5** | Estructura semántica y accesibilidad |
| **CSS3** | Variables CSS, Flexbox, Grid, animaciones |
| **JavaScript** | DOM manipulation, event handlers, lógica interactiva |
| **Formspree API** | Servicio para recepción de formularios por email |
| **SVG Icons** | Iconos vectoriales escalables |
| **Fuentes Personalizadas** | Playfair Display para títulos elegantes |

---

## 📂 Estructura del Proyecto

```
freelancer_inicio/
├── index.html              # Página principal
├── Sobremi.html            # Biografía y redes sociales
├── Trabajos.html           # Galería de trabajos
├── readme.md               # Este archivo
│
├── CSS/
│   ├── normalize.css       # Reseteo de estilos base
│   └── style.css           # Estilos principales (850+ líneas)
│
├── JS/
│   ├── carrusel.js         # Lógica del slider de imágenes
│   └── galeria.js          # Lógica del modal/lightbox
│
├── assets/
│   └── fonts/              # Fuentes personalizadas (Playfair Display)
│
└── img/                    # Imágenes del proyecto (9 fotos de ejemplo)
```

---

## 🚀 Cómo Usar

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias ni servidor

### Instalación

1. **Descarga el proyecto**
   ```bash
   git clone <tu-url-repo>
   cd freelancer_inicio
   ```

2. **Abre el archivo principal**
   - Haz doble clic en `index.html` o
   - Arrastra `index.html` a tu navegador

3. **¡Listo!** El sitio debería verse en tu navegador

### Configuración de Formspree (Opcional)
Si deseas cambiar la dirección de correo para recibir mensajes:
1. Ve a [formspree.io](https://formspree.io/)
2. Crea una cuenta y nuevo formulario
3. Reemplaza el `action` del formulario en `index.html` por tu URL de Formspree

---

## 💡 Características Técnicas Destacadas

### CSS
- ✅ Variables CSS para tema de color centralizado
- ✅ Gradientes atractivos en fondo
- ✅ Sombras y bordes redondeados modernos
- ✅ Transiciones suaves en elementos interactivos

### JavaScript
- ✅ Navegación del carrusel con mouse y teclado
- ✅ Modal lightbox con navegación interna
- ✅ Manejo de eventos sin librerías (vanilla JS)
- ✅ Lógica de ciclo infinito en galería

### Diseño
- ✅ Paleta de colores profesional (marrón, dorado, blanco)
- ✅ Bootstrap tipográfico consistente
- ✅ Espaciado y alineación armónica
- ✅ Elementos visuales con hover effects

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Archivos HTML | 3 |
| Líneas CSS | 850+ |
| Líneas JavaScript | 100+ |
| Imágenes incluidas | 9 |
| Breakpoints responsivos | 3 |
| Tiempo de carga promedio | < 2s |

---

## 🎨 Paleta de Colores

```
Primario (Marrón Oscuro):  #432818
Secundario (Marrón Claro): #99582A
Acento (Dorado):           #BB9457
Texto (Blanco):            #ffffff
Enlace (Marrón):           #6d472d
```

---

## 📝 Funcionalidades Detalladas

### Carrusel de Trabajos
- Navega entre 9 imágenes profesionales
- Botones directos a izquierda/derecha
- Soporte para flechas del teclado (← →)
- Ciclo infinito (última → primera imagen)
- Transiciones suaves de 0.5 segundos

### Lightbox Modal
- Click en cualquier imagen para ampliar
- Navegación con flechas dentro del modal
- Soporte de teclado (ESC para cerrar, flechas para navegar)
- Fondo oscuro semitransparente
- Botón cerrar (×) visible

### Formulario de Contacto
- Campos: Nombre, Teléfono, Email, Mensaje
- Integración automática con Formspree
- Validación HTML5 nativa
- Botón submit estilizado

---

## 👨‍💻 Autor

**Martínez Mariana Priscila**

---

## 📄 Licencia

Este proyecto es de práctica educativa y está disponible bajo licencia MIT.

---

## 🙏 Agradecimientos

- Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL - 1er proyecto - Udemy - Profesor :Juan Pablo De la torre Valdez
- [Formspree](https://formspree.io/) por servicio de formularios
- [Tabler Icons](https://tabler-icons.io/) por iconos SVG
- Google Fonts por Playfair Display

---

## 📞 Contacto

Para consultas o sugerencias sobre el proyecto:
- Llena el formulario en la página principal
- O accede a mis redes sociales a través de Sobre mí

---

## 💻 Cómo ejecutar el proyecto

No se requiere ninguna instalación especial ni entorno de servidor para visualizar este proyecto.

1. Clona o descarga este repositorio en tu computadora.
2. Descomprime la carpeta si es necesario.
3. Haz doble clic sobre el archivo `index.html` para abrirlo directamente en tu navegador web predeterminado.

---
*Desarrollado por Martínez Mariana Priscila.*
```



