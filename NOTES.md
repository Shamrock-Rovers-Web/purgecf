# Development Notes

## Security Implementation
- No client-side storage of sensitive data
- API tokens handled server-side only
- All API requests made through Cloudflare Pages functions
- HTTPS enforced for all communications

## Future Enhancements
- Add support for purging specific URLs
- Add support for purging by cache tags
- Save Zone IDs (but not tokens) in local storage
- Add support for multiple zones
- Add rate limiting
- Add success/error notifications

## Development Setup
- Node.js 18+ required
- Uses Wrangler for local development and deployment
- Tailwind CSS for styling
- Hono for API routing

## API Token Requirements

Required permissions for the API token:
- Zone.Cache Purge
- Include all zones or specific zones

## Deployment
- Cloudflare Pages
- Auto-deployment on main branch
- Environment variables not required

## Testing
- Manual testing of cache purge functionality
- API response validation
- Error handling verification

## Known Limitations
- Only supports purging entire zone cache
- No persistent storage
- Single zone at a time
