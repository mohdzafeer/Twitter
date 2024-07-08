import { useTranslation } from "react-i18next";

const Notification = () => {

    const { t } = useTranslation();

    return (
        <div className='text-4xl text-gray-500 font-bold font-sans'>{t('No new Notifications')}</div>
    )
}
export default Notification