import { useState } from 'react';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'events'>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <HomePage onNavigate={setCurrentPage} />
        ) : (
          <EventsPage onNavigate={setCurrentPage} />
        )}
      </main>
      <Footer />
    </div>
  );
}
