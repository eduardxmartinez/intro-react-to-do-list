import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={1}
        width={800}
        height={400}
        viewBox="0 0 800 400"
        backgroundColor="#919191"
        foregroundColor="#ecebeb"
        {...props}
    >
        
        <rect x="25" y="30" rx="5" ry="5" width="774" height="30" />
        <rect x="25" y="90" rx="5" ry="5" width="774" height="30" />
        <rect x="25" y="150" rx="5" ry="5" width="774" height="30" />
        <rect x="25" y="210" rx="5" ry="5" width="774" height="30" />
        <rect x="25" y="270" rx="5" ry="5" width="774" height="30" />
    </ContentLoader>
)

export {MyLoader}