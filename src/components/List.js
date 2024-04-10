import React from "react";
import { Column } from "./Column";
import { Box, Typography } from "@mui/material";
import { Flex } from "./Flex";
import { films } from "../data/index";

const List = () => {
    return (
        <Column>
            <Typography fontSize={36} fontWeight={600}>
                New Realease
            </Typography>
            <Flex justifyContent={"space-between"}>
                {films.map((film) => (
                    <Card
                        key={film.id}
                        img={film.id}
                        name={film.movieName}
                        es={film.episode}
                    />
                ))}
            </Flex>
        </Column>
    );
};

const Card = ({ img, name, es }) => {
    return (
        <Column
            alignItems={"center"}
            gap={2}
            justifyContent={"flex-start"}
            height={317}
        >
            <Box
                height={253}
                sx={{
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <img
                    src={`/img/${img}.png`}
                    alt="film"
                    width={170}
                    height={253}
                />
                <Box
                    sx={{
                        position: "absolute",
                        background:
                            "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, #0F1E29 100%)",
                        width: "100%",
                        height: 200,
                        bottom: 0,
                    }}
                ></Box>
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        bottom: 10,
                        zIndex: 2,
                    }}
                >
                    <Typography textAlign={"center"}>Episode {es}</Typography>
                </Box>
            </Box>
            <Typography
                textAlign={"center"}
                fontWeight={600}
                maxWidth={"200px"}
                flex={1}
            >
                {name}
            </Typography>
        </Column>
    );
};

export default List;
