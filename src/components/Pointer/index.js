import './index.css';
function Pointer({bounce, pause,freezeAndCenter}) {
  return <div className={`Pointer ${freezeAndCenter ? "" : "bounce"} ${pause ? 'pause' : 'running'}`}/>
}

export default Pointer;