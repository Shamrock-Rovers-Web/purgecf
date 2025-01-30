# Development Notes

## Architecture

- Single endpoint that handles all requests
- Uses Cloudflare Pages Functions
- Environment variables for secure credential storage
- No frontend, just direct HTTP responses

## Security Implementation

- Credentials stored as environment variables in Cloudflare Pages
- No client-side code or storage
- All API calls made server-side
- HTTPS enforced by default

## API Integration

- Uses Cloudflare's API v4
- Endpoint: `zones/:zone_identifier/purge_cache`
- Authentication via Bearer token
- Purges entire zone cache

## Deployment

- Deployed on Cloudflare Pages
- No build step required
- Functions directory contains all logic
- Environment variables set in Cloudflare Pages dashboard

## Future Considerations

- Could add IP whitelisting if needed
- Could add basic auth for additional security
- Could add specific URL purging instead of entire zone
- Could add webhook support for automated purging
