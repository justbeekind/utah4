import Header from '../components/Header';
import { Calendar } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: 'home' | 'events') => void;
}

export default function EventsPage({ onNavigate }: EventsPageProps) {
  return (
    <div className="bg-white">
      <Header currentPage="events" onNavigate={onNavigate} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Campaign Events</h1>
          <p className="text-xl">Stay tuned for upcoming events across District 4</p>
        </div>
      </section>

      {/* Placeholder */}
      <section className="py-40">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 text-red-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Events Yet</h2>
          <p className="text-lg text-gray-500">
            Events will be announced here as the campaign gets underway. Follow us on{' '}
            <a href="https://www.instagram.com/wright4utah/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Instagram</a>
            {' '}and{' '}
            <a href="https://x.com/right4utah" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">X</a>
            {' '}to be the first to know.
          </p>
        </div>
      </section>

    </div>
  );
}
