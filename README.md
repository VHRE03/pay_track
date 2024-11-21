# Proyecto de Gestión de Nómina

Este proyecto es una solución parcial para un examen técnico, desarrollado con **Python (Django y Django Rest Framework)** en el backend y **React con Vite** en el frontend. A continuación, se detallan los requisitos, instrucciones de instalación y uso, y el alcance del proyecto.

---

## **Requisitos Previos**

Asegúrate de tener instalados los siguientes programas antes de ejecutar el proyecto:

- **Python** (versión 3.9 o superior).
- **Node.js** (versión 16 o superior, incluye npm).
- **Git** (opcional, para clonar el repositorio).

---

## **Estructura del Proyecto**

El proyecto está dividido en dos carpetas principales:

- **backend/**: Contiene el código del backend desarrollado en Django.
- **frontend/**: Contiene el código del frontend desarrollado con React.

---

## **Instrucciones de Instalación y Ejecución**

### **Backend**
1. Navega a la carpeta `backend/`:
2. Activa el entorno virtual:
```
#En sistemas UNIX (Linux/Mac):
source venv/bin/activate

#En Windows:
venv\Scripts\activate
```
3. Instala las dependencias (si es necesario):
```
pip install -r requirements.txt
```
5. Ejecuta el servidor de desarrollo:
```
python manage.py runserver
```

### **Frontend**
1. Navega a la carpeta `frontend/`:
2. Instala las dependencias:
```
npm install
```
3. Inicia el servidor de desarrollo:
```
npm run dev
```
4. Abre el navegador y visita la ruta:
```
http://localhost:5173/
```

## **Alcance del Proyecto**

### **Funcionalidades Implementadas**

1. **CRUD Completo de:**
    - **Empleados**: Crear, leer, actualizar y eliminar registros de empleados.
    ![[Pasted image 20241121084237.png]]
    - **Puestos**: Gestión completa de puestos laborales.
	![[Pasted image 20241121084320.png]]
    - **Conceptos de Nómina**: Administración de conceptos relacionados con la nómina.
    ![[Pasted image 20241121084349.png]]
1. **Pruebas en Backend (APIs)**:
    - Se realizaron pruebas en **Postman** para las siguientes secciones:
        - **AdminUser**: Gestión de usuarios administradores.
        - **Región**: Gestión de regiones.
        - **Nómina**: Pruebas relacionadas con los cálculos y asignaciones de nómina.
        - **Puesto-Concepto**: Relación entre puestos y conceptos de nómina.
2. **Sistema de Login**:
    - Se creó la página de login en el frontend, pero **sin funcionalidad implementada**.
    ![[Pasted image 20241121084420.png]]

## **Modelo Entidad-Relación**

A continuación, puedes insertar una captura de pantalla o imagen del modelo entidad-relación (ER):
![[Copia de Diagrama ER de DBMS (notación UML).png]]
## **Tecnologías Utilizadas**

- **Backend**:
    - Python 3.9+
    - Django 4.2
    - Django Rest Framework
- **Frontend**:
    - React 18
    - Vite
- **Herramientas Adicionales**:
    - Postman (para pruebas de API).
