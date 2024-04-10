import React from "react";
import { Flex } from "./Flex";
import { Typography } from "@mui/material";
import Search from "./Search";

const Header = () => {
    return (
        <Flex justifyContent={"space-between"} py={4}>
            <Flex gap={"120px"}>
                <Typography fontSize={36} fontWeight={700}>
                    Anonime
                </Typography>
                <Flex color={"rgba(134, 134, 134, 1)"} gap={6}>
                    <Typography>Home</Typography>
                    <Typography>List anime</Typography>
                </Flex>
            </Flex>
            <Search />
        </Flex>
    );
};

export default Header;
