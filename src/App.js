import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"header header header header"
      "main main main main"
      "footer footer footer footer"`,
      }}
    >
    <Box sx={{ gridArea: 'header' }}><Header /></Box>
    <Box sx={{ gridArea: 'main' }}><Main /></Box>
    {/* <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box> */}
    <Box sx={{ gridArea: 'footer'}}><Footer /></Box>
  </Box>
  </>
  );
}

export default App;
