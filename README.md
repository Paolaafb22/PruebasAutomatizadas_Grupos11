## MISW4103-Pruebas-automatizadas-de-software: Grupos11

### Integrantes:
| Nombre                        | Correo                                                            |
| ----------------------------- | ----------------------------------------------------------------- |
|Leonardo Wilches               |l.wilchesm@uniandes.edu.co                                         |
| Paola Andrea Forero           | p.forerob@uniandes.edu.co                                         |
| Mario Gomez                   | mr.gomezc1@uniandes.edu.co                                        |
|Rafael Humberto Rodriguez      |rh.rodriguezr1@uniandes.edu.co                                     |
|Manuel Francisco Vallejo       |mf.vallejo@uniandes.edu.co                                         |

## SEMANA 8:

### 1. Estrategia de Pruebas:
En el siguiente link se encuentra el documento que detalla la estrategia de pruebas correspondiente a requerimiento realizado para 
la entrega de la semana 8. Para ver el documento se debe tener usuario de uniandes.

### 2. Inventario de Pruebas Manuales:

### 3. Técnicas de pruebas utilizadas:

| Tecnica | Repositorio | Readme |
|---------|-------------|--------|

### 4. Video Presentación de estrategia de Pruebas:

### 5. Pros y Contras Herramientas de pruebas utilizadas:


#### Kraken-Cypress-Playwrigth

| Herramienta | Pros. | Contras |
|-|-|-|
| Kraken | Estructura lógica de archivos para escribir TEST de features con escenarios de pruebas con sintaxis BDD.| Poca documentación para tener mas detalle de configuracion de los Steps.|
|| Estructura comprensible y fácil  para escribir los steps, Features , escenarios.| La personalizacion de captura de selectores tiene poca documentación.|
|| Colección de reporte de tests en carpeta, con información relevante y en formato Html comprensible y con evidencia. |No es tan robusto en temas de interoperativilidad de sistema operativo en especial con Sistema Windows, las configuraciones en los entornos de sistema operativo puede generar demoras en la puesta a punto del sitema para ejecución de test.|
|| Muy amigable para escribir los tests con participación de los usuarios. | La curva de aprendizaje para colocar a funcionar la herramienta en una plataforma no es para una persona de poca experiencia.|
||Se cuenta con la funcionalidad de multiusario lo que facilita las pruebas.|El manejo de excepciones en algunos casos no es el adecuado.|
| Cypress | Amplia documentación y ejemplos considerables utiles par implementar test. | La transición entre paginas de confirmación no es tan intuitiva de configurar.|
|| Amplio conjunto de instrucciones para configurar captura de selectores del DOM. | Con tan amplio set de funcionalidades,  se torna  complejo buscar la opción adecuada que se requiere.|
| | La interfaz de ejecucion de Test, web como CLI tiene una amplia varieda de features.| No es tan intuitivo para implementar  BDD y requiere un nivel de expertise para configurarlo. | 
|Playwright| Extensa documentación y multiple variedad  de selectores lo que facilita encotnrar los elementos dentro del DOM | los informes de resultado de pruebas no son tan claros|
| | Soporte a grabacion de pruebas,  lo que facilita la escritura de las pruebas   |Al ejecutar escenarios multiples puede generar error por el paralelismo|
| |Cuenta con la opción de Codegen, el cual ayuda a generar el codigo de la prueba |no tiene mensajes en pantalla que indiquen el flujo de la ejecución|
| | El manejo asincrono de eventos es muy util para aprovechar recurso de la maquina|No es facil seguir un escenario independiente para la lectura, entendimiento y modificación del mismo.
