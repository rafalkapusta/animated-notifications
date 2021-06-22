import style from './style.module.scss'

export const Notification = ({ title, content, type = 'secondary' }) => {
    return (
        <div className={style[type]}>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}
