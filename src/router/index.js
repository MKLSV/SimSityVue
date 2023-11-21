import { createRouter, createWebHistory } from 'vue-router'
import SheduleView from '../views/SheduleView.vue'
import SessionsView from '../views/SessionsView.vue'
import RoomListView from '../views/RoomListView.vue'
import UsersListView from '../views/UsersListView.vue'
import StudyGroupsView from '../views/StudyGroupsView.vue'
import DeviceListView from '../views/DeviceListView.vue'
import SettingsView from '../views/SettingsView.vue'
import ArchiveView from '../views/ArchiveView.vue'




const routerOptions = {

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: SheduleView
    },
    {
      path: '/sessions',
      component: SessionsView
    },
    {
      path: '/rooms-list',
      component: RoomListView
    },
    {
      path: '/users-list',
      component: UsersListView
    },
    {
      path: '/study-groups',
      component: StudyGroupsView
    },
    {
      path: '/device-list',
      component: DeviceListView
    },
    {
      path: '/settings',
      component: SettingsView
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView
    },
  ]
}
const router = createRouter(routerOptions)

export default router




