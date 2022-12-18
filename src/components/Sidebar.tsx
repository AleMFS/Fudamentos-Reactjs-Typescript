import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://www.tqi.com.br/wp-content/uploads/2021/04/post-48-capa-blog.png' alt="" />

            <div className={styles.profile}>
                <Avatar  src='https://github.com/AleMFS.png' />
                <strong>Alexandre Matheus</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}