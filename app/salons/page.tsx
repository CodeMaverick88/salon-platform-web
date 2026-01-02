import React from 'react';

export default function SalonsPage() {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Salons Overview</h2>
      
      <div style={{ 
        display: 'grid', 
        gap: '1rem', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' 
      }}>
        {/* Placeholder Card */}
        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>Sample Salon</h3>
          <p>Location: Downtown</p>
          <button style={{ cursor: 'pointer' }}>View Details</button>
        </div>
      </div>
    </div>
  );
}