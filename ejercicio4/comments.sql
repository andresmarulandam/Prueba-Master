CREATE TABLE IF NOT EXISTS Comentarios (
    id SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha DATE NOT NULL,
    video_id INT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES Videos (id),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);
