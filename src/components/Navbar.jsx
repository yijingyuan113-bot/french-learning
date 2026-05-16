import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', label: '首页' },
    { path: '/words/A1', label: '单词' },
    { path: '/phrases', label: '短语' },
    { path: '/dialogues', label: '对话' },
    { path: '/progress', label: '进度' },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">🇫🇷 法语学习</Link>
          <div className="flex space-x-1">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md transition ${
                  location.pathname === link.path
                    ? 'bg-blue-700'
                    : 'hover:bg-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}