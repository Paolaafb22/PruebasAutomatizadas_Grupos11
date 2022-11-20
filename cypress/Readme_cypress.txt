# Instrucciones para Ejecución de scripts en Cypress:

 - Los scripts de test configurados en la carpeta .\cypress\cypress\e2e prueba 2 funcionalidades de APP Ghost:
   
    . tags : para Este feature se tiene 2 carpetas :
 
       . featuresTag_VRT: contiene 2 escenarios pruebas VRT
       . featureTag_modificado: Contiene 5 escenarios modificados para toma screen-shot de semana 5.

    . pages:

 -  el archivo cypress.config.js,  contiene los settings de ejecución de variables para feature: tag.

 -  Los scripts de test configurados en la carpeta /cypress/cypress/e2e fueron probados para ejecución 
    en las versiones de ghost:

      . features tag: Ghost v 3.42 (before) - Ghost v 5.18.0 (after)


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