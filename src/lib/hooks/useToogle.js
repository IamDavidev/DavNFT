import { useMemo, useState } from "react";


function useToggle(intialState = false) {
    const [isActice, setIsActice] = useState(intialState)

    // const toogleOn = () => {
    //     console.log("toogleOn")
    //     setValue(true)
    // }
    // const toogleOff = () => {
    //     console.log("toogleOff")
    //     setValue(false)
    // }
    // const toogle = () => {
    //     console.log("toogle")
    //     setValue(!value)
    // }
    // const toogleReset = () => {
    //     console.log("toogleReset")
    //     setValue(false)
    // }

    const toogle = useMemo(() => ({
        on: () => setIsActice(true),
        off: () => setIsActice(false),
        reset: () => setIsActice(false),
        toggle: () => setIsActice(!isActice),
    }), [intialState])


    return [
        isActice,
        toogle
    ]
}


export default useToggle;

