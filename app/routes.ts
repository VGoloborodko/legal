import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('pages/home/Home.tsx'),
  route('stylekit', 'pages/stylekit/Stylekit.tsx'),
  route('bankrotstvo-fizicheskih-lic-ryazan', 'pages/landings/bankrotstvo-fizicheskih-lic-ryazan/index.tsx'),
] satisfies RouteConfig