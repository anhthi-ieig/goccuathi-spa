import React from 'react';
import { useIntl } from 'react-intl';
import { last } from 'lodash';

const getMessageIds = (pureMessages) => {
  const messages = Object.values(pureMessages);
  return messages.map((message) => message.id);
};

const generateMessages = (intl, messageIds) => messageIds.reduce((acc, messageId) => {
  const shortId = last(messageId.split('_'));
  acc[shortId] = intl.formatMessage({
    id: messageId,
  });

  return acc;
}, {});

const withIntlMessages = (pureMessages) => (WrappedComponent) => {
  const IntlComponent = (props) => {
    const intl = useIntl();
    const messageIds = getMessageIds(pureMessages);
    const generatedMessages = generateMessages(intl, messageIds);

    return (
      <WrappedComponent
        {...props}
        messages={generatedMessages}
      />
    );
  };

  return IntlComponent;
};

export default withIntlMessages;
