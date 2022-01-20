<template>
  <div class="form">
    <div class="form__row">
      <input type="text" placeholder="Vaše ime" />
      <input type="text" placeholder="Email adresa" />
    </div>

    <div>
      <input class="full-width" type="text" placeholder="Naslov" />
    </div>

    <div>
      <textarea
        class="full-width"
        cols="30"
        rows="6"
        placeholder="Poruka"
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$primary-100: #aac7d4de;
$primary-300: #6b9db4;
$primary-900: #2b4755;
$secondary-100: #e2e2e2;

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__row {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    @media only screen and (max-width: 1292px) {
      flex-direction: column;
      gap: inherit;
    }
  }
}

input {
  height: 46px;
  border: 1px solid $secondary-100;
  border-radius: 4px;
  padding: 0 12px;
  color: $primary-900;

  &:focus {
    outline: none !important;
    border-color: $primary-300;
    box-shadow: 0 0 10px $primary-100;
  }

  @media only screen and (max-width: 936px) {
    width: 100%;
  }
}

textarea {
  padding: 8px 12px;
  resize: none;
  border: 1px solid $secondary-100;
  border-radius: 4px;
  color: $primary-900;

  &:focus {
    outline: none !important;
    border-color: $primary-300;
    box-shadow: 0 0 10px $primary-100;
  }
}

.full-width {
  width: 100%;
}
</style>
