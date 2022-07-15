import { useState } from "react"
import Counter from "./counter"

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: `Ненужная вещь` },
    { id: 1, value: 4, name: `Ложка` },
    { id: 2, value: 0, name: `Вилка` },
    { id: 3, value: 0, name: `Тарелка` },
    { id: 4, value: 0, name: `Набор минималиста` },
  ]
  const [counters, setCounters] = useState(initialState)

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id)
    setCounters(newCounters)
  }

  const handleReset = () => {
    setCounters(initialState)
  }

  const handleIncrement = (value) => {
    setCounters(counters.map((c) => c.value === value++))
  }

  const handleDecrement = (value) => {
    let newDecrement = counters.map((c) => c.value === value--)
    setCounters(newDecrement)
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-danger btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  )
}

export default CountersList
