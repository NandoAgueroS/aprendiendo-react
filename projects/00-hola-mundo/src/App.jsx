import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react'

export function App () {
    const formatUserName = (userName) => `@${userName}`;
    /*
    otra opción:
    const formatedUserName = <span>@midudev</span>;
    */
    const [name, setName] = useState('midudev');
    //cuando cambia un elemento padre, todos los hijos se vuelven a renderizar independientemente de si cambiaron o no
    return (
        <>
            <section className="App">
                <TwitterFollowCard formatUserName= {formatUserName} initialIsFollowing= { true } userName={name}>
                    {/*lo que paso acá será el children, puede ser texto o elementos html, incluso otro componente, el componente recibe el children como parámetro*/}
                    Miguel Ángel Durán 1
                </TwitterFollowCard>
                <TwitterFollowCard formatUserName= {formatUserName} userName={name}>
                    Miguel Ángel Durán 2
                </TwitterFollowCard>
                {/*tambien puedo pasar un objeto, pero puede ser una mala práctica*
                const user = {
                    userName: 'midudev',
                    isFollowing: true,
                    name: 'Miguel Ángel Durán'
                }
                <TwitterFollowCard {... user}/>
                */}
                <button onClick={()=> setName('pedromichel')}>
                    Cambiar nombre
                </button>
            </section>
        </>
    )
}