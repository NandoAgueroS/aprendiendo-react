import { useState } from 'react'
//podría darle un valor por defecto a las props por si no se pasa el valor, como userName = 'unknown'
export function TwitterFollowCard ({children, formatUserName,initialIsFollowing, userName}) {
    /*const state = useState(false);
    const isFollowing = state[0]; //valor del estado
    const setIsFollowing = state[1]; //modificar el estado*/
    //no podría hacer el cambio de estado en un nivel superior ya que el estado se inicializa una vez
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); //le pasamos a useState el valor inicial
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    /*
        nunca modificar props:
            userName = `@{userName}`
        en su lugar, podria crear otra variable:
            const userNameModified = `@{userName}`
    */
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button isFollowing'
        : 'tw-followCard-button'
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}