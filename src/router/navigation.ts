import Home from '../views/Components/icons/Home.vue'
import People from '../views/Components/icons/People.vue'
import Tutors from '../views/Components/icons/Tutors.vue'
import Courses from '../views/Components/icons/Courses.vue'

export const navigationRoutes = [
  {
    route: '/app/home',
    icon: Home,
    label: 'Home'
  },
  {
    route: '/app/people-list',
    icon: People,
    label: 'People'
  },
  {
    route: '/app/teachers-list',
    icon: Tutors,
    label: 'Teachers'
  },
  {
    route: '/app/courses-list',
    icon: Courses,
    label: 'Courses'
  },
]