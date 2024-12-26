import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import hljs from 'highlight.js'; //importamos para los bloques de código
import 'highlight.js/styles/default.css'; // O el tema que prefieras

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tutorialSections =[
    {
      "title": "Instalación de Angular",
      "content": "Para comenzar con Angular, primero necesitamos instalar Node.js y Angular CLI. Angular CLI es una herramienta de línea de comandos que facilita la creación y gestión de aplicaciones Angular.",
      "code": "# Paso 1: Instalar Node.js\n# Visita https://nodejs.org y descarga la versión LTS recomendada para tu sistema operativo."
    },
    {
      "title": "Instalar Angular CLI",
      "content": "Una vez que Node.js y npm estén instalados, podemos instalar Angular CLI globalmente. Abre una terminal y ejecuta el siguiente comando:",
      "code": "npm install -g @angular/cli"
    },
    {
      "title": "Crear un Proyecto Angular",
      "content": "Ahora que tenemos Angular CLI, creamos un nuevo proyecto Angular con el siguiente comando. Esto generará una nueva carpeta con todos los archivos necesarios.",
      "code": "ng new mi-primera-app\n# Responde a las preguntas de configuración del proyecto según tu preferencia (estilo CSS por defecto)."
    },
    {
      "title": "Navegar al Proyecto",
      "content": "Una vez creado el proyecto, navega a la carpeta del proyecto para comenzar a trabajar en él.",
      "code": "cd mi-primera-app"
    },
    {
      "title": "Ejecutar la Aplicación",
      "content": "Ahora, vamos a ejecutar el servidor de desarrollo para ver la aplicación en el navegador. Esto arrancará el servidor en el puerto 4200 por defecto.",
      "code": "ng serve\n# Abre tu navegador y ve a http://localhost:4200 para ver la aplicación."
    },
    {
      "title": "Modificar el Componente Principal",
      "content": "Para mostrar un mensaje personalizado, modificamos el archivo `app.component.html`. Reemplaza el contenido con el siguiente código para mostrar '¡Hola Mundo desde Angular!'.",
      "code": "<h1>¡Hola Mundo desde Angular!</h1>"
    },
    {
      "title": "Ver los Resultados",
      "content": "Ahora que has hecho el cambio en `app.component.html`, guarda el archivo y regresa al navegador. Verás el mensaje '¡Hola Mundo desde Angular!' en la pantalla.",
      "code": "# El servidor de desarrollo debería recargar la página automáticamente."
    },
    {
      "title": "Crear el Componente Home",
      "content": "Crea un componente llamado `HomeComponent` para gestionar las secciones del blog y agregar bloques de código resaltados. En la terminal, ejecuta el siguiente comando para generar el componente:",
      "code": "ng generate component home\n# Esto generará los archivos necesarios para el nuevo componente en src/app/home."
    },
    {
      "title": "Instalar `highlight.js` para resaltar sintaxis de código",
      "content": "Para resaltar bloques de código en tu aplicación, vamos a usar la librería `highlight.js`. Esta librería permite resaltar código de una manera visualmente atractiva y comprensible. Vamos a instalarla ejecutando el siguiente comando en la terminal:",
      "code": "npm install highlight.js"
    },
    {
      "title": "Modificar el HomeComponent",
      "content": "Ahora vamos a modificar el componente `HomeComponent` para que utilice `highlight.js` para resaltar el código dentro de las secciones del tutorial. Importamos `highlight.js` y configuramos el componente para resaltar el código al cargar la página.",
      "code": "import { Component, OnInit } from '@angular/core';\nimport { NgForOf, NgIf } from '@angular/common';\nimport hljs from 'highlight.js';\nimport 'highlight.js/styles/default.css';\n\n@Component({\n  selector: 'app-home',\n  standalone: true,\n  imports: [ NgForOf, NgIf ],\n  templateUrl: './home.component.html',\n  styleUrls: ['./home.component.css']\n})\nexport class HomeComponent implements OnInit {\n  tutorialSections = [\n    {\n      \"title\": \"Instalación de Angular\",\n      \"content\": \"Para comenzar con Angular, primero necesitamos instalar Node.js y Angular CLI. Angular CLI es una herramienta de línea de comandos que facilita la creación y gestión de aplicaciones Angular.\",\n      \"code\": \"# Paso 1: Instalar Node.js\\n# Visita https://nodejs.org y descarga la versión LTS recomendada para tu sistema operativo.\"\n    },\n    {\n      \"title\": \"Instalar Angular CLI\",\n      \"content\": \"Una vez que Node.js y npm estén instalados, podemos instalar Angular CLI globalmente. Abre una terminal y ejecuta el siguiente comando:\",\n      \"code\": \"npm install -g @angular/cli\"\n    },\n    {\n      \"title\": \"Crear un Proyecto Angular\",\n      \"content\": \"Ahora que tenemos Angular CLI, creamos un nuevo proyecto Angular con el siguiente comando. Esto generará una nueva carpeta con todos los archivos necesarios.\",\n      \"code\": \"ng new mi-primera-app\\n# Responde a las preguntas de configuración del proyecto según tu preferencia (estilo CSS por defecto).\"\n    },\n    {\n      \"title\": \"Navegar al Proyecto\",\n      \"content\": \"Una vez creado el proyecto, navega a la carpeta del proyecto para comenzar a trabajar en él.\",\n      \"code\": \"cd mi-primera-app\"\n    },\n    {\n      \"title\": \"Ejecutar la Aplicación\",\n      \"content\": \"Ahora, vamos a ejecutar el servidor de desarrollo para ver la aplicación en el navegador. Esto arrancará el servidor en el puerto 4200 por defecto.\",\n      \"code\": \"ng serve\\n# Abre tu navegador y ve a http://localhost:4200 para ver la aplicación.\"\n    },\n    {\n      \"title\": \"Modificar el Componente Principal\",\n      \"content\": \"Para mostrar un mensaje personalizado, modificamos el archivo `app.component.html`. Reemplaza el contenido con el siguiente código para mostrar '¡Hola Mundo desde Angular!'.\",\n      \"code\": \"<h1>¡Hola Mundo desde Angular!</h1>\"\n    },\n    {\n      \"title\": \"Ver los Resultados\",\n      \"content\": \"Ahora que has hecho el cambio en `app.component.html`, guarda el archivo y regresa al navegador. Verás el mensaje '¡Hola Mundo desde Angular!' en la pantalla.\",\n      \"code\": \"# El servidor de desarrollo debería recargar la página automáticamente.\"\n    }\n  ];\n\n  constructor() {}\n\n  ngOnInit(): void {\n    this.highlightAllCode();\n  }\n\n  highlightAllCode(): void {\n    setTimeout(() => {\n      const codeBlocks = document.querySelectorAll('code');\n      codeBlocks.forEach(block => {\n        hljs.highlightElement(block as HTMLElement);\n      });\n    });\n  }\n}"
    },
    {
      "title": "Modificar el HTML del HomeComponent",
      "content": "Edita `home.component.html` para mostrar las secciones del tutorial y aplicar los bloques de código donde sea necesario. Asegúrate de que el bloque de código tenga la clase `hljs` para aplicar el resaltado de sintaxis. Además, asegúrate de mostrar el bloque de código solo cuando haya contenido en la sección.",
      "code": "<div class=\"blog-container\">\n  <h1>Tutorial Angular</h1>\n  <div *ngFor=\"let section of tutorialSections\" class=\"blog-section\">\n    <h2>{{ section.title }}</h2>\n    <p>{{ section.content }}</p>\n    <!-- Mostrar el bloque de código solo si hay código -->\n    <pre *ngIf=\"section.code\">\n      <code class=\"hljs\">{{ section.code }}</code>\n    </pre>\n  </div>\n</div>"
    },
    {
      "title": "Estilo de la Página de Blog",
      "content": "Para hacer que la página se vea mejor, edita el archivo `home.component.css` para agregar estilo a la página del blog, especialmente a los bloques de código.",
      "code": ".blog-container {\n  max-width: 800px;\n  margin: 0 auto;\n  font-family: Arial, sans-serif;\n  line-height: 1.6;\n}\n\n.blog-section {\n  margin-bottom: 20px;\n}\n\n.blog-section pre {\n  background: #f4f4f4;\n  padding: 10px;\n  border-left: 5px solid #ccc;\n  overflow-x: auto;\n}"
    },
    {
      "title": "Modificar las Rutas del Proyecto",
      "content": "Ahora, necesitas configurar las rutas para que tu componente `HomeComponent` se muestre cuando accedas a la ruta raíz (`/`). Dado que estás utilizando un archivo `routes.ts`, realiza lo siguiente para definir las rutas:",
      "code": "import { Routes } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\n\nexport const routes: Routes = [\n  { path: '', component: HomeComponent }, // Establecemos que HomeComponent es la vista principal\n];"
    },
    {
      "title": "Asegurarse de Importar el AppRoutingModule",
      "content": "Para que las rutas funcionen, debes asegurarte de que el archivo `routes.ts` sea importado correctamente en tu archivo principal de rutas, donde gestiones las rutas globalmente.",
      "code": "import { RouterModule } from '@angular/router';\nimport { routes } from './routes';\n\n@NgModule({\n  imports: [ RouterModule.forRoot(routes) ],\n  exports: [ RouterModule ]\n})\nexport class AppRoutingModule { }"
    },
    {
      "title": "Añadir el Router Outlet",
      "content": "Finalmente, asegúrate de que tu `app.component.html` tenga el `<router-outlet></router-outlet>` para que se rendericen los componentes de acuerdo a las rutas.",
      "code": "<router-outlet></router-outlet>"
    },
    {
      "title": "Incluir el Componente Home en el Componente Principal",
      "content": "Finalmente, incluye `HomeComponent` en el archivo `app.component.html` para que sea la vista principal de la aplicación. Para hacerlo, agrega la etiqueta `<app-home></app-home>`.",
      "code": "<app-home></app-home>"
    },
    {
      "title": "Ver el Resultado Final",
      "content": "Después de haber guardado todos los archivos y realizado los cambios, regresa al navegador. Ahora deberías ver el blog con las secciones del tutorial y bloques de código resaltados correctamente.",
      "code": "# El servidor de desarrollo debería recargar automáticamente la página."
    },
    {
      "title": "Estructura del Proyecto Angular",
      "content": "Tu proyecto ahora tiene una estructura básica para un blog, donde `HomeComponent` gestiona las secciones y bloques de código. La organización incluye componentes, servicios y rutas que puedes extender en el futuro.",
      "code": ""
    },
    {
      "title": "Próximos Pasos",
      "content": "Puedes seguir extendiendo este proyecto agregando más características, como la funcionalidad de comentarios, formularios para agregar nuevas publicaciones, y navegar entre diferentes secciones del blog utilizando rutas.",
      "code": ""
    }
  ]








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
}
