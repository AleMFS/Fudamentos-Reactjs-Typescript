import styles from './Avatar.module.css'

interface props{
    src: string
    hasBorder?: boolean
}

export function Avatar({ src, hasBorder = true }:props) {


    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar }
            src={src}
        />
    )
}