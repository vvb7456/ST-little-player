<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

function onToggle(e: Event): void {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
}
</script>

<template>
  <label class="stmp-switch-row">
    <span v-if="label" class="stmp-switch-label">{{ label }}</span>
    <span class="stmp-switch">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="onToggle"
      />
      <span class="stmp-switch-track">
        <span class="stmp-switch-thumb" />
      </span>
    </span>
  </label>
</template>

<style scoped>
.stmp-switch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.stmp-switch-label {
  font-size: calc(var(--mainFontSize, 14px) * 0.85);
  color: var(--SmartThemeBodyColor, #ccc);
}

.stmp-switch {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}

.stmp-switch input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
  z-index: 1;
}

.stmp-switch-track {
  display: block;
  width: calc(var(--mainFontSize, 14px) * 2.4);
  height: calc(var(--mainFontSize, 14px) * 1.3);
  border-radius: calc(var(--mainFontSize, 14px) * 0.65);
  background-color: var(--black50a, rgba(0, 0, 0, 0.5));
  border: 1px solid var(--SmartThemeBorderColor, rgba(0, 0, 0, 0.5));
  transition: background-color var(--animation-duration, 0.2s) ease;
  position: relative;
}

.stmp-switch-thumb {
  position: absolute;
  top: 50%;
  left: 2px;
  width: calc(var(--mainFontSize, 14px) * 0.9);
  height: calc(var(--mainFontSize, 14px) * 0.9);
  border-radius: 50%;
  background-color: var(--SmartThemeBodyColor, #ccc);
  transform: translateY(-50%);
  transition: left var(--animation-duration, 0.2s) ease, background-color var(--animation-duration, 0.2s) ease;
}

.stmp-switch input:checked ~ .stmp-switch-track {
  background-color: var(--SmartThemeQuoteColor, #e18a24);
}

.stmp-switch input:checked ~ .stmp-switch-track .stmp-switch-thumb {
  left: calc(100% - calc(var(--mainFontSize, 14px) * 0.9) - 2px);
  background-color: var(--white50a, rgba(255, 255, 255, 0.5));
}

.stmp-switch input:focus-visible ~ .stmp-switch-track {
  outline: 2px solid var(--SmartThemeQuoteColor, #e18a24);
  outline-offset: 2px;
}
</style>
