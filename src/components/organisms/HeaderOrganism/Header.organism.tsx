
import { Route, Routes, /* useLocation  */ } from 'react-router-dom';
import LinkItem from '../../Atoms/LinkComponent/Link.component';
import Button from '../../Atoms/ButtonComponent/Button.component';
import Navigation from '../../molecules/NavigationComponent/Navigation.component';
import { useNavigate, useLocation } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();
    const links = [
        { to: '/marketplace', label: 'Marketplace' },
        { to: '/articulos', label: 'Artículos' },
        { to: '/nuestro-proposito', label: 'Nuestro Propósito' },
    ];

    const location = useLocation();

    const isLoginPage = location.pathname === '/login';
    const handleLogin = () => {
        navigate('/login');
    };
    const handleConsultoria = () => {
        navigate('/consultoria');
    };

    return (
        <>

            <header className='flex justify-between items-center shadow-opacity30-black p-5 rounded-b-[30px] w-screen h-20 font-medium'>
                <Routes>
                    <Route path="*" element={
                        <Navigation links={links} ulClassName='flex gap-1 justify-end hidden md:flex items-center' navClassName={`flex  justify-between  w-full  items-center flex-grow ${isLoginPage ? 'max-w-[90%]' : 'md:max-w-[76%]'}`}>
                            <LinkItem label="Ecodesarrolladores" to="/" />
                        </Navigation>} />
                </Routes>
                <div className={`flex  justify-end gap-2  ${isLoginPage ? 'md:max-w-[155px] w-full' : 'md:max-w-[288px] w-[64%]'}`}>
                    {/* Renderiza botones u otros elementos aquí */}
                    {!isLoginPage && (
                        <Button
                            variant="primary"
                            label="Iniciar sesión"
                            icon="login"
                            className="md:flex hidden"
                            onClick={handleLogin}
                        />
                    )}
                    <Button
                       
                        variant="secondary"
                        label="Consultoria"
                        icon="users"
                        onClick={handleConsultoria}
                    />
                </div>
            </header >
        </>
    )
}

export default Header