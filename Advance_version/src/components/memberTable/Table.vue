<template>
  <div>
    <h2>Member Page</h2>
    <v-btn @click="loadMembers">Load</v-btn>
    <v-btn @click="clearaMembers">Clear</v-btn>
    <v-text-field 
    label="organization" 
    v-model="organization" />
    <table :class="$style.table">
      <thead>
        <member-head/>
      </thead>
      <tbody>
        <template v-for="member in displayedPosts">
          <member-row :key="member.id" :member="member"/>
        </template>
      </tbody>
    </table>
    <nav aria-label="Page navigation">
			<ul class="pagination">
					<v-btn type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </v-btn>
					<v-btn type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </v-btn>
					<v-btn type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </v-btn>
			</ul>
		</nav>
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
  components: { MemberHead, MemberRow },
  data: () => ({
    members: [] as Member[],
    organization: "lemoncode",
    page: 1,
		perPage: 4,
		pages: [] as number[],
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization).then(members => {
        this.members = members;
        this.page =1;
        this.setPages()
      });
      
    },
    clearaMembers: function() {
      this.members = [] as Member[];
    },
    setPages: function() {
      this.pages =[] as number[];
			let numberOfPages = Math.ceil(this.members.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate: function(members) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  members.slice(from, to);
		}
	},
	computed: {
		displayedPosts () {
			return (this as any).paginate(this.members);
		}
	},
	watch: {
		posts () {
			this.setPages();
		}
  },
  filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
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
