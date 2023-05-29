import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-green-600">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a className="text-white font-bold text-lg" href="#">
              Adventure Coffee ☕
            </a>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <a
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/cups"
                >
                  Cups
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/origins"
                >
                  Origins
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/beans"
                >
                  Beans
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-gray-300 px-3 py-2 transition-all duration-100"
                  href="/map"
                >
                  Map
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
