import React from 'react';

// Lobby Component
const LobbyPage: React.FC = () => {
  console.log('LobbyPage component is rendering');
  return (
    <div className="h-screen bg-red-900 relative md:hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/landing-background.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center'
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        
        {/* Neon Logo - Center */}
        <div className="mb-8">
          <img 
            src="/assets/neon-logo.png" 
            alt="Frontal Slayer" 
            className="w-auto h-72 md:h-40 lg:h-48"
          />
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-row justify-center items-center mb-16" style={{ margin: '0', padding: '0', marginTop: '15px' }}>
          <img 
            src="/assets/neon-products.png" 
            alt="Products" 
            className="w-auto h-11 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ margin: '0', padding: '0', display: 'block', transform: 'translateX(0px)' }}
          />
          <img 
            src="/assets/neon-tools.png" 
            alt="Tools" 
            className="w-auto h-11 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ margin: '0', padding: '0', display: 'block', transform: 'translateX(-50px)' }}
          />
          <img 
            src="/assets/neon-booking.png" 
            alt="Booking" 
            className="w-auto h-11 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ margin: '0', padding: '0', display: 'block', transform: 'translateX(-100px)' }}
          />
        </div>
        
        {/* Product Display Shelves */}
        <div className="flex flex-col gap-8 mb-16">
          {/* HD LACE Shelf */}
          <div className="flex flex-col items-center">
            <img 
              src="/assets/hd-group.png" 
              alt="HD Lace Collection" 
              className="w-auto h-16 md:h-20 lg:h-24"
            />
          </div>
          
          {/* TRANSPARENT LACE Shelf */}
          <div className="flex flex-col items-center">
            <img 
              src="/assets/transparent-group.png" 
              alt="Transparent Lace Collection" 
              className="w-auto h-16 md:h-20 lg:h-24"
            />
          </div>
          
          {/* CUSTOM UNITS Shelf */}
          <div className="flex flex-col items-center">
            <img 
              src="/assets/custom-group.png" 
              alt="Custom Units Collection" 
              className="w-auto h-16 md:h-20 lg:h-24"
            />
          </div>
        </div>
        
        {/* Bottom Display Case and Accessories */}
        <div className="relative w-3/5 max-w-3xl" style={{ marginTop: '-50px' }}>
          {/* Acrylic Case */}
          <div className="relative">
            <img 
              src="/assets/CASE.png" 
              alt="Display Case" 
              className="w-full h-auto"
            />
            
            {/* Register - Left side of case */}
            <div className="absolute top-4 left-8">
              <img 
                src="/assets/REGISTER.png" 
                alt="Register" 
                className="w-8 h-6 md:w-10 md:h-8"
              />
            </div>
            
            {/* Phone - Right side of case */}
            <div className="absolute top-4 right-8">
              <img 
                src="/assets/PHONE.png" 
                alt="Phone" 
                className="w-8 h-6 md:w-10 md:h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component - Simple routing with window.location
const App: React.FC = () => {
  // Check the current path
  const currentPath = window.location.pathname;
  console.log('Current path:', currentPath);
  
  // If the path is /lobby, show the lobby page
  if (currentPath === '/lobby') {
    console.log('Showing lobby page for /lobby route');
    return <LobbyPage />;
  }
  
  // For all other paths, show the lobby page by default
  console.log('Showing lobby page for default route');
  return <LobbyPage />;
};

export default App;