# Saldo Ar Test

Aplicación Web hecha como prueba técnica Frontend donde se consume el Api de Saldo.com.ar siguiendo los lineamientos exigidos en la prueba.

ejemplo: POST https://api.saldo.com.ar/bridge/login

## Realizado por 

Eleazar Gamez 

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.
Asegúrate de tener [Angular CLI](https://angular.io/cli) instalado en tu máquina.

Puedes instalar Angular CLI utilizando el siguiente comando:

```bash
npm install -g @angular/cli
```
```bash
# Clona el repositorio
git clone [https://github.com/tu-usuario/saldo-ar-test.git](https://github.com/EleazarGamezD/SaldoAr-Test)

# Navega al directorio del proyecto
cd saldo-ar-test

# Instala las dependencias
npm install

# Dependencias

A continuación se muestra la lista de dependencias utilizadas en este proyecto:

- **[@angular/animations](https://www.npmjs.com/package/@angular/animations):** Agrega soporte para animaciones en Angular.
- **[@angular/cdk](https://www.npmjs.com/package/@angular/cdk):** Proporciona utilidades de desarrollo de componentes Angular.
- **[@angular/common](https://www.npmjs.com/package/@angular/common):** Contiene servicios y directivas comunes utilizados por las aplicaciones Angular.
- **[@angular/compiler](https://www.npmjs.com/package/@angular/compiler):** Contiene el compilador de Angular y plantillas JIT.
- **[@angular/core](https://www.npmjs.com/package/@angular/core):** Contiene las partes esenciales del framework Angular.
- **[@angular/forms](https://www.npmjs.com/package/@angular/forms):** Proporciona formularios reactivos y plantillas para Angular.
- **[@angular/material](https://www.npmjs.com/package/@angular/material):** Implementa componentes de interfaz de usuario de Material Design para Angular.
- **[@angular/platform-browser](https://www.npmjs.com/package/@angular/platform-browser):** Contiene implementaciones específicas del navegador utilizadas por Angular.
- **[@angular/platform-browser-dynamic](https://www.npmjs.com/package/@angular/platform-browser-dynamic):** Proporciona servicios y utilidades para cargar y compilar aplicaciones Angular en tiempo de ejecución.
- **[@angular/router](https://www.npmjs.com/package/@angular/router):** Proporciona enrutamiento y navegación para aplicaciones Angular.
- **[@tsparticles/slim](https://www.npmjs.com/package/@tsparticles/slim):** Una biblioteca para crear partículas animadas.
- **[ng-particles](https://www.npmjs.com/package/ng-particles):** Integra la biblioteca de partículas con Angular.
- **[rxjs](https://www.npmjs.com/package/rxjs):** Biblioteca para programación reactiva utilizando Observables.
- **[tslib](https://www.npmjs.com/package/tslib):** Biblioteca runtime para TypeScript que ayuda con la generación de código.
- **[zone.js](https://www.npmjs.com/package/zone.js):** Implementación de la zona para cambios de detección Angular.

**DevDependencies (dependencias de desarrollo):**

- **[@angular-devkit/build-angular](https://www.npmjs.com/package/@angular-devkit/build-angular):** Herramientas de construcción para proyectos Angular.
- **[@angular/cli](https://www.npmjs.com/package/@angular/cli):** Interfaz de línea de comandos de Angular.
- **[@angular/compiler-cli](https://www.npmjs.com/package/@angular/compiler-cli):** Herramientas de línea de comandos para el compilador de Angular.
- **[@types/jasmine](https://www.npmjs.com/package/@types/jasmine):** Tipos TypeScript para Jasmine.
- **[jasmine-core](https://www.npmjs.com/package/jasmine-core):** Marco de prueba para JavaScript.
- **[karma](https://www.npmjs.com/package/karma):** Marco de prueba para JavaScript que se ejecuta en el navegador.
- **[karma-chrome-launcher](https://www.npmjs.com/package/karma-chrome-launcher):** Configuración del lanzador de Chrome para Karma.
- **[karma-coverage](https://www.npmjs.com/package/karma-coverage):** Plugin de cobertura para Karma.
- **[karma-jasmine](https://www.npmjs.com/package/karma-jasmine):** Adaptador de Jasmine para Karma.
- **[karma-jasmine-html-reporter](https://www.npmjs.com/package/karma-jasmine-html-reporter):** Generador de informes HTML para resultados de pruebas de Karma.
- **[typescript](https://www.npmjs.com/package/typescript):** Lenguaje de programación que compila a JavaScript.
```
## Estructura del Proyecto

```bash

/src
|-- /app
|   |-- /header
|   |   |-- header.component.css
|   |   |-- header.component.html
|   |   |-- header.component.spec.ts
|   |   |-- header.component.ts
|   |-- /home.component
|   |   |-- home.component.css
|   |   |-- home.component.html
|   |   |-- home.component.spec.ts
|   |   |-- home.component.ts
|   |-- /login
|   |   |-- login.component.css
|   |   |-- login.component.html
|   |   |-- login.component.spec.ts
|   |   |-- login.component.ts
|   |-- /shared
|   |   |-- /interface
|   |   |   |-- currency.interface.ts
|   |   |   |-- user.interface.ts
|   |   |-- /service
|   |       |-- service.service.ts
|   |       |-- state.service.ts
|   |-- /private
|       |-- /user-home
|           |-- user-home.component.css
|           |-- user-home.component.html
|           |-- user-home.component.spec.ts
|           |-- user-home.component.ts
|   |-- /service
|   |   |-- service.service.spec.ts
|   |   |-- service.service.ts
|   |   |-- state.service.spec.ts
|   |   |-- state.service.ts
|   |   |-- theme.service.ts
|-- /assets
|-- /environments
|   |-- environment.prod.ts
|   |-- environment.ts
|-- angular.json
|-- tsconfig.json
|-- package.json
|-- README.md
```
