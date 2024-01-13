import React from 'react';

// scss import
import styles from './Contact.module.scss';
import CommonLayout from '../../components/templates/CommonLayout';
import SectionTitle from '../../components/molecules/SectionTitle';

const Contact = () => {
    return (
        <CommonLayout id={5}>
            <SectionTitle
                id={1}
                title='ご連絡'
                subtitle='こちらのページでは私Kohtaの使用技術・また普段使用しているツールをご覧いただけます。'
            />
        </CommonLayout>
    );
};

export default Contact;
