import React from 'react';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find the Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en-us">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
