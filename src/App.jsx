import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'
import { SCHEMES } from './utils/swoldier'



function App() {
  const [count, setCount] = useState(0)
  const [workout,setWorkout]=useState(null)
  const[poison,setPoison]=useState('individual')
  const [muscles,setMuscles]=useState([])
  const [goal,setGoal]=useState(Object.keys(SCHEMES)[0])

  function updateWorkout(){
    if(muscles.length<1){
      return
    }
    
    let newWorkout=generateWorkout({poison,muscles,goal})
    console.log('New Workout:', newWorkout)
    setWorkout(newWorkout)

    window.location.href='#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base '>
      <Hero/>
      <Generator
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout={updateWorkout}

      />
      <br>
      </br>
      <br>
      </br>
      {workout && <Workout workout={workout} />}
    </main>
  )
}

export default App
