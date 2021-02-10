<template>
  <div>
    <div @click="categoryView = !categoryView" class="category-title">
      <b-icon v-show="categoryView" icon="chevron-down" class="mr-2"></b-icon>
      <b-icon v-show="!categoryView" icon="chevron-right" class="mr-2"></b-icon>
      {{ title }}
      <b-badge class="float-right" :variant="categoryVariant(categoryValues)">{{ categoryCount }}</b-badge>
    </div>
    <b-input-group>
      <b-form-checkbox-group v-show="categoryView" v-model="categoryValues" :options="categoryList" :name="title" @input="inputValue" class="text-dark" stacked></b-form-checkbox-group>
    </b-input-group>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'CategorySelector',
  props: {
    title: String,
    values: Array,
    expended: Boolean,
  },
  data() {
    return {
      categoryValues: [],
      categoryView: this.expended,
    };
  },
  computed: {
    categoryCount() {
      return this.categoryValues.length === 0 ? this.values.length : this.categoryValues.length;
    },
    categoryList() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.values.sort();
    },
  },
  watch: {
    values() {
      this.categoryValues = _.intersection(this.values, this.categoryValues);
      console.log(this.categoryValues);
    },
  },
  methods: {
    categoryVariant(setting) {
      return setting && setting.length > 0 ? 'info' : 'secondary';
    },
    inputValue() {
      this.$emit('update', { name: this.title, value: this.categoryValues });
    },
  },
};
</script>

<style scoped>
.category-title {
  background-color: #e7e7e7;
  border-top: 1px solid #cccccc;
  padding: 4px 12px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
}
</style>
