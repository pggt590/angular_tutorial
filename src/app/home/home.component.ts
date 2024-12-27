import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import hljs from 'highlight.js'; //importamos para los bloques de código
import 'highlight.js/styles/default.css'; // O el tema que prefieras

type Section = {
  title: string;
  content: string;
  subSections: {
    title: string;
    content: string;
    code?: string; // El campo code es opcional
  }[];
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  tutorialSections: Section[] = [
    {
      "title": "Justificación del framework",
      "content": "Angular es un framework de desarrollo web utilizado para crear aplicaciones de una sola página (SPA). Es desarrollado y mantenido por Google, y es ampliamente utilizado para crear aplicaciones dinámicas y escalables.",
      "subSections": [
        {
          "title": "¿Para qué sirve?",
          "content": "Angular se utiliza principalmente para crear aplicaciones web interactivas, escalables y de alto rendimiento. Permite desarrollar interfaces de usuario ricas y funcionales utilizando componentes reutilizables."
        },
        {
          "title": "¿Qué aplicaciones tiene?",
          "content": "Angular se utiliza en aplicaciones web de todo tipo, desde blogs y sitios de comercio electrónico hasta aplicaciones empresariales complejas. Ejemplos conocidos incluyen Gmail, Google Drive, y las aplicaciones de Angular Material."
        },
        {
          "title": "¿Sobre qué lenguajes se apoya?",
          "content": "Angular está basado principalmente en TypeScript, un superset de JavaScript. También se apoya en HTML y CSS para la creación de las vistas."
        },
        {
          "title": "¿Qué prerrequisitos necesita?",
          "content": "Para trabajar con Angular, necesitas tener Node.js instalado en tu máquina, así como una buena comprensión de TypeScript, JavaScript, HTML y CSS."
        }
      ]
    },
    {
      "title": "Instalación de Angular",
      "content": "Para comenzar con Angular, primero necesitamos instalar Node.js y Angular CLI. Angular CLI es una herramienta de línea de comandos que facilita la creación y gestión de aplicaciones Angular.",
      "subSections": [
        {
          "title": "¿Se precisa instalación?",
          "content": "Sí, necesitamos instalar Node.js y Angular CLI antes de poder empezar con Angular.",
          "code": "# Paso 1: Instalar Node.js\n# Visita https://nodejs.org y descarga la versión LTS recomendada para tu sistema operativo."
        },
        {
          "title": "Instalar Angular CLI",
          "content": "Una vez que Node.js y npm estén instalados, podemos instalar Angular CLI globalmente. Abre una terminal y ejecuta el siguiente comando:",
          "code": "npm install -g @angular/cli"
        }
      ]
    },
    {
      "title": "Verificar Instalación",
      "content": "Después de la instalación, es importante verificar que todo está funcionando correctamente.",
      "subSections": [
        {
          "title": "Verificar Node.js y npm",
          "content": "Para verificar que Node.js y npm están instalados correctamente, ejecuta los siguientes comandos:",
          "code": "node -v\nnpm -v"
        },
        {
          "title": "Verificar Angular CLI",
          "content": "Verifica que Angular CLI se ha instalado correctamente ejecutando:",
          "code": "ng version"
        }
      ]
    },
    {
      "title": "Crear un Proyecto Angular",
      "content": "Ahora que tenemos Angular CLI, creamos un nuevo proyecto Angular con el siguiente comando. Esto generará una nueva carpeta con todos los archivos necesarios.",
      "subSections": [
        {
          "title": "Crear el Proyecto",
          "content": "Crea un nuevo proyecto Angular ejecutando el siguiente comando. Responde a las preguntas de configuración del proyecto según tu preferencia (estilo CSS por defecto).",
          "code": "ng new mi-primera-app\n# Responde a las preguntas de configuración del proyecto según tu preferencia (estilo CSS por defecto)."
        },
        {
          "title": "Navegar al Proyecto",
          "content": "Una vez creado el proyecto, navega a la carpeta del proyecto para comenzar a trabajar en él.",
          "code": "cd mi-primera-app"
        }
      ]
    },
    {
      "title": "Ejecutar la Aplicación",
      "content": "Ahora, vamos a ejecutar el servidor de desarrollo para ver la aplicación en el navegador. Esto arrancará el servidor en el puerto 4200 por defecto.",
      "subSections": [
        {
          "title": "Ejecutar el servidor",
          "content": "Usa el siguiente comando para iniciar el servidor de desarrollo y abrir la aplicación en tu navegador.",
          "code": "ng serve\n# Abre tu navegador y ve a http://localhost:4200 para ver la aplicación."
        }
      ]
    },
    {
      "title": "Modificar el Componente Principal",
      "content": "Para mostrar un mensaje personalizado, modificamos el archivo `app.component.html`. Reemplaza el contenido con el siguiente código para mostrar '¡Hola Mundo desde Angular!'.",
      "subSections": [
        {
          "title": "Editar app.component.html",
          "content": "Edita el archivo `app.component.html` para cambiar el mensaje que se muestra.",
          "code": "<h1>¡Hola Mundo desde Angular!</h1>"
        }
      ]
    },
    {
      "title": "Crear el Componente Home",
      "content": "Crea un componente llamado `HomeComponent` para gestionar las secciones del blog y agregar bloques de código resaltados. En la terminal, ejecuta el siguiente comando para generar el componente:",
      "subSections": [
        {
          "title": "Generar Componente",
          "content": "Usa Angular CLI para generar el componente Home.",
          "code": "ng generate component home\n# Esto generará los archivos necesarios para el nuevo componente en src/app/home."
        }
      ]
    },
    {
      "title": "Modificar el HomeComponent",
      "content": "Edita `home.component.ts` para agregar las secciones del tutorial y la lógica para resaltar bloques de código utilizando `highlight.js`.",
      "subSections": [
        {
          "title": "Agregar lógica de resalte",
          "content": "En el archivo `home.component.ts`, importa `highlight.js` y configura la lógica para resaltar los bloques de código.",
          "code": "import { Component, OnInit } from '@angular/core';\nimport { NgForOf, NgIf } from '@angular/common';\nimport hljs from 'highlight.js';\nimport 'highlight.js/styles/default.css';\n\n@Component({\n  selector: 'app-home',\n  standalone: true,\n  imports: [ NgForOf, NgIf ],\n  templateUrl: './home.component.html',\n  styleUrls: ['./home.component.css']\n})\nexport class HomeComponent implements OnInit {\n  tutorialSections = [ ... ];\n  constructor() {}\n  ngOnInit(): void {\n    this.highlightAllCode();\n  }\n  highlightAllCode(): void {\n    setTimeout(() => { ... });\n  }\n}"
        }
      ]
    },
    {
      "title": "Configurar Rutas",
      "content": "En esta sección, aprenderás a configurar las rutas en Angular utilizando la nueva característica de componentes autónomos, sin necesidad de un módulo tradicional. Vamos a crear las rutas necesarias para cargar el `HomeComponent` como la vista principal.",
      "subSections": [
        {
          "title": "Crear archivo de rutas",
          "content": "Primero, crea un archivo llamado `routes.ts` en la carpeta `app`. Este archivo contendrá las rutas de la aplicación. En él, definimos las rutas necesarias para cargar el componente `HomeComponent`.",
          "code": "import { Routes } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\n\nexport const routes: Routes = [\n  { path: '', component: HomeComponent },\n];"
        },
        {
          "title": "Configurar enrutamiento en el componente principal",
          "content": "En lugar de un `app.module.ts`, configuramos el enrutamiento directamente en el componente principal (`HomeComponent`), importando y configurando el `RouterModule` dentro de su metadata.",
          "code": "import { Component } from '@angular/core';\nimport { RouterModule } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\nimport { routes } from './routes';\n\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  imports: [RouterModule.forRoot(routes), HomeComponent],\n  template: `<router-outlet></router-outlet>`,\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}"
        }
      ]
    },
    {
      "title": "Ver los Resultados",
      "content": "Ahora que has configurado las rutas, guarda el archivo y abre la aplicación en el navegador. Verás que el `HomeComponent` se carga como la vista principal.",
      "subSections": [
        {
          "title": "Ver el resultado",
          "content": "Cuando realices los cambios en las rutas, el servidor de desarrollo debería recargar automáticamente la página.",
          "code": "# El servidor de desarrollo debería recargar la página automáticamente."
        }
      ]
    },
    {
      "title": "Resumen y cierre",
      "content": "Con este tutorial, hemos cubierto lo básico de Angular. Desde la instalación hasta la creación de tu primera aplicación con componentes y rutas. A continuación, te doy un pequeño resumen de lo que aprendimos.",
      "subSections": [
        {
          "title": "¿Qué hemos aprendido?",
          "content": "Aprendimos a instalar Angular y a configurar un proyecto básico usando Angular CLI. Vimos cómo crear y modificar componentes, gestionar rutas, y visualizamos los resultados en el navegador. Lo esencial para empezar a trabajar con Angular."
        },
        {
          "title": "Próximos pasos",
          "content": "Ahora que tienes lo básico, puedes empezar a experimentar con Angular. Intenta agregar más componentes, trabajar con formularios, o integrar APIs para hacer tu aplicación más dinámica."
        },
        {
          "title": "¿Qué sigue después de esto?",
          "content": "A medida que sigas practicando, profundiza en conceptos más avanzados como el manejo de estado, lazy loading de módulos y pruebas unitarias. Angular tiene muchas funcionalidades que puedes explorar para mejorar tus habilidades como desarrollador."
        }
      ]
    }

  ]

// Calificación global del blog (0 a 5)
  rating: number = 0; // Valor inicial de la calificación

  // Comentarios
  commentText: string = ''; // El texto del nuevo comentario
  comments: { text: string, date: string }[] = []; // Lista de comentarios

  constructor() {}

  ngOnInit(): void {
    // Llamar a la función de resaltado de código después de que se renderice la vista.
    this.highlightAllCode();
  }

  // Se llama después de cada actualización de la vista.
  ngAfterViewChecked(): void {

  }

  highlightAllCode(): void {
    // Encuentra todos los bloques de código en el DOM y resalta su contenido.
    setTimeout(() => {
      const codeBlocks = document.querySelectorAll('code');
      console.log(codeBlocks);
      codeBlocks.forEach(block => {
        hljs.highlightElement(block as HTMLElement);
      });
    });
  }

  // Función para establecer la calificación
  setRating(rating: number): void {
    this.rating = rating;
  }

  // Función para verificar si una estrella está activa
  isStarActive(index: number): boolean {
    return index < this.rating;
  }

  // Función para agregar un comentario
  addComment(): void {
    if (this.commentText.trim() !== '') {
      const newComment = {
        text: this.commentText,
        date: new Date().toLocaleString() // Fecha actual
      };
      this.comments.push(newComment);
      this.commentText = ''; // Limpiar el campo de texto
    }
  }

}
