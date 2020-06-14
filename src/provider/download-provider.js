import React, { useState } from 'react'
import { View, Text } from 'react-native'
const DownLoadContext = React.createContext()


const DownloadProvider = (props) => {
    const [download, setDownload] = useState([])
    return (
        <DownLoadContext.Provider value={{ download, setDownload }}>
            {props.children}
        </DownLoadContext.Provider>
    )
}

export { DownloadProvider, DownLoadContext };