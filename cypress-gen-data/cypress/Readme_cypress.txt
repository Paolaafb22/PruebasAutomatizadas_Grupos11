Versiones utilizadas:
Test E2E
Test Generacion de datos.
Test VRT.

Se presentan las versiones utilizadas para la ejecución de las pruebas de Ghost en la herramienta Cypress.

| Dependencia | Versión  |
| ----------- | -------- |
| NodeJs      | ^16.16.0 |
|cypress      | ^10      |
| Npm         | ^6.14.16 |
| Ghost CLI   | 1.23.1   |
| Ghost (App) | 5.22.6   |

# Instrucciones para Ejecución de scripts en Cypress:

- Instalar cypress
```shell
npm install
npm install cypress --save-dev
```

-Se parte de la suposición el usuario tiene instalada la aplicación Ghost 

-La aplicación hace uso de autenticación de usuario por lo cual se requiere tener una cuenta en Ghost previamente creada 
antes de iniciar la ejecución de los escenarios. 

 - Los scripts de test configurados en la carpeta .\cypress-gen-data\cypress\cypress\e2e  carpetas:
   
    . aleatorio/
    . pool-apriori/
    . pool-dinamico/
    . featureTag_modificado/
    . featurePage_modificado/
       
 -  el archivo cypress.config.js,  contiene los settings de ejecución de variables para features: 
       .Edite este archivo y coloque las credenciales de usuario.
       .En el archivo se encuentran los datos de acceso a la API de Mockaroo para provisión de datos Pseudo aleatorios
      
      
1. Prerequisitos para ejecucion: 

   . nodeJs: version: 16.16.0

   . Tener instalado cypress version 10.10.0 o mayor .
      npm install -g cypress

   . decargar el proyecto de git.
      https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11.git
   
      .ubicarse dentro de carpeta: .\cypress-gen-data\
      . ejecute: npm install.  para instalación de dependencias.
      

2. En la linea de comandos Ubicarse en el path del proyecto:  (instrucciones ejecución windows)

    . ubicarse carpeta raiz cypress: .\cypress
    . ejecutar comando:

      .\cypress run -s .\cypress\e2e\<carpeta_test(e2e, vrt, o Generacion de datos)>\<archivo-especifico-cy.js>
      .\cypress run -s .\cypress\e2e\pool-apriori\<archivo-especifico-cy.js>


    . El comando ejecutara Los Archivos de test Cypress se encuentran en la ruta:

        .\cypress\cypress\e2e\

3. verifique el resultado de screenshot en carpeta:  
   
        .\cypress\cypress\screenchot\

4. Verifique el resultado de la ejecucion de los scripts de escenarios en la linea de comandos de windows.
