
import { Route, Routes, /* useLocation  */ } from 'react-router-dom';
import LinkItem from '../../Atoms/LinkComponent/Link.component';
import Button from '../../Atoms/ButtonComponent/Button.component';
import Navigation from '../../molecules/NavigationComponent/Navigation.component';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const links = [
        { to: '/marketplace', label: 'Marketplace' },
        { to: '/articulos', label: 'Artículos' },
        { to: '/nuestro-proposito', label: 'Nuestro Propósito' },
    ];

    const handleLogin = () => {
        navigate('/login'); // Navega a la ruta de login
    };
    const handleConsultoria = () => {
        navigate('/consultoria'); // Navega a la ruta de login
    };

    return (
        <>

            <header className='flex justify-between items-center shadow-opacity30-black p-5 rounded-b-[30px] w-screen h-20 font-medium'>
                <Routes>
                    <Route path="*" element={
                        <Navigation links={links} ulClassName='flex gap-2 justify-end hidden sm:flex items-center' navClassName='flex justify-between  max-w-[950px] w-full items-center '>
                            <LinkItem label="Ecodesarrolladores" to="/" />
                        </Navigation>} />
                </Routes>
                <div className='flex justify-end gap-2 w-full max-w-[265px] md:max-w-[300px]'>
                    <Button variant="primary" label='Iniciar sesion' icon='login' className='sm:flex hidden' onClick={handleLogin} />
                    <Button variant="secondary" label='Consultoria' icon='users' onClick={handleConsultoria} />
                </div>
            </header>
        </>
    )
}

export default Header