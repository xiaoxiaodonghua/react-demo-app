import React, {createContext, useState} from 'react';
import Child from './child/example3-child';
export const ContextBox = createContext({
    value: 'xiaoxiaodong',
    age: 20,
});


function Index() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <div>我这里是怎么使用useContext</div>
            <div>这里是计数{count}</div>
            <button onClick={() => setCount(++count)}>点我加一哦</button>
            <ContextBox.Provider value={{value: 'xiaoxiaodong', age: 200}}>
                <Child />
            </ContextBox.Provider>
        </div>
    )
}

export default Index;