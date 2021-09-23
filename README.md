# CSRFAttackPractice

# **INDICE**

- [1. INTRODUCCION](#id1)
- [2. CSRF ATTACK](#id2)
  - [2.1 ¿Qué es un ataque CSRF?](#id3)
  - [2.2 ¿Cómo funciona un ataque CSRF?](#id4)
  - [2.3 ¿Por qué funciona el ataque CSRF?](#id5)
  - [2.4 Diagrama de representación del ataque](#id6)
  - [2.5 Consecuencias del ataque CSRF](#id7)
  - [2.6 Medias de prevención para evitar un ataque CSRF de parte del usuario](#id8)
    - [2.6.1 Navegar con atención y precaución](#id9)
    - [2.6.2 Revisar el terminal en busca de malware](#id10)
  - [2.7 Métodos para bloquear un ataque CSRF de parte del servidor](#id11)
    - [2.7.1 Autenticación de doble factor](#id12)
    - [2.7.2 Encabezado de referencia](#id13)
    - [2.7.3 Cerrar sesión al finalizar el uso](#id14)
- [3 Practica con el software OWSAP (Open Web Application Security Project)](#id15)

# **1.INTRODUCCION** <a name="id1"></a>

En la actualidad existen varios ataques cibernéticos hacia aplicaciones web que puede perjudicar a los usuarios que navegan por el internet por ello es recomendable que conozcan no todo sino lo suficiente para identificar cuando es posible o prevenir los ataques, por ello se hará una descripción del ataque CSRF y una práctica de como realizan los atacantes este tipo de ataque y recomendaciones de cómo prevenir tanto de parte del usuario del proveedor de la página web.

# **2. CSRF ATTACK** <a name="id2"></a>

- ## **2.1 ¿Qué es un ataque CSRF?**  <a name="id3"></a>

  El Cross Site Request Forgery (CSRF, Falsificación de solicitud de sitio de El Cross) es un tipo de ataque a sistemas o aplicaciones web comúnmente que se suele usar para estafas, robo de cuentas, o de información relevante por Internet. Los delincuentes realizan este ataque cuando se apoderan de una sesión autorizada por el usuario para realizar actos dañinos. El ataque se lleva a cabo mediante el protocolo HTTP. (ionos, 24)

- ## **2.2 ¿Cómo funciona un ataque CSRF?** <a name="id4"></a>

  Un usuario accede a una página o aplicación web iniciando sesión; y a la vez visita otras páginas, la cual fue implementadas por el atacante, en cual el usuario realiza diversas acciones, por ejemplo, el accionamiento de un botón, en la cual en esa acción el atacante envía una solicitud HTTP al portal empleado por el usuario y realiza una acción dentro del servidor en nombre del el, ya que la sesión esta activa. (ionos, 24)

  Para realizar este ataque el atacante debe de saber simplemente la forma de la solicitud HTTP correcta.

  Servidor del portal reconoce la solicitud HTTP que ha sido formulada correctamente y atreves de las cookies de sesión correspondientes, el servidor ejecuta las acciones del atacante en nombre del usuario sin que se dé cuenta.

- ## **2.3 ¿Por qué funciona el ataque CSRF?**  <a name="id5"></a>

  El Ataque CSRF es un ataque que funciona porque un servidor (receptador) que procesa peticiones HTTP no puede o no comprueba de donde proceden dichas solicitudes HTTP, es decir, no queda claro si la petición fue hecha o creada por la propia página web o si fue de origen externo, en este contexto, el atacante puede aprovecharse de la brecha de seguridad del propio navegador o del propio navegador para trasmitir dichas solicitudes al servidor sin que se cuenta que un tercero está haciendo dicha acción. (ionos, 24)

- ## **2.4 Diagrama de representación del ataque**  <a name="id6"></a>

  ![DIAGRAMA DE ATAQUE CSRF](img/001.png)

- ## **2.5 Consecuencias del ataque CSRF**  <a name="id7"></a>

  - Robo de identidad
  - Robo de cuentas en páginas web
  - Robo de información sensible
  - Acciones no reversibles en una pagina
  - Robo de material valioso

- ## **2.6 Medias de prevención para evitar un ataque CSRF de parte del usuario**  <a name="id8"></a>

  - ### **2.6.1 Navegar con atención y precaución**  <a name="id9"></a>

    En la actualidad existen varias sino bastante forma de acceder a cuentas sin autorización alguna, por ello es recomendable navegar en las páginas web con precaución y alerta, revisando la procedencia de la página, el contenido de dicha página, y a la vez tener cuidado de que información ingresa en páginas.

  - ### **2.6.2 Revisar el terminal en busca de malware**  <a name="id10"></a>
    Aunque la mayoría de las personas no tienen concomiendo avanzado del uso de un navegador, sería recomendable que todos los usuarios de internet tengan el cocimiento de acceder a la terminal o consola de los navegadores para poder revisar cuando sospecha de una página, revisar las peticiones y ejecuciones de un script en consola para prevenir un ataque CSRF o cualquier otro tipo de ataque hacia las paginas o hacia el propio usuario.

- ## **2.7 Métodos para bloquear un ataque CSRF de parte del servidor**  <a name="id11"></a>

  - ### **2.7.1 Autenticación de doble factor**  <a name="id12"></a>

    La mayoría de aplicaciones web en la actualidad se puede implementar una autenticación de doble factor, para poder realizar el acceso a la aplicación web o para realizar acciones importantes dentro de la aplicación web, como ejemplo en los bancos para realizar una transacción en un portal de banco solicita un token enviando al correo o al celular para poder realizar la transacción.

  - ## **2.7.2 Encabezado de referencia**  <a name="id13"></a>
    La mayoría de navegadores en algunos casos no solicitan o no les dan importancia a los encabezados de referencia (host de origen, host de llegada, CORS) de las peticiones HTTP, por tal forma es posible realizar este tipo de ataque, por tal forma los servidores deberán de agregar obligatoriamente esta información en el encabezado para evitar los más posible estos tipos de ataques.
  - ## **2.7.3 Cerrar sesión al finalizar el uso**  <a name="id14"></a>
    La mayoría de ataques CSRF suceden porque en el servidor no tienen autenticación de token CSRF pero otro de los mayores vulnerabilidades sucede porque el servidor no tiene un tiempo límite de sesión, es decir que la sesión puede estar abierta por todo el tiempo, de tal forma eso hace más susceptible a los ataques, por ello se recomienda que en los servidores se tenga limite en las sesiones.

# **3 Practica con el software OWSAP (Open Web Application Security Project)**  <a name="id15"></a>

- ## **3.1 OWSAP ZAP** 
  OWASP (acrónimo de Open Web Application Security Project, en inglés ‘Proyecto abierto de seguridad de aplicaciones web’) es un proyecto de código abierto dedicado a determinar y combatir las causas que hacen que el software sea inseguro. La Fundación OWASP es un organismo sin ánimo de lucro que apoya y gestiona los proyectos e infraestructura de OWASP. La comunidad OWASP está formada por empresas, organizaciones educativas y particulares de todo mundo. Juntos constituyen una comunidad de seguridad informática que trabaja para crear artículos, metodologías, documentación, herramientas y tecnologías que se liberan y pueden ser usadas gratuitamente por cualquiera.

  ![DIAGRAMA DE ATAQUE CSRF](img/002.jpeg)

- ## **3.2 Practica**
    - ## **3.2.1 Entorno de ejecucion de las aplicaciones** 
      - la siguente practica se hara en un entorno en la nube para facilitar el uso de las herramientas y un caso mas real en donde se puede suceder el ataque
      - por la cual se usara el proveedor en la nube **[DigitalOcen](http://digitalocean.com/)**
      - en cual se usará **[DigitalOcen](https://www.docker.com/)** para la visualizacion de los servidores correspondiente para facilitar la configuracion de los servidores

      - para poder instalar docker en el servidor  **[Acceda a este link](https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-18-04-1-es)** 

  - ## **3.2.2 Imagenes de los servidores** 
    - ## **Target Server**
        Constara de dos imagenes:
        
        la primera imagen es para realizar la prueba sin la proteccion Ante el **ataque CSRF** en el cual llevara el nombre de **cloud.canister.io:5000/msmarcks/csrfattackserver_sp**

        - **Comando para iniciar la imagen**

          ```ssh
          docker run -d -p "3000:3000" --name csrfattackserver_sp cloud.canister.io:5000/msmarcks/csrfattackserver_sp
          ```

        la segunda imagen es para realizar la prueba con la proteccion Ante el **ataque CSRF** en el cual llevara el nombre de **cloud.canister.io:5000/msmarcks/csrfattackserver_cp**
  
- explicacion de donde se hara el ejemplo
  - nodejs
- Target server
   