import Notification from "./components/Notification";
import Globalstyle from './Globalstyle'
import Not from './components/Not'
import ProviderCard from "./components/Context";
import Input from "./components/Input";
function App() {
  return (
    <div className="App">
      <ProviderCard>
     <Globalstyle/>
     <Not/>
     {/* <Notification/> */}
    </ProviderCard>
    </div>
  );
}

export default App;
