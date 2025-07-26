# AEMOS Voltura - Corporate Website

## Overview

AEMOS Voltura is a comprehensive corporate website built as a Single Page Application (SPA) for showcasing an industrial energy management platform. The site features AI-powered digital twin technology, blockchain P2P marketplace, and real-time optimization solutions targeting Turkish industrial facilities. This is a promotional site focused on lead generation rather than a user portal.

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

The application follows a modern full-stack architecture with **dual-funnel architecture** for serving both customers and investors:

### Dual-Funnel Architecture
- **Customer Funnel (Main)**: Home → Solutions → Platform → Pricing → Demo Request
- **Investor Funnel (Fast Track)**: Clear "Yatırımcılar" link in navbar/footer → Dedicated investor landing page → Secure data room access

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Query for server state management
- **Build Tool**: Vite for fast development and building
- **SEO**: React Helmet for meta tags and structured data

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful endpoints for demo requests
- **Development**: Hot reload with Vite integration

## Key Components

### Data Layer
- **Database Schema**: Defined in `shared/schema.ts` using Drizzle
- **Tables**: Users and demo requests with proper validation
- **Migrations**: Located in `migrations/` directory
- **Storage**: In-memory storage for development, PostgreSQL for production

### Frontend Components
- **Layout**: Responsive navbar with smooth scrolling and footer
- **Sections**: Modular page sections (hero, platform overview, modules, solutions, etc.)
- **Forms**: Demo request form with validation using react-hook-form and Zod
- **UI Library**: Comprehensive component library based on Radix UI
- **Dual Navigation**: Customer-focused main navigation + investor-specific "Yatırımcılar" link
- **Investor Page**: Dedicated `/investors` page with market opportunity, team, and IP strategy

### API Endpoints
- `POST /api/demo-request`: Submit demo requests with validation
- `GET /api/demo-requests`: Retrieve demo requests (admin functionality)
- Future: Investor data room access endpoints

## Data Flow

1. **User Interaction**: Users navigate through sections using smooth scrolling
2. **Form Submission**: Demo requests are validated client-side and sent to API
3. **Data Persistence**: Demo requests are stored in PostgreSQL database
4. **Response Handling**: Success/error feedback via toast notifications
5. **Static Content**: All promotional content is statically defined in data files

## External Dependencies

### Core Dependencies
- **Database**: Neon Database for PostgreSQL hosting
- **UI Components**: Radix UI ecosystem for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build System**: Vite with TypeScript support
- **Linting**: ESLint and TypeScript compiler
- **Fonts**: Google Fonts (Inter) for typography

### Future Integrations
- Email notifications for demo requests
- CRM integration for lead management
- reCAPTCHA v3 for form protection

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with hot reload
- **Database**: Local PostgreSQL or Neon Database
- **Environment**: NODE_ENV=development

### Production Build
- **Frontend**: Vite build generates static assets in `dist/public`
- **Backend**: ESBuild compiles server code to `dist/index.js`
- **Assets**: Static files served from build directory
- **Database**: Neon Database with connection pooling

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **Session**: `SESSION_SECRET` environment variable required for production
- **Port**: Uses `PORT` environment variable or defaults to 5000
- **Hosting**: Designed for deployment on platforms like Vercel, Netlify, or traditional hosting
- **Static Assets**: Served from CDN or static file hosting

### Brand Guidelines
- **Colors**: Professional industrial palette
  - Primary: #0A192F (AEMOS Navy) - main brand color
  - Accent: #64FFDA (AEMOS Aqua) - for CTAs and highlights
  - Success: #10B981 (AEMOS Green) - for success states
  - Gray: #475569 (AEMOS Gray) - for body text
- **Typography**: Inter font family, Bold for headings, Regular for body
- **Style**: Industrial-modern design emphasizing technical sophistication
- **Animations**: Subtle, professional micro-animations

The application is fully self-contained with no external authentication requirements, focusing on:
1. **Customer Journey**: Presenting platform capabilities and capturing qualified leads
2. **Investor Journey**: Showcasing market opportunity, team expertise, and IP strategy

## Recent Changes (January 2025)
- Implemented dual-funnel architecture with separate customer and investor paths
- Updated brand colors to professional industrial palette (AEMOS Navy, Aqua, Green)
- Created dedicated `/investors` page with market data, team profiles, and IP strategy
- Added "Yatırımcılar" navigation link in both navbar and footer
- Redesigned all components with new professional color scheme
- Enhanced hero section with "3D Transformation" theme inspired by Pier MTTP
- **MAJOR UPDATE (July 2025)**: Pivoted to investor-focused messaging
  - Hero section: "Türkiye'nin İlk Endüstriyel EaaS Platformu" with Series A metrics
  - Value proposition: Shifted from customer benefits to revenue model (SaaS, Transaction, Compliance)
  - Added investor-focused KPIs: €35K ARR per customer, 18-month payback, 85% retention
  - Removed success stories and team sections for streamlined investor experience
  - Added interactive ROI calculator with real business metrics
  - Target: €2.5M Series A funding with 48 customer pipeline
- **DEPLOYMENT FIXES (July 2025)**: Enhanced production deployment configuration
  - Added express-session middleware with SESSION_SECRET environment variable
  - Implemented production environment variable validation
  - Added PORT environment variable support for flexible deployment
  - Session cookies configured for production security (secure, httpOnly, sameSite)
  - Added MemoryStore for session persistence with automatic cleanup
  - Implemented graceful shutdown handling for SIGTERM and SIGINT
  - Enhanced error logging for production deployment troubleshooting
  - Server correctly configured to listen on 0.0.0.0:PORT for containerized deployment
- **STRATEGIC INFRASTRUCTURE OVERHAUL (July 2025)**: Implemented comprehensive dual-funnel architecture
  - Created "Finansal ve Operasyonel Dayanıklılık Platformu" positioning
  - Built three core value pillars: Minimize Costs, Create Revenue, Automate Compliance
  - Implemented dedicated solution pages: Reactive Power, P2P Energy Trading, CBAM Compliance
  - Added comprehensive investor portal with financial metrics and projections
  - Enhanced navbar with "Yatırımcılar" section for dual-funnel navigation
  - Followed detailed PRD specifications for customer journey optimization
  - Added technical depth sections for platform capabilities (kWh-NFT, microservices)
  - Implemented persona-based content strategy (Engin, Ayşe, Can personae)
- **PAGE RESTRUCTURING (July 2025)**: Separated key sections into dedicated pages
  - Created /investors page with dedicated investor portal and Series A metrics
  - Created /p2p-energy page with comprehensive P2P energy trading solution
  - Created /solutions page with all 6 core solutions (Reactive Power, P2P, CBAM, AI Efficiency, Sustainability, Compliance)
  - Updated navbar navigation to use separate page routes instead of scroll-based navigation
  - Streamlined main landing page to focus on core value proposition and hero messaging