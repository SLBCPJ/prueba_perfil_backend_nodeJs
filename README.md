# Reto:

## Desarrollo de servicio web (API REST) que sirva endpoints para un sistema de gestión de historia clínica centralizada.

La prueba es una aplicación que permite la gestión de usuarios en un sistema de salud. A continuación, se detallan los requerimientos y condiciones que se deben cumplir para el correcto funcionamiento de la aplicación.

Requerimientos

Permitir registro de usuarios con Identificación, Email, Teléfono y contraseña.

1\.1. Los tipos de usuario permitidos en registro son Hospital y Paciente.

Confirmación de registro por parte de usuario a través de uno de sus datos de contacto.

2\.1. El usuario no podrá acceder al sistema hasta que confirme su registro.

Inicio de sesión de usuario utilizando Identificación y Contraseña.

Registro de datos básicos de usuario.

4\.1. Si el usuario es de tipo Hospital debe registrar: Nombre, Dirección, Servicios médicos que brinda.

4\.2. Si el usuario es de tipo paciente debe registrar: Nombre, Dirección, fecha de nacimiento.

Registro de usuario tipo Médico por parte de un usuario Hospital.

5\.1. Similar al registro de los otros tipos de usuario.

Tecnologías utilizadas

Lenguaje de programación: JavaScript(NodeJS)

Framework de desarrollo: Express

Sistema gestor de base de datos: MongoDB

Instalación:

Clonar el repositorio: git clone https://github.com/SLBCPJ/prueba_perfil_backend_nodeJs.git

Instalar todas las dependencias con el comando: npm i

Ejecutar la aplicación en modo desarrollo con el comando: npm run dev

Para realizar las debidas pruebas se puede utilizar postman o algun simulador de cliente para consumir los diferentes enpoints.

Consideraciones:

La prueba se realizó basado en el patrón de diseño MVC.

Para las pruebas de correo se utilizó YopMail ya que no se puede registrar cualquier correo tiene que ser un correo creado previamente.

Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir al mejoramiento de esta prueba, por favor, realiza un fork y envía tus pull requests.

Autores

Yimy Cohetata Pedraza

Web Developer Jr Js
