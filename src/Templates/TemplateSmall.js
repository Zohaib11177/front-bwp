import React from 'react'

const TemplateSmall = (props) => {
    return (
        <div>
            {
                props.loading ?
                    <strong>Loading...</strong>
                    :
                    props.children
            }
        </div>
    )
}

export default TemplateSmall