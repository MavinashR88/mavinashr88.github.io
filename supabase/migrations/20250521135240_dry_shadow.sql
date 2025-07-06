/*
  # Create visitors tracking table

  1. New Tables
    - `visitors`
      - `id` (uuid, primary key)
      - `ip_address` (text)
      - `user_agent` (text)
      - `visited_at` (timestamptz)
      - `page` (text)
      - `referrer` (text)
      - `country` (text)
      - `city` (text)

  2. Security
    - Enable RLS on `visitors` table
    - Add policy for inserting visits
    - Add policy for admin to read visits
*/

CREATE TABLE IF NOT EXISTS visitors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text,
  user_agent text,
  visited_at timestamptz DEFAULT now(),
  page text,
  referrer text,
  country text,
  city text
);

-- Enable Row Level Security
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert visits
CREATE POLICY "Anyone can insert visits"
  ON visitors
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can read visits
CREATE POLICY "Only authenticated users can read visits"
  ON visitors
  FOR SELECT
  TO authenticated
  USING (true);