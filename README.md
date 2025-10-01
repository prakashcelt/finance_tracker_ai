# Finance Tracker AI

A modern, full-stack personal finance tracker web app built with Next.js, Drizzle ORM, PostgreSQL, Clerk authentication, and Tailwind CSS. Track your income and expenses, visualize cashflow, and manage transactions with ease.

## Features

- User authentication (Clerk)
- Add, edit, and delete transactions (income & expenses)
- Categorize transactions
- Dashboard with cashflow charts and recent transactions
- Filter transactions by month and year
- Responsive, accessible UI (Radix UI, Tailwind CSS)
- Data validation with Zod
- Toast notifications for actions
- AI-powered insights (Gemini integration)

## Tech Stack

- **Frontend:** Next.js 15, React 18, Tailwind CSS, Radix UI
- **Backend:** Next.js API routes, Drizzle ORM
- **Database:** PostgreSQL (Neon, serverless)
- **Auth:** Clerk
- **Validation:** Zod
- **Charts:** Recharts
- **Other:** date-fns, numeral, dotenv

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (e.g. Neon)
- Clerk account (for authentication)

### Installation

1. **Clone the repo:**
   ```sh
   git clone https://github.com/prakashcelt/finance_tracker_ai.git
   cd finance_tracker_ai
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment:**
   - Copy `.env.local.example` to `.env.local` and fill in your `DATABASE_URL` and Clerk keys.
4. **Run database migrations:**
   ```sh
   npx drizzle-kit push:pg
   ```
5. **Seed the database (optional):**
   ```sh
   npm run seed
   ```
6. **Start the dev server:**
   ```sh
   npm run dev
   ```

## Usage
- Register/login with Clerk
- Add, edit, or delete transactions
- View dashboard for cashflow and recent activity
- Use filters to view transactions by month/year
- Try the Gemini AI page for insights

## Project Structure
- `app/` — Next.js app directory (routes, pages, API)
- `components/` — Reusable UI and form components
- `data/` — Data fetching and business logic
- `db/` — Drizzle ORM schema and db config
- `validation/` — Zod schemas
- `public/` — Static assets

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
[MIT](LICENSE)
