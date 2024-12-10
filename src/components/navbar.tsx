import { Bell, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import { useStore } from '@/store/useStore';
import { useNavigate, Link } from 'react-router-dom'; 
import './navbar.css';
import { useState, useRef, useEffect } from 'react'; 
import { formatDistanceToNow } from 'date-fns';

export function Navbar() {
  const { searchQuery, setSearchQuery } = useStore();
  const navigate = useNavigate(); 
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); 
  const [notifications] = useState([
    { id: 1, text: 'Your profile has been updated', time: new Date() },
    { id: 2, text: 'New episode added to your list', time: new Date() },
  ]); // Example notifications

  const notificationRef = useRef(null);

  // Toggle notifications visibility
  const toggleNotifications = () => {
    setIsNotificationsOpen((prevState) => !prevState);
  };

  // Close notifications if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="flex items-center gap-8">
        <Link to="/" className="navbar__logo">
          <img src="/netflix1.png" alt="Netflix Logo" className="h-10" />
        </Link>
        <ul className="navbar__menu">
          <li><Link to="/" className="navbar__menu-item">Home</Link></li>
          <li className="navbar__menu-item">TV Shows</li>
          <li className="navbar__menu-item">Movies</li>
          <li className="navbar__menu-item">New & Popular</li>
          <li className="navbar__menu-item">My List</li>
        </ul>
      </div>

      <div className="flex items-center gap-6 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
        <Button variant="ghost" className="text-white" onClick={() => navigate('/profile')}>
          <User  className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="text-white" onClick={toggleNotifications}>
          <Bell className="h-5 w-5" />
        </Button>
        
        {/* Notification Dropdown */}
        {isNotificationsOpen && (
          <div className="notification-dropdown open" ref={notificationRef}>
            <h3>Notifications</h3>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div key={notification.id} className="notification-item">
                  <p>{notification.text}</p>
                  <span>{formatDistanceToNow(notification.time)} ago</span>
                </div>
              ))
            ) : (
              <div className="no-notifications">No new notifications</div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}