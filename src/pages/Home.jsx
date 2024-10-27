import React, { useState, useEffect } from 'react'
import { data } from '../lib/data'
const Home = () => {
  const [users, setUsers] = useState(data)
  const [shuffled, setShuffled] = useState(false);

  const shuffleUsers = () => {
    setShuffled(true)
    const shuffledUsers = [...users];
    for (let i = shuffledUsers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledUsers[i], shuffledUsers[j]] = [shuffledUsers[j], shuffledUsers[i]];

    }
    setUsers(shuffledUsers);
  };

  useEffect(() => {
    if (shuffled) {
      setTimeout(() => {
        setShuffled(false);
      }, 500);
    }
  }, [shuffled, users]);
  return (
    <div className='min-h-screen pt-10'>
      <button onClick={shuffleUsers} className="ml-6 w-max bg-blue-400 text-white rounded-xl px-3 py-2">shuffle</button>
      <ul className={`${shuffled ? "scale-0" : "scale-[1]"} transition-all grid grid-cols-2 mt-6 md:grid-cols-3 lg:grid-cols-4 place-content-center h-3/4 w-full gap-y-3`}>

        {
          users.map((user) => (
            <li key={user.id} className='flex flex-col items-center w-max mx-auto bg-gray-300 gap-3 rounded-xl p-3'>
              <div className="rounded-[100%] overflow-hidden flex sm:w-20 w-16 h-16 sm:h-20">
                <img src={user.img} className="w-full object-cover" /></div>
              <p className="font-bold text-lg">{user.name}</p> 
            </li> 
          ))
        }      </ul>

    </div>
  )
}

export default Home