import { useState, useEffect } from 'react'
function About(){
  const [count, setCount] = useState(0)
  useEffect(() => {
    if(localStorage.getItem('count')){
      setCount(Number(localStorage.getItem('count')))
    }
    else{
      localStorage.setItem('count', `${count}`)
    }
  }, [])

  function increment(){
    setCount(count + 1)
    localStorage.setItem('count', `${count + 1}`)
  }
  function decrement(){
    if(count > 0){
      setCount(count - 1)
      localStorage.setItem('count', `${count - 1}`)
    }
  }
  return (
    <div className="
      m-auto bg-indigo-800 h-screen
      flex flex-col justify-evenly items-center
      text-lg text-white h-full
    ">
      <p className="text-3xl">
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://github.com/ayushbasak/counter-next">
          counter-next
        </a>
      </p>
      <div className="
        border-white-500 border-solid border-8 rounded-xl
        flex flex-col justify-center items-center
        w-11/12 lg:w-5/12 h-3/4
      ">
        <p className="text-9xl">{count}</p>
        <div className="
          w-5/12 flex flex-col justify-between
          items-center text-3xl">
          <button className="
            bg-pink-600 w-11/12 lg:w-5/12
            p-4 m-4 rounded-xl 
            hover:bg-pink-400" onClick={increment}>+</button>
          <button className="
            bg-pink-600 w-11/12 lg:w-5/12
            p-4 m-4 rounded-xl
            hover:bg-pink-400" onClick={decrement}>-</button>
        </div>
      </div>
      <p>♥ <a className="
                hover:bg-pink-500 
                p-3 m-3 rounded-xl" 
              href="https://github.com/ayushbasak">
                @ayushbasak
            </a>
      </p>
    </div>
  );
}
export default About;
