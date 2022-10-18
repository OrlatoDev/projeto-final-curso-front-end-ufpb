import React from 'react';

class CustomImageProps {
    src: string;
    width?: string | number;
    height?: string | number;

    constructor(props: CustomImageProps) {
        this.src = props.src;

        if (props.width) this.width = props.width + 'vw';
        if (props.height) this.height = props.height + 'vw';
    }
}

function CustomImage(props: CustomImageProps) {
    const customImageProps = new CustomImageProps(props);

    if (customImageProps.width && !customImageProps.height)
        return <img className="image" src={customImageProps.src} style={{ width: customImageProps.width }} />;
    else if (!customImageProps.width && customImageProps.height)
        return <img className="image" src={customImageProps.src} style={{ height: customImageProps.height }} />;
    else if (customImageProps.width && customImageProps.height)
        return <img className="image" src={customImageProps.src} style={{ width: customImageProps.width, height: customImageProps.height }} />;
    else {
        return <img className="image" src={customImageProps.src} />;
    }
}

export default CustomImage;
