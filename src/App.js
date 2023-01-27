import { ChampaignContainer } from "./Components/Champaign/ChampaignContainer";
export const BASE_API_URL = process.env.REACT_APP_BASE_URL;

function App() {
  return (
    <div className="App">
      <ChampaignContainer />
    </div>
  );
}

export default App;
