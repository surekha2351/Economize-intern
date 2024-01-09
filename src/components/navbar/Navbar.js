import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faShieldAlt, faSearch, faArrowLeft, faArrowRight, faFileExport, faPlus, faCopy,faLock } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#36486b', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faCircle} style={{ color: 'red', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: 'green', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: 'yellow' }} />
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginLeft: '20px', color: '#667292'  }} />
        <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '20px' , color: '#667292' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faShieldAlt} style={{color: '#667292' , fontSize: '24px', marginRight: '10px' }} />
        <label>
          <FontAwesomeIcon icon={faLock} style={{ marginRight: '5px',marginLeft: '20px', color: '#667292' }} />
         
          
          <span style={{ padding:"10px",  color: ' #e0e2e4'  }}>bluereceipt.com</span>
          <FontAwesomeIcon icon={faSearch} style={{ marginLeft: '5px', color: '#667292'  }} />
        </label>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faFileExport} style={{ marginRight: '20px',  fontSize: '24px',color: '#667292'  }} />
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '20px' ,  fontSize: '24px',color: '#667292' }} />
        <FontAwesomeIcon icon={faCopy} style={{ marginRight: '20px' ,  fontSize: '24px',color: '#667292' }}  />
      </div>
    </nav>
  );
};

export default Navbar;