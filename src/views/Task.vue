<template>
    <div class="task-view">
       <div class="flex flex-col flex-grow items-start justify-between px-4">
           <input 
              type="text"
              class="p-2 w-full mr-2 flex-grow text-xl font-bold focus:border-white"
              :value="task.name"
              @change="updateTaskProperty($event, 'name')"
              @keyup.enter="updateTaskProperty($event, 'name')" 
            >

           <textarea 
                class="w-full relative bg-transparent px-2 border mt-2 h-64 border-none leading-normal"
                :value="task.description" 
                @change="updateTaskProperty($event, 'description')"
                >
            </textarea>
       </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Task',

    computed: {
        ...mapGetters(['getTask']),
        task() {
            return this.getTask(this.$route.params.id)
        }
    },

    methods: {
        updateTaskProperty(event, key){
            this.$store.commit('UPDATE_TASK', {
                task: this.task,
                key,
                value: event.target.value
            }) 
        }
    }
}
</script>

<style>

.task-view {
    @apply relative;
    @apply flex;
    @apply flex-row;
    @apply bg-white;
    @apply mx-4;
    @apply m-32;
    @apply mx-auto;
    @apply py-4;
    @apply text-left;
    @apply rounded;
    @apply shadow;
    max-width: 700px;
}

</style>