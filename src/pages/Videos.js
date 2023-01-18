import Video from "./video"
import SocialLinks from "../SocialLinks"
import videoDataArr from "./videodata"

const Videos = () => {
    // console.log(videoDataArr);
    const videoElements = videoDataArr.map(video => {
        return <Video
            width="100%"
            height="100%"
            src={video.src}
            key={video.id}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            text={video.text} />

    })

    // console.log(videoElements);
    return (
        <div>
            {videoElements}
            <SocialLinks />
        </div>
    )
}

export default Videos