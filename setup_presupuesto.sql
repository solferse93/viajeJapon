-- Ejecutar esto en el SQL Editor de Supabase (proyecto: gyjkbzosfukbiyxvfoqu)

-- 1. Crear tabla de presupuesto
CREATE TABLE presupuesto (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre text NOT NULL,
  categoria text NOT NULL,
  monto numeric NOT NULL,
  pagado boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Deshabilitar RLS temporalmente o crear políticas genéricas.
-- Para un entorno de prototipado donde solo tus dispositivos leerán:
ALTER TABLE presupuesto DISABLE ROW LEVEL SECURITY;

-- 3. (OPCIONAL) Inyectar datos de prueba base para que el gráfico no salga vacío
INSERT INTO presupuesto (nombre, categoria, monto, pagado) VALUES 
('Vuelos ANA Madrid-Moscú-Tokio', 'Vuelos', 1050, true),
('Japan Rail Pass 14 Días', 'Transporte', 450, true),
('Hotel Kioto 4N', 'Hoteles', 600, false),
('Robot Restaurant Tokyo', 'Extras', 100, false);
