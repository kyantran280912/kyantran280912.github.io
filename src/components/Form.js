import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [users, setUsers] = useState({
        username: "",
        password: "",
    });
    const [isLogin, setIsLogin] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            toast.error("Username is require");
            return;
        }
        if (!password) {
            toast.error("Password is require");
            return;
        }
        if (!confirmPassword) {
            toast.error("Confirm password is require");
            return;
        }
        if (password.length < 8 || password.length > 36) {
            toast.error("Password must be 8 to 36 characters long");
            return;
        }
        if (confirmPassword !== password) {
            toast.error("Confirm password is incorrect");
            return;
        }
        setUsers({
            username: username,
            password: password,
        });
        toast.success("Sign up successfully");
        setIsLogin(true);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    };
    const onLogin = (e) => {
        e.preventDefault();
        if (username !== users.username || password !== users.password) {
            toast.error("Username or password incorrect");
            return;
        }
        toast.success("Sign in successfully");
    };
    return (
        <div className="bg-white rounded-lg w-[500px] m-auto p-12 shadow-lg">
            {isLogin ? (
                <form onSubmit={onLogin}>
                    <div className="flex flex-col gap-10">
                        <p className="font-bold text-[30px]">SIGN IN</p>
                        <div className="h-10 border-b border-gray-300 border-solid">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center h-10 border-b border-gray-300 border-solid">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {isShowPassword ? (
                                <span
                                    className="text-[24px] cursor-pointer"
                                    onClick={() => setIsShowPassword(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69a64.11 64.11 0 0 0 53.49 53.49a2 2 0 0 0 1.69-3.39m16-119.7L315.87 248a2 2 0 0 0 3.4-1.69a64.13 64.13 0 0 0-53.55-53.55a2 2 0 0 0-1.72 3.39"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79a4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05a96 96 0 0 1 116 116a4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24a343.81 343.81 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63a4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55a4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352"
                                        />
                                    </svg>
                                </span>
                            ) : (
                                <span
                                    className="text-[24px] cursor-pointer"
                                    onClick={() => setIsShowPassword(true)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                                        />
                                    </svg>
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#878787] text-white rounded-md h-[46px] hover:bg-orange-400"
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-10">
                        <p className="font-bold text-[30px]">SIGN UP</p>
                        <div className="h-10 border-b border-gray-300 border-solid">
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center h-10 border-b border-gray-300 border-solid">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {isShowPassword ? (
                                <span
                                    className="text-[24px] cursor-pointer"
                                    onClick={() => setIsShowPassword(false)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69a64.11 64.11 0 0 0 53.49 53.49a2 2 0 0 0 1.69-3.39m16-119.7L315.87 248a2 2 0 0 0 3.4-1.69a64.13 64.13 0 0 0-53.55-53.55a2 2 0 0 0-1.72 3.39"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79a4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05a96 96 0 0 1 116 116a4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24a343.81 343.81 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63a4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55a4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352"
                                        />
                                    </svg>
                                </span>
                            ) : (
                                <span
                                    className="text-[24px] cursor-pointer"
                                    onClick={() => setIsShowPassword(true)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                                        />
                                    </svg>
                                </span>
                            )}
                        </div>
                        <div className="h-10 border-b border-gray-300 border-solid">
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="w-full"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#878787] text-white rounded-md h-[46px] hover:bg-orange-400"
                        >
                            SIGN UP
                        </button>
                    </div>
                </form>
            )}
            <p className="mt-2">
                Have you registered?{" "}
                <span
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-bold text-orange-300 cursor-pointer hover:underline"
                >
                    {isLogin ? "Sign up" : "Sign in"}
                </span>
            </p>
        </div>
    );
};

export default Form;
