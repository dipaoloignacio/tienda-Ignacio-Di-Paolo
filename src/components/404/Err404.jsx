import React from 'react'
import { Link } from 'react-router-dom'

function err404() {
    return (
        <section className='err'>
            <article className="err404">
                <div title="404" className='error'>404</div>
                <Link to={"/"} className='btn btn-danger'>Seguir comprando</Link>
            </article>
        </section>
    )
}

export default err404