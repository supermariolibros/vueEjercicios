<template>
  <div>
    <h2>Member Detail</h2>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <table :class="$style.table">
      <thead>
        <member-detail-header />
      </thead>
      <tbody>
       <member-detail-row :memberDetail="memberDetail"/>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import MemberDetailHeader from './MemberDetailHeader.vue';
import  MemberDetailRow from './MemberDetailRow.vue';
import { MemberDetail } from "../../model/member";
import { getTheMember } from "../../api/memberAPI";

interface Props {
  username: PropOptions<string>;
}

export default Vue.extend({
  name: "MemberDetailCard",
  components: { MemberDetailHeader, MemberDetailRow },
  props: {
    username: "",
  } as Props,
   data: () => ({
     loading: true as boolean,
     memberDetail: {} as MemberDetail,
  }),
  created() {
    getTheMember(this.username).then(memberDetail => {
        this.memberDetail = memberDetail;
        this.loading = false;
      }).catch(error => console.log(error));
  }
  
});
</script>

<style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>