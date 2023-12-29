import React from 'react';

function PageNotFound() {
  return (
    <div className="w-screen h-screen bg-primary">
      <div className="flex flex-col items-center justify-center h-full p-4">
        <span className="flex flex-row items-center justify-center hidden lg:flex ">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <img
          src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1696992208/unsubscribe_vwvinb.png"
          alt="Lightbulb"
          className=" h-96 mb-4"
        />
        </span>
        <div className="flex flex-col items-center justify-center lg:hidden">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <img
          src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1696992208/unsubscribe_vwvinb.png"
          alt="Lightbulb"
          className="w-48 mb-4"
        />
        </div>
        <img
          src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1697129165/unnamed_if5myz.png"
          alt="Light path"
          className=""
        />
        
        <p className="text-xl text-gray-400 mt-4">
          The page you're looking for doesn't exist. Head back to the <a href="/" className="text-white hover:underline">home page</a> or try searching again.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
