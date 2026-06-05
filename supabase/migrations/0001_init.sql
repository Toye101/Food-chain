-- Supabase Backend Schema for Food Chain

-- Profiles for users and role-based permissions
create table if not exists public.profiles (
  id uuid primary key default auth.uid(),
  email text not null unique,
  full_name text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  avatar_url text,
  created_at timestamptz not null default now()
);

-- Food items available for ordering
create table if not exists public.food_items (
  id bigserial primary key,
  name text not null,
  description text,
  price numeric(10,2) not null default 0,
  category text,
  image_url text,
  available boolean not null default true,
  created_at timestamptz not null default now()
);

-- Favorites saved by customers
create table if not exists public.favorites (
  id bigserial primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  food_item_id bigint not null references public.food_items(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, food_item_id)
);

-- Orders placed by customers
create table if not exists public.orders (
  id bigserial primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending',
  total numeric(10,2) not null default 0,
  delivery_address text,
  notes text,
  placed_at timestamptz not null default now()
);

-- Order items belonging to an order
create table if not exists public.order_items (
  id bigserial primary key,
  order_id bigint not null references public.orders(id) on delete cascade,
  food_item_id bigint not null references public.food_items(id) on delete cascade,
  quantity int not null default 1 check (quantity > 0),
  unit_price numeric(10,2) not null,
  total_price numeric(10,2) generated always as (quantity * unit_price) stored
);

-- Utility function for admin checks
create or replace function public.is_admin() returns boolean
language sql
stable
as $$
  select exists(
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

-- Enable row-level security on tables to prevent unauthorized access
alter table public.profiles enable row level security;
alter table public.food_items enable row level security;
alter table public.favorites enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Policies for profiles
drop policy if exists "profiles_self_or_admin_select" on public.profiles;
create policy "profiles_self_or_admin_select" on public.profiles
  for select using (
    auth.uid() = id or public.is_admin()
  );

drop policy if exists "profiles_self_insert" on public.profiles;
create policy "profiles_self_insert" on public.profiles
  for insert with check (
    auth.uid() = id
  );

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update" on public.profiles
  for update using (
    auth.uid() = id
  ) with check (
    auth.uid() = id
  );

-- Policies for food items
drop policy if exists "food_items_select" on public.food_items;
create policy "food_items_select" on public.food_items
  for select using (true);

drop policy if exists "food_items_admin_modify" on public.food_items;
create policy "food_items_admin_modify" on public.food_items
  for insert with check (public.is_admin());

drop policy if exists "food_items_admin_update" on public.food_items;
create policy "food_items_admin_update" on public.food_items
  for update using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "food_items_admin_delete" on public.food_items;
create policy "food_items_admin_delete" on public.food_items
  for delete using (public.is_admin());

-- Policies for favorites
drop policy if exists "favorites_self_select" on public.favorites;
create policy "favorites_self_select" on public.favorites
  for select using (
    auth.uid() = user_id or public.is_admin()
  );

drop policy if exists "favorites_self_insert" on public.favorites;
create policy "favorites_self_insert" on public.favorites
  for insert with check (
    auth.uid() = user_id
  );

drop policy if exists "favorites_self_update" on public.favorites;
create policy "favorites_self_update" on public.favorites
  for update using (
    auth.uid() = user_id or public.is_admin()
  ) with check (
    auth.uid() = user_id
  );

drop policy if exists "favorites_self_delete" on public.favorites;
create policy "favorites_self_delete" on public.favorites
  for delete using (
    auth.uid() = user_id or public.is_admin()
  );

-- Policies for orders
drop policy if exists "orders_self_select" on public.orders;
create policy "orders_self_select" on public.orders
  for select using (
    auth.uid() = user_id or public.is_admin()
  );

drop policy if exists "orders_self_insert" on public.orders;
create policy "orders_self_insert" on public.orders
  for insert with check (
    auth.uid() = user_id
  );

drop policy if exists "orders_self_update" on public.orders;
create policy "orders_self_update" on public.orders
  for update using (
    auth.uid() = user_id or public.is_admin()
  ) with check (
    auth.uid() = user_id or public.is_admin()
  );

drop policy if exists "orders_self_delete" on public.orders;
create policy "orders_self_delete" on public.orders
  for delete using (
    auth.uid() = user_id or public.is_admin()
  );

-- Policies for order items
drop policy if exists "order_items_self_select" on public.order_items;
create policy "order_items_self_select" on public.order_items
  for select using (
    exists(
      select 1 from public.orders where id = public.order_items.order_id and (user_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "order_items_self_insert" on public.order_items;
create policy "order_items_self_insert" on public.order_items
  for insert with check (
    exists(
      select 1 from public.orders where id = public.order_items.order_id and (user_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "order_items_self_update" on public.order_items;
create policy "order_items_self_update" on public.order_items
  for update using (
    exists(
      select 1 from public.orders where id = public.order_items.order_id and (user_id = auth.uid() or public.is_admin())
    )
  ) with check (
    exists(
      select 1 from public.orders where id = public.order_items.order_id and (user_id = auth.uid() or public.is_admin())
    )
  );

drop policy if exists "order_items_self_delete" on public.order_items;
create policy "order_items_self_delete" on public.order_items
  for delete using (
    exists(
      select 1 from public.orders where id = public.order_items.order_id and (user_id = auth.uid() or public.is_admin())
    )
  );
