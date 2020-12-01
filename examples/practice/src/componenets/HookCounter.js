import {useState} from 'react'

const HookCounter = () => {
  const [count, setCount] = useState(0)

  const clickHandler = () => {
    setCount(prevState => prevState + 1)
  }

  return (
    <div>
      <button onClick={clickHandler}>Count {count}</button>
    </div>
  )
}

export default HookCounter