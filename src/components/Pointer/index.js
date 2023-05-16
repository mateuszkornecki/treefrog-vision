import './index.css';
function Pointer({bounce, pause,restart}) {
  return <div className={`Pointer ${restart ? "" : "bounce"} ${pause ? 'pause' : 'running'}`}/>
}

export default Pointer;