<template>
  <div class="input-field-wrapper">
    <input
      :class="['input-field__input', { 'input-field__input--focused': isFocused }]"
      type="text"
      v-model="search"
      ref="input"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <div
      @click="clickPlaceholder"
      :class="[
        'input-field__placeholder',
        { 'input-field__placeholder--focused': floatOn },
      ]"
    >
      Search keyword
    </div>
    <div class="input-field__icon">
      <img src="@/assets/images/icons/search.svg" alt="icon" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isFocused = ref(false);
const search = ref("");
const floatOn = computed(() => {
  return isFocused.value || search.value.length > 0;
});
</script>

<style lang="scss" scoped>
.input-field-wrapper {
  position: relative;
  padding-top: 10px;
  height: 90px;

  font-family: "Albert Sans", sans-serif;
  font-size: 25px;
  line-height: 30px;
  font-weight: 400;
}

.input-field__input {
  width: calc(100% - 20px);
  height: 100%;
  padding: 29px 13px;
  border: 1px solid #bcbcbc;
  border-radius: 12px;
  outline: none;
}

.input-field__input--focused {
  border: 2px solid #3b3b3b;
}

.input-field__placeholder {
  position: absolute;
  left: 12px;
  top: 42px;
  padding: 0 6px;
  background: #fff;
  transition: all 0.3s;
  line-height: 12px;
  color: #999999;
}

.input-field__placeholder--focused {
  top: 16px;
  font-size: 12px;
  left: 7px;
}

.input-field__icon {
  position: absolute;
  right: 32px;
  top: 22px;
  padding: 0 6px;
  background: #fff;
  transition: all 0.3s;
  line-height: 12px;
}
</style>
