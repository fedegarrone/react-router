export function AboutPage ({ onNavigate }) {
  return (
    <>
      <h1>About</h1>
      <p>Hola! Me llamo Federico y estoy aprendiendo a crear un clon de React Router</p>
      <button onClick={() => onNavigate('/')}>Ir a la Home</button>
    </>
  )
}
