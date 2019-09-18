import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(){
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRateClick = () => {
        
        this.setState(prevState => ({
            settings: {...prevState.settings,
            bitrate: 12}
        }))
        console.log(this.state)

    }

    handleResolutionClick = () => {
        
        this.setState(prevState => ({
            settings: {...prevState.settings, video: {resolution: '720p'}}
        }))
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <button className="bitrate"onClick={this.handleBitRateClick}>Change bitrate</button>
                <button className="resolution"onClick={this.handleResolutionClick}>Change resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger
