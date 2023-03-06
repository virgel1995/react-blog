import React from 'react';
import { useUser } from '../../Api/useUser';

export function Home () {
  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    return <div className="p-16 bg-gray-800 h-screen">
        <div className="text-2xl mb-4 font-bold text-white">Home</div>
        <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
      </div>;
  }

  return (
    <div className="p-16 bg-gray-800 h-screen">
      <div className="text-2xl mb-4 font-bold text-white"> Home </div>
      {
        user &&
        <div className='text-white'>
          <div className="text-lg text-bold mb-2"> User Details </div>
          <div className="flex">
            <div className="w-24 font-medium">
              <div> Type : </div>
              <div> Name : </div>
              <div> Gender : </div>
            </div>
            <div>
              <div> {user.type} </div>
              <div> {user.name} </div>
              <div> {user.gender} </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
