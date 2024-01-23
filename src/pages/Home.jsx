export function HomePage ({ onNavigate }) {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo para crear un React Router desde cero.</p>
      <button onClick={() => onNavigate('/about')}>Sobre nosotros</button>
    </>
  )
}
