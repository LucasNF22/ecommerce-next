# Descripción



## Correr en dev

1. Clonar el repositorio
2. Crear copia del archivo ``env.template`` y renombrarlo a ``.env`` y cambiar las variables de entorno
3. Instalar dependencias ``npm install``
4. Levantar la base de datos ``docker compose up -d``
5. Correr las migraciones de prisma ``npx prisma migrate dev``
6. Ejecutar el Seed ``npm run seed``
7. Limpiar el localStorage del navegador.
8. Correr el proyecto ``npm run dev``


## Correr proyecto en Producción