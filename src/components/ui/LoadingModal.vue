<template>
    <transition name="fade">
      <div class="">
        <section class="section-container" >
          <div class="modal">
            <div class="modal-body">
              <div class="modal-image"></div>
              <div class="modal-info">
                <h3></h3>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  .section-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
  
    .modal {
      height: 90vh;
      width: 80%;
      max-width: 1200px;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      @media (max-width: $mobile2){
        height: 50vh;
        }
  
      .modal-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
  
        .modal-image,
        h3,
        p {
          background: #bcbcbc;
          background: linear-gradient(110deg, #bcbcbc 8%, #d5d5d5 18%, #bcbcbc 33%);
          border-radius: 5px;
          background-size: 200% 100%;
          @include shine;
        }
  
        .modal-image {
          flex: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        .modal-info {
          padding: 1.5rem;
          background: white;
          border-top: 1px solid #e0e0e0;
  
          h3 {
            height: 2rem;
            margin-bottom: 0.5rem;
          }
  
          p {
            height: 2rem;
          }
        }
      }
    }
  }
  </style>