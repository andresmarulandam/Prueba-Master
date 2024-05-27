# Políticas de Nomenclatura

## Bases de Datos

- **Nombres de tablas**: PascalCase.
  - Ejemplo: `Users`, `OrderItems`
- **Nombres de columnas**: camelCase.
  - Ejemplo: `userId`, `createdAt`
- **Índices**: `idx_tabla_columna`.
  - Ejemplo: `idx_users_email`
- **Claves primarias**: `PK_tabla`.
  - Ejemplo: `PK_Users`
- **Claves foráneas**: `FK_tabla_columna`.
  - Ejemplo: `FK_Orders_userId`

## Variables

- **Variables locales**: camelCase.
  - Ejemplo: `userName`
- **Variables en Prisma**: camelCase.
  - Ejemplo: `createdAt`, `updatedAt`
- **Constantes**: UPPER_CASE_SNAKE.
  - Ejemplo: `MAX_ITEMS`

## Funciones

- **Nombres descriptivos usando camelCase**.
  - Ejemplo: `getUserById`, `calculateTotalPrice`
- **Prefijos para funciones booleanas**: `is`, `has`, `can`.
  - Ejemplo: `isValid`, `hasPermission`

## Clases

- **Nombres en PascalCase**.
  - Ejemplo: `UserController`, `OrderService`
- **Utilizar nombres singulares para entidades**.
  - Ejemplo: `User`, `Product`

## Git

- **Formato de ramas**: kebab-case
  - Ejemplo: `feature/descripcion-corta`, `bugfix/descripcion-corta`, `hotfix/descripcion-corta`
- **Commits**: Tiempo presente y comenzando con un verbo.
  - Ejemplo: `Add JWT authentication`
