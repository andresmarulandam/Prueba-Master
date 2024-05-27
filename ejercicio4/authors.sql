CREATE TABLE IF NOT EXISTS Autores (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);
