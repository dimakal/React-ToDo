import React from 'react'

interface ITitleProps {
    text: string
}

const Title = ({text}: ITitleProps) => {
    return (
        <div className="row bg-light rounded mb-2 shadow">
            <div className="col-12">
                <h1 className={'p-2 m-0'}> {text} </h1>
            </div>
        </div>
    )
};

export default Title