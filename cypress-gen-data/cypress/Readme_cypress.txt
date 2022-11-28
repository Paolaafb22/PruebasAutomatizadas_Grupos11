Versiones utilizadas

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

 - Los scripts de test configurados en la carpeta .\cypress\cypress\e2e prueba 2 funcionalidades de APP Ghost:
   
    . tags : para Este feature se tiene 2 carpetas :
       . Para test de este feature debe tener creado la cuenta de acceso a Ghost creada en la APP de ghost.
       . featuresTag_VRT: contiene 2 escenarios pruebas VRT
       . featureTag_modificado: Contiene 5 escenarios modificados para toma screen-shot de semana 5.

    . pages:
       . Para test de este feature debe tener creado la cuenta de acceso a Ghost creada en la APP de ghost.
       . featurePages_modificado: Contiene 5 escenarios modificados para toma screen-shot de semana 5
       
 -  el archivo cypress.config.js,  contiene los settings de ejecución de variables para features: 
       Tags:  Edite este archivo y coloque las credenciales de usuario.

 -  Los scripts de test configurados en la carpeta /cypress/cypress/e2e fueron probados para ejecución 
    en las versiones de ghost:

      . featuresTags_VRT: Ghost v 3.42 (before) - Ghost v 5.18 (after)
      . featuresPages_VRT: Ghost v 3.42 (before) - Ghost v 4.44 (after)
      
      
1. Prerequisitos para ejecucion: 

   . nodeJs: version: 16.16.0

   . Tener instalado cypress version 10.10.0 o mayor .
      npm install -g cypress

   . decargar el proyecto de git.
      https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11.git
   

2. En la linea de comandos Ubicarse en el path del proyecto:  (instrucciones ejecución windows)

    . ubicarse carpeta raiz cypress: .\cypress
    . ejecutar comando:

      .\cypress run

    . El comando ejecutara Los Archivos de test Cypress se encuentran en la ruta:

        .\cypress\cypress\e2e\

3. verifique el resultado de screenshot en carpeta:  
   
        .\cypress\cypress\e2e\

4. Verifique el resultado de la ejecucion de los scripts de escenarios en la linea de comandos de windows.
