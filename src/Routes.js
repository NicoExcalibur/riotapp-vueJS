import Home from './components/Home'
import Leagueoflegends from './components/Leagueoflegends'
import Legendsofruneterra from './components/Legendsofruneterra'
import Champions from './components/Champions'

export default [
    {path: '/', component: Home},
    {path: '/leagueoflegends', component: Leagueoflegends},
    {path: '/legendsofruneterra', component: Legendsofruneterra},
    {path: '/champions', component: Champions},

]