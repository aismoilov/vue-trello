<template>
    <div class="board">
        <div class="flex flex-col items-center my-4">
            <h3 class="text-white font-bold text-3xl">Vue Trello</h3>
        </div>
        <div class="flex flex-row items-start">
            <Column 
               v-for="(column, $columnIndex) in board.columns" 
               :key="$columnIndex"
               :column="column"
               :columnIndex="$columnIndex"
               :board="board"
            />

            <div class="column flex">
                <input 
                type="text" 
                v-model="newColumnName"
                class="p-2 mr-2 flex-grow"
                placeholder="Новая колонна"
                @keyup.enter="createColumn"
                >
            </div>
        </div>

        <div 
          class="task-bg"
          v-if="isTaskOpen"
          @click.self="close"
        >
            <router-view />
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import Column from '@/components/Column'

export default {
    name: 'Board',

    data() {
        return {
           newColumnName: ''
        }
    },

    computed: {
        ...mapState(['board']),
        isTaskOpen() {
            return this.$route.name === 'Task' 
        }
    },

    components: {
       Column
    },

    methods: {
        close(){
            this.$router.push({name: 'Board'})
        },
        createColumn(){
           this.$store.commit('CREATE_COLUMN', {
               name: this.newColumnName
           })

           this.newColumnName = ''
        },
    }

}
</script>

<style lang="css">

.board {
    @apply p-4;
    @apply bg-green-400;
    @apply h-full;
    @apply overflow-auto;
}

.task-bg {
    @apply absolute;
    @apply bottom-0;
    @apply left-0;
    @apply top-0;
    @apply right-0;
    background: rgba(0, 0, 0, 0.5);
}

</style>