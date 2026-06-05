# Food Chain Campus App

A starter React + Tailwind + Supabase app for campus food ordering and listings.

## Setup

1. Copy `.env.example` to `.env`
2. Fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## What’s included

- Vite + React + TypeScript
- Tailwind CSS styling
- Supabase client integration
- Simple sign-in and food item list flow

## Next steps

- Create a `food_items` table in Supabase with fields: `id`, `name`, `description`, `price`, `created_at`
- Add user profiles, cart, orders, and campus-specific menus
- Secure server-side logic with Supabase policies
