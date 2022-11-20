# Instrucciones para Ejecución de scripts en kraken:

 - Los scripts de test .feature app ghost  se encuentran configurados en la carpeta .\kraken\features\  :
   
    . Para los 40 escenarios con Screenshot : 
 
       . Los archivos se encuentran nombrados :  numero-funcionalidad-versionGhost.feature

    . Para los 10 escenarios con capturas VRT :

       . Los archivos se encuentran nombrados :  numero-VRT-funcionalidad-versionGhost.feature 

 -  El archivo properties.json ,  contiene los settings de ejecución de variables requeridas en los scritps . feature y el archivo
    .\features\web\steps_definition\steps.js

      * para la ejecucion del script de feature Tag en versión ghost 3.42, debe ajustar el file properties.json
        la linea a la versión 3.42:  "GH_VERSION": "3.42" , si es una version posterior a 5.0 debe quedar en "GH_VERSION": "5.18"

 -  Los scripts de test configurados en la carpeta \kraken\features\ fueron probados para ejecución 
    en las versiones de ghost:

      . features tag: Ghost v 3.42 (before) - Ghost v 5.18.0 (after)


1. Prerequisitos ambiente para ejecucion : 

   . android studio 13 ( SDK, ADB)
   . java 1_8_0_111
   . nodeJs: version: 16.13.0
   . cucumber 7.2.1.
   . appium 1.22.3
   . Kraken v 1.0.24 
     
           npm install kraken-node --save

   . decargar el proyecto de git.
      
        https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11.git/kraken

            npm install
   

2. En la linea de comandos Ubicarse en el path del proyecto:  (instrucciones ejecución windows)

    . ubicarse carpeta raiz kraken: .\kraken
    . ejecutar comando:

      .\kraken-node run

    . El comando ejecutara Los Archivos de test Kraken se encuentran en la ruta:

        .\kraken\features\    // para Windows se debe ejecutar 1 archivo features.

3. verifique el resultado de screenshot en carpeta:  
   
        .\krakens\reports\

4. Verifique el resultado de la ejecucion de los scripts de escenarios en la linea de comandos de windows donde se ejecuta
   el comando kraken-node run.
