import React, { useContext } from 'react';

const Child = () => {
    let counterValue = useContext()
    return(
        <div>
            <h2>This is Child</h2>
        </div>
    )

}
export default Child