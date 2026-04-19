-- 1. Aseguramos que la tabla tenga Seguridad a Nivel de Fila activa
ALTER TABLE presupuesto ENABLE ROW LEVEL SECURITY;

-- 2. Permitimos que todo el mundo pueda LEER los datos sin PIN (para que funcione la web a los 4)
DROP POLICY IF EXISTS "Lectura publica" ON presupuesto;
CREATE POLICY "Lectura publica" ON presupuesto FOR SELECT USING (true);

-- IMPORTANTE: No creamos políticas públicas para INSERT/UPDATE/DELETE. 
-- Esas operaciones estarán blindadas y requerirán la contraseña interna del grupo.

-- 3. Función Protegida para Insertar Gastos (RPC)
CREATE OR REPLACE FUNCTION save_expense(pin_input text, p_nombre text, p_categoria text, p_monto numeric)
RETURNS void AS $$
BEGIN
  -- Validar PIN
  IF pin_input != '171093' THEN
    RAISE EXCEPTION 'PIN incorrecto. Ingreso no autorizado al Tesoro.';
  END IF;

  -- Insertar el gato bypassing RLS porque es SECURITY DEFINER
  INSERT INTO presupuesto (nombre, categoria, monto)
  VALUES (p_nombre, p_categoria, p_monto);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 4. Función Protegida para Actualizar Estado de Pago (RPC)
CREATE OR REPLACE FUNCTION toggle_expense_paid(pin_input text, p_id uuid, p_status boolean)
RETURNS void AS $$
BEGIN
  IF pin_input != '171093' THEN
    RAISE EXCEPTION 'PIN incorrecto. Modificación no autorizada.';
  END IF;

  UPDATE presupuesto SET pagado = p_status WHERE id = p_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 5. Función Protegida para Eliminar (RPC)
CREATE OR REPLACE FUNCTION delete_expense(pin_input text, p_id uuid)
RETURNS void AS $$
BEGIN
  IF pin_input != '171093' THEN
    RAISE EXCEPTION 'PIN incorrecto. Purgado no autorizado.';
  END IF;

  DELETE FROM presupuesto WHERE id = p_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
