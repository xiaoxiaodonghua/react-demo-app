import React, {useContext, useState} from 'react';

function Index() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <div>我这里是怎么使用useContext</div>
            <div>这里是计数{count}</div>
            <button onClick={() => setCount(++count)}>点我加一哦</button>
        </div>
    )
}

export default Index;