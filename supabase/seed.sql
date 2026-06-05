-- Seed data for Food Chain

insert into public.food_items (name, description, price, category, image_url)
values
  ('Campus Burger', 'Juicy beef burger with cheese, lettuce, tomato and secret sauce.', 7.99, 'Burgers', 'https://images.unsplash.com/photo-1550547660-d9450f859349'),
  ('Spicy Chicken Wrap', 'Grilled chicken with spicy mayo, crunchy slaw, and fresh greens.', 6.50, 'Wraps', 'https://images.unsplash.com/photo-1562967916-eb82221dfb59'),
  ('Veggie Bowl', 'Roasted vegetables, quinoa, avocado, and tahini dressing.', 8.25, 'Bowls', 'https://images.unsplash.com/photo-1490645935967-10de6ba17061'),
  ('Classic Fries', 'Crispy golden french fries with a side of ketchup.', 3.50, 'Sides', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c');

-- Optional seed row for a sample customer profile
-- Insert a real admin later by setting role = 'admin' for an authenticated user.
