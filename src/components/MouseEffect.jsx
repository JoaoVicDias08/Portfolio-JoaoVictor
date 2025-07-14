export default function MouseEffect({ active, mousePos }) {
  if (!active) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: mousePos.x,
        top: mousePos.y,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#3973d0",
        pointerEvents: "none",
        opacity: 1,
        zIndex: 0,
        transform: "translate(-50%, -50%)",
        transition: "left 0.08s linear, top 0.08s linear"
      }}
    />
  );
}