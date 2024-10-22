<template>
  <div v-show="modalActive" class="modal">
    <div class="innerModal">
      <slot></slot>
      <button class="closeButton" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalProps } from 'types/ModalProps';
const props = defineProps<ModalProps>(); 

const emit = defineEmits(['closeModal']); 

const closeModal = () => {
  emit('closeModal'); 
};
</script>

<style>
  .modal {
    width: 30vw;
    background-color: #8697c4;
    padding: 10px;
    margin: auto;
  }
  .innerModal {
    padding: 5px;
    color: aliceblue;
    line-height: 1.7rem;
  }
  .closeButton {
    margin-top:5%;
    background-color: white;
    padding: 10px 20px;
    color: navy;
    letter-spacing: 4px;
    border: none;
  }
</style>

<script lang="ts">
export default {
  name: 'Modal',
};
</script>
