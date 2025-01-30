# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-01-30

### Changed
- Simplified entire application to a single endpoint
- Removed web interface in favor of direct URL access
- Now uses environment variables for credentials instead of manual input
- Removed unnecessary dependencies (hono, tailwindcss)
- Simplified build and deployment process

### Security
- Credentials now stored securely in Cloudflare Pages environment
- Removed all client-side code
- All API calls made server-side

## [1.0.0] - 2025-01-30

### Added
- Initial release
- Web interface for purging Cloudflare cache
- Support for Zone ID and API Token input
- Real-time feedback on purge operations
- Error handling and user feedback
- Documentation for setup and usage
