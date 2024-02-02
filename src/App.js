import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import Weather from './components/api/Weather';

function App() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<MainPage />} />
        //     </Routes>
        // </BrowserRouter>

        <Weather/>
    );
}

export default App;