import  {useState} from 'react'
import './App.css'
import logo from './assets/logo.ico'
import GuineaMap from './GuineaMap.tsx'
import CommuneView from './communeview.tsx'
import DashboardInterface from './Dashboard.tsx'
import 'leaflet/dist/leaflet.css';

  

function App() {
  type ContentKey = 'Dashboard' | 'Region' | 'Commune' | 'Capteur' | 'Parameter';

const content: Record<ContentKey, React.ReactElement> = {
  Dashboard: <DashboardInterface/>,
  Region: <GuineaMap regionKey='Beyla'/>,
  Commune: <CommuneView/>,
  Capteur: <p>Capteur Coming Soon</p>,
  Parameter: <p>Parameter Coming soon</p>,
};

const [selected, setSelected] = useState<ContentKey>('Dashboard');
  return (
      <div> 
        
      <div
        style={{
          display: 'flex',
          height: '100vh',
          color: 'white',          
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
          <img src={logo} alt="Logo" style={{height: "60px", width: "60px"}} />
          {(['Dashboard', 'Region', 'Commune', 'Capteur', 'Parameter'] as ContentKey[]).map((button) => (
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
