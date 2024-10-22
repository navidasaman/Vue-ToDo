<template>
  <div class="modal" v-if="modalActive">
    <div class="innerModal">
      <slot></slot>
      <button class="closeButton" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalProps } from '@/types/ModalProps';

defineProps<ModalProps>(); 
const emit = defineEmits(['closeModal']); 

const closeModal = (): void => {
  emit('closeModal'); 
};
</script>

<style>
  .modal {
    width: 30vw;
    background-color: #8697c4;
    position: fixed; 
    top:35%;
    left: 50%;
    transform: translate(-50%, -50%); 
    padding: 20px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue;
    border-radius: 10px;
    box-shadow: 1px 2px 2px grey;
    border: 1px solid whitesmoke;

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
  @media screen and (max-width: 800px) {
  .modal {
    width: 90%;
  } 
}
</style>