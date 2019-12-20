import React from 'react';
import Child1 from './example/example1';

/**
 * Basic Hooks
 *  useState
 *  useEffect
 *  useContent
 * 
 * Additional Hooks
 *  useReducer
 *  useCallback
 *  useMemo
 *  useRef
 *  useImperativeHandle
 *  useLayoutEffect
 *  useDebugValue
 * **/ 


 function Index() {
     return (
        <div>
            <span>我要测试React Hooks Api</span>
            <Child1 />
        </div>
     )
 }


 export default Index;