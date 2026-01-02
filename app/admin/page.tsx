import React from 'react';

// This interface defines the props if you decide to pass any later
interface AdminPageProps {}

const AdminPage: React.FC<AdminPageProps> = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Admin Dashboard</h1>
      <hr />
      <section>
        <p>This is a placeholder for the administration panel.</p>
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#f4f4f4', 
          borderRadius: '8px' 
        }}>
          <strong>Status:</strong> Ready for development.
        </div>
      </section>
    </div>
  );
};

// The default export is crucial to prevent Next.js/Vite routing errors
export default AdminPage;