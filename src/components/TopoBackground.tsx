export default function TopoBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        backgroundImage: 'url(/topography.svg)',
        backgroundSize: '600px 600px',
        backgroundRepeat: 'repeat',
        opacity: 0.08,
      }}
    />
  )
}
