export const navigation = (currentPage) => [
  { name: 'Home', href: '/', current: currentPage === 'Home' },
  { name: 'Team', href: '#', current: currentPage === 'Team' },
  { name: 'Projects', href: '#', current: currentPage === 'Projects' },
  { name: 'Calendar', href: '#', current: currentPage === 'Calendar' },
  { name: 'User', href: '/management/user', current: currentPage === 'User' },
]

export const userNavigation = () => [
  { name: 'Your Profile', function: () => {} },
  { name: 'Settings', function: () => {} },
  { name: 'Sign out', function: () => {} },
]

export default { navigation, userNavigation }
