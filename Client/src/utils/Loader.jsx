const Loader = () => {
    return (

        <div className="flex justify-center items-center fixed z-[1000] left-0 top-0 w-full h-full overflow-auto backdrop-blur-sm bg-black bg-opacity-90">
            <span className="loading loading-bars loading-lg bg-white"></span>
        </div>
    )
}

export default Loader;
