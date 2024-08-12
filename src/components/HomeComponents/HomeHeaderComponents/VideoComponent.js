import React from 'react'

const VideoComponent = () => {
    return (
        <div className=' max-w-[50vw]'>
            <video width="800" height="440"  autoPlay  controls preload="none">
                <source src="/video.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoComponent