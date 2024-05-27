CREATE TABLE IF NOT EXISTS Reviews (
    id SERIAL PRIMARY KEY,
    rating INT CHECK (
        rating >= 1
        AND rating <= 5
    ),
    comentario TEXT,
    fecha DATE NOT NULL,
    video_id INT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES Videos (id),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios (id)
);
