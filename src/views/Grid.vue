<template>
  <div class="grid">
    <div class="grid_cell1">
      <div class="cell1_item1"></div>
      <div class="cell1_item2"></div>
    </div>
    <div class="grid_cell2">
      <div class="cell2_item1"></div>
      <div class="cell2_item2"></div>
      <div class="cell2_item3"></div>
    </div>
    <div class="grid_cell3">
      <div class="cell3_item1"></div>
      <div class="cell3_item2"></div>
      <div class="cell3_item3"></div>
      <div class="cell3_item4"></div>
    </div>
    <div class="grid_cell4">
      <div class="cell4_item1"></div>
      <div class="cell4_item2"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.grid {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.grid_cell1,
.grid_cell2,
.grid_cell3,
.grid_cell4 {
  /* flex: 0; */
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.grid_cell1 {
  background-color: cadetblue;
}
.grid_cell2 {
  background-color: greenyellow;
}
.grid_cell3 {
  background-color: lightskyblue;
}
.grid_cell4 {
  width: 100%;
  height: 40%;
  background-color: chocolate;
}
.cell1_item1,
.cell1_item2 {
  width: 45%;
  height: 80%;
  background-color: darkgoldenrod;
}
.cell2_item1,
.cell2_item2,
.cell2_item3 {
  width: 28%;
  height: 80%;
  background-color: navajowhite;
}
.cell3_item1,
.cell3_item2,
.cell3_item3,
.cell3_item4 {
  width: 20%;
  height: 80%;
  background-color: yellow;
}
.cell4_item1,
.cell4_item2 {
  width: 45%;
  height: 80%;
  background-color: teal;
}
</style>