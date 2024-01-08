import { Routes, Route, Link } from 'react-router-dom'
import Footer from "@components/Footer"
import Header from "@components/Header"
import Company from "@/pages/company/Index"
import Member from "@/pages/member/Index"
import Portfolio from "@/pages/portfolio/Index"
import Skill from "@/pages/skill/Index"
import Team from "@/pages/team/Index"
import NotFound from "@/pages/error/Index"


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path={"/"} element={<Company />} />
        <Route path={"/member"} element={<Member />} />
        <Route path={"/portfolio"} element={<Portfolio />} />
        <Route path={"/skill"} element={<Skill />} />
        <Route path={"/team"} element={<Team />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
