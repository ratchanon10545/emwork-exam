import React from 'react';
const Slideshow = () => {
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1>TEMPLE BY REGION</h1>
        <p>ค้นหาข้อมูลวัดตามภูมิภาค</p>
        <div className="grid grid-cols-4 items-center justify-center max-w-5xl w-full  p-4 bg-white rounded-lg shadow-md">
          <div className="">
             <img src="/images/north.jpg" alt="Temple 1" className=" h-auto rounded-lg shadow-md" />
            
          </div>
          <div>
            <img src="/images/middle.jpg" alt="Temple 2" className=" h-auto rounded-lg shadow-md" />
          
          </div>
          <div>
            <img src="/images/northeast.jpg" alt="Temple 3" className=" h-auto rounded-lg shadow-md" />
          </div>
          <div>
            <img src="/images/east.webp" alt="Temple 4" className=" h-auto rounded-lg shadow-md" />
          </div>
          <div>
            <img src="/images/Western.jpg" alt="Temple 5" className=" h-auto rounded-lg shadow-md" />
          </div>
          <div>
            <img src="/images/Southern.jpg" alt="Temple 6" className=" h-auto rounded-lg shadow-md" />
          </div>
          
        </div>
    </div>
  );
};

export default Slideshow;
