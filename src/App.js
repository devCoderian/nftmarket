import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";
import Explore from "./components/Explore";

const Container = styled.div`
    grid-template-rows: 100px 5fr 1fr;
`

function App() {
  return (
    <>
    <Container>
      <Header />
      {/* <Main /> */}
      <Explore />
      {/* <Footer /> */}
      </Container>
      <div id = "root-modal" />
      </>
  );
}

export default App;
