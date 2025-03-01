import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import { DishPage } from "./pages/dishPage/dishPage.tsx";
import { EditDish } from "./pages/editDish/editDish.tsx";

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dish/:id" element={<DishPage />} />
                <Route path="/edit/:id" element={<EditDish />} />
            </Routes>
        </Router>
    );
};
