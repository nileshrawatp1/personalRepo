import React from 'react';

const JsxConst = () => {
    // ! ==== = Working with Defaults = ====
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Jsx Nilesh</h1>
    //     </div>
    // )
    // ! ==== = Better Approch = ====
    return React.createElement(
        'div',
        { id: 'dummyId', className: 'dummyClass' },
        React.createElement(
            'h1',
            { id: 'hello', className: 'classHello' },
            'Hello Nilesh Better'
        )
    )
}

export default JsxConst