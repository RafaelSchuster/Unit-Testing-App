import React from 'react'

function Result(props) {
    return (
        <div className="bg-light text-dark border border-dark p-2">
            {props.result || 0}
        </div>
    )
}

export default Result
