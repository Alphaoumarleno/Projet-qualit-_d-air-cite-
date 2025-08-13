import  {useState} from 'react'
import './App.css'
import logo from './assets/logo.ico'
import RegionView from './RegionView.tsx'
import DashboardInterface from './Dashboard.tsx'
import ParameterInterface from './ParameterInterface.tsx'
import 'leaflet/dist/leaflet.css';
import VerticalAQIScale from './VerticalAQIScale.tsx'
  

function App() {
  type ContentKey = 'Dashboard' | 'Region' | 'Commune' | 'Capteur' | 'Parameter';

const content: Record<ContentKey, React.ReactElement> = {
  Dashboard: <DashboardInterface/>,
  Region: <RegionView/>,
  Commune:<p>Commune Coming Soon</p> ,
  Capteur: <p>Capteur Coming Soon</p>,
  Parameter: <ParameterInterface/>,
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
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{display: 'flex', flexDirection:"row", alignItems: 'center'}}>
          <img src={logo} alt="Logo" style={{height: "60px", width: "60px"}} />
          <h1 style={{marginLeft: "0.5rem", fontWeight:"bold",fontSize:"1.75rem"}}>Cite Des Sciences</h1>
          </div>
          {(['Dashboard', 'Region', 'Commune', 'Capteur', 'Parameter'] as ContentKey[]).map((button) => (
            <button className='ColumnButton'
              key={button}
              onClick={() => setSelected(button)}
              style={{
                backgroundColor: selected === button ? "#666" : '#444',
                fontWeight: "bold"
              }}
            >
              {button}
            </button>
          ))}
          <div style ={{ padding: "1rem"}}>
            <h2 style={{color: "white", fontWeight: "bold"}}>AQI Scale</h2>
            <VerticalAQIScale aqi={20}/>
          </div>
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
