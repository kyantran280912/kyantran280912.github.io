import React from "react";

const Input = ({
    type = "text",
    prefix,
    placeholder = "Search...",
    value,
    onChange,
}) => {
    return (
        <div className="flex items-center gap-2 border border-black rounded-lg h-[50px] px-6">
            {prefix}
            <input
                type={type}
                className="flex-1 h-full outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                che
            />
        </div>
    );
};

export default Input;
