import React, {useContext} from  'react';
import {ChildContext} from './home'

function index() {

    // let count = useContext(ChildContext)
    // console.log(count)
    return (
        <div>
            <span>我是子组件二</span>
            {/* <span>{count}</span> */}
        </div>
    )
}

export default index;