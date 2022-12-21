<script lang="ts" setup>
import MessageItem from "~~/components/MessageItem.vue";

defineProps<{
  items: any;
}>();
</script>

<template>
  <div v-if="items.length > 0">
    <MessageItem v-for="item in items" :key="item?._id" :message="item" />
  </div>
</template>
