import React from 'react';
import './CSS/Main.css';

function PaginaDescricao() {
  return (
    <div>
      <header>
        <div className="logo">
          <a href="index.html">Biblioteca Virtual</a>
          <img src="./Images/LivroBG.png" alt="Imagem" className="image-class" />
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

      <div className="LivroEDesc">
        <div className="Livro">
          <img src="./Images/adam smasher.jpg" alt="Imagem" className="image-class" />
        </div>
        <div className="Texto">
          <p>Descrição detalhada do livro, falando sobre o enredo, quem é o autor, e todas as diversas recomendações feitas por renomados críticos.</p>
          <button className="Botao">Reservar</button>
        </div>
      </div>
    </div>
  );
}

export default PaginaDescricao;
