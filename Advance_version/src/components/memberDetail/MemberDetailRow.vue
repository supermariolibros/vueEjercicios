<template>
  <tr>
    <td :class="$style.column">
      <img :src="memberDetail.avatar_url" :class="$style.image">
    </td>
    <td :class="$style.column">
      <span>{{memberDetail.id}}</span>
    </td>
    <td :class="$style.column">
      <span>{{memberDetail.login}}</span>
    </td>
    <td :class="$style.column">
      <span>{{memberDetail.email}}</span>
    </td>
    <td :class="$style.column">
      <span>{{memberDetail.company}}</span>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { MemberDetail } from "../../model/member";

interface Props {
  memberDetail: PropOptions<MemberDetail>;
}

export default Vue.extend({
  name: "MemberDetailRow",
  props: {
    memberDetail: {}
  } as Props
});
</script>

<style module>
.image {
  max-width: 10rem;
}

.column {
  text-align: center;
}
</style>
