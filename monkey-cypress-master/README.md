# Cypress Random Tester (Monkey):-- Instrucciones instalación windows:

Este repositorio tiene 2 versiones de archivos para ejecutar los monkeys aleatorios, Random: monkey.js y Smart: smart-monkey.js

## ejecucion:

INSTALACION AMBIENTE CYPRESS

Realice los siguientes pasos:

- realice clon de este repositorio a través de git.
- verifique si tiene cypress instalado en cualquier consola windows: cypress version

  1.  si esta instalado, no instale cypress. ejecute: 
         npm install faker
         npm install -D cypress-log-to-output
         npm install -D cypress-plugin-tab
  2. si no esta instalado, ejecute:
         npm install 

          nota: dependecias que se deben instalar por anterior comando
             [faker](https://www.npmjs.com/package/faker) 
             [plugin](https://github.com/Bkucera/cypress-plugin-tab) 
             [another plugin](https://github.com/flotwig/cypress-log-to-output) . 

##EJECUCION DE TEST:

1. PARA EJECUCION DE TEST RANDOM MONKEY : las siguiente instrucción ejecuta el random monkey.
 
   cypress run 

2.  PARA EJECUCION DE TEST SMART MONKEY : las siguiente instrucción ejecuta el smart monkey.

    cypress run --config-file ./smart-cypress.config.js 

 Install  modules requeridos:
 
   ejecute: 
    1. npm install 
       nota: dependecias que se deben instalar por anterior comando
         [faker](https://www.npmjs.com/package/faker) 
         [plugin](https://github.com/Bkucera/cypress-plugin-tab) 
         [another plugin](https://github.com/flotwig/cypress-log-to-output) . 

## Ver resultados:

 Verifique el reporte :
  monkey-execution-html  o´ smart-monkey-execution.html , segun haya realizado la ejecución.

Finalmente, reporte los issues en su herramienta preferida.
