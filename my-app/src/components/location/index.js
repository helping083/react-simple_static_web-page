import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35363.59414469458!2d-0.11808894602412429!3d51.49738903564169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035a0a9271d3%3A0xbdf26ba73efb7b!2sThe+Shard!5e0!3m2!1suk!2sua!4v1558386676805!5m2!1suk!2sua" 
              width="100%" 
              height="450" 
              frameBorder="0" 
              allowFullScreen>
            </iframe>
            <div className="location_tag">
              <div>Location</div>
            </div>
        </div>
    );
};

export default Location;