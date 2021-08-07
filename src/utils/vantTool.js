import Vue from 'vue'

import { Field, Button, Dialog, Tabbar, TabbarItem, Badge, Swipe, SwipeItem, Lazyload, Tab, Tabs, Icon } from 'vant'
import { Popup, Cell, CellGroup, Empty, Progress, List, Popover } from 'vant'
Vue.use(Field).use(Button).use(Dialog).use(Icon).use(Cell).use(CellGroup).use(List).use(Popover)
Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Popup).use(Progress)
Vue.use(Badge).use(Empty)
Vue.use(Lazyload, {
    lazyComponent: true,
    error: 'http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/music/err.jpg',
    loading: 'http://tm.lilanz.com/QYWX/Test/LMTest/assets/img/music/err.jpg'
});
