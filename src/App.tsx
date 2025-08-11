
import './App.css'
import logo from './assets/logo.ico'

function App() {
  return (
      <div> 
        <header style={{
            position: 'fixed',   // sticks to the top
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
        {/* Left side - smaller width */}
        <div
          style={{
            display: 'flex',
            flexBasis: '15%',          // fixed 25% width
            padding: '.8rem',
            backgroundColor: '#444',
            
            flexDirection: 'column',
            gap: '.8rem',
          }}
        >
          <button>Region</button>
          <button>Commune</button>
          <button>Type</button>
          <button>Other</button>
        </div>

        {/* Right side - bigger width */}
        <div
          style={{
            display: 'flex',
            flex: '1',               // take remaining space flexibly
            padding: '1rem',
            backgroundColor: '#bbb',
            color: '#000',           // make text visible on white background
          }}
        >
          <p>Welcome! Start building your app here.</p>
        </div>
      </div>
</div>
      
  )
}

export default App
