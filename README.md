## MISW4103-Pruebas-automatizadas-de-software: Grupos11

### Integrantes:
| Nombre                        | Correo                                                            |
| ----------------------------- | ----------------------------------------------------------------- |
|Leonardo Wilches               |l.wilchesm@uniandes.edu.co                                         |
| Paola Andrea Forero           | p.forerob@uniandes.edu.co                                         |
| Mario Gomez                   | mr.gomezc1@uniandes.edu.co                                        |
|Rafael Humberto Rodriguez      |rh.rodriguezr1@uniandes.edu.co                                     |
|Manuel Francisco Vallejo       |mf.vallejo@uniandes.edu.co                                         |

## Instruccion para Ejecución de Test Escenarios:
 
   1. Readme.txt ejecucion test cypress:
   
      [Readme_cypress](https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11/blob/main/cypress/Readme_cypress.txt)
      
   2. Readmet.txt ejecucion test kraken: 
      
      [Readme_kraken](https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11/blob/main/kraken/Readme_kraken.txt)
   
   3. Readmet.txt ejecucion test playwrigth: 
     
      [Readme_playwrigth](https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11/blob/main/playwright/Readme_playwright.md)

## Instruccion para Ejecución de Reporte VRT Screenshot_Escenarios_test:

      Readme_reporte_VRT:  https://github.com/lwilches/pruebas_automatizadas_vrt_grupo11/blob/main/README.md
      
      Repositorio_codigo:  https://github.com/lwilches/pruebas_automatizadas_vrt_grupo11/
      
      [Codigo Reporte html](https://github.com/lwilches/pruebas_automatizadas_vrt_grupo11/blob/main/resultVrt/2022-11-21T00.02.51.118Z/report.html)
      
# Video para toma de Screenshots

https://uniandes-my.sharepoint.com/:v:/g/personal/mr_gomezc1_uniandes_edu_co/EXoceRYy7wFCjLqCESNtz8cB8kyaYwa8ElCZRdd6yNvyEg?e=sMrJ3d

## Funcionalidades:

| Identificador | Funcionalidad | Descripción |
|-|-|-|
| F000 | Creación de Posts |  Permite crear un espacio en el cual el usuario personaliza el contenido agregando texto, imágenes y videos   para su publicación.|
| F001 | Login succes to GHOST |  Permite login a modulo administrador de app Ghost  y acceder a todas las funcionalidades.|
| F002 | List Tags  GHOST  |  A través de esta opción un user con privilegios de edición y configuración en la plataforma en interfaz principal menu lateral sección TAGS puede listar las Categorias Representadas como TAGS.|
| F003 | Create Tag succes  GHOST |  A través de esta opción del menú principal lateral sección TAGS un user con privelegios puede crear una nueva categoría (TAG) y posteriormente asignar POST a esta categoría. Esta funcionalidad permite tener una clasificación y ordenamiento de nuestros post en el BLOG.|
| F004 | Edit GHOST TAG | A través de esta opcin un user con privilegios de edición y configuración en la plataforma en interfaz principal menú lateral sección TAGS puede escoger una categoria TAG de acuerdo a su necesidad y modificar el nombre.|
| F005 |Borrar Tag GHOST |  A través de esta opción un user con privilegios de edición y configuración en la plataforma en interfaz principal menú lateral sección TAGS puede eleminar una categoria TAG de acuerdo a su necesidad.|
| F006 | Creación de cuenta | Al abrir la aplicación Ghost (localmente) por primera vez, el usuario es redirigido a una vista de creación de cuenta. Esta cuenta solicita ingresar cuatro campos nombre del nuevo sitio, nombre del usuario, correo de usuario, y contraseña clic en el botón para crear la cuenta.|
| F007 | Creación de Posts | Permite escribir artículos para su publicación el contenito puede incluir texto, imágenes, y videos.|
| F008 | Configuración de Posts | Cuando se crea un post permite configurar los siguientes campos la URL del post, los tags asociados al post, la fecha de publicación, las personas que pueden acceder al post, los autores, los metadatos del post, y la publicación en redes sociales.|
| F009 | Publicación de Posts | Despues de crear/modificar el post se puede publicar a su terminación o agendar para publicar posterioremente.|
| F010 | previsualizar Posts| Permite tener un primer vistazo antes de publicar el post.|
| F011 | Settings General|publicación básica y metadatos de sitios de detalles |
| F012 | Settings Designs|Personalizar el sitio y administrar los temas|
| F013 | Settings Members|Opciones de acceso, suscripción y precios |
| F014 | Settings Integration|Hacer que Ghost funcione con aplicaciones y herramientas|
| F015 | Settings Email Newsletter|Personalizar correos electronicos y establecer direcciones de correo electronico|
| F016 | Creación member |  Permite crear un usuario para la aplicacion.|
| F017 | Borrar member |  A través de esta opción un user con privilegios de edición y configuración en la plataforma en interfaz principal menú lateral sección members puede eliminar un member de acuerdo a su necesidad.|
| F018 | Editar member |  A través de esta opción un user con privilegios de edición y configuración en la plataforma en interfaz principal menú lateral sección members puede editar un member de acuerdo a su necesidad.|
| F019 | Exportar members |  A través de esta opción un user con privilegios de edición y configuración en la plataforma en interfaz principal menú lateral sección members puede exportar los members de acuerdo a su necesidad.|
| F020 | Crear page | El usuario administrador puede usar la funcionalidad crear page en esta se puede configurar Tag, adicionar texto, imagenes y videos.|
| F021 | Previsualizar page | El usuario administrador puede usar la funcionalidad crear page y antes de ser publicado tiene la funcionalidad de visualizar el contenido antes de ser publicado.|
| F021 | Configurar page | El usuario administrador puede usar la funcionalidad crear page y configurar información de acuerdo a sus necesidades como cambiar a URL page, seleccionar tags , la fecha de publicación, las personas que pueden acceder al contenido, los autores, los metadatos|
| F022 | Eliminar page | el usuario administrador puede eliminar un page existente antes de eliminar se muestra mensaje de confirmación.|
| F023 | Despublicar page | El usuario administrador despues de publicar un page tiene la fucionalidad de despublicar el page para no ser visualizado.|





## Listado de escenarios

|Id| tester | Funcionalidad | Requerimiento | Tipo | Nombre | Descripción |
|-|-|-|-|-|-|-|
|E0001| Mario Gomez | Login succes to GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST|Test que permite verificar login con credenciales a app GHOST.|
|E0002| Mario Gomez | List Tags  GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesión web y tengo la lista de tags en GHOST|Test que permite verificar login con credenciales a app GHOST y obtener lista de TAGS creados.|
|E0003| Mario Gomez | Create Tag succes  GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y creo tag nuevo con un nombre.|Test que permite verificar login con credenciales a app GHOST , listar los tags creados y crear un nombre. el nombre se parametriza en file properties.|
|E0004| Mario Gomez | Edit GHOST TAG |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y edito nombre de TAG. |Test que permite verificar login con credenciales a app GHOST, escoger un tag existente creado y cambiar o repetir nombre.|
|E0005| Mario Gomez | Borrar Tag GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y borro TAG existente.|Test que permite verificar login con credenciales a app GHOST, listar tags, elegir un tag existente y borrarlo. El nombre de TAG es parametrizado en file properties.|
|E0006| Leonardo Wilches | Crear Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST creo un nuevo Post.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, **WHEN** Cuando da clic en nuevo Post, escribe un titulo y el texto del contenido **THEN**  el post podria ser publicado|
|E0007| Paola Forero | Crear Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST crea page.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, filtra el nombre del post a modificar **WHEN** modificar el titulo o el texto del contenido **THEN**  el post podria ser publicado|
|E0008| Paola Forero | Configurar Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST configuro un nuevo post.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, filtra el nombre del post a configurar **WHEN** selecciona el campo de la lista de TAGS **THEN**  el post podria ser publicado con un nuevo tag|
|E0009| Leonardo Wilches | Eliminar Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST elimino un  post.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, filtra el nombre del post a eliminar **WHEN** el administrador abre el menú de configuración del editor y selecciona la opción para eliminar el post y confirma la eliminación **THEN**  el post es eliminado|
|E0009| Paola Forero | Publicar page |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST publico post.|**GIVEN**  el usuario administrador ingresa a Ghost ,  **WHEN** ingresa a un post, selecciona Publicar , **WHEN**  el post deberia verse en la pagina principal|
|E0011| Rafael Rodriguez | Settings General |Test app Web GHOST. | BDD |Como usuario quiero ingresar a la pagina Ghost y navegar por la opción de Settings general|Test que permite verificar login con credenciales a app Ghost,navegar por la opción de Settings,opción general seleccionar title and description y colocar un texto|
|E0012| Rafael Rodriguez | Settings Design |Test app Web GHOST. | BDD |Como usuario quiero ingresar a la pagina Ghost y navegar por la opción de Settings Design|Test que permite verificar login con credenciales a app Ghost,navegar por la opción de Settings,opción Design seleccionar brand y en accent Color validar un color|
|E0013| Rafael Rodriguez | Settings Membership |Test app Web GHOST. | BDD |Como usuario quiero ingresar a la pagina Ghost y navegar por la opción de Settings Members|Test que permite verificar login con credenciales a app Ghost,navegar por la opción de Settings,opción Members seleccionar Customize Portal y en look and feel seleccionar un icono|
|E0014| Rafael Rodriguez | Settings integrations|Test app Web GHOST. | BDD |Como usuario quiero ingresar a la pagina Ghost y navegar por la opción de Settings integrations|Test que permite verificar login con credenciales a app Ghost,navegar por la opción de Settings,opción integrations seleccionar Ulysses y visualizar la pagina de referencia externa|
|E0015| Rafael Rodriguez | Email Newsletter|Test app Web GHOST. | BDD |Como usuario quiero ingresar a la pagina Ghost y navegar por la opción de Settings Email Newsletter|Test que permite verificar login con credenciales a app Ghost,navegar por la opción de Settings,opción Email Newsletter seleccionar customize y en el campo name ingresar un texto|
|E0016| Manuel Vallejo | Create Member succes  GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y creo un member nuevo con un nombre.|Test que permite verificar login con credenciales a app GHOST , listar los members creados y crear un nombre. el nombre se parametriza en file properties.|
|E0017| Manuel Vallejo | Edit GHOST Member |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y edito nombre de Member. |Test que permite verificar login con credenciales a app GHOST, escoger un Member existente creado y cambiar o repetir nombre.|
|E0018| Manuel Vallejo | Borrar Member GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y borro Member existente.|Test que permite verificar login con credenciales a app GHOST, listar Members, elegir un Member existente y borrarlo. El nombre de Member es parametrizado en file properties.|
|E0019| Manuel Vallejo | Exportar Members GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y exporto los Members existentes.|Test que permite verificar login con credenciales a app GHOST, listar Members y exportarlos.|
|E0020| Paola Forero | Crear y publicar page |Test app Web GHOST. | BDD |Como  usuario administrador inicio sesion web GHOST crea page y publica contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en publicar|
|E0021| Paola Forero | Previsualizar page |Test app Web GHOST. | BDD |Como  usuario administrador inicio sesion web GHOST crea page y previsualiza contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en el boton Preview|
|E0022| Paola Forero | Configurar page |Test app Web GHOST. | BDD |Como  usuario administrador inicio sesion web GHOST crea page y previsualiza contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en configurar alli se puede modificar el contenido deseado|
|E0023| Paola Forero | Eliminar page  |Test app Web GHOST. | BDD |Como  usuario administrador inicio sesion web GHOST crea page y Eliminar page |El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en configurar alli puede seleccionar eliminar y confirmar la eliminación. |
|E0024| Paola Forero | Despublicar page |Test app Web GHOST. | BDD |Como  usuario administrador inicio sesion web GHOST crea page y publica, despublica contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en publicar al retornar a edición page clic en despublicar|

## Listado de escenarios VRT:

|Id| tester | Funcionalidad | Requerimiento | Tipo | Nombre | Descripción |
|-|-|-|-|-|-|-|
|E001| Mario Gomez | Login success GHOST |Test app Web GHOST. | cypress (page Object) |Como  usuario 1 inicio sesion web GHOST|Test que permite verificar login con credenciales a app GHOST.|
|E002| Mario Gomez | List Tags  GHOST |Test app Web GHOST. | cypress (page Object) |Como  usuario 1 inicio sesión web y tengo la lista de tags en GHOST|Test que permite verificar login con credenciales a app GHOST y obtener lista de TAGS creados.|
|E003| Mario Gomez | Create Tag  GHOST |Test app Web GHOST. | kraken (given-when-then) |Como  usuario 1 inicio sesion web GHOST y creo tag nuevo con un nombre.|Test que permite verificar login con credenciales a app GHOST , listar los tags creados y crear un nombre. el nombre se parametriza en file properties.|
|E004| Mario Gomez | Edit Tag GHOST |Test app Web GHOST. | kraken (given-when-then)|Como  usuario 1 inicio sesion web GHOST y edito nombre de TAG. |Test que permite verificar login con credenciales a app GHOST, escoger un tag existente creado y cambiar o repetir nombre.|
|E005| Paola Forero | Crear y publicar page |Test app Web GHOST. | cypress (page Object) |Como  usuario administrador inicio sesion web GHOST crea page y publica contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en publicar|
|E006| Paola Forero | Previsualizar page |Test app Web GHOST. | cypress (page Object) |Como  usuario administrador inicio sesion web GHOST crea page y previsualiza contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en el boton Preview|
|E007| Paola Forero | Configurar page |Test app Web GHOST. | cypress (page Object) |Como  usuario administrador inicio sesion web GHOST crea page y previsualiza contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en configurar alli se puede modificar el contenido deseado|
|E008| Paola Forero | Eliminar page  |Test app Web GHOST. | playwrigth (page Object) |Como  usuario administrador inicio sesion web GHOST crea page y Eliminar page |El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en configurar alli puede seleccionar eliminar y confirmar la eliminación. |
|E009| Paola Forero | Despublicar page |Test app Web GHOST. | playwrigth (page Object) |Como  usuario administrador inicio sesion web GHOST crea page y publica, despublica contenido|El usuario ingresa a la aplicación Ghost con sus credenciales, selecciona la funcionalidad page, crear un nuevo page adiciona el contenido de su preferencia y clic en publicar al retornar a edición page clic en despublicar|
|E010| Leonardo Wilches| Crear account | Test app Web GHOST | playwrigth (page Object) | Como usuario 1 inicio sesion app ghost y creo una cuenta.|
|E011| Leonardo Wilches| Create post | Test app Web GHOST | playwrigth (page Object) | Como usuario 1 inicio sesion con cuenta app ghost y creo un post con un name. |



## Pros y Contras: ResembleJS - BackstopJS

| Herramienta | Pros. | Contras |
|-|-|-|
| ResembleJS | La configuración del ambiente para perzonalizar es comprensible y facil de configurar.  | La documentación del proyecto no es tan detallada |
|            | Permite personalizar el reporte de una forma sencilla y se pueden adicionar mas parametros que el usuario requiera| la validación de las imagenes tiene que ser por un usuario y revisar bien las diferencias para documentar. |
|            | se pueden definir con bastante precisión los parametros de comparación de las imagenes. | a pesar que se puede personalizar el reporte, requiere bastante esfuerso en codigo html para logra la vista de la interfaz del reporte.|
|            | Presenta las diferencias entre las imagenes before y after en porcentajes lo cual es bastante util. | |
| BackstopJS | El reporte html se genera automaticamente, generando bastante ahorro de tiempo y esfuerzo. | Para personalizar el reporte html, es mas dificil que resembleJS  |
|            | Permite personalizar rutas de imagenes, resultados, parametros de configuración de manera amigable, a través file .json  | 
|            | permite personalizar el view port de los escenarios facilmente. | requiere mas esfuerso manual para calibrar las imagenes screenshot para un resultado optimo|


