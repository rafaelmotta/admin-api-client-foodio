let service = (Restangular, ApiBase) => {
  return new class chatMessageApi extends ApiBase {

    create(chat, chatMessage) {
      return Restangular
        .one('companies', this.company.id)
        .one('stores', this.store.id)
        .one('chats', chat.id)
        .post('chat_messages', { chat_message: chatMessage });
    }
  }
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('foodbox.admin.api').factory('chatMessageApi', service);