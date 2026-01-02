import React from 'react';

export const metadata = {
  title: 'Salons | Management',
  description: 'Manage your salon listings and appointments',
};

export default function SalonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Optional: Add a specific Salons Header here */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <a href="/salons" style={{ fontWeight: 'bold' }}>Salons Directory</a>
      </nav>
      
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </section>
  );
}