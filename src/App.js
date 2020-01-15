import React from 'react';
import './global.css';
import './App.css';
import './sidebar.css';

//Componente = funcao q retorna um conteudo (HTML, CSS, JS), primeira letra sempre maiuscula, um por arquivo
//Propriedade = informaçoes pássadas por hierarquia, por exemplo: src, title, class
//Estado = informaooes mantidas pelo componente(imutabilidade(nao alterar dados, criar um novo e substituir))

function App() {

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required/>
          </div>

        <div className="input-group">

          <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" required/>
          </div>

          <div class="input-block">
            <label htmlFor="=longitude">Longitude</label>
            <input name="longitude" id="longitude" required/>
          </div>
        </div>
         <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          
        </ul>
      </main>

    </div>

  );
}

export default App;
