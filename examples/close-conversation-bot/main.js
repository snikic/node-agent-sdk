'use strict';

/*
 * This demo extends CloseConversationBot with the specific logic:
 *
 * 1) Echo any new message from the consumer
 * 2) Close the conversation if the consumer message starts with '#close'
 *
 */

const CloseConversationBot = require('./close-conversation-bot');

const qaConf = {
    accountId: 'le45999744',
    username: 'bulkClose',
    password: '***',
    csdsDomain: 'hc1n.dev.lprnd.net'
};
const alphaConf = {
    accountId: '32950771',
    username: 'sasatest',
    password: '***',
    csdsDomain: 'api.liveperson.net'
};

const echoAgent = new CloseConversationBot(alphaConf);
