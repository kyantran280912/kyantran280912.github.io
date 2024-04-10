import React, { useEffect, useState } from "react";
import domtoimage from "dom-to-image";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const names = [
    "daisy",
    "rose",
    "sunflower",
    "lilac",
    "orchid",
    "lavender",
    "peony",
    "dahlia",
    "iris",
    "magnolia",
    "carbon",
    "oxygen",
    "hydrogen",
    "nitrogen",
    "sodium",
    "chlorine",
    "potassium",
    "calcium",
    "iron",
    "magnesium",
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "london",
    "paris",
    "tokyo",
    "newyork",
    "losangeles",
    "sydney",
    "berlin",
    "barcelona",
    "rome",
    "dubai",
    "lion",
    "tiger",
    "elephant",
    "dolphin",
    "eagle",
    "panda",
    "whale",
    "shark",
    "owl",
    "fox",
    "blockchain",
    "artificialintelligence",
    "machinelearning",
    "internetofthings",
    "cloudcomputing",
    "cybersecurity",
    "fintech",
    "edtech",
    "healthtech",
    "greentech",
];

const Random = () => {
    const [randomBody, setRandomBody] = useState(getRandomNumber(1, 4));
    const [randomHair, setRandomHair] = useState(getRandomNumber(1, 75));
    const [randomOutfit, setRandomOutfit] = useState(getRandomNumber(1, 75));
    const [randomShoes, setRandomShoes] = useState(getRandomNumber(1, 75));
    const [randomBackground, setRandomBackground] = useState(
        getRandomNumber(1, 8)
    );
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const randomImage = () => {
        setRandomBody(getRandomNumber(1, 4));
        setRandomHair(getRandomNumber(1, 75));
        setRandomOutfit(getRandomNumber(1, 75));
        setRandomShoes(getRandomNumber(1, 75));
        setRandomBackground(getRandomNumber(1, 8));
        if (index > names.length - 1) {
            setIndex(0);
        }
        if (value !== "") {
            if (value.length < 1 || value.length > 15) {
                setError("Name should be between 1 and 15 characters");
                return;
            }
            // names.push(value);
            // setIndex(names.length - 1);
        } else {
            setIndex(index + 1);
        }
        setValue("");
    };

    const getImage = () => {
        let node = document.getElementById("my-node");
        domtoimage
            .toPng(node)
            .then(function (dataUrl) {
                let img = new Image();
                img.src = dataUrl;
                const imgUrl = img.src;
                img.className = "m-auto w-[1100px] h-[1100px] overflow-hidden";
                const link = document.createElement("a");
                link.href = imgUrl;
                link.download = "image/png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setValue("");
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error);
            });
    };
    return (
        <>
            <div className="flex flex-col gap-6 pt-6">
                <div className="flex gap-2">
                    <button
                        onClick={randomImage}
                        className="p-6 text-black bg-purple-300 rounded-md w-[300px] m-auto hover:opacity-75"
                    >
                        Random Image
                    </button>
                    <div className="px-4 border rounded-lg">
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Enter Name"
                            className="h-full"
                        />
                        <p>{!!error && error}</p>
                    </div>
                    <button
                        onClick={getImage}
                        className="p-6 text-black bg-green-300 rounded-md w-[300px] m-auto hover:opacity-75"
                    >
                        Get Image
                    </button>
                </div>
                <div className="flex justify-center overflow-hidden min-">
                    <div
                        id="my-node"
                        className="relative  min-w-[1100px] min-h-[1100px] max-h-[1100px]"
                    >
                        <div className="absolute flex flex-col text-[107px] pt-[12px] pl-[30px]">
                            <p
                                style={{
                                    textShadow:
                                        "0px 2px 4px rgba(0, 0, 0, 0.25)",
                                }}
                            >
                                {value ? value : names[index]}
                            </p>
                            <p
                                className="leading-[0.8] opacity-[0.6]"
                                style={{
                                    textShadow:
                                        "0px 2px 4px rgba(0, 0, 0, 0.25)",
                                }}
                            >
                                x.tech
                            </p>
                        </div>
                        {/* <img
                            src={`/NFT 2.png`}
                            alt="image"
                            width={1100}
                            height={1100}
                            className="absolute inset-0 opacity-50"
                        /> */}
                        <img
                            src={`/${randomBackground}.png`}
                            alt="image"
                            width={1100}
                            height={1100}
                        />
                        <div className="overflow-hidden">
                            <div className="absolute bottom-[0px] mt-[24px] left-[50%] translate-x-[-50%] w-[700px] h-[700px]">
                                <img
                                    src={`/character_hair/${randomHair}.png`}
                                    alt="image"
                                    className="absolute z-10"
                                />
                                <img
                                    src={`/character_body/${randomBody}.png`}
                                    alt="image"
                                    className="absolute z-0"
                                />
                                <img
                                    src={`/character_outfit/${randomOutfit}.png`}
                                    alt="image"
                                    className="absolute z-20"
                                />
                                <img
                                    src={`/character_shoes/${randomShoes}.png`}
                                    alt="image"
                                    className="absolute bottom-0 z-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Random;
