import Link from "next/link";
export default function Custom404() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 ">
                <img className="absolute w-screen h-screen" src="https://cdn.svgator.com/images/2022/01/404-svg-animation.svg" alt="404 Animation" style={{ width: "100%", maxWidth: "100%" }} />
                <h1 className="absolute text-center text-white text-7xl bottom-[100px]">page not found</h1>
                <Link href="/" className="absolute  bottom-[25px] bg-white text-gray-800  px-6 py-2 rounded hover:bg-gray-200 transition">
                    Go Back To Home
                </Link>
            </div>
        </>
    );
}
