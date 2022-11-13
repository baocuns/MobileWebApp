import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import i18n from '../i18n';

function changeLanguage(OriginalComponent) {
    function NewComponent() {
        const [loadTranslate, setLoadTranslate] = useState(false);

        const language = useSelector(state => state.user.language);
        useEffect(() => {
            setLoadTranslate(true);
            i18n.changeLanguage(language);
        }, [language, loadTranslate])
        return <OriginalComponent />
    }
    return NewComponent;
}

export default changeLanguage;