import React from 'react';

const App: React.FC = () => {
  console.log('LobbyPage component is rendering');
  return (
    <div className="bg-red-900 relative" style={{ height: '100vh !important', overflow: 'visible !important', display: 'block !important' }}>
      {/* Background Image */}
      <div 
        style={{ 
          position: 'absolute !important', 
          top: '0 !important', 
          right: '0 !important', 
          bottom: '0 !important', 
          left: '0 !important', 
          backgroundImage: 'url(/assets/landing-background.png)',
          backgroundSize: '100% 100% !important',
          backgroundPosition: 'center center !important',
          backgroundRepeat: 'no-repeat !important'
        }}
      />
      
      {/* Chat Icon - Upper Left */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src="/assets/chat-icon.svg" 
          alt="Chat" 
          className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
      
      {/* Menu Icon - Upper Right */}
      <div className="absolute top-6 right-6 z-20">
        <img 
          src="/assets/landing-menu-icon.svg" 
          alt="Menu" 
          className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
      
      {/* Main Content Container */}
      <div style={{ position: 'relative !important', zIndex: '10 !important', paddingTop: '0px !important', display: 'block !important' }}>
        
        {/* Neon Logo - Center */}
        <div style={{ marginBottom: '0px !important', padding: '0px !important' }}>
          <img 
            src="/assets/neon-logo.png" 
            alt="Frontal Slayer" 
            style={{ width: 'auto !important', height: '60px !important', maxHeight: '60px !important', margin: '0 !important', padding: '0 !important' }}
          />
        </div>
        
        {/* Navigation Links */}
        <div style={{ margin: '0 !important', padding: '0 !important', position: 'relative', top: '-25px !important', marginBottom: '0 !important', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative !important', display: 'flex !important', alignItems: 'center !important', gap: '0px !important', margin: '0 !important', padding: '0 !important' }}>
            <img 
              src="/assets/neon-products.png" 
              alt="Products" 
              className="w-auto cursor-pointer hover:opacity-80 transition-opacity" style={{ height: 'auto !important' }}
              style={{ margin: '0 !important', padding: '0 !important', display: 'block !important', transform: 'translateX(0px) !important' }}
            />
            <img 
              src="/assets/neon-tools.png" 
              alt="Tools" 
              className="w-auto cursor-pointer hover:opacity-80 transition-opacity" style={{ height: 'auto !important' }}
              style={{ margin: '0 !important', padding: '0 !important', display: 'block !important', transform: 'translateX(-50px) !important' }}
            />
            <img 
              src="/assets/neon-booking.png" 
              alt="Booking" 
              className="w-auto cursor-pointer hover:opacity-80 transition-opacity" style={{ height: 'auto !important' }}
              style={{ margin: '0 !important', padding: '0 !important', display: 'block !important', transform: 'translateX(-100px) !important' }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
