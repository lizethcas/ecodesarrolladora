
import { Link } from 'react-router-dom';
import Button from '../../Atoms/ButtonComponent/Button.component';

const HeaderOrganism = () => {


    return (
        <>
            <header className='flex justify-between items-center shadow-opacity30-black p-5 rounded-b-[30px] w-screen h-20 font-medium'>
                <div className='flex items-center w-full justify-between gap-2'>
                    <nav className='w-full'>
                        <ul className='flex justify-between'>
                            <li className=''><Link to="/">Ecodesarrolladores.com</Link></li>
                            <div className='flex justify-end gap-2'>
                                <li><Link to="marketplace">Marketplace</Link></li>
                                <li><Link to="articulos">Artículos</Link></li>
                                <li><Link to="nuestro-proposito">Nuestro Propósito</Link></li>
                            </div>

                        </ul>
                    </nav>
                    <div className='flex justify-end gap-1 w-[30%]'>
                        <Button variant="primary" label='Iniciar sesion' />
                        <Button variant="primary" label='Iniciar sesion' />
                    </div>
                </div>


            </header></>
    )
}

export default HeaderOrganism