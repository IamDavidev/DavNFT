import { useMemo, useState } from "react";

function useToggle(intialState = false) {
    const [isActice, setIsActice] = useState(intialState)

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

