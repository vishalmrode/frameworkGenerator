import React from 'react';

const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-text-primary">
    <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
    <p className="text-lg text-text-secondary">The page you are looking for does not exist.</p>
  </div>
);

export default NotFoundPage;
