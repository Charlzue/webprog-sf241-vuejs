<template>
  <div class="netflix"> 
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Netflix and Chill',
      message: 'a.k.a. Bebetime'
    }
  }
};
</script>

<style>
  .netflix {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: #FF0000;
  }
  </style>