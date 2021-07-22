const Loader = ({ show }) => {
    return (
        (show) ?
            <div className="loader"></div>:<h1>Welcome!</h1>

    )
}
export default Loader;