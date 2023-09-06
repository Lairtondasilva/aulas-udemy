import { useEffect, useRef} from "react";

export function useInterval(fn, delay){

    const savedCallback = useRef(null);
    
    useEffect(()=>{
        savedCallback.current = fn;
    }, [fn])

    useEffect(()=>{

        function tick (){
            savedCallback.current()
        }

        if(delay !== null){
            const id = setInterval(tick, delay);

            return ()=> clearInterval(id);
        }

    }, [delay])
}