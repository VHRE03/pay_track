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
    ![image](https://github.com/user-attachments/assets/690d4c6f-a1f7-4cee-875a-e28e7730c669)

    - **Puestos**: Gestión completa de puestos laborales.
   ![image](https://github.com/user-attachments/assets/df64ee9d-36d4-4961-9b1f-fffc676f25a5)

    - **Conceptos de Nómina**: Administración de conceptos relacionados con la nómina.
   ![image](https://github.com/user-attachments/assets/96585258-b2ed-4c2c-9d9f-029d39008954)


1. **Pruebas en Backend (APIs)**:
    - Se realizaron pruebas en **Postman** para las siguientes secciones:
        - **AdminUser**: Gestión de usuarios administradores.
        - **Región**: Gestión de regiones.
        - **Nómina**: Pruebas relacionadas con los cálculos y asignaciones de nómina.
        - **Puesto-Concepto**: Relación entre puestos y conceptos de nómina.
2. **Sistema de Login**:
    - Se creó la página de login en el frontend, pero **sin funcionalidad implementada**.
    ![image](https://github.com/user-attachments/assets/1f67c3f4-d0d5-44f6-96fb-6a39a74bdec9)

## **Modelo Entidad-Relación**

A continuación, puedes insertar una captura de pantalla o imagen del modelo entidad-relación (ER):
![Copia de Diagrama ER de DBMS (notación UML)](https://github.com/user-attachments/assets/3228da80-3e4b-440c-9631-8525ccdb0eac)

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
