const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center mt-4'>
            { children }
        </div>
    );
}

export default Layout;