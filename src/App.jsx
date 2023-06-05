import { Route, Routes } from "react-router-dom";
import URLs from "./pages/urls";
import Layout from "./components/layout";
import "./App.css";
import Documents from "./pages/documents";
import AddDocument from "./pages/addDocument";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/add-documents" element={<AddDocument />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/urls" element={<URLs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
