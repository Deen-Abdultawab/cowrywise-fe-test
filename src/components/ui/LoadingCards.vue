<template>
  <section class="image-card">
        <div class="image-card__container">
        </div>
        <div class="image-card__info">
            <h3></h3>
            <p></p>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.image-card {
  min-height: 20rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: end;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    @include shine;
  }

  &__info {
    z-index: 999;
    position: relative;
    color: whitesmoke;
    font-family: $font-stack;
    width: 100%;
    margin-bottom: 1rem;

    h3,
    p {
      background: linear-gradient(110deg, #bcbcbc 8%, #d5d5d5 18%, #bcbcbc 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      @include shine;
    }

    h3 {
      height: 2rem;
      margin-bottom: 0.5rem;
    }

    p {
      height: 2rem;
    }
  }
}


</style>