# Cloudflare Cache Purge

A simple endpoint for purging Cloudflare cache. Just visit the URL to purge the cache for your zone.

## Setup

1. Deploy to Cloudflare Pages
2. Set the following environment variables in Cloudflare Pages:
   - `ZONE_ID`: Your Cloudflare Zone ID
   - `API_TOKEN`: Your Cloudflare API Token with cache purge permissions

## Usage

Simply visit your deployed URL (e.g., `https://your-app.pages.dev/`). The cache will be purged automatically.

### Response Messages

- Success: "Cache purged successfully"
- Error: Will show relevant error message

## Development

```bash
# Install dependencies
npm install

# Deploy
npm run deploy
```

## Security

- Credentials are stored as environment variables in Cloudflare Pages
- No client-side storage of sensitive data
- All requests are made server-side
- HTTPS enforced by default
