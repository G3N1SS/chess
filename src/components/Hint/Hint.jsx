import './hint.css'

export default function Hint({ position }) {
  return <div className={`hint hint_${position}`} />;
}
