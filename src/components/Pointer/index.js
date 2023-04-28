import './Pointer.css';
function Pointer({bounce, pause}) {
  return <div className={`Pointer ${bounce ? 'bounce' : "bounce"} ${pause ? 'pause' : 'running'}`}/>
}

export default Pointer;