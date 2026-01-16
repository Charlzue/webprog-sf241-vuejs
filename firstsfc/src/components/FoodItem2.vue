<template>
  <div class = "kopo">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Coffee and Takoyaki',
      message: 'Top Tier Combo'
    }
  }
};
</script>

<style>
  .kopi {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: #d39f4c;
  }
  </style>