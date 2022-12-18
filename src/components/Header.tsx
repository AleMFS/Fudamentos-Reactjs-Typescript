import style from './Header.module.css'
import igniteLogo from '../assets/Ignite.svg'
export function Header() {
    return (
        <header className={style.header}>
            <img src={igniteLogo} alt="" />
            <strong>Ignite Feed</strong>
        </header>
    )
}