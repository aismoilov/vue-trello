import Vue from 'vue'
import Router from 'vue-router'
import Board from './views/Board'
import Task from './views/Task'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Board',
            component: Board,
            children: [
                {
                    path: '/task/:id',
                    name: 'Task',
                    component: Task
                }
            ]
        }
    ]
})