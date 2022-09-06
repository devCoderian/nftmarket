import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";
import Explore from "./components/Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Screens/Signup";
import Login from "./Screens/Login";
import Graph from './Screens/Graph';
import Test from './Screens/Test';

const Container = styled.div`
    // grid-template-rows: 100px 5fr 1fr;
`

function App() {
  return (
    <>
      <Container>
      <BrowserRouter>
        <Header />
      {/* <Main /> */}
          <Routes>
            <Route path = "/" element={<Main />}></Route>
            <Route path = "/graph" element={<Graph/>}></Route>
            <Route path = "/explore" element={<Explore />}></Route>
            <Route path = "/signup" element={<SignUp />}></Route>
            <Route path = "/login" element={<Login />}></Route>
            {/* <Route path = "/explore" element={<Explore />}></Route> */}
            <Route path = "/test" element = {<Test />}></Route>
          </Routes>
          
      {/* <Footer /> */}
        </BrowserRouter>
      <div id = "root-modal" />
      </Container>
      
      </>
  );
}

export default App;
