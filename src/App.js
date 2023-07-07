import SimpleBarCharts from "./components/SimpleBarCharts.js";
import StackedAreaCharts from "./components/StackedAreaCharts.js";
import SimplePieCharts from "./components/SimplePieCharts.js";

function App() {
  return (
    <div>
     <h1 className="text-center text-2xl leading-9 font-bold">ReCharts</h1>
     <SimpleBarCharts />
     <StackedAreaCharts />

     <SimplePieCharts />
    </div>
  );
}
export default App;
