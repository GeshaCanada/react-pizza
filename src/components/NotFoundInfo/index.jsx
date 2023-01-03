import React from 'react'
import S from './NotFoundInfo.module.scss' // S it is class style scss module

console.log(S)

const NotFoundBlock = () => {
    return (
        <div className={S.root}>
            <h1>
                <span>😕</span>
                <br />
                 Not found 404
            </h1>
            <p className={S.description}>
                Sorry, this information is unavailable right now. 
                <br />
                Please visit our home page.
                </p>
        </div>
    )
}
export default NotFoundBlock