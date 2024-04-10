import { Box, Container } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Content from "./components/Content";
import domImage from "dom-to-image";
import Random from "./components/random";

function App() {
    return (
        <>
            <Box mb={20}>
                <Random />
            </Box>
        </>
    );
}

export default App;
