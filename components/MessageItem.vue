<script lang="ts" setup>
import { Message } from "~~/stores/message";
import { useMessageStore } from "~~/stores/message";

const messageStore = useMessageStore();

const props = defineProps<{
  message: Message;
}>();
const parsedDate = computed(() =>
  new Intl.DateTimeFormat("fr-FR").format(new Date(props.message.createdAt))
);
const updateActive = () => {
  messageStore.updateAllActive();
  props.message.active = true;
};
</script>
<template>
  <a
    @click="updateActive()"
    class="list-group-item list-group-item-action"
    :class="{ active: message.active }"
  >
    <div class="media">
      <div class="media-body ml-4">
        <div class="d-flex align-items-center justify-content-between mb-1">
          <h6 class="mb-0">
            <img
              :src="message.picture"
              alt="user"
              width="12"
              class="rounded-circle"
            />
            {{ message.author }}
            <img
              v-if="message.status === 'OPEN'"
              src="assets/new-arrival.png"
              width="16"
            />
          </h6>
          <small class="small blue font-weight-bold">{{ parsedDate }}</small>
        </div>
        <p class="font-italic mb-0 text-small" id="truncateText">
          {{ message.content[message.content.length - 1].message }}
        </p>
      </div>
    </div>
  </a>
</template>
<style lang="scss">
#truncateText {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
