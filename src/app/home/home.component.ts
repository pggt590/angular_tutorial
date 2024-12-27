import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
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
            "title": "Sistema de Comentarios",
            "content": "En esta sección, añadimos la funcionalidad de comentarios para que los usuarios puedan interactuar con el blog.",
            "subSections": [
                {
                    "title": "Agregar Campo de Comentario",
                    "content": "Añadimos un campo de texto en el HTML para que los usuarios puedan escribir comentarios y un botón para enviarlos. Este código crea el formulario de entrada:",
                    "code": "<textarea [(ngModel)]=\"commentText\" placeholder=\"Escribe tu comentario...\" rows=\"4\" class=\"comment-input\"></textarea>\n<button (click)=\"addComment()\">Agregar Comentario</button>"
                },
                {
                    "title": "Mostrar Comentarios",
                    "content": "Debajo del campo de comentarios, mostramos todos los comentarios añadidos por los usuarios utilizando un bucle `*ngFor` en Angular.",
                    "code": "<div *ngFor=\"let comment of comments\">\n  <p>{{ comment.text }}</p>\n  <small>{{ comment.date }}</small>\n</div>"
                },
                {
                    "title": "Lógica en TypeScript",
                    "content": "En `home.component.ts`, creamos una función para agregar los comentarios a la lista y manejar el texto del comentario. Esta es la lógica para gestionar los comentarios:",
                    "code": "export class HomeComponent implements OnInit {\n  commentText: string = '';\n  comments: { text: string, date: string }[] = [];\n\n  addComment(): void {\n    if (this.commentText.trim() !== '') {\n      const newComment = {\n        text: this.commentText,\n        date: new Date().toLocaleString()\n      };\n      this.comments.push(newComment);\n      this.commentText = '';\n    }\n  }\n}"
                }
            ]
        },
        {
            "title": "Calificación del Tutorial",
            "content": "Se añade un sistema de calificación para que los usuarios puedan evaluar el tutorial.",
            "subSections": [
                {
                    "title": "Sistema de Estrellas",
                    "content": "Usamos un sistema de 5 estrellas para la calificación. Los usuarios pueden hacer clic en una estrella para calificar el tutorial.",
                    "code": "rating: number = 0; // Valor inicial de la calificación\n\nsetRating(rating: number): void {\n    this.rating = rating;\n}\n\nisStarActive(index: number): boolean {\n    return index < this.rating;\n}"
                }
            ]
        },
        {
            "title": "Configurar Rutas",
            "content": "Configura las rutas para que el `HomeComponent` sea la vista principal de la aplicación.",
            "subSections": [
                {
                    "title": "Archivo de Rutas",
                    "content": "Creamos un archivo `routes.ts` para definir las rutas de la aplicación. Definimos la ruta que carga el `HomeComponent` cuando se visita la página principal.",
                    "code": "import { Routes } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\n\nexport const routes: Routes = [\n  { path: '', component: HomeComponent },\n];"
                },
                {
                    "title": "Configuración en el Componente Principal",
                    "content": "En lugar de usar un módulo tradicional, configuramos el enrutamiento directamente en el `AppComponent` importando y configurando el `RouterModule`.",
                    "code": "import { RouterModule } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\nimport { routes } from './routes';\n\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  imports: [RouterModule.forRoot(routes), HomeComponent],\n  template: `<router-outlet></router-outlet>`,\n  styleUrls: ['./app.component.css']\n})\nexport class AppComponent {}"
                }
            ]
        },
        {
            "title": "Ver los Resultados",
            "content": "Una vez configurado el enrutamiento, verifica que `HomeComponent` se carga correctamente en el navegador.",
            "subSections": [
                {
                    "title": "Resultado en el Navegador",
                    "content": "Cuando el servidor de desarrollo esté en marcha, el enrutamiento debería funcionar y cargar automáticamente la vista de `HomeComponent` en la URL correspondiente.",
                    "code": "# El servidor de desarrollo recargará la página automáticamente."
                }
            ]
        },
        {
            "title": "Resumen y Cierre",
            "content": "En este tutorial, hemos cubierto desde la instalación de Angular hasta la creación de un blog con componentes, rutas, y funcionalidades como los comentarios y la calificación.",
            "subSections": [
                {
                    "title": "¿Qué hemos aprendido?",
                    "content": "Aprendimos a instalar Angular, crear un proyecto, configurar componentes y rutas, y agregar funcionalidades como comentarios y calificación."
                },
                {
                    "title": "Próximos pasos",
                    "content": "Explora más sobre Angular, como trabajar con formularios, integrar APIs, o profundizar en el manejo de estado."
                },
                {
                    "title": "¿Qué sigue después de esto?",
                    "content": "Continúa con temas avanzados como lazy loading, pruebas unitarias, y manejo de estado para mejorar tus habilidades."
                }
            ]
        }
    ]


// Calificación global del blog (0 a 5)
    rating: number = 0; // Valor inicial de la calificación

    // Comentarios
    commentText: string = ''; // El texto del nuevo comentario
    comments: { text: string, date: string }[] = []; // Lista de comentarios

    constructor() {
    }

    ngOnInit(): void {
        // Llamar a la función de resaltado de código después de que se renderice la vista.
        this.highlightAllCode();
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            this.comments = JSON.parse(storedComments);
        }
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
    // Agregar un nuevo comentario
    addComment(): void {
        if (this.commentText.trim() !== '') {
            const newComment = {
                text: this.commentText,
                date: new Date().toLocaleString()
            };

            // Agregar el comentario a la lista
            this.comments.push(newComment);

            // Guardar la lista actualizada en localStorage
            localStorage.setItem('comments', JSON.stringify(this.comments));

            // Limpiar el campo de texto
            this.commentText = '';
        }
    }

}
