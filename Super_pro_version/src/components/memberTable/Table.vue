<template>
  <div>
    <h2>Member Page</h2>
    <v-btn @click="loadMembers">Load</v-btn>
    <v-btn @click="clearaMembers">Clear</v-btn>
    <v-text-field 
    label="organization" 
    v-model="organization" />
    <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        />
    <v-data-table
    :headers="headers"
    :items="members"
    :search="search" >
    <template v-slot:items="props">
      <router-link tag="tr" :to="`members/${props.item.login}`">
      <td>
        <v-img :src="props.item.avatar_url" :class="$style.image"/>
      </td>
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.login }}</td>
      </router-link>
    </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  data(){
    return{
    search: '' as string,
    headers:  [
        {
          text: 'Avatar',
          align: 'left',
          sortable: false,
          value: 'avatar_url',
        },
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'login' },
      ],
    members: [] as Member[],
    organization: "lemoncode",
   
  };
  },
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization).then(members => {
        this.members = members;
      });
      
    },
    clearaMembers: function() {
      this.members = [] as Member[];
    },
	}
  });
</script>

<style module>
.image {
  max-width: 10rem;
}
</style>

