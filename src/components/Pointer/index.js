import './index.css';
function Pointer({bounce, pause}) {
  return <div className={`Pointer bounce ${pause ? 'pause' : 'running'}`}/>
}

export default Pointer;