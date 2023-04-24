import { useState, useEffect, memo } from 'react';

function MyMenu(props) {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/wp-json/boilerplate-flagship-theme/v1/menu/')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <nav className="bg-cyan-500">
      {isLoading ? (
        <ul className="flex gap-6 max-w-4xl mx-auto mb-5 px-4 text-slate-50">
          {[1, 2, 3].map(index => (
            <li className="text-1xl py-5" key={index}>
              <div className="animate-pulse-slow bg-slate-50 h-5 rounded-sm w-20"></div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex gap-6 max-w-4xl mx-auto mb-5 px-4 text-slate-50">
          {menuItems.map((item, index) => (
            <li className="text-1xl py-5" key={index}>
              <a className="hover:text-blue-500" href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default memo(MyMenu);





