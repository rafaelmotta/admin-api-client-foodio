let service = (Restangular, $rootScope) => {
  return new class chatMessageApi {

    create(chat, chatMessage) {
      return Restangular
        .one('companies', $rootScope.company.id)
        .one('stores', $rootScope.currentStore.id)
        .one('chats', chat.id)
        .post('chat_messages', { chat_message: chatMessage });
    }
  }
};

service.$inject = ['Restangular', '$rootScope'];
angular.module('admin.api.client.foodio').factory('chatMessageApi', service);