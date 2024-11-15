
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";


export default function HomePage() {
    return (
        <main>
            <h1>HomePage</h1>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                
            </Routes>
        </main>
        )
}