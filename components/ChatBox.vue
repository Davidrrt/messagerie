<script lang="ts" setup>
defineProps<{
  items: any;
}>();

const parsedDate = (date: string) =>
  computed(() => new Intl.DateTimeFormat("fr-FR").format(new Date(date)));
</script>
<template>
  <div v-if="items.length > 0">
    <div v-for="item in items">
      <div v-if="item.userId === '123456'" class="media w-50 mb-3">
        <div class="media-body ml-3">
          <div class="white-bg rounded py-2 px-3 mb-2">
            <p class="text-small mb-0 text-muted">
              {{ item.message }}
            </p>
          </div>
          <p class="small text-muted ml-2">
            <img
              src="assets/google.png"
              alt="user"
              width="12"
              class="rounded-circle"
            />
            {{ parsedDate(item.createdAt) }}
          </p>
        </div>
      </div>

      <!-- Reciever Message-->
      <div v-if="item.userId === '123457'" class="media w-50 ml-auto mb-3">
        <div class="media-body">
          <div class="bg-primary rounded py-2 px-3 mb-2">
            <p class="text-small mb-0 text-white">
              {{ item.message }}
            </p>
          </div>
          <p class="small text-muted">{{ parsedDate(item.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
