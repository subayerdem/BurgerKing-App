import React from 'react';
import MenuList from '../components/MenuList';
import menuler from '../yemekdata';

function HomePage() {
  return (
    <div>
      <div className="row">
        {menuler.map((menu) => (
          <div className="col-md-4">
            <div>
              <MenuList menu={menu} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
