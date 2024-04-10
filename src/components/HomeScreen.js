import React from "react";
import Box from "./Box";

const HomeScreen = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
                width: "220px",
                padding: "20px",
            }}
        >
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    );
};

export default HomeScreen;
