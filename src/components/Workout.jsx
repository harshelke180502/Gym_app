import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExcerciseCard'

const Workout = (props) => {
  const { workout } = props;
  console.log('Workout data:', workout);
  return (
    <SectionWrapper id={'workout'} header={'Welcome To'} title={['The', 'DANGER', 'Zone']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => (
          <ExcerciseCard i={i} exercise={exercise} key={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Workout
