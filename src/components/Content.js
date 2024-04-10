import React from "react";
import { Column } from "./Column";
import { Box, Typography } from "@mui/material";
import List from "./List";
const Content = () => {
    return (
        <Column gap={3}>
            <Column>
                <Typography fontSize={32} fontWeight={600}>
                    Explore
                </Typography>
                <Typography color={"rgba(134, 134, 134, 1)"}>
                    What are you gonna watch today ?
                </Typography>
            </Column>
            <Column position={"relative"}>
                <Box>
                    <img src="/img/banner.png" alt="banners" />
                </Box>
                <Box
                    sx={{
                        background:
                            "linear-gradient(269.96deg, rgba(29, 29, 29, 0) 0.04%, rgba(29, 29, 29, 0.8) 99.5%)",
                        maxHeight: "100%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "70%",
                    }}
                ></Box>
                <Column
                    position={"absolute"}
                    p={6}
                    sx={{
                        bottom: 6,
                    }}
                >
                    <Typography fontSize={36} fontWeight={600}>
                        Weather With You
                    </Typography>
                    <Typography maxWidth={571}>
                        {" "}
                        Corrupt politicians, frenzied nationalists, and other
                        warmongering forces constantly jeopardize the thin
                        veneer of peace between neighboring countries Ostania
                        and Westalis.{" "}
                    </Typography>
                </Column>
            </Column>
            <List />
        </Column>
    );
};

export default Content;
