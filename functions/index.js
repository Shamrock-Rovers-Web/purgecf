export async function onRequest(context) {
  // These will be set as environment variables in Cloudflare
  const ZONE_ID = context.env.ZONE_ID;
  const API_TOKEN = context.env.API_TOKEN;

  if (!ZONE_ID || !API_TOKEN) {
    return new Response('Configuration error: Missing ZONE_ID or API_TOKEN', { status: 500 });
  }

  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ purge_everything: true }),
    });

    const result = await response.json();
    
    if (result.success) {
      return new Response('Cache purged successfully', { status: 200 });
    } else {
      return new Response('Failed to purge cache: ' + JSON.stringify(result.errors), { status: 400 });
    }
  } catch (error) {
    return new Response('Error: ' + error.message, { status: 500 });
  }
}
