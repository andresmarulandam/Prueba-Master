CREATE TABLE IF NOT EXISTS Colaboradores (
    id SERIAL PRIMARY KEY,
    video_id INT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES Videos (id),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);
