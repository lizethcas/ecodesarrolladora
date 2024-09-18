import { useNavigate, useLocation } from 'react-router-dom';
import LinkItem from '../../Atoms/LinkComponent/Link.component';
import Button from '../../Atoms/ButtonComponent/Button.component';
import Navigation from '../../molecules/NavigationComponent/Navigation.component';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        { to: '/marketplace', label: 'Marketplace' },
        { to: '/articulos', label: 'Artículos' },
        { to: '/nuestro-proposito', label: 'Nuestro Propósito' },
    ];

    const isLoginPage = location.pathname === '/login';

    const handleLogin = () => {
        navigate('/login');
    };

    const handleConsultoria = () => {
        navigate('/consultoria');
    };

    return (
        <header className='flex justify-between items-center shadow-opacity30-black p-5 rounded-b-[30px] w-screen h-20 font-medium'>
            <Navigation
                links={links}
                ulClassName='flex gap-3 justify-end hidden md:flex items-center'
                navClassName={`flex justify-between w-full items-center flex-grow ${isLoginPage ? 'max-w-[90%]' : 'md:max-w-[76%]'}`}
            >
                <LinkItem label="Ecodesarrolladores" to="/" />
            </Navigation>
            <div className={`flex justify-end gap-2 ${isLoginPage ? 'md:max-w-[155px] w-full' : 'md:max-w-[288px] w-[64%]'}`}>
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
        </header>
    );
};

export default Header;
