// import react from 'react'
import { useTranslation } from 'react-i18next';
import { TwitterTimelineEmbed ,} from 'react-twitter-embed'
const Explore = () => {

    const { t} = useTranslation();

    

    return (
        <div>
            <h1 className='font-bold text-4xl mb-10'>{t('Explore')}</h1>
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