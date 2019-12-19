import React, {useState, useEffect, useMemo, createContext} from 'react';
import Child2 from './child2';

export const ChildContext = createContext({});

function Home() {
    let [count, setCount] = useState(0);

    
    useEffect(() => {
        console.log('喔喔喔喔奶糖')
    },[])

    function changeName() {
        console.log(233)
    }
    return (
        <div>
            我这才是首页我要开始尝试hooks
            <span>{count}</span><br />
            <button onClick={() => setCount(++count)}>点击我</button><br />
            <button onClick={() => changeName()}>点点我</button>
            <ChildContext.Provider value={count}>
                <Child2 />
            </ChildContext.Provider>
            <div>
                <Child name={count} />
            </div>
        </div>
    )
}

export default Home;

function Child(props: any) {
    let [name, setName] = useState('小小冬');

    

    function changeName() {
        console.log('我这是子组件的东西');
        return 333 + name;
    }
    const action = useMemo(() => changeName(), [name])

    return (
        <div>
            <span>{props.name}</span>
            <span onClick={() => setName('我改民资')}>{action}</span>
        </div>
    )

}