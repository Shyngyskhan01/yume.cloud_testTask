import st from "./App.module.scss"

import TaskManager from "./components/TaskManger/TaskManager.jsx";

function App() {


  return (
    <div className={st.container}>
      <TaskManager />
    </div>
  )
}

export default App
