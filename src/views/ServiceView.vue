<template>
  <HeaderSection />
  <Topheader />
  <AboutView />
  <CategoryView />
  <ProductView />
  <TeamView />
  <CallUsView />
</template>
<script>

import HeaderSection from '@/components/HeaderSection.vue';
import AboutView from './AboutView.vue';
import CallUsView from './CallUsView.vue';
import CategoryView from './CategoryView.vue';
import ProductView from './ProductView.vue';
import TeamView from './TeamView.vue';
import Topheader from './Topheader.vue';

export default {
  components:{
    HeaderSection,
    Topheader,
    AboutView,
    CategoryView,
    ProductView,
    TeamView,
    CallUsView
}
}
</script>

