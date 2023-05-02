import React from 'react';
import './CSS/Main.css';

function PaginaConfirmacaoCompra() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./CSS/Main.css" />
        <title>Pagina Confirmação Compra</title>
      </head>
      <body>
        <header>
          <div className="logo">
            <a href="index.html">Biblioteca Virtual</a>
            <img src="./Images/LivroBG.png" alt="your image description" className="image-class" />
          </div>
          <nav>
            <ul>
              <li><a href="minhas_reservas.html">Minhas Reservas</a></li>
            </ul>
          </nav>
          <form className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Buscar</button>
          </form>
          <nav>
            <ul>
              <li><a href="index.html">Retornar ao Inicio</a></li>
            </ul>
          </nav>
        </header>
        <div className="ImagemETexto">
          <img src="./Images/Emoji1.gif" alt="Imagem" />
          <h2>Compra confirmada com sucesso!</h2>
          <button className="Botao">Retornar ao Inicio</button>
        </div>
      </body>
    </html>
  );
}

export default PaginaConfirmacaoCompra;
