import React from 'react';

const Error404 = () => {
  // Creating the dot pattern for "404"
  const createDotPattern = () => {
    return (
      <div className="flex justify-center items-center py-12">
        <svg width="560" height="220" viewBox="0 0 560 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* This creates a grid of dots forming "404" */}
          <g fill="#CCCCCC">
            {/* Generate the dots for the first "4" */}
            {[...Array(100)].map((_, i) => {
              const x = (i % 10) * 6;
              const y = Math.floor(i / 10) * 6;
              return (
                <circle 
                  key={`4-1-${i}`} 
                  cx={x + 100} 
                  cy={y + 40} 
                  r={1} 
                  opacity={
                    // Pattern for the first "4"
                    (x >= 30 && x <= 60 && y >= 0 && y <= 48) || // vertical bar
                    (x >= 0 && x <= 60 && y >= 24 && y <= 30) || // horizontal bar
                    (x >= 48 && x <= 54 && y >= 0 && y <= 54) ? // right vertical bar
                    1 : 0.3
                  }
                />
              );
            })}

            {/* Generate the dots for the "0" */}
            {[...Array(100)].map((_, i) => {
              const x = (i % 10) * 6;
              const y = Math.floor(i / 10) * 6;
              return (
                <circle 
                  key={`0-${i}`} 
                  cx={x + 230} 
                  cy={y + 40} 
                  r={1}
                  opacity={
                    // Circle pattern for "0"
                    ((x >= 6 && x <= 54) && ((y >= 0 && y <= 6) || (y >= 48 && y <= 54))) || // top and bottom
                    ((y >= 6 && y <= 48) && ((x >= 0 && x <= 12) || (x >= 48 && x <= 60))) ? // sides
                    1 : 0.3
                  }
                />
              );
            })}

            {/* Generate the dots for the second "4" */}
            {[...Array(100)].map((_, i) => {
              const x = (i % 10) * 6;
              const y = Math.floor(i / 10) * 6;
              return (
                <circle 
                  key={`4-2-${i}`} 
                  cx={x + 360} 
                  cy={y + 40} 
                  r={1}
                  opacity={
                    // Pattern for the second "4"
                    (x >= 30 && x <= 60 && y >= 0 && y <= 48) || // vertical bar
                    (x >= 0 && x <= 60 && y >= 24 && y <= 30) || // horizontal bar
                    (x >= 48 && x <= 54 && y >= 0 && y <= 54) ? // right vertical bar
                    1 : 0.3
                  }
                />
              );
            })}
          </g>
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {createDotPattern()}
      
      <h1 className="text-4xl md:text-5xl text-gray-400 font-light text-center mb-6">
        The page you were looking for doesn't exist.
      </h1>
      
      <p className="text-xl text-gray-400 text-center">
        You may have mistyped the address or the page may have moved. 
        <a href="/" className="text-blue-600 ml-2 hover:underline">Homepage</a>
      </p>
    </div>
  );
};

export default Error404;