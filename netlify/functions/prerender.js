const bots = [
  "Twitterbot",
  "facebookexternalhit",
  "LinkedInBot",
  "Slackbot",
  "WhatsApp",
  "TelegramBot",
  "Googlebot"
];

exports.handler = async (event) => {
  try {
    const userAgent = event.headers["user-agent"] || "";
    const isBot = bots.some((bot) => userAgent.toLowerCase().includes(bot.toLowerCase()));

    if (!isBot) {
      return {
        statusCode: 301,
        headers: {
          Location: event.rawUrl || event.path
        }
      };
    }

    const host = event.headers.host;
    const protocol = event.headers["x-forwarded-proto"] || "https";
    const path = event.rawUrl || event.path || "/";
    const query = event.queryStringParameters
      ? "?" + new URLSearchParams(event.queryStringParameters).toString()
      : "";
    const fullUrl = `${protocol}://${host}${path}${query}`;

    const prerenderUrl = `https://service.prerender.io/${fullUrl}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000); // 6 segundos

    const response = await fetch(prerenderUrl, {
      headers: {
        "User-Agent": userAgent,
        "X-Prerender-Token": "dsgugl4OUoe2IVxBflyd",
        "Accept": "text/html"
      },
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!response.ok) throw new Error(`Prerender error ${response.status}`);
    const html = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300"
      },
      body: html
    };

  } catch (err) {
    // Fallback HTML muy básico
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-cache"
      },
      body: `
        <html>
          <head><title>Nelso Formación</title></head>
          <body>
            <h1>Contenido disponible en breve</h1>
            <p>Estamos generando una vista optimizada para esta página. Inténtalo de nuevo en unos minutos.</p>
          </body>
        </html>
      `
    };
  }
};
