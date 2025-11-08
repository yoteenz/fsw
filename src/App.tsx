import React from 'react';

// Lobby Component
const LobbyPage: React.FC = () => {
  console.log('LobbyPage component is rendering - DEBUG MODE ACTIVE');
  return (
      <div className="bg-white relative" style={{ minHeight: '100vh', width: '100vw', overflow: 'visible', display: 'block', margin: 0, padding: 0, border: '5px solid red' }}>
      {/* Background Image */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          backgroundImage: 'url(/assets/landing-background.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Chat Icon - Upper Left */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src="/assets/chat-icon.svg" 
          alt="Chat" 
          style={{ width: '32px', height: '32px', cursor: 'pointer' }}
        />
      </div>
      
      {/* Menu Icon - Upper Right */}
      <div className="absolute top-6 right-6 z-20" style={{ backgroundColor: 'blue', padding: '5px', border: '3px solid cyan' }}>
        <div style={{ color: 'white', fontSize: '10px', position: 'absolute', top: '-15px', left: '0', fontWeight: 'bold', zIndex: 100 }}>MENU 16px</div>
        <img 
          src="/assets/landing-menu-icon.svg" 
          alt="Menu" 
          style={{ width: '16px', height: '16px', cursor: 'pointer', border: '2px solid yellow' }}
        />
      </div>
      
      {/* Main Content Container */}
      <div style={{ position: 'relative', zIndex: 10, paddingTop: '0px', display: 'block', border: '3px solid purple' }}>
        
        {/* Neon Logo - Center */}
        <div style={{ marginBottom: '0px', padding: '10px', position: 'relative', display: 'inline-block', border: '3px solid green', backgroundColor: 'rgba(0,255,0,0.2)' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '0', color: 'green', fontSize: '12px', fontWeight: 'bold', zIndex: 100 }}>LOGO CONTAINER</div>
          {/* Glow layer behind - multiple layers for intense glow */}
          <img 
            src="/assets/neon-logo.png" 
            alt="" 
            style={{ 
              position: 'absolute',
              width: 'auto', 
              height: '60px', 
              maxHeight: '60px', 
              margin: '0', 
              padding: '0',
              filter: 'blur(20px) brightness(2) saturate(1.5)',
              opacity: 0.9,
              zIndex: 0,
              border: '2px solid orange',
              backgroundColor: 'rgba(255,165,0,0.3)'
            }}
          />
          <img 
            src="/assets/neon-logo.png" 
            alt="" 
            style={{ 
              position: 'absolute',
              width: 'auto', 
              height: '60px', 
              maxHeight: '60px', 
              margin: '0', 
              padding: '0',
              filter: 'blur(12px) brightness(1.8)',
              opacity: 0.7,
              zIndex: 0,
              border: '2px solid yellow',
              backgroundColor: 'rgba(255,255,0,0.2)'
            }}
          />
          {/* Main image on top */}
          <img 
            src="/assets/neon-logo.png" 
            alt="Frontal Slayer" 
            style={{ 
              position: 'relative',
              width: 'auto', 
              height: '60px', 
              maxHeight: '60px', 
              margin: '0', 
              padding: '0',
              zIndex: 1,
              border: '2px solid magenta'
            }}
          />
        </div>
        
        {/* Navigation Links */}
        <div style={{ margin: '0', padding: '10px', position: 'relative', top: '-25px', marginBottom: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid pink' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0px', margin: '0', padding: '0' }}>
            {/* Products with glow */}
            <div style={{ position: 'relative', display: 'inline-block', transform: 'translateX(0px)', border: '2px solid red', padding: '5px', backgroundColor: 'rgba(255,0,0,0.1)' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '0', color: 'red', fontSize: '10px', fontWeight: 'bold', zIndex: 100 }}>PRODUCTS</div>
              <img 
                src="/assets/neon-products.png" 
                alt="" 
                style={{ 
                  position: 'absolute',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  filter: 'blur(16px) brightness(2) saturate(1.5)',
                  opacity: 0.9,
                  zIndex: 0
                }}
              />
              <img 
                src="/assets/neon-products.png" 
                alt="" 
                style={{ 
                  position: 'absolute',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  filter: 'blur(10px) brightness(1.8)',
                  opacity: 0.7,
                  zIndex: 0
                }}
              />
              <img 
                src="/assets/neon-products.png" 
                alt="Products" 
                style={{ 
                  position: 'relative',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  zIndex: 1
                }}
              />
            </div>
            {/* Tools with glow */}
            <div style={{ position: 'relative', display: 'inline-block', transform: 'translateX(-50px)', border: '2px solid blue', padding: '5px', backgroundColor: 'rgba(0,0,255,0.1)' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '0', color: 'blue', fontSize: '10px', fontWeight: 'bold', zIndex: 100 }}>TOOLS</div>
              <img 
                src="/assets/neon-tools.png" 
                alt="" 
                style={{ 
                  position: 'absolute',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  filter: 'blur(16px) brightness(2) saturate(1.5)',
                  opacity: 0.9,
                  zIndex: 0
                }}
              />
              <img 
                src="/assets/neon-tools.png" 
                alt="" 
                style={{ 
                  position: 'absolute',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  filter: 'blur(10px) brightness(1.8)',
                  opacity: 0.7,
                  zIndex: 0
                }}
              />
              <img 
                src="/assets/neon-tools.png" 
                alt="Tools" 
                style={{ 
                  position: 'relative',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  zIndex: 1
                }}
              />
            </div>
            {/* Booking with glow */}
            <div style={{ position: 'relative', display: 'inline-block', transform: 'translateX(-100px)', border: '2px solid lime', padding: '5px', backgroundColor: 'rgba(0,255,0,0.1)' }}>
              <div style={{ position: 'absolute', top: '-15px', left: '0', color: 'lime', fontSize: '10px', fontWeight: 'bold', zIndex: 100 }}>BOOKING</div>
              <img 
                src="/assets/neon-booking.png" 
                alt="" 
                style={{ 
                  position: 'absolute',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  filter: 'blur(16px) brightness(2) saturate(1.5)',
                  opacity: 0.9,
                  zIndex: 0
                }}
              />
              <img 
                src="/assets/neon-booking.png" 
                alt="" 
                style={{ 
                  position: 'absolute',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  filter: 'blur(10px) brightness(1.8)',
                  opacity: 0.7,
                  zIndex: 0
                }}
              />
              <img 
                src="/assets/neon-booking.png" 
                alt="Booking" 
                style={{ 
                  position: 'relative',
                  width: 'auto', 
                  height: '44px', 
                  cursor: 'pointer', 
                  margin: '0', 
                  padding: '0', 
                  display: 'block',
                  zIndex: 1
                }}
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

// Lounge Component
const LoungePage: React.FC = () => {
  console.log('LoungePage component is rendering');
  return (
      <div className="bg-white relative" style={{ minHeight: '105vh', width: '100vw', overflow: 'visible', display: 'block', margin: 0, padding: 0 }}>
      {/* Background Image - Using landing2-background */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%',
          height: '100%',
          minHeight: '105vh',
          backgroundImage: 'url(/assets/landing2-background.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Menu Icon - Upper Right */}
      <div className="absolute top-6 right-6 z-20">
        <img 
          src="/assets/landing-menu-icon.svg" 
          alt="Menu" 
          style={{ width: '16px', height: '16px', cursor: 'pointer' }}
        />
      </div>
      
      {/* Neon Logo - Independent container with absolute positioning */}
      <div style={{ margin: '0 !important', padding: '0 !important', position: 'absolute', top: '50px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* Glow layer behind - multiple layers for intense glow */}
          <img 
            src="/assets/neon-logo.png" 
            alt="" 
            style={{ 
              position: 'absolute',
              width: 'auto !important', 
              height: '40px !important', 
              maxWidth: 'none !important',
              maxHeight: '40px !important', 
              minWidth: '0px !important',
              minHeight: '0px !important',
              margin: '0 !important', 
              padding: '0 !important',
              display: 'block !important',
              visibility: 'visible !important',
              opacity: '0.9 !important',
              filter: 'blur(18px) brightness(2) saturate(1.5) !important',
              zIndex: 0
            }}
          />
          <img 
            src="/assets/neon-logo.png" 
            alt="" 
            style={{ 
              position: 'absolute',
              width: 'auto !important', 
              height: '40px !important', 
              maxWidth: 'none !important',
              maxHeight: '40px !important', 
              minWidth: '0px !important',
              minHeight: '0px !important',
              margin: '0 !important', 
              padding: '0 !important',
              display: 'block !important',
              visibility: 'visible !important',
              opacity: '0.7 !important',
              filter: 'blur(10px) brightness(1.8) !important',
              zIndex: 0
            }}
          />
          {/* Main image on top */}
          <img 
            src="/assets/neon-logo.png" 
            alt="Frontal Slayer" 
            style={{ 
              position: 'relative',
              width: 'auto !important', 
              height: '40px !important', 
              maxWidth: 'none !important',
              maxHeight: '40px !important', 
              minWidth: '0px !important',
              minHeight: '0px !important',
              margin: '0 !important', 
              padding: '0 !important',
              display: 'block !important',
              visibility: 'visible !important',
              opacity: '1 !important',
              zIndex: 1
            }}
          />
        </div>
      </div>
      
      {/* TV Screen - Independent container with absolute positioning */}
       <div style={{ margin: '0 !important', padding: '0 !important', position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <img 
           src="/assets/tv-screen.png" 
           alt="TV Screen" 
           style={{ 
             width: 'auto !important', 
             height: '130px !important', 
             cursor: 'pointer', 
             margin: '0 !important', 
             padding: '0 !important', 
             display: 'block !important',
             maxWidth: 'none !important',
             minWidth: 'auto !important',
             maxHeight: 'none !important',
             minHeight: 'auto !important',
             boxSizing: 'content-box !important'
           }}
         />
       </div>
      
      {/* Play Button - Independent container with absolute positioning */}
      <div style={{ margin: '0 !important', padding: '0 !important', position: 'absolute', top: '220px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src="/assets/play-button.png" 
          alt="Play Button" 
          style={{ width: 'auto', height: '30px', cursor: 'pointer', margin: '0', padding: '0', display: 'block' }}
        />
      </div>
      
      {/* Salon Chairs - Independent container with absolute positioning */}
      <div style={{ margin: '0 !important', padding: '0 !important', position: 'absolute', top: '620px', left: 'calc(50% + 50px)', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src="/assets/salon-chairs.png" 
          alt="Salon Chairs" 
          style={{ width: 'auto', height: '160px', cursor: 'pointer', margin: '0', padding: '0', display: 'block' }}
        />
      </div>
    </div>
  );
};

// Main App Component - Simple routing with window.location
const App: React.FC = () => {
  // Check the current path
  const currentPath = window.location.pathname;
  console.log('=== APP COMPONENT LOADED ===');
  console.log('Current path:', currentPath);
  console.log('Full URL:', window.location.href);
  
  // If the path is /lobby, show the lobby page
  if (currentPath === '/lobby') {
    console.log('✅ Showing lobby page for /lobby route');
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'red', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
        <div style={{ textAlign: 'center' }}>
          <div>DEBUG: LOBBY PAGE LOADED</div>
          <div style={{ fontSize: '16px', marginTop: '20px' }}>Path: {currentPath}</div>
          <LobbyPage />
        </div>
      </div>
    );
  }
  
  // If the path is /lounge, show the lounge page
  if (currentPath === '/lounge') {
    console.log('Showing lounge page for /lounge route');
    return <LoungePage />;
  }
  
  // For all other paths, show the lobby page by default
  console.log('⚠️ Showing lobby page for default route (not /lobby)');
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'orange', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
      <div style={{ textAlign: 'center' }}>
        <div>DEBUG: DEFAULT ROUTE</div>
        <div style={{ fontSize: '16px', marginTop: '20px' }}>Path: {currentPath}</div>
        <LobbyPage />
      </div>
    </div>
  );
};

export default App;