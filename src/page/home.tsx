import React, {useState} from 'react';
import '../assets/css/home.scss';
import Child1 from './example/example1';
import Child2 from './example/example2';
import Child3 from './example/example3';


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
     let [type, setType] = useState(1);

     function getDifTypeExample(type: number) {
         switch(type) {
            case 1 : 
                return <Child1 />;
            case 2 : 
                return <Child2 />;
            case 3 : 
                return <Child3 />;
            default:
                return '';
         }

     }
     return (
        <div id="home">
            <div>
                <button onClick={() => setType(1)}>useState</button>
                <button onClick={() => setType(2)}>useEffect</button>
                <button onClick={() => setType(3)}>useContext</button>
            </div>
            <div>
                {getDifTypeExample(type)}  
            </div>
           
        </div>
     )
 }


 export default Index;