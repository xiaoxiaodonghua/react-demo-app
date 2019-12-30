import React, {createContext, useState, useCallback, useMemo} from 'react';
import Child from './child/example3-child';
import Child2 from './child/example3-2child';
export const ContextBox = createContext({
    value: 'xiaoxiaodong',
    age: 20,
});

// 1.useContext 包裹的子组件只要value值发生变化子组件都会发生变化
// 2.所有消费useContext 的子组件不管你使用任何方式都会更新

function Index() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState('小小东');
    const getChild = useMemo(() => {
        return <Child />
    }, [name])
    return (
        <div>
            <div>我这里是怎么使用useContext</div>
            <div>这里是计数{count}</div>
            <button onClick={() => setCount(++count)}>点我加一哦</button>
            <ContextBox.Provider value={{value: 'xiaoxiaodong', age: 200}}>
                {getChild}
                <Child2 />
            </ContextBox.Provider>
        </div>
    )
}

export default Index;