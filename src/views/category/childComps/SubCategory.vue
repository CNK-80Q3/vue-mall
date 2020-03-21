<template>
  <div class="subcategory-content">
    <GridView>
      <GridItem slot="item" v-for="item in subCategoryList" :item="item" />
    </GridView>
  </div>
</template>

<script>

import GridView from "components/common/grid/GridView"
import GridItem from "components/common/grid/GridItem"

import { getCategory, getSubCategory } from "network/category"

export default {
  name: "SubCategory",
  components: {
    GridView,
    GridItem
  },
  props: {
    subCategoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {

  },
  methods: {

  },
  created() {

  }
}
</script>

<style scoped>
.subcategory-content {
  width: 100%;
}
</style>