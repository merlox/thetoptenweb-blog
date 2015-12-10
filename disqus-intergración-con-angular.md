Aqui estaba yo en un día nublado de invierno de diciembre, de esos en los que te apetece picar código bajo una manta térmica de los chinos, trabajando en mis proyectos tras leer -sin terminar- varios libros de como ser mejor persona en todos los aspectos de la vida cotidiana para alcanzar ese sueldo de 50 millones de euros mensuales. Es entonces que decido motivadamente, a continuar mi blog -es el momento- me dije poco después de escuchar atentamente el podcast de smart passive income (podcast que no puedo recomendar lo suficiente del buen contenido que ofrece) para cumplir los siguientes objetivos:

1. **Crear** una lista de emails para tener una base de fans que apoyen mi trabajo, obras y creaciones.
2. Darme a **conocer** en internet mostrando en lo que estoy metido actualmente.
3. **Ayudar** a cualquiera que se encuentre en una situación similar a la mía a salir de cualquier problema que me vaya encontrando a lo largo del viaje.
4. **Compartir** entre vosotros y yo el progreso de los proyectos de manera colaborativa en la que los visitantes dejéis vuestra opinión a través de encuestas y comentarios para hacer de esto y de todos los proyectos, una obra comunitaria.  

De aqui surje la necesidad de un sistema fiable de comentarios y comparto los errores que me encontré y superé para **implementar disqus en una single page web app**, concretamente en una **angular web app** con la esperanza de ayudar a cualquier otro que pase por lo mismo, o motivar a cualquiera que desee implementar este sistema de comentarios en web apps modernas.

Aprenderás en este artículo:

- Cómo conseguí implementar disqus en paginas que no se recargan completamente sin dolores de cabeza.
- Cómo elegí la mejor alternativa.
- Explicación de los problemas encontrados y soluciones.

Hoy he implementado con éxito el sistema de comentarios de disqus, el más usado y fiable por méritos propios. Es tan sencillo como registrarse en su web y copiar el código que te dicen en la siguiente ventana.

Sin embargo si se trata de una -single page web app- hecha con angular como es mi caso, entonces se complica debido a que angular bloquea el código que debe ejecutarse para hacer funcionar disqus.

El remedio es una una direciva creada por un miembro de github. Tras el primer intento, no funcionó, sin embargo se veía un mensaje diciendo que no se pudo cargar disqus. 

Por ello, al ver que no funcionaba en primera instancia, decidí buscar en google otras opciones encontrándome con angular-material, una opción antiguada debido a que el creador tuvo que dejar el proyecto aparte, aun así lo instalé con bower 

`bower install angular-material --save` 

lo añadí a mi proyecto, sin embargo no funcionó, esta vez no aparecía ningún mensaje así que lo deje de lado irremediablemente.

Tras una media hora de buscar alernativas y soluciones posibles, ví que no había una solución oficial.

Es entonces cuando me encontré con una pagina de demostración del funcionamiento de disqus en una pagina angular. Resultó ser que el autor de la primera directiva, denominada `angularUtils-dirDisqus` conseguí hacerlo funcionar en una versión anterior de disqus, por lo que busqué información acerca de ese proyecto encontrándome en otra página que demostraba como implementar el sistema de disqus en angular.

Tras leerlo detenidamente, descubro que el error que estaba cometiendo se originaba por no añadir todas las opciones obligatorias para el funcionamiento correcto de la directiva.

En resumen, todo este lío fue la causa de:

1. No haber leído con suficiente dedicación la documentación de la directiva en github.
2. Desconocimiento que angular bloquea el código de disqus.
3. El cambio de versión entre el disqus actualizado que estaba usando yo en ese momento y la versión que se mostraba en los tutoriales llevándome a pensar que la directiva que integra disqus en angular no estaba actualizada y por tanto no sería funcional.