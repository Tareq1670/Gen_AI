
import Navbar from '@/Components/Navbar';

const MainLayout = ({children}) => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;