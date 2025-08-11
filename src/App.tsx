import  {useState} from 'react'
import './App.css'
import logo from './assets/logo.ico'
import GuineaMap from './GuineaMap.jsx'
import 'leaflet/dist/leaflet.css';



function App() {
  type ContentKey = 'Region' | 'Commune' | 'Capteur' | 'Parameter';

const content: Record<ContentKey, React.ReactElement> = {
  Region: <GuineaMap/>,
  Commune: <p>CommuneInfo</p>,
  Capteur: <p>Capteur Coming Soon</p>,
  Parameter: <p>Parameter Coming soon</p>,
};

const [selected, setSelected] = useState<ContentKey>('Region');
  return (
      <div> 
        <header style={{
            position: 'fixed', 
            top: 0,
            left: 0,
            right: 0,
            height: '10%',
            backgroundColor: '#333',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            justifyContent: "space-between",
            zIndex: 0,
      }}>
        <h1 style={{zIndex:1}}>
        Sensor Dashboard</h1>
        <img src={logo} alt="Logo" style={{height: "60px", width: "60px"}} />

      </header>
      <div
        style={{
          display: 'flex',
          marginTop:'5%',
          height: '100vh',
          color: 'white',
          gap: '1rem',                
          padding: '0 1rem',          
        }}
      >

        <div
          style={{
            display: 'flex',
            flexBasis: '15%',          
            padding: '.8rem',
            backgroundColor: '#444',
            
            flexDirection: 'column',
            gap: '.8rem',
          }}
        >
          {(['Region', 'Commune', 'Capteur', 'Parameter'] as ContentKey[]).map((button) => (
            <button
              key={button}
              onClick={() => setSelected(button)}
              style={{
                backgroundColor: selected === button ? '#646cff' : '#666',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              {button}
              
            </button>
          ))}
        </div>


        <div
          style={{
            display: 'flex',
            flex: '1',              
            padding: '1rem',
            backgroundColor: '#bbb',
            color: '#000',        
          }}
        >
          {content[selected]}
        </div>
      </div>
</div>
      
  )
}

export default App
