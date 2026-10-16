# 18DeLimaConAmor

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Publicación en Cloudflare (Workers con assets estáticos, dominio de prueba)

Sitio estático prerenderizado publicado como Worker de solo assets (`de-lima-con-amor.<subdominio>.workers.dev`). La configuración está en `wrangler.jsonc`.

```bash
# Una sola vez: iniciar sesión (abre el navegador para autorizar)
npx wrangler login

# Compilar y publicar (repetir en cada actualización)
npm run deploy
```

Notas:

- La carpeta publicada es `dist/18-de-lima-con-amor/browser` (`assets.directory` en `wrangler.jsonc`).
- `public/_headers` incluye `X-Robots-Tag: noindex` para que Google no indexe el dominio de prueba. **Elimina esa línea al conectar el dominio definitivo.**
- El subdominio `workers.dev` es de toda la cuenta y se cambia en Cloudflare → Workers & Pages → Subdomain (afecta a todos los Workers de la cuenta).
- Para conectar un dominio propio: Cloudflare → Workers & Pages → `de-lima-con-amor` → Settings → Domains & Routes.
- Datos del negocio (teléfono, horarios, reseñas, servicios): `src/app/core/business.data.ts`. Fotos en `public/images`.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
