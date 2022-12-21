<script lang="ts" setup>
import MessageList from "~~/components/MessageList.vue";
import ChatBox from "~~/components/ChatBox.vue";
import { useMessageStore } from "~~/stores/message";

const messageStore = useMessageStore();

await useAsyncData("messages", async () => {
  return messageStore.allMessage();
});

const selected = ref("all");

const addMessage = async (idActive: string, testMes: boolean) => {
  await messageStore.messageOne(idActive, testMes);
};
let listMessageDefault = messageStore.getSortedMessages.reverse();

watch(selected, (value: string) => {
  if (value === "all") {
    listMessageDefault = messageStore.getSortedMessages.reverse();
  } else {
    listMessageDefault = messageStore.getFilterMessages(value);
  }
});
</script>

<template>
  <div class="row rounded-lg overflow-hidden">
    <!-- Users box-->
    <div class="col-3 px-0">
      <div class="bg-white">
        <div class="row mt-2 mb-2">
          <div class="col-12">
            <button type="button" class="btn btn-primary btn-send">
              <img src="assets/Icon.png" width="12" height="12" /> Send a new
              Message
            </button>
            <img src="assets/Search.png" width="18" height="18" />
          </div>
        </div>
        <div class="row mt-2 mb-2">
          <div class="col-9">
            <select
              v-model="selected"
              class="form-select form-select-lg select-custom"
              aria-label=".form-select-lg example"
            >
              <option value="all">Tous les messages</option>
              <option value="ARCHIVED">messages archivés</option>
              <option value="OPEN">messages envoyés</option>
            </select>
          </div>
          <div class="col-3 pt-2">
            <img class="mr-2" src="assets/mail.png" width="20" height="18" />
            <img src="assets/Trash.png" width="18" height="18" />
          </div>
        </div>
        <div class="messages-box">
          <div class="list-group">
            <MessageList :items="listMessageDefault" />
          </div>
        </div>
      </div>
    </div>
    <!-- Chat Box-->
    <div class="col-9 px-0">
      <div v-if="messageStore.getMessageActive" class="row ml-4 mb-4">
        <h4 class="text-chat">{{ messageStore.getMessageActive?.author }}</h4>
        <img class="ml-4 mr-4" src="assets/File.png" width="16" height="20" />
        <img class="mr-4" src="assets/mail.png" width="20" height="18" />
        <img src="assets/Trash.png" width="18" height="18" />
      </div>
      <div v-if="messageStore.getMessageActive">
        <div class="px-4 py-5 chat-box mail-content">
          <ChatBox :items="messageStore.getMessageActive?.content" />
        </div>
        <div class="row ml-4 mt-3 mb-2">
          <button
            type="button"
            @click="addMessage(messageStore.getMessageActive?._id, true)"
            class="btn btn-primary btn-send-two"
          >
            1- Message client
          </button>
        </div>
        <div class="row ml-4 mb-4">
          <button
            type="button"
            @click="addMessage(messageStore.getMessageActive?._id, false)"
            class="btn btn-primary btn-send-two"
          >
            2- Réponse de l'utilisateur
          </button>
        </div>
      </div>
      <div
        v-if="!messageStore.getMessageActive"
        class="px-4 py-5 chat-box mail-content no-mail"
      >
        <h4 class="text-center">"Sélectionner un message!"</h4>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
body {
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 5px;
}

.blue {
  color: #0047ff;
}

::-webkit-scrollbar-track {
  width: 5px;
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  width: 1em;
  background-color: #ddd;
  outline: 1px solid slategrey;
  border-radius: 1rem;
}

.text-small {
  font-size: 0.9rem;
}

.messages-box,
.chat-box {
  height: 410px;
  overflow-y: scroll;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-chat {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #00307b;
}

.no-mail {
  margin-top: 62px;
  overflow: hidden;
}

.btn-send {
  background: #0047ff;
  border-radius: 10px;
  padding: 8px 50px;
  margin-right: 9px;
}

.btn-send-two {
  background: #0047ff;
  border-radius: 10px;
}

.bg-primary {
  background-color: #0047ff !important;
}

input::placeholder {
  font-size: 0.9rem;
  color: #999;
}

.select-custom {
  width: inherit;
  background: #f4f8ff;
  border-color: #f4f8ff;
  border-radius: 8px;
  padding: 10px 16px;
}

.mail-content {
  background-color: #f4f8ff !important;
  border-radius: 10px;
  margin-left: 20px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #0047ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.white-bg {
  background: #ffffff;
}

.text-muted {
  color: #00307b !important;
}

.list-group-item {
  background-color: #fff;
  border: none;
}

.list-group-item.active {
  z-index: 2;
  color: #5978a9 !important;
  background-color: #f4f8ff;
  border-color: #f4f8ff;
  border-radius: 10px !important;
}
.list-group {
  padding-right: 9px;
}
</style>
