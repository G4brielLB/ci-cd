import { useState } from 'react'
import './App.css'

interface Title {
  year: number
  competition: string
  description: string
}

function App() {
  const [selectedTab, setSelectedTab] = useState<'history' | 'titles' | 'idols'>('history')

  const titles: Title[] = [
    { year: 1923, competition: 'Campeonato Carioca', description: 'Primeiro título da história' },
    { year: 1998, competition: 'Copa Libertadores', description: 'Campeão invicto' },
    { year: 2000, competition: 'Copa Mercosul', description: 'Conquista internacional' },
    { year: 2011, competition: 'Copa do Brasil', description: 'Primeiro título nacional de copas' },
    { year: 2024, competition: 'Campeonato Brasileiro', description: 'Último título da Série A' },
  ]

  const idols = [
    { name: 'Romário', position: 'Atacante', period: '1985-1988, 1999-2002' },
    { name: 'Edmundo', position: 'Atacante', period: '1997-2000, 2002-2004' },
    { name: 'Juninho Pernambucano', position: 'Meia', period: '1993-2001' },
    { name: 'Roberto Dinamite', position: 'Atacante', period: '1971-1993' },
    { name: 'Barbosa', position: 'Goleiro', period: '1945-1962' },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="club-badge">⚓</div>
          <h1>Club de Regatas Vasco da Gama</h1>
          <p className="subtitle">Fundado em 21 de agosto de 1898</p>
        </div>
      </header>

      <nav className="navigation">
        <button 
          className={selectedTab === 'history' ? 'active' : ''}
          onClick={() => setSelectedTab('history')}
        >
          História
        </button>
        <button 
          className={selectedTab === 'titles' ? 'active' : ''}
          onClick={() => setSelectedTab('titles')}
        >
          Títulos
        </button>
        <button 
          className={selectedTab === 'idols' ? 'active' : ''}
          onClick={() => setSelectedTab('idols')}
        >
          Ídolos
        </button>
      </nav>

      <main className="content">
        {selectedTab === 'history' && (
          <section className="section">
            <h2>Nossa História</h2>
            <div className="history-content">
              <p>
                O <strong>Club de Regatas Vasco da Gama</strong> é um clube poliesportivo brasileiro 
                com sede na cidade do Rio de Janeiro, fundado em 21 de agosto de 1898 por um grupo de 
                remadores.
              </p>
              <p>
                É um dos clubes mais populares e tradicionais do Brasil, conhecido por sua luta contra 
                o racismo no futebol brasileiro. Em 1923, o Vasco foi campeão carioca com um time formado 
                majoritariamente por jogadores negros e pobres, quebrando barreiras sociais da época.
              </p>
              <p>
                As cores oficiais são <strong>preto e branco</strong>, em homenagem às caravelas 
                portuguesas da era dos descobrimentos. O símbolo é a <strong>Cruz de Malta</strong> e 
                a âncora, representando as origens náuticas do clube.
              </p>
              <div className="stats">
                <div className="stat-card">
                  <h3>4</h3>
                  <p>Brasileiros</p>
                </div>
                <div className="stat-card">
                  <h3>1</h3>
                  <p>Libertadores</p>
                </div>
                <div className="stat-card">
                  <h3>24</h3>
                  <p>Cariocas</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedTab === 'titles' && (
          <section className="section">
            <h2>Principais Títulos</h2>
            <div className="titles-grid">
              {titles.map((title, index) => (
                <div key={index} className="title-card">
                  <div className="title-year">{title.year}</div>
                  <h3>{title.competition}</h3>
                  <p>{title.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {selectedTab === 'idols' && (
          <section className="section">
            <h2>Ídolos Eternos</h2>
            <div className="idols-grid">
              {idols.map((idol, index) => (
                <div key={index} className="idol-card">
                  <div className="idol-number">#{index + 1}</div>
                  <h3>{idol.name}</h3>
                  <p className="idol-position">{idol.position}</p>
                  <p className="idol-period">{idol.period}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>⚓ Vasco da Gama - Força Jovem do Vasco ⚓</p>
        <p className="ci-cd-badge">Deployed with CI/CD | GitHub Actions + GitHub Pages</p>
      </footer>
    </div>
  )
}

export default App
