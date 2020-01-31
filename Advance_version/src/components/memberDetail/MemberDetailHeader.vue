<template>
  <tr>
    <th :class="$style.column">Avatar</th>
    <th :class="$style.column">Id</th>
    <th :class="$style.column">Name</th>
    <th :class="$style.column">Email</th>
    <th :class="$style.column">Company</th>
    
  </tr>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MemberDetailHeader"
});
</script>


<style module>
.column {
  width: 20%;
}
</style>
