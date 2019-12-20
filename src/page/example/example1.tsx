import React, {useState} from 'react';

function Index() {
    // 1.useState 函数传值默认赋给第一个参数count， 第二个参数setCount用于修改count
    // 2.修改count的时候会触发整个函数重新执行， 可点击button看控制台
    let [count, setCount] = useState(0);
    console.log('你又修改计数了', count);
    return (
        <div>
            我这是要用useState
            <div>计数器{count}</div>
            <button onClick={() => setCount(++count)}>点我可以加一哦</button>
        </div>
    );
}

export default Index;


/**
 * const [state, setState] = useState(initialState);
 * Returns a stateful value, and a function to update it.
 * During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
 * The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
 * **/ 