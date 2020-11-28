import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { last } from 'lodash';

const getMessageIds = (pureMessages) => {
  const messageIds = Object.keys(pureMessages);
  return messageIds.map((key) => pureMessages[key].id);
};

const generateMessages = (intl, messageIds) => messageIds.reduce((acc, messageId) => {
  const shortId = last(messageId.split('-'));
  acc[shortId] = intl.formatMessage({
    id: messageId,
  });

  return acc;
}, {});

const withIntlMessages = (pureMessages) => (WrappedComponent) => {
  const IntlComponent = (props) => {
    const { intl } = props;

    const messageIds = getMessageIds(pureMessages);
    const generatedMessages = generateMessages(intl, messageIds);

    return (
      <WrappedComponent
        {...props}
        messages={generatedMessages}
      />
    );
  };

  IntlComponent.propTypes = {
    intl: PropTypes.object.isRequired,
  };

  return injectIntl(IntlComponent);
};

export default withIntlMessages;
