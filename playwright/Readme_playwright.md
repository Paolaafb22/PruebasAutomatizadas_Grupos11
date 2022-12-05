# Instrucciones para Ejecución de scripts en playwright:

 - Los scripts de test configurados en la carpeta .\playwrigth\ prueba 2 funcionalidades de APP Ghost:
   
    

.

 -  Los scripts de test configurados en la carpeta .\playwright\ fueron probados para ejecución 
    en las versiones de ghost:

      . features tag: Ghost v 3.xx (before) - Ghost v xxx (after)


1. Prerequisitos para ejecucion: 

   * nodeJs: version: 16.16.0

   * Tener instalado   playwright.
      npm install playwright

   * decargar el proyecto de git.
      https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11.git
   

2.  La url base de ghost se encuenta en el archivo de configuracion de playwright :

    * ubicarse carpeta raiz  playwright: .\playwright
    * buscar archivo `playwright.config.ts`
    * buscar parametro `config.use.baseURL`
    

2.  los fuentes de los test se encuentran en la carpeta /tests :

    * para cada semana hay una carpeta con los test desarrollados
    * semana6
    * semana7
 
3. Los datos de apriori es /mock_data

4. verifique el resultado de screenshot en carpeta:  
   
        .\playwright
      * Ejecutar comando  `npm install`
      * Para correr los test VRT `npx playwright test /test/semana6`
      * Para correr los test E2E `npx playwright test /test/semana7`
      * Para ver  los resultados `npx playwright show-report`
      
4. Verifique el resultado de la ejecucion de los scripts de escenarios en la linea de comandos de windows.
