import React, {useContext} from 'react';
import {ContextBox} from '../example3';

function Index() {
    const value = useContext(ContextBox);
    console.log(value);
    return (
        <div>
            我这里是exmple3的子组件
        </div>
    )
}

export default Index;