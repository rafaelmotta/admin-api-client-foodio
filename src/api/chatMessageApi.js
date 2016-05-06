let service = (Restangular, $rootScope) => {
  return new class chatMessageApi {

    // POST admin/companies/:company_id/stores/:store_id/chats/:chat_id/chat_messages
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
