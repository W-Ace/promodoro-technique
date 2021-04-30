<template>
  <aside class="sidebar">
    <ul class="menu">
      <li
        class="menu-item"
        id="new-task"
        :class="{'active': isCurrentMenu('NewTask')}"
        @click="changeMenu('NewTask')"
      >
        <img
          class="img"
          :src="require(`@/assets/img/components/sidebar/add-${getColorOfMenuIcon('NewTask')}.svg`)"
          alt="new-task"
        >
      </li>
      <li
        class="menu-item"
        id="task-lists"
        :class="{'active': isCurrentMenu('TaskLists')}"
        @click="changeMenu('TaskLists')"
      >
        <img
          class="img"
          :src="require(`@/assets/img/components/sidebar/list-${getColorOfMenuIcon('TaskLists')}.svg`)"
          alt="task-lists"
        >
      </li>
      <li
        class="menu-item"
        id="analytics-report"
        :class="{'active': isCurrentMenu('AnalyticsReport')}"
        @click="changeMenu('AnalyticsReport')"
      >
        <img
          class="img"
          :src="require(`@/assets/img/components/sidebar/analytics-${getColorOfMenuIcon('AnalyticsReport')}.svg`)"
          alt="analytics-report"
        >
      </li>
      <li
        class="menu-item"
        id="ring-tone"
        :class="{'active': isCurrentMenu('RingTone')}"
        @click="changeMenu('RingTone')"
      >
        <img
          class="img"
          :src="require(`@/assets/img/components/sidebar/ringtone-${getColorOfMenuIcon('RingTone')}.svg`)"
          alt="ring-tone"
        >
      </li>
    </ul>
    <component :is="menuType" />
  </aside>
</template>
<script>
import * as R from 'ramda';
import { ref } from 'vue';
import NewTask from '@/components/Sidebar/NewTask';
import TaskLists from '@/components/Sidebar/TaskLists';
import AnalyticsReport from '@/components/Sidebar/AnalyticsReport';
import RingTone from '@/components/Sidebar/RingTone';

export default {
  components: {
    NewTask,
    TaskLists,
    AnalyticsReport,
    RingTone,
  },
  setup() {
    const defaultMenu = 'NewTask';
    const menuType = ref(defaultMenu);

    const changeMenu = ((menu) => (type) => {
      menu.value = type;
      return type;
    })(menuType);

    const isCurrentMenu = (type) => R.equals(menuType.value, type);

    const getMenuImgColor = (bool) => (bool ? 'red' : 'white');

    const getColorOfMenuIcon = R.pipe(
      isCurrentMenu,
      getMenuImgColor,
    );
    return {
      menuType,
      changeMenu,
      isCurrentMenu,
      getColorOfMenuIcon,
    };
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  display: flex;
  background: #333;
}

.menu {
  width: 82px;
}

.menu-item {
  cursor: pointer;

  .img {
    width: 100%;
    height: auto;
  }
}
</style>
