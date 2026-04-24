import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('pages/home/Home.tsx'),
  route('stylekit', 'pages/stylekit/Stylekit.tsx'),
] satisfies RouteConfig