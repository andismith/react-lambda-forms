import React from 'react';

import config from './../../../../shared/config/contact';

import FormContainer from './../../containers/FormContainer/FormContainer';

const ContactPage = () => <FormContainer {...config} />;

ContactPage.displayName = 'ContactPage';

export default ContactPage;
