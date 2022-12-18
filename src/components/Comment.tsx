import { ThumbsUp, Trash } from 'phosphor-react'
import { ReactNode, useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface props {
    comment: string
    onDeleteComment: (comment:string) => void
}

export function Comment({ comment, onDeleteComment }:props) {
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment() {
        onDeleteComment(comment);
    }

    function handleLikeComment() {
        setLikeCount(state => state + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/Lipao4p.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Geovane</strong>
                            <time title='13 de Dezembro às 11horas' dateTime='2022-12-13 11:00:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{comment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}