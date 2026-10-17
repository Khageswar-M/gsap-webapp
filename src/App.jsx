
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100]">
        <h1 className="text-2xl text-gray-600">App</h1>
    </div>
  )
}

export default App