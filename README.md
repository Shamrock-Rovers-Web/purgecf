# Cloudflare Cache Purge UI

A simple, modern web interface for purging Cloudflare's cache using Zone ID and API Token.

## Features

- Clean, responsive UI built with Tailwind CSS
- Secure API token handling
- Instant cache purging for entire zones
- Real-time feedback on purge operations
- Built for Cloudflare Pages

## Prerequisites

- Node.js 18 or higher
- A Cloudflare account with:
  - Zone ID of your domain
  - API Token with Cache Purge permissions

## Setup

1. Clone the repository:
```bash
git clone [your-repo-url]
cd cache
```

2. Install dependencies:
```bash
npm install
```

3. For local development:
```bash
npm run dev
```

## Usage

1. Visit the deployed application or local development server
2. Enter your Cloudflare Zone ID
3. Enter your API Token
4. Click "Purge Cache"

## Security

- API Tokens are never stored
- All requests are made server-side
- HTTPS enforced for all API communications

## Development

Built with:
- [Hono](https://honojs.dev/) - Lightweight web framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Cloudflare Pages - Hosting and serverless functions

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
