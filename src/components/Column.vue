<template>
   <AppDrop @drop="moveTaskOrColumn">
        <AppDrag
            class="column"
            :transferData="{
                type: 'column',
                fromColumnIndex: columnIndex
            }"
        >
            <div class="flex items-center mb-2 font-bold">
                {{ column.name }}
            </div>
            <div class="list-reset">
                <ColumnTask 
                    v-for="(task, $taskIndex) of column.tasks" 
                    :key="$taskIndex"
                    :task="task"
                    :taskIndex="$taskIndex"
                    :column="column"
                    :columnIndex="columnIndex"
                    :board="board"
                />

                <input 
                    type="text" 
                    class="block p-2 w-full bg-transparent"
                    placeholder=" + Добавить еще одну карточку"
                    @keyup.enter="createTask($event, column.tasks)"
                />
            </div>        
        </AppDrag>
   </AppDrop>
</template>

<script>

import ColumnTask from '@/components/ColumnTask'
import AppDrag from '@/components/AppDrag'
import AppDrop from '@/components/AppDrop'
import moveTasksAndColumnsMixin from '@/mixins/moveTasksAndColumnsMixin'

export default {
    name: 'Column',

    props: {
        column: {
            type: Object,
            required: true
        },
        columnIndex: {
            type: Number,
            required: true
        },
        board: {
            type: Object,
            required: true
        }
    },

    components: {
        ColumnTask,
        AppDrag,
        AppDrop
    },

    mixins: [moveTasksAndColumnsMixin],

    methods: {
        pickupColumn (e, fromColumnIndex) {
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.dropEffect = 'move'

            e.dataTransfer.setData('from-column-index', fromColumnIndex)
            e.dataTransfer.setData('type', 'column')
        },
        createTask (e, tasks) {
            this.$store.commit('CREATE_TASK', {
                tasks,
                name: e.target.value
            })
            e.target.value = ''
        }
    }
}
</script>

<style lang="css">
.column {
    @apply bg-gray-100;
    @apply p-2;
    @apply mr-4;
    @apply text-left;
    @apply shadow;
    @apply rounded;
    min-width: 350px;
}
</style>