import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

//Componente = funcao q retorna um conteudo (HTML, CSS, JS), primeira letra sempre maiuscula, um por arquivo
//Propriedade = informaçoes pássadas por hierarquia, por exemplo: src, title, class
//Estado = informaooes mantidas pelo componente(imutabilidade(nao alterar dados, criar um novo e substituir))

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefault();
    
  }

  return(
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input 
          name="github_username" 
          id="github_username" 
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          />
          </div>

          <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
          name="techs" 
          id="techs" 
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
          />
          </div>

        <div className="input-group">

          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
            type="number" 
            name="latitude" 
            id="latitude" 
            required 
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="=longitude">Longitude</label>
            <input 
            type="number" 
            name="longitude" 
            id="longitude" 
            required 
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>
         <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://scontent.fcpq15-1.fna.fbcdn.net/v/t1.0-9/22045823_1177589249007910_7896443337599484308_n.jpg?_nc_cat=105&_nc_ohc=1e3jXuV6sb0AX9ubIgS&_nc_ht=scontent.fcpq15-1.fna&oh=3d9a5810bdf030a96903af7e17dd560f&oe=5E9F15D6"></img>
              <div className="user-info">
                <strong>Augusto Vesco</strong>
                <span>ReactJS, React Native, Dart</span>
              </div>
            </header>
            <p>Analysis and systems development student at FATEC Mogi Mirim</p>
            <a href="https://github.com/gutovesco">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://scontent.fcpq15-1.fna.fbcdn.net/v/t1.0-9/22045823_1177589249007910_7896443337599484308_n.jpg?_nc_cat=105&_nc_ohc=1e3jXuV6sb0AX9ubIgS&_nc_ht=scontent.fcpq15-1.fna&oh=3d9a5810bdf030a96903af7e17dd560f&oe=5E9F15D6"></img>
              <div className="user-info">
                <strong>Augusto Vesco</strong>
                <span>ReactJS, React Native, Dart</span>
              </div>
            </header>
            <p>Analysis and systems development student at FATEC Mogi Mirim</p>
            <a href="https://github.com/gutovesco">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://scontent.fcpq15-1.fna.fbcdn.net/v/t1.0-9/22045823_1177589249007910_7896443337599484308_n.jpg?_nc_cat=105&_nc_ohc=1e3jXuV6sb0AX9ubIgS&_nc_ht=scontent.fcpq15-1.fna&oh=3d9a5810bdf030a96903af7e17dd560f&oe=5E9F15D6"></img>
              <div className="user-info">
                <strong>Augusto Vesco</strong>
                <span>ReactJS, React Native, Dart</span>
              </div>
            </header>
            <p>Analysis and systems development student at FATEC Mogi Mirim</p>
            <a href="https://github.com/gutovesco">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>

    </div>

  );
}

export default App;
