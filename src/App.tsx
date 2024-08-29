
import Main from "./components/main"
import SideBar from "./components/sideBar"

const App = () => {
  return (
    <>
      <div className="h-[100vh] w-full bg-zinc-800 overflow-hidden flex gap-3">
        
        <SideBar />
        <Main />


      </div>

    </>
  )
}

export default App