import React from "react";
import { Flex } from "./Flex";

const Search = () => {
    return (
        <Flex
            sx={{
                backgroundColor: "rgba(55, 65, 81, 1)",
                height: 48,
                borderRadius: "24px",
                minWidth: 374,
                px: 4,
            }}
        >
            <input type="text" placeholder="Search anime or movie" />
        </Flex>
    );
};

export default Search;
