import { useState, useEffect } from 'react'
import { getOpenSea } from '../services/getOpenSea'


function useOpenSea() {
    const [openSea, setOpenSea] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState()
    const [limit, setLimit] = useState(25)
    const [offset, setOffset] = useState(0)


    useEffect(() => {
        getOpenSea({ limit, offset }).then(res => setOpenSea(res))
    }, [limit, offset])

    return {
        openSea: openSea.data,
        openSeaStatus: openSea.status,
        sucess: openSea.success,
        loading,
        setLimit,
        err,
        setOffset,
    }

}

export default useOpenSea;