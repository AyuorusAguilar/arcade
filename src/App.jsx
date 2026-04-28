import { useState } from 'react'
import './App.css'

function App() {
	const [datos] = useState(
		{
			'Outer Dangers': {
				url: 'https://www.lexaloffle.com/bbs/widget.php?pid=outerdangersv5',
				description: <>
					<h2><strong>Controles:</strong></h2>
					<ul>
						<li>Z: Activar escudo (Parry)</li>
						<li>X: Disparar</li>
						<li>Z + X: Guardar la pieza</li>
						<li>&#8593;, &#8592;,  &#8595;, &#8594;: Mover la nave</li>
					</ul>
					<h2><strong>Descripción:</strong></h2>
					<p>Este es mi favorito. Es la primer demo que hice de las que están en esta web y algún día me gustaría poder trabajar en convertirlo en un juego completo.</p></>
			},
			Tetris: {
				url: 'https://www.lexaloffle.com/bbs/widget.php?pid=tetrismakiv04',
				description: <>
					<h2><strong>Controles:</strong></h2>
					<ul>
						<li>Z: Girar en sentido de las ajugas del reloj</li>
						<li>X: Girar en sentido contrario a las ajugas del reloj</li>
						<li>Z + X: Guardar la pieza</li>
						<li>&#8593;: Bajar la pieza rápido (Hard-drop)</li>
						<li>&#8592;,  &#8595;, &#8594;: Mover la pieza</li>
					</ul>
					<h2><strong>Descripción:</strong></h2>
					<p>Esta demo no está tan pulida porque sólo la hice a modo de práctica. Cuando me propuse trabajar en <strong>Tetrisweeper</strong> (La mezcla de Tetris y buscaminas), decidí que debería hacer una versión sencilla de ambos juegos para entender cómo funcionaban antes de mezclarlos.</p></>
			},
			Buscaminas: {
				url: 'https://www.lexaloffle.com/bbs/widget.php?pid=minasxdxdxdv03',
				description: <>
					<h2><strong>Controles:</strong></h2>
					<ul>
						<li>Z: Poner bandera</li>
						<li>X: Descubrir</li>
						<li>&#8593;, &#8592;,  &#8595;, &#8594;: Mover el cursor</li>
					</ul>
					<h2><strong>Descripción:</strong></h2>
					<p>En este proyecto buscaba entender cómo funcionaba la gird y las reglas del buscaminas normal. Fue una especie de práctica para <strong>Tetrisweeper</strong> (La mezcla de Tetris y buscaminas), así que carece del refinamiento que uno podría esperar.</p>
				</>
			},
			Tetrisweeper: {
				url: 'https://www.lexaloffle.com/bbs/widget.php?pid=tetrisweeper',
				description: <>
					<h2><strong>Controles:</strong></h2>
					<ul>
						<li>Presionar brevemente Z + X: Cambiar de modo</li>
						<li><strong>En el modo Tetris y el modo buscaminas, los controles son los mismos que en sus respectivos juegos.</strong></li>
						<li>Las filas de bloques sólo se limpiaran si todas sus casillas sin minas están descubiertas</li>
					</ul>


					<h2><strong>Descripción:</strong></h2>
					<p>Comencé este proyecto para mejorar mis habilidades de programación y realmente cumplió su propósito, aprendí muchísimo. Si lo volviera hacer, aprovecharía tantas cosas que en su momento ignoraba. Me encanta trabajar con lógica desde </p></>
			}
		})
	const [selected, setSelected] = useState('Outer Dangers')
	return (
		<>
			<div className="main">
				<div className="header-content">Catálogo de Demos - Por Maki xP</div>
				<div className="body-content">
					<div className="game">
						<div className="wrap">
							<iframe className='screen'
								src={datos[selected].url}
								allowFullScreen></iframe>
						</div>
						<div className="title">
							{selected}
						</div>
					</div>
					<div className="info">
						<div className="description">
							{datos[selected].description}
						</div>
						<div className="other-games-row">
							{Object.keys(datos).map((key) => {
								return (
									<div className="game-card" onClick={() => { setSelected(key) }}>
										{key}
									</div>
								)
							})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
