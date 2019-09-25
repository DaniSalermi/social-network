<a href="https://ibb.co/WyQrp9F"><img src="https://i.ibb.co/R01X4nP/migrame.png" alt="migrame" border="0"></a>

[Para acceder a demo de app haz click aquí](https://dacoquima.github.io/SCL010-Social-Network/src/#/home)

---

## **Índice**

- [1- Migra.me ](#migra.me)
  - [1.1-Preámbulo](#preámbulo)
  - [1.2-Usuario](#usuario)
  - [1.3-Problemática del Usuario](#problemática-del-Usuario)
  - [1.4-Objetivos de la Aplicación](#objetivos-de-la-aplicacion)
- [2-Metodología UX](#Metodología-UX)

  - [2.1-Encuesta online](#Encuesta-online)
    - [2.1.1-Alcance de la encuesta](#alcance-de-la-encuesta)
    - [2.1.2-Conclusiones de la encuesta](#Conclusiones-de-la-encuesta)
  - [2.2-Historias de Usuario](#historias-de-usuario)
  - [2.3-Diagrama de Flujo](#diagrama-de-flujo)
  - [2.4-Prototipo de Baja Fidelidad](#prototipo-de-baja-fidelidad)
    - [2.4.1-Sketch](#sketch)
    - [2.4.2-Wireframe](#wireframe)
    - [2.4.3-Tests de usabilidad](#tests-de-usabilidad)
  - [2.5-Estudios de interfaz](#Estudios-de-interfaz)
    - [2.5.1-Estudio de benchmark](#Estudio-de-benchmark)
    - [2.5.2-Guia de estilos](#Guia-de-estilos)
  - [2.6-Prototipo de Alta Fidelidad](#prototipo-de-alta-fidelidad)
    - [2.6.1-Prototipo en Abobe XD](#prototipo-en-Abobe-XD)
  - [2.7-Interfaz Final](#Interfaz-Final)
    - [2.7.1-Evaluación heuristica](#evaluacion-heuristica)

- [3-Pruebas unitarias](#Pruebas-unitarias)
- [4-Futuras Mejoras](#futurasmejoras)
- [5-Herramientas](#herramientas)
- [6-Desarrolladoras](#desarrolladoras)
- [7-Checklist obligatorio](#checklist-obligatorio)

---

## **1.1-Preámbulo**📋

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y much@s no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo, en una ronda de financiamiento con inversionistas, se presentó una red social para químicos en la que los usuarios podían publicar artículos sobre sus investigaciones, comentar en los artículos de sus colegas, y filtrar artículos de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo más comentado.

---

### **1.2-Usuario**

Migra.me es una aplicación web destinada a usuarios mayores de edad, que sean o no inmigrantes, ya que la misma se basa en la ayuda que se le puede dar a esa minoría desde cualquier ámbito. Se recomienda su uso para personas mayores de edad, que sepan utilizar una aplicación web y tengan facilidades para leer y escribir.
El enfoque hacia inmigrantes, es poder buscar información de interés sobre trámites en el país al que llegan, datos de alojamiento, arriendo, trabajo, cultural, etc. También otorgar datos a sus compatriotas que les puedan ser de utilidad mediante las publicaciones.
El enfoque hacia las personas no migrantes, es el de proveer datos de interés, contactos, alojamiento, trabajo, arriendo, datos culturales, etc, a inmigrantes dentro de su país mediante las publicaciones.
La visión general de la aplicación es poder recopilar en un sólo lugar todos los datos que hoy en día se comparten mediante grupos de whatsapp, facebook o cuentas de instagram. Así como también el crear comunidad y lazos entre los integrantes de todas las culturas.

---

### **1.3-Problemática del Usuario**

Hay muchos canales y servicios difusos por plataformas cómo whatsapp, facebook y instagram que sirven para visualizar y cambiar las informaciones sobre el tema, pero de manera desordenada.
<a href="https://ibb.co/WtcPDmc"><img src="https://i.ibb.co/VmvQHfv/Slide30.png" alt="Slide30" border="0"></a>

---

### **1.4-Objetivos de la Aplicación**

Con nuestro modelo de las 3 C's, los inmigrantes tendran acceso a miles de datos cada día, publicados directamente por la comunidad de inmigrantes en Chile, así como por chilenos dispuestos a ayudarlos.
<a href="https://ibb.co/bBbfFJY"><img src="https://i.ibb.co/9TZMhtB/objetivos.png" alt="objetivos" border="0"></a>

---

## **2-Metodología UX** 📌

###**2.1-Encuesta online:**
Se redacta y ejecuta una encuesta con el Formulario de Google Forms, para definir los parámetros generales de la aplicación: a qué usuario nos vamos a dirigir, cuáles son sus necesidades e intereses relacionados con la búsqueda de informaciones sobre inmigración,como también para obtener claridad sobre cuál es la información más relevante a la que dichos usuarios necesitarán acceso.
Con esta información se plantea la jerarquización de la data y de sus funcionalidades para poder acomodarla dentro del flujo de la aplicación junto con parámetros de usabilidad como también de diseño de interface (UI).

---

#### **2.1.1-Alcance de la encuesta**

La encuesta alcanzó un total de 72 respuestas en dos día y se puede encontrar haciendo click en la [encuesta online.](https://forms.gle/fcRHB1fu2JKogN4DA)
<a href="https://ibb.co/M6TH2L6"><img src="https://i.ibb.co/X8BP2T8/Slide24.png" alt="Slide24" border="0"></a>

#### **2.1.2-Conclusiones tras analizar encuesta:**

**A partir de los resultados pudimos obtener y definir sobre los inmigrantes:**
<a href="https://ibb.co/mNf97dF"><img src="https://i.ibb.co/9ZQbjB3/Slide25.png" alt="Slide25" border="0"></a>
<a href="https://ibb.co/ysVCqSy"><img src="https://i.ibb.co/h8CNVfW/Slide26.png" alt="Slide26" border="0"></a>
<a href="https://ibb.co/yyCD5Fn"><img src="https://i.ibb.co/7WDHVtJ/Slide27.png" alt="Slide27" border="0"></a>

- As temáticas que más interesan a los inmigrantes son tramites de visa (52,5%), busqueda de trabajo (22,5%) y adaptarse a la cultura.
- Los países de onde vienen los entrevistados son Venezuela, Brasil y Colombia;
- Los motivos más relevantes son mala situación del país de origen, acampañar la familia y laboral
- Los canales que más usan para se informar son sitios del gobierno, instagran, whatsapp y facebook
- 52,5% no estan satisfechos con la manera que se informam
  <a href="https://ibb.co/yyCD5Fn"><img src="https://i.ibb.co/7WDHVtJ/Slide27.png" alt="Slide27" border="0"></a>
  <a href="https://ibb.co/ZGzzRB1"><img src="https://i.ibb.co/Nt22g9n/Slide29.png" alt="Slide29" border="0"></a>

**No inmigrantes:**

- 96% ayudarian a un inmigrante
- 87% les gustaria tener una app para ayudar a los inmigrantes
- Ayudarian a traves de contactos (62,5%), ropas, alimentos y articulos para el hogar
  <a href="https://ibb.co/Gd5qFy0"><img src="https://i.ibb.co/3TCnk27/Slide30.png" alt="Slide30" border="0"></a>
  <a href="https://ibb.co/8NQjck3"><img src="https://i.ibb.co/GnrVTmw/Slide31.png" alt="Slide31" border="0"></a>
  <a href="https://ibb.co/rxzYKSj"><img src="https://i.ibb.co/ZBF5RPj/Slide32.png" alt="Slide32" border="0"></a>

---

#### **2.2-Historias de Usuario**

Se definen acciones y funciones que nuestro usuario necesita y quiere realizar dentro de la app para lograr sus objetivos. La planificación se realizó mediante un trabajo colaborativo en [Trello](https://trello.com/b/CZnczp1y/laboratoria-social-network) y utilizando ceremonias ágiles para verificar las tareas que va realizando cada miembro del equipo –así detectamos a tiempo bloqueos-, dailys y retrospectivas diarias.
<a href="https://ibb.co/GkYZynN"><img src="https://i.ibb.co/wCGnVBj/Slide23.png" alt="Slide23" border="0"></a>

As historias de usuario nos permitirán al equipo ir desarrollando cada una de las necesidades de los usuarios que puedan utilizar la aplicación en un futuro, todas tendrán un formato como el que sigue:
Yo como…
Quiero…
Para...

Dividimos nuestras historias, en flujos más chicos y enfocados para que hubiera avances más solidos del proyecto.
<a href="https://ibb.co/HrXX1Gs"><img src="https://i.ibb.co/sFttksG/Slide5.png" alt="Slide5" border="0"></a>
<a href="https://ibb.co/DgDB7mK"><img src="https://i.ibb.co/zHh3SCf/Slide6.png" alt="Slide6" border="0"></a>
<a href="https://ibb.co/hghnqH3"><img src="https://i.ibb.co/p1GsmZY/Slide7.png" alt="Slide7" border="0"></a>
<a href="https://ibb.co/RP5r8pt"><img src="https://i.ibb.co/VDKn6Wb/Slide8.png" alt="Slide8" border="0"></a>
<a href="https://ibb.co/K7MLWh2"><img src="https://i.ibb.co/6b31FwH/Slide9.png" alt="Slide9" border="0"></a>
<a href="https://ibb.co/GMCcXpp"><img src="https://i.ibb.co/6tDg2ww/Slide10.png" alt="Slide10" border="0"></a>
<a href="https://ibb.co/0yj8vt5"><img src="https://i.ibb.co/N26QbSR/Slide11.png" alt="Slide11" border="0"></a>
<a href="https://ibb.co/FxycmVn"><img src="https://i.ibb.co/K0fBbwm/Slide12.png" alt="Slide12" border="0"></a>
<a href="https://ibb.co/XX3J5vT"><img src="https://i.ibb.co/xhf5gRQ/Slide13.png" alt="Slide13" border="0"></a>
<a href="https://ibb.co/z5qgc8P"><img src="https://i.ibb.co/g7k81vt/Slide14.png" alt="Slide14" border="0"></a>

---

### **2.3- Diagrama de Flujo**

A partir de las historias de usuario se define el flujo básico de la aplicación:
<a href="https://ibb.co/mD2dqh2"><img src="https://i.ibb.co/Fxycw8y/Slide17.png" alt="Slide17" border="0"></a>
<a href="https://ibb.co/54ZvS1F"><img src="https://i.ibb.co/Rb8Psgy/Slide18.png" alt="Slide18" border="0"></a>
<a href="https://ibb.co/vL31dDJ"><img src="https://i.ibb.co/BTyL6wg/Slide19.png" alt="Slide19" border="0"></a>
<a href="https://ibb.co/X767mWL"><img src="https://i.ibb.co/zXCXKmx/Slide20.png" alt="Slide20" border="0"></a>

---

### **2.4-Prototipo de Baja Fidelidad**

#### **2.4.1-Sketch**

Nuestro primer objetivo fue distribuir cada elemento de la App Web, de acuerdo a lo visto en las historias de usuario.
<a href="https://ibb.co/r696C1q"><img src="https://i.ibb.co/yy2ywbK/Slide36.png" alt="Slide36" border="0"></a>

#### **2.4.2- Wireframe**

Desarrollo formal de página web, en términos de estructura, contenidos y diagramación a partir de la información y datos recopilados en la encuesta preliminar y test de usabilidad durante el desarrollo de la aplicación.
Se desarrolla Wireframe en todas sus vistas .
<a href="https://ibb.co/nbshysc"><img src="https://i.ibb.co/t4My6Ms/Slide37.png" alt="Slide37" border="0"></a>
<a href="https://ibb.co/6B4Qz21"><img src="https://i.ibb.co/TLHy6Zb/Slide38.png" alt="Slide38" border="0"></a>
<a href="https://ibb.co/7kYKGKn"><img src="https://i.ibb.co/J3BHzHv/Slide39.png" alt="Slide39" border="0"></a>
<a href="https://ibb.co/2Zm1XTS"><img src="https://i.ibb.co/Z2tpy0S/Slide40.png" alt="Slide40" border="0"></a>

#### **2.4.3- Test de Usabilidad**

La Prueba de Usabilidad que se ofrece a través de este documento, está enfocada a los siguientes ámbitos, cada uno de los cuales se mide por separado: • Identidad • Contenido • Navegación • Búsqueda • Feedback • Utilidad

Hiciemos tests con 2 usuarios con tiempo medio de 11 minutos.

Los vídeos de las entrevistas:

- [Entrevista 1](https://www.loom.com/share/4b1f8a14876f4181a683fe073a1045a5)
  <a href="https://ibb.co/JyHp1NY"><img src="https://i.ibb.co/z7Z2M13/entrevista-01.png" alt="entrevista-01" border="0"></a>

- [Entrevista 2](https://www.loom.com/share/5443eb2b11b5448faa2a63b34fa39f8e)
  <a href="https://ibb.co/MMrmMzy"><img src="https://i.ibb.co/72Pq23x/entrevista-02.png" alt="entrevista-02" border="0"></a>

Para mirar el relato de cada una de las entrevistas [ACCEDA ACÁ](https://docs.google.com/document/d/1pg_-5nKETu9bISX8iNR90t1Yyk0re1WbMZUO0soARTg/edit?usp=sharing)

**Mejorias de proyecto**

- Usar a palabra inmigrante con más frecuencia;
- Hacer una pantalla para los filtros por categorias;
- Añadir categorias cultura, gastronomia y alojamiento;
- Añadir más botones de navegación en el footer;
- Hacer claro que es una comunidad y no el gobierno;
- Añadir informaciones en la pantalla principal, aclarando los objetivos de la app;

**Estructura del test de usabilidad**

- Presentación del usuario
- Entrevistadora:
- Fecha:
- Sitio Web:
- ¿Cuál es tu nombre?
- ¿Que edad tienes?
- ¿A qué se dedica (Profesión, Actividad)?
- ¿Cuáles son sus sitios preferidos?
- ¿Eres inmigrante? Caso sí de dónde?
- ¿Qué tipo de información buscaría en una app sobre inmigración?

**1. Identidad**
Las preguntas en este ámbito buscan establecer si el sitio logra diferenciarse de otros y establecer para efectos del usuario, la imagen corporativa de la institución propietaria del sitio web. Por ello, las preguntas se enfocan especialmente a determinar si a primera vista el usuario ha entendido en qué espacio ha ingresado.
Estas preguntas se deben hacer cuando el usuario está mirando la pantalla inicial y antes de comenzar a navegar o hacer “click” sobre algún contenido.

1. ¿Con la información que se ofrece en pantalla, es posible saber a qué institución o empresa corresponde el sitio? ¿Cómo lo sabe?

2. ¿Hay algún elemento gráfico o de texto que le haya ayudado a entender más claramente a qué institución o empresa pertenece el sitio?
3. ¿Distingue alguna imagen que represente (logotipo) a la institución? ¿Cree que aparece en un lugar importante dentro de la página? ¿Puede leer el nombre de la institución?
4. ¿Hacia qué tipo de audiencia cree usted que está dirigido este sitio? ¿Por qué?

**2. Contenido**
Estas preguntas se realizarán luego de que el usuario observe la pantalla inicial y antes de que interactúe con el prototipo de la app, con el fin de que se forme una opinión acerca de lo que está viendo y la forma de navegar por sus contenidos.
Estas preguntas se deben hacer luego de permitir al usuario navegar el sitio, con el fin de que se forme una opinión acerca de lo que está viendo y la forma de navegar por sus contenidos.

5. ¿Le parece adecuada la selección de contenidos destacados en la portada o usted echó de menos otras áreas de información que le habría gustado ver destacadas?
6. ¿Los textos usados en los contenidos de los enlaces son suficientemente
   descriptivos de lo que se ofrece en las páginas hacia las cuales se accede a través de ellos?
7. En caso de haber información relacionada con la que estaba viendo, ¿se le ofreció de manera simple? ¿O tuvo que volver a navegar para encontrarla?

**3. Navegación**
Las preguntas de esta sección permiten establecer si la forma de organizar la información dentro del sitio web es adecuada de acuerdo a la experiencia, conocimientos y expectativas que tenga el usuario que visite el sitio web.
Estas preguntas se deben realizar luego de que el usuario ya navegó a través de la página, a su ritmo, sin intervenciones del entrevistador.

8. ¿La información que te ofrecen los textos de los botones tiene concordancia con las funciones que estos ejecutan?
   11¿Lograste entender fácilmente cómo acceder a las interacciones que te proponía la página?
9. ¿Cómo vuelve desde cualquier página del sitio a la página de inicio? ¿Ve alguna forma de hacerlo, que no sea presionando el botón del buscador? ¿Le parece claro?
10. ¿Qué podrías decirnos respecto a tu experiencia navegando a través de la página?
11. El sitio tiene varios niveles de navegación y Usted ha ingresado y salido de varios de ellos. ¿La información que se le ofrece en pantalla le parece adecuada para entender dónde está ubicado en cualquier momento? ¿Se ha sentido perdido dentro del sitio? ¿Si lo ha sentido, recuerda en qué área fue? ¿Si no lo ha sentido, qué elemento del sitio cree que le ayudó más a orientarse?

**4. Gráfica Web**
Las preguntas de esta sección buscan establecer si al usuario le ayuda la información gráfica que se le ofrece a través de las pantallas del sitio web.

12. ¿Considera que gráficamente el sitio está equilibrado, muy simple o recargado?

**5. Búsqueda**
Las preguntas de esta sección buscan establecer si el sistema de búsqueda cubre las necesidades de acceso a información que tiene el usuario.

13. ¿Utiliza normalmente un buscador al acceder a un sitio web? ¿Distinguió si en este sitio se ofrecía un buscador? ¿Dónde está?
14. ¿Cómo haría la operación de buscar? ¿Qué/Quién buscaría? ¿Dónde lo buscaría?
15. ¿Qué espera encontrar? ¿Ese es lo que esperaba encontrar?, ¿Le sirve?

**6. Feedback**
Las preguntas de esta sección buscan establecer si el usuario encuentra la forma de ponerse en contacto con la institución.

16. ¿Al mandar datos mediante un formulario, el web le avisa si los recibió correctamente o no?

**7. Utilidad**
Las preguntas de esta sección son las finales de la prueba y tienen el objetivo de establecer una especie de resumen general de la experiencia de navegar el sitio.

17. ¿Tras una primera mirada, le queda claro cuál es el objetivo del sitio? ¿Qué contenidos y servicios ofrece? ¿Los puede enumerar?
18. ¿Cree que los contenidos y servicios que se ofrecen en este sitio son de utilidad para su caso personal?
19. ¿Qué es lo que más te llamó la atención positivamente o negativamente de la utilidad que ofrece el sitio web?

- Fuentes de consulta:
  https://www.guiadigital.gob.cl/guia-v2/capitulos/05/anexos/pauta-test-usuario.pdf
  https://www.nngroup.com/topic/user-testing/

---

#### **2.5- Estudio de Interfaz**

##### **2.5.1-Estudio de Banchmark**

<a href="https://ibb.co/TPFQY14"><img src="https://i.ibb.co/VMPFJxg/Slide31.png" alt="Slide31" border="0"></a>
<a href="https://ibb.co/HHw3H6X"><img src="https://i.ibb.co/Kr4Srdm/Slide32.png" alt="Slide32" border="0"></a>

##### **2.5.2-Guia de estilos**

La gama de colores fue seleccionada primero basada en el estudio de colores para el sentimiento de "confianza", con predominancia del azul, punto clave para el ingreso de los nuevos usuarios a nuestra app. O azul con verde y rojo hace la impresión de simpatia y harmonia.
<a href="https://ibb.co/yQNtvYq"><img src="https://i.ibb.co/fxXf6nH/Guia-De-Estilo.png" alt="Guia-De-Estilo" border="0"></a>

---

#### **2.6- Prototipo de Alta Fidelidad**

Después de la definición de usuario, de sus características, intereses y gustos, se define el diseño visual de nuestra aplicación en términos de color, fuente, logo y contenido de imágenes entre otros.
<a href="https://ibb.co/VNzwHNr"><img src="https://i.ibb.co/yRZ4hRG/Index-html.png" alt="Index-html" border="0"></a>
<a href="https://ibb.co/VwRJRWK"><img src="https://i.ibb.co/MBrZrDX/Slide41.png" alt="Slide41" border="0"></a>
<a href="https://ibb.co/sbwtmbH"><img src="https://i.ibb.co/0mMQDmt/Slide42.png" alt="Slide42" border="0"></a>

### **2.6.1 Evaluación heurística**

Realizamos la evaluación para nuestra página web en el siguiente sitio: [haz click aquí](https://drive.google.com/open?id=1B8kSQNQXLlGOmk2P510z6iBY9ngg4fB13wy81b-Nd5g)

---

## **3-Pruebas unitarias**

Hiciemos la prueba con la validación de la publicación, o sea, no se puede publicar si no se presenta una string.
<a href="https://ibb.co/Bc2HsCs"><img src="https://i.ibb.co/LYdDpZp/Slide43.png" alt="Slide43" border="0"></a>

---

## **4-Futuras Mejoras**

- Añadir búsqueda por palabras;
- Añadir nuevos filtros por país;
- Agregar y eliminar contactos;
- Comentar, editar y borrar comentarios en las publicaciones;
- Mejorias en la busqueda por categorias;
- Editar perfil - añadir nuevos datos;
- Mejora en la versión desktop;
- Accebilidad(tamaño de letras, colores, etc);
- Manejo de contactos;
- Privacidad en las publicaciones;
- Ubicación y hashtags en las publicaciones;
- Publicar fotos;
- Notificaciones;
- Hacer una sessión con preguntas frecuentes y contacto con la app;
- Más validaciones para el usuario;
- Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
- Versión en otros idiomas como portugues y criollo;

---

## **5-Herramientas** 🛠️

- Visual Studio (HTML5, CSS3, JAVASCRIPT)
- [Firebase](https://firebase.google.com/products/database/)
- [Trello](https://trello.com)
- [Balsamiq](https://balsamiq.com/)
- [Adobe XD](https://letsxd.com/)
- [Illustrator](https://www.adobe.com/pt/products/illustrator/free-trial-download.html)
- [Loom](https://www.loom.com)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Desktop](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/es-ES/)

---

## **6-Desarrolladoras**

- [Carolina Guido](https://github.com/carolgmonteiro)
- [Daniela Salermi](https://github.com/DaniSalermi)
- [Daniela Quintana](https://github.com/dacoquima)

**División de tareas:**

| Carolina Guido                  | Daniela Salermi          | Daniela Quintana      |
| :------------------------------ | :----------------------- | :-------------------- |
| Planning                        | Planning                 | Planning              |
| HTML5 JavaScript CSS3           | HTML5 JavaScript CSS3    | HTML5 JavaScript CSS3 |
| UX Design Prototipo Baja Readme | Readme Prototipo de alta | Prototipo de alta     |
| Tests de usabilidad             | Sketches Mapa de flujo   | Guia de estilos       |

---

## 7- Checklist de la parte obligatoria

### Frontend

- [x] Debe ser una SPA.
- [x] Debe ser _responsive_.
- [x] Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- [x] Debes haber recibido _code review_ de al menos una compañera de otro equipo.
- [x] Hiciste _pruebas_ de usabilidad e incorporaste el _feedback_ del usuario.

**Comportamiento de la APP**

- [x] Al enviarse un formulario de registro o inicio de sesión, debe validarse.
- [x] Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña, y con cuenta de Google.
- [x] La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
- [x] No pueden haber usuarios repetidos.
- [x] La cuenta de usuario debe ser un correo electrónico válido.
- [x] Lo que se escriba en el campo (input) de contraseña debe ser secreto.
- [x] Al enviarse un formulario de registro o inicio de sesión, debe validarse.
- [x] Al recargar la aplicación, se debe verificar si el usuario está logueado antes de mostrarle el contenido.
- [ ] En caso haya errores, el sistema debe mostrar mensajes de error para ayudar al usuario a corregirlos.
- [x] Poder publicar un post.
- [x] Para el login y las publicaciones en el muro puedes utilizar Firebase
- [x] Al apretar el botón de publicar, debe validar que exista contenido en el input.
- [x] Poder dar y quitar _like_ a una publicación.
- [x] Llevar un conteo de los _likes_.
- [x] Poder eliminar un post específico.
- [x] Pedir confirmación antes de eliminar un _post_.
- [x] Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_ que permita editar el texto y luego guardar los cambios.
- [x] Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
- [x] Al recargar la página debo de poder ver los textos editados.

### UX

- [x] Hacer al menos 2 o 3 entrevistas con usuarios.
- [x] Hacer un prototipo de baja fidelidad.
- [x] Hacer un prototipo de alta fidelidad
- [x] Asegurarte de que la implementación en código siga los lineamientos del diseño.
- [x] Hacer sesiones de testing con el producto en HTML.
- [x] Test de heuristica
