import { useMemo, useState } from "react";


function useToggle(intialState) {
    const [value, setValue] = useState(intialState)

    const toggle = useMemo(() => ({
        on: () => setValue(true),
        off: () => setValue(false),
        toggle: () => setValue(!value),
        reset: () => setValue(intialState)
    }), [intialState])

    return [value, toggle]
}


export default useToggle;

