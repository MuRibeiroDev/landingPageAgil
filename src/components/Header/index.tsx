import logo from '../../assets/logoAgil.svg';
import ButtonHeader from './components/ButtonHeader';
import './style.css';

export default function Header() {
  return (
    <div className='headerContainer'>
        <div className='header'>
            <div className='imgLogo'>
                <img src={logo} alt="logoAgil" />
            </div>

            <div className='containerButtonsHeader'>
              <ButtonHeader name='Sobre Nós' />
              <ButtonHeader name='Diferenciais' />
              <ButtonHeader name='Faça sua cotação' />
            </div>
        </div>
    </div>
  )
}
