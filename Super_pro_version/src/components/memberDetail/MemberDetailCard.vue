<template>
  <div>
    <h2>Member Detail</h2>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <v-card color="cyan darken-2" class="white--text" width="100%">
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      :src="memberDetail.avatar_url"
                      height="125px"
                      contain
                    ></v-img>
                  </v-flex>
                  <v-flex xs7>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Miembro</div>
                        <div>{{memberDetail.login}}</div>
                        <div>Company: {{memberDetail.company}}</div>
                        <div>
                          <span>   Email:  {{memberDetail.email}} </span><br>
                          <span class="yellow--text">   ID:   </span>
                          <span>{{memberDetail.id}}</span><br>
                        </div>
                      </div>
                    </v-card-title>
                  </v-flex>
                </v-layout>
                <v-divider light></v-divider>
              </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { MemberDetail } from "../../model/member";
import { getTheMember } from "../../api/memberAPI";

interface Props {
  username: PropOptions<string>;
}

export default Vue.extend({
  name: "MemberDetailCard",
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

.image {
  max-width: 10rem;
}

</style>