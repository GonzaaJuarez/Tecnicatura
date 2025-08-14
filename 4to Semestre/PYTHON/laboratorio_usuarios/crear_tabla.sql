CREATE TABLE IF NOT EXISTS usuario (
  id_usuario SERIAL PRIMARY KEY,
  username   VARCHAR(100) NOT NULL UNIQUE,
  password   VARCHAR(100) NOT NULL
);

INSERT INTO usuario (username, password) VALUES
  ('jperez','123'),
  ('kgomez','456')
ON CONFLICT DO NOTHING;
