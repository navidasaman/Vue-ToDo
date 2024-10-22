<template>
  <div class="about">
    <h1>about.</h1>
    <p>
      This Vue app was created with the purpose of experimenting with the Composition API 
      in relation to a previous application made with the Options API.
    </p>
    <button class="toggleModalButton" @click="toggleModal">
      {{ modalActive ? 'Close Modal' : 'Open Modal' }}
    </button>
    <Transition name="modalTransition">
      <Modal
        v-if="modalActive"
        :modalActive="modalActive"
        @closeModal="toggleModal"
      >
        <h1>Reusable Components</h1>
        <p>Reusable Components are very useful as they can be altered 
          from within other components using 'slot'. This is a reusable
          component called Modal.
        </p>
      </Modal>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const modalActive = ref(false);

const toggleModal = (): void => {
  modalActive.value = !modalActive.value;
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.about {
  position: relative;
  padding: 50px;
  color: #3D52A0;
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  margin-top: 50px;
  box-shadow: 1px 2px 2px grey;
}

@media screen and (max-width: 800px) {
  .about {
    width: 100vw;
    max-width: 80%;
  }  
}

.toggleModalButton {
  background-color: #3D52A0;
  color: white; 
  padding: 10px 20px;
  cursor: pointer; 
  letter-spacing: 4px;
  border: none;
}

.modalTransition-enter-active,
.modalTransition-leave-active {
  transition: opacity 1s ease;
}

.modalTransition-enter-from,
.modalTransition-leave-to {
  opacity: 0;
}
</style>