import react from 'react'
import {TwitterHashtagButton, TwitterTimelineEmbed ,} from 'react-twitter-embed'
const Explore = () => {

    return (
        <div>
            <h1 className='font-bold text-4xl mb-10'>Explore</h1>
            <TwitterTimelineEmbed
                screenName='anime'
                sourceType='profile'
                options={{ heigth: 400 }}
            />
            <TwitterTimelineEmbed
                screenName='google'
                sourceType='profile'
                options={{ heigth: 400 }}
            />
            <TwitterTimelineEmbed
                screenName='nasa'
                sourceType='profile'
                options={{ heigth: 400 }}
            />



        </div>
    )
}
export default Explore