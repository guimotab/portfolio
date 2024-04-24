import { RecoilRoot } from "recoil"
import Certification from "./pages/Certification"
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"

const AppRouter = () => {
    return (
        <RecoilRoot>
            <Router>
                <Routes>
                    <Route path='/' element={<Outlet />}>
                        <Route index element={<Portfolio />} />
                        <Route path='certificados/:id' element={<Certification />} />
                    </Route>
                </Routes>
            </Router>
        </RecoilRoot>
    )
}
export default AppRouter