import { Button } from './ui/button';

interface HeaderProps {
  currentPage: 'home' | 'events';
  onNavigate: (page: 'home' | 'events') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const scrollToDonate = () => {
    // navigate to home first so the #donate section exists, then scroll after the render
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img src="/img/logo.jpg" alt="Wright for Congress logo" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <h1 className="text-xl text-gray-900">Joseph L. Wright</h1>
              <p className="text-xs text-gray-600">for Utah's 4th District</p>
            </div>
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`text-sm ${currentPage === 'home' ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('events')}
              className={`text-sm ${currentPage === 'events' ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
            >
              Events
            </button>
            <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={scrollToDonate}>
              Donate Now
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4" onClick={scrollToDonate}>
              Donate
            </Button>
          </div>
        </div>
        
        <nav className="md:hidden flex justify-center space-x-6 pb-3">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-sm ${currentPage === 'home' ? 'text-red-600' : 'text-gray-700'}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('events')}
            className={`text-sm ${currentPage === 'events' ? 'text-red-600' : 'text-gray-700'}`}
          >
            Events
          </button>
        </nav>
      </div>
    </header>
  );
}
