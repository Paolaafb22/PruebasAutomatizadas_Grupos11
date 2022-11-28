## MISW4103-Pruebas-automatizadas-de-software: Grupos11

### Integrantes:
| Nombre                        | Correo                                                            |
| ----------------------------- | ----------------------------------------------------------------- |
|Leonardo Wilches               |l.wilchesm@uniandes.edu.co                                         |
| Paola Andrea Forero           | p.forerob@uniandes.edu.co                                         |
| Mario Gomez                   | mr.gomezc1@uniandes.edu.co                                        |
|Rafael Humberto Rodriguez      |rh.rodriguezr1@uniandes.edu.co                                     |
|Manuel Francisco Vallejo       |mf.vallejo@uniandes.edu.co                                         |

## GENERACION DE DATOS:

## Descripción de escenarios utilizados para la generacíon de los Datos para las pruebas:

1. Generación de datos A priori a través de herramienta cloud Mockaroo. Se utilizó la generacion de pool de datos que se descargaron a los directorios de herramientas de Test  Cypress y Playwright.

los pool de datos generados a través de herramienta se encuentran en carpeta :
Cypress:
https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11/tree/main/cypress-gen-data/cypress/cypress/fixtures

Playwright:



![image](https://user-images.githubusercontent.com/111325464/204193799-035d9960-7335-4af6-b21c-95b0081ee885.png)




## Instruccion para Ejecución de Test Escenarios:
 
 Se utilizaron 2 herramientas para la ejecucion de los test de Escenarios Listados :
 
   1. Readme.txt ejecucion test cypress:
   
      [Readme_cypress](https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11/blob/main/cypress-gen-data/cypress/Readme_cypress.txt)
      
   
   2. Readmet.txt ejecucion test playwrigth: 
     
      [Readme_playwrigth](https://github.com/Paolaafb22/PruebasAutomatizadas_Grupos11/blob/main/playwright/Readme_playwright.md)


      

## Funcionalidades:

| Id | Funcionalidad | Descripción |-|-|-|-|
|-|-|-|-|-|-|-|
| F01 | Creación de Posts |  Permite crear un espacio en el cual el usuario personaliza el contenido agregando texto, imágenes y videos   para su publicación.|
| F02 | Create Tag succes  GHOST |  A través de esta opción del menú principal lateral sección TAGS un user con privelegios puede crear una nueva categoría (TAG) y posteriormente asignar POST a esta categoría. Esta funcionalidad permite tener una clasificación y ordenamiento de nuestros post en el BLOG.|
| F03 | Creación de cuenta | Al abrir la aplicación Ghost (localmente) por primera vez, el usuario es redirigido a una vista de creación de cuenta. Esta cuenta solicita ingresar cuatro campos nombre del nuevo sitio, nombre del usuario, correo de usuario, y contraseña clic en el botón para crear la cuenta.|
| F04 | Configuración de Posts | Cuando se crea un post permite configurar los siguientes campos la URL del post, los tags asociados al post, la fecha de publicación, las personas que pueden acceder al post, los autores, los metadatos del post, y la publicación en redes sociales.|
| F05 | Publicación de Posts | Despues de crear/modificar el post se puede publicar a su terminación o agendar para publicar posterioremente.|
| F06 | previsualizar Posts| Permite tener un primer vistazo antes de publicar el post.|
| F07 | Settings General|publicación básica y metadatos de sitios de detalles |
| F08 | Settings Members|Opciones de acceso, suscripción y precios |
| F09 | Settings Email Newsletter|Personalizar correos electronicos y establecer direcciones de correo electronico|
| F10 | Crear page | El usuario administrador puede usar la funcionalidad crear page en esta se puede configurar Tag, adicionar texto, imagenes y videos.|
| F11 | Previsualizar page | El usuario administrador puede usar la funcionalidad crear page y antes de ser publicado tiene la funcionalidad de visualizar el contenido antes de ser publicado.|
| F12 | Configurar page | El usuario administrador puede usar la funcionalidad crear page y configurar información de acuerdo a sus necesidades como cambiar a URL page, seleccionar tags , la fecha de publicación, las personas que pueden acceder al contenido, los autores, los metadatos|

## Listado de escenarios

|No|Func|Escen-ID|Description|Result|Generacion Datos|API|
|-|-|-|-|-|-|-|
|1|F01|E001|Crear tag con nombre, datos válidos|POSITIVO|a priori -mockaroo|cypress|
|2|F02|E002|Crear tag con  nombre   igual a frontera 191 caracteres|POSITIVO|Aletaorio-faker|cypress|
|3|F03|E003|Crear tag con  nombre   igual a 1 carácter|POSITIVO|a priori -mockaroo|cypress|
|4|F04|E004|Crear tag con  nombre   mayor a frontera 191 caracteres|NEGATIVO|Pseudo-Aleatorio|cypress|
|5|F05|E005|Crear tag con nombre Vacios|NEGATIVO|a priori -mockaroo|cypress|
|6|F06|E006|Crear tag con nombre datos no validos|POSITIVO|a priori -mockaroo|cypress|
|7|F07|E007|Crear tag con nombre y descripcion, datos válidos|POSITIVO|a priori -mockaroo|cypress|
|8|F08|E008|Crear tag    Descripcion   igual a frontera 500 caracteres|POSITIVO|Aletaorio-faker|cypress|
|9|F09|E009|Crear tag con  descripcion   igual a 1 carácter|POSITIVO|a priori -mockaroo|cypress|
|10|F10|E010|Crear tag con descripcion   mayor a frontera 500 caracteres|NEGATIVO|Pseudo-Aleatorio|cypress|
|11|F11|E011|Crear tag con description datos no validos|POSITIVO|a priori -mockaroo|cypress|
|12|F12|E012|Crear tag , Meta-Title con datos validos|POSITIVO|a priori -mockaroo|cypress|
|13|F13|E013|Crear tag Meta-title   igual a frontera 191  caracteres|POSITIVO|Aletaorio-faker|cypress|
|14|F14|E014|Crear tag con   Meta-title   igual a 1 carácter|POSITIVO|a priori -mockaroo|cypress|
|15|F15|E015|Crear tag con   Meta-title mayor a frontera 300 caracteres|NEGATIVO|Pseudo-Aleatorio|cypress|
|16|F16|E016|Crear tag con Meta-title datos no validos|POSITIVO|a priori -mockaroo|cypress|
|17|F17|E017|Crear tag con Meta descripcion, datos válidos|POSITIVO|a priori -mockaroo|cypress|
|18|F18|E018|Crear tag   con Meta Descripcion   igual a frontera 500 caracteres|POSITIVO|Aletaorio-faker|cypress|
|19|F19|E019|Crear tag con  Meta descripcion   igual a 1 carácter|POSITIVO|a priori -mockaroo|cypress|
|20|F20|E020|Crear tag con Meta descripcion   mayor a frontera 500 caracteres|NEGATIVO|Pseudo-Aleatorio|cypress|
|21|F21|E021|Crear tag con Meta description datos no validos|NEGATIVO|a priori -mockaroo|cypress|
|22|F22|E022|Crear tag con Meta Canonical URL, datos válidos|POSITIVO|a priori -mockaroo|cypress|
|23|F23|E023|Crear tag con Meta  Canonical URL datos no validos|NEGATIVO|a priori -mockaroo|cypress|
|24|F24|E024|Crear tag , twitter-Title con datos validos|POSITIVO|a priori -mockaroo|cypress|
|25|F25|E025|Crear tag twitter-title   igual a frontera 191  caracteres|POSITIVO|Aletaorio-faker|cypress|
|26|F26|E026|Crear tag con   twitter-title   igual a 1 carácter|POSITIVO|a priori -mockaroo|cypress|
|27|F27|E027|Crear tag con   twitter-title mayor a frontera 300 caracteres|NEGATIVO|Pseudo-Aleatorio|cypress|
|28|F28|E028|Crear tag con twitter-title datos no validos|POSITIVO|a priori -mockaroo|cypress|
|29|F29|E029|Crear tag , twitter-description con datos validos|POSITIVO|a priori -mockaroo|cypress|
|30|F30|E030|Crear tag twitter-Description   igual a frontera 500 caracteres|POSITIVO|Aletaorio-faker|cypress|
|31|F07|EC01|Settings general Title & Description|POSITIVO|Aletaorio-faker|Playwright|
|32|F07|EC02|Settings general Title Publication Language|POSITIVO|Aletaorio-faker|Playwright|
|33|F07|EC03|Settings Meta Data  Meta Title|POSITIVO|Aletaorio-faker|Playwright|
|34|F07|EC04|Settings Meta Data  Meta Title|NEGATIVO|Aletaorio-faker|Playwright|
|35|F07|EC05|Settings Meta Description|POSITIVO|Aletaorio-faker|Playwright|
|36|F07|EC06|Settings Meta Description|NEGATIVO|Aletaorio-faker|Playwright|
|37|F07|EC07|Settings Twitter Card Twitter Tittle|POSITIVO|Aletaorio-faker|Playwright|
|38|F07|EC08|Settings Twitter Card Twitter Tittle|NEGATIVO|Aletaorio-faker|Playwright|
|39|F07|EC09|Settings Twitter Description|POSITIVO|Aletaorio-faker|Playwright|
|40|F07|EC10|Settings Twitter Description|NEGATIVO|Aletaorio-faker|Playwright|
|41|F07|EC11|Setting General Facebook card Facebook Title|POSITIVO|Aletaorio-faker|Playwright|
|42|F07|EC12|Setting General Facebook card Facebook Title|NEGATIVO|Aletaorio-faker|Playwright|
|43|F07|EC13|Setting General Facebook card Facebook Description|POSITIVO|Aletaorio-faker|Playwright|
|44|F07|EC14|Setting General Facebook card Facebook Description|NEGATIVO|Aletaorio-faker|Playwright|
|45|F07|EC15|Setting General Facebook card Social accounts facebook|POSITIVO|Aletaorio-faker|Playwright|
|46|F07|EC16|Setting General Facebook card Social accounts facebook|NEGATIVO|Aletaorio-faker|Playwright|
|47|F07|EC17|Setting General Facebook card Social accounts twitter|POSITIVO|Aletaorio-faker|Playwright|
|48|F07|EC18|Setting General Facebook card Social accounts twitter|NEGATIVO|Aletaorio-faker|Playwright|
|49|F08|EC19|Settings Membership portal settings Look and feel Signup|POSITIVO|Aletaorio-faker|Playwright|
|50|F08|EC20|Settings Membership portal settings Suport email address|POSITIVO|Aletaorio-faker|Playwright|
|51|F08|EC21|Settings Membership portal settings Suport email address|NEGATIVO|Aletaorio-faker|Playwright|
|52|F09|EC22|Settings Emailnewsletter customize name|POSITIVO|Aletaorio-faker|Playwright|
|53|F09|EC23|Settings Emailnewsletter customize name|NEGATIVO|Aletaorio-faker|Playwright|
|54|F09|EC24|Settings Emailnewsletter customize description|POSITIVO|Aletaorio-faker|Playwright|
|55|F09|EC25|Settings Emailnewsletter customize description|NEGATIVO|Aletaorio-faker|Playwright|
|56|F09|EC26|Settings Emailnewsletter customize sender name|POSITIVO|Aletaorio-faker|Playwright|
|57|F09|EC27|Settings Emailnewsletter customize sender name|NEGATIVO|Aletaorio-faker|Playwright|
|58|F09|EC28|Settings Emailnewsletter customize Email Address|POSITIVO|Aletaorio-faker|Playwright|
|59|F09|EC29|Settings Navigation Home|POSITIVO|Aletaorio-faker|Playwright|
|60|F09|EC30|Settings Navigation About|POSITIVO|Aletaorio-faker|Playwright|
|61|F03|EC31|account_1_create_mail_not_valid   |NEGATIVO|a priori -mockaroo|Playwright|
|62|F03|EC32| account_2_create_password_not_valid|NEGATIVO|a priori -mockaroo|Playwright|
|63|F03|EC33| account_3_create_password_sucessful_valid|POSITIVO|a priori -mockaroo|Playwright|
|64|F01|EC34| post_1_create_post_without_description_success|POSITIVO|a priori -mockaroo|Playwright|
|65|F01|EC35| post_2_create_post_with_image_success|POSITIVO|a priori -mockaroo|Playwright|
|66|F01|EC36| post_3_create_post_basic_success|POSITIVO|a priori -mockaroo|Playwright|
|67|F01|EC37| post_4_delete_post|POSITIVO|a priori -mockaroo|Playwright|
|68|F10|E001|Crea page con titulo y descripción|POSITIVO|Aletaorio-faker|cypress|
|69|F10|E002|Crea page y asigna Tag|POSITIVO|Aletaorio-faker|cypress|
|70|F10|E003|Crea  y publica page|POSITIVO|Aletaorio-faker|cypress|
|71|F10|E004|Crea y despublica page|POSITIVO|Aletaorio-faker|cypress|
|72|F11|E005|Visualiza page publicada|POSITIVO|Aletaorio-faker|cypress|
|73|F10|E006|Crea page y asigna Tag carácter invalido|NEGATIVO|Aletaorio-faker|cypress|
|74|F10|E007|Crea page y agrega Excerpt mayor al limite|NEGATIVO|Aletaorio-faker|cypress|
|75|F10|E008|Crea page y titulo mayor al limite|NEGATIVO|Aletaorio-faker|cypress|
|76|F10|E009|Crea page y TAG mayor al limite|NEGATIVO|Aletaorio-faker|cypress|
|77|F12|E010|Publica page con titulo vacio|NEGATIVO|Aletaorio-faker|cypress|
|78|F12|E0011|Agrega url valido a pageAgrega url valido a page|Positivo|Dinamico Api Mockaroo|cypress|
|79|F12|E012|Agrega Tag valido a page|Positivo|Dinamico Api Mockaroo|cypress|
|80|F12|E013|Agrega excerpt valido a page|Positivo|Dinamico Api Mockaroo|cypress|
|81|F12|E014|Agrega titulo valido a page|Positivo|Dinamico Api Mockaroo|cypress|
|82|F12|E015|Agrega titulo  y descripción valido a page|Positivo|Dinamico Api Mockaroo|cypress|

