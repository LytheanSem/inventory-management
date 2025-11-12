## Inventory Management System

A fast, modern dashboard to manage products, track stock levels, and surface insights. Built with Next.js App Router, Prisma, and a clean, recruiter-friendly UI.

### ✨ Highlights

- **Real-time-ish UX**: route-level loading states with a clean spinner and persistent sidebar.
- **Inventory features**: add products, view inventory, low-stock timestamping, and basic analytics.
- **Auth-ready**: integrated with `@stackframe/stack` for authentication UI.
- **Type-safe data**: Prisma schema and generated client checked into `src/generated` for reliability.

### 🧭 App Structure

- `app/` — App Router pages: `dashboard`, `inventory`, `add-product`, `settings`, global `layout` and `loading`.
- `components/` — shared UI like `sidebar`, `pagination`, `products-chart`.
- `lib/` — server actions and auth helpers (e.g., `lib/actions/products.ts`).
- `prisma/` — schema, migrations, and seed script.

### 🚀 Getting Started

Prerequisites: Node 18+, PostgreSQL (or configured Prisma datasource).

1. Install deps

```bash
npm install
```

2. Configure Stack Auth

Create a `.env` file with your Stack Auth project credentials. You can find these in your [Stack Auth Dashboard](https://stack-auth.com/dashboard) under "Project Keys":

```bash
# Stack Auth Configuration
NEXT_PUBLIC_STACK_PROJECT_ID="your-project-id"
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY="your-publishable-client-key"
STACK_SECRET_SERVER_KEY="your-secret-server-key"

# Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/inventory"
```

**To get your Stack Auth keys:**
1. Go to [Stack Auth Dashboard](https://stack-auth.com/dashboard)
2. Select your project (or create a new one)
3. Navigate to "Project Keys" in the sidebar
4. Click "Create Project Keys" if you haven't created any yet
5. Copy the **Project ID**, **Publishable Client Key**, and **Secret Server Key**
6. Add them to your `.env` file

3. Run migrations and seed (optional)

```bash
npx prisma migrate deploy
npx prisma db seed # optional
```

4. Start the dev server

```bash
npm run dev
```

Then visit `http://localhost:3000`.

### 🧩 Tech Stack

- **Next.js 15 / App Router** for routing, layouts, and streaming UI
- **TypeScript** end-to-end
- **Prisma** ORM with migrations
- **Tailwind CSS** for styling
- **Stack (stackframe)** for auth UI widgets
- **Lucide** icons

### 📸 Key Features (User Flow)

- Sign in and land on the **Dashboard** with a quick view of totals and trends.
- Navigate via a persistent **Sidebar**.
- **Inventory** page to browse products with pagination.
- **Add Product** form with server actions for persistence.
- **Settings** page placeholder for future org/app config.

### 🗂️ Important Files

- `app/layout.tsx` — global layout, fonts, metadata
- `app/loading.tsx` — spinner-based route loading screen with sidebar
- `lib/actions/products.ts` — server actions for product CRUD
- `prisma/schema.prisma` — database schema

### 🔧 Development Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npx prisma studio` — inspect the database

### 🌐 Deployment

Deploy anywhere that supports Node (Vercel recommended). Ensure `DATABASE_URL` is set and run `prisma migrate deploy` during build/start.

**Important for Stack Auth Deployment:**

1. **Add environment variables to Vercel:**
   - Go to your Vercel project settings → Environment Variables
   - Add all three Stack Auth variables:
     - `NEXT_PUBLIC_STACK_PROJECT_ID`
     - `NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY`
     - `STACK_SECRET_SERVER_KEY`
   - Make sure to add them for **Production** environment
   - Redeploy your application after adding the variables

2. **Whitelist your production domain(s) in Stack Auth:**
   - Go to your project in the [Stack Auth Dashboard](https://stack-auth.com/dashboard)
   - Navigate to "Authentication" → "Trusted Domains"
   - Click "Add new domain"
   - Enter your Vercel domain using **only the domain name** (no `https://`, no trailing slash):
     - ✅ Correct: `inventory-management-tau-one.vercel.app`
     - ❌ Incorrect: `https://inventory-management-tau-one.vercel.app` or `inventory-management-tau-one.vercel.app/`
   - If using a custom domain, add that as well (same format: just the domain name)

Without both steps, OAuth sign-in (e.g., Google) will fail with a `REDIRECT_URL_NOT_WHITELISTED` error.

### 🧭 Roadmap Ideas

- Role-based access and activity logs
- Advanced analytics and CSV export
- Bulk edits and barcode scanning
- Webhooks/integrations (Shopify, Stripe)

### 👤 Author

Built by Ly The Ansem. If you’d like a quick walkthrough or want to discuss the architecture, open an issue or reach out.

---

If you’re reviewing this as a recruiter: the codebase emphasizes clarity, type safety, and pragmatic UX—favoring a production-ready structure over demo-only code.
