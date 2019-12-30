import React, {useContext, memo} from 'react';

function Index() {
    console.log('子组件二');
    return (
        <div>
            我这里是exmple3的子组件
        </div>
    )
}

export default memo(Index);