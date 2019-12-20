import React, {useEffect, useState} from 'react';


function Index() {
    // 1.useEffect， 第一个参数为函数， 第二个参数可以控制函数的副作用
    // 2.可以实现react 中的生命周期， 重点看一下useEffect3
    let [count, setCount] = useState(0)
    useEffect(() => {
        console.log('useEffect1,我是一个模仿DidMount的Effect 就只会执行一次');
    }, []);

    useEffect(() => {
        console.log('useEffect2,你的count又发生了变化, 我这个可是会一直变的');
    });

    useEffect(() => {
        console.log('useEffect3,这个是增加了销毁执行函数');
        return () => {
            console.log('useEffect3,你销毁了我,');
        }
    }, []);
    return (
        <div>
            <div>我这是要写useEffect的</div>
            <div>这是计数{count}</div>
            <button onClick={() => setCount(++count)}>点我可以加一哦</button>
        </div>
    )
}

export default Index;
