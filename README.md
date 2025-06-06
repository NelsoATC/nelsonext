
# Nelso Website

Los posts del blog provienen de `src/data/blog`.

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Deploy en Netlify

La aplicación se despliega en Netlify y se prerenderiza automáticamente para que los buscadores vean las metadatos correctas de cada página. La cabecera `X-NF-Prerender` se aplica en todas las rutas mediante `netlify.toml`.
