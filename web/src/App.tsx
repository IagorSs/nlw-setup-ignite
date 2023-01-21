import Habit from "./components/Habit"
import './styles/global.css'

function App() {
  return (
    <>
      <Habit completed={2} />
      <Habit completed={5} />
      <Habit completed={5} />
      <Habit completed={5} />
      <Habit completed={5} />
    </>
  )
}

export default App
