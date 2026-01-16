<template>
  <div class="app-wrapper">
    <h1>Lazy Day</h1>
    
    <div class="food-container">
      <food-item/>
      <food-item/>
      <food-item/>
      <food-item/>
      <food-item/>
      <food-item/>
      
      <food-item2/>
      <food-item2/>
      <food-item2/>
      <food-item2/>
      <food-item2/>
      <food-item2/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .app-wrapper {
    font-family: 'Arial', sans-serif;
    text-align: center; 
    margin-top: 60px;
  }

  .food-container {
    max-width: 800px; 
    margin: 0 auto;  
    padding: 20px;
    background-color: #f0f0f0; 
    border-radius: 10px;
  }
</style>