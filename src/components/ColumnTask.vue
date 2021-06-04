<template>
    <AppDrop @drop="moveTaskOrColumn">
        <AppDrag
            class="task"
            @click.native="goToTask(task)"
            :transferData="{
                type: 'task',
                fromColumnIndex: columnIndex,
                fromTaskIndex: taskIndex,
            }"
        > 
            <span class="w-full flex-no-shrink font-bold">
                {{ task.name }}
            </span>
            <p class="w-full flex-no-shrink mt-1 text-sm" v-if="task.description">
                {{ task.description }}
            </p>
        </AppDrag>
   </AppDrop>
</template>

<script>
import moveTasksAndColumnsMixin from '@/mixins/moveTasksAndColumnsMixin'
import AppDrag from '@/components/AppDrag'
import AppDrop from '@/components/AppDrop'

export default {
    name: 'ColumnTask',

    props: {
        task: {
            type: Object,
            required: true
        },
        taskIndex: {
            type: Number,
            required: true
        },
    },

    mixins: [moveTasksAndColumnsMixin],

    components: {
        AppDrop,
        AppDrag
    },

    methods: {
       goToTask(task){
            this.$router.push({name: 'Task', params: {id: task.name}})
       },
    }


}
</script>

<style lang="css">

.task {
    @apply flex; 
    @apply items-center; 
    @apply flex-wrap; 
    @apply shadow;
    @apply mb-2;
    @apply py-2;
    @apply px-2;
    @apply rounded;
    @apply bg-white;
    @apply text-gray-700;
    @apply no-underline;
}

</style>