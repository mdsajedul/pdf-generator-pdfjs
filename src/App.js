import logo from './logo.svg';
import './App.css';
import GeneratePdf from './generatePdf/GeneratePdf';


function App() {
  return (
    <div className="App">
      {/* <InvoiceGenerator/> */}
      <GeneratePdf/>
    </div>
  );
}

export default App;
