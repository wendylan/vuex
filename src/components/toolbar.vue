<template>
    <div class="tool-list">
        <img src="../assets/logo.png" alt="">
        <i class="tool-btn glyphicon glyphicon-plus" v-on:click="addNote"></i>
        <i class="tool-btn glyphicon glyphicon-star" v-on:click="toggleFavor" v-bind:class="{favor:isFavor}"></i>
        <i class="tool-btn glyphicon glyphicon-remove" v-on:click="deleteNote"></i>
    </div>
</template>
<script>
export default {
    computed: {
        isFavor() {
            return this.$store.getters.activeNote.favor;
        }
    },
    methods: {
        addNote() {
            this.$store.dispatch('add_note');
        },
        deleteNote() {
            this.$store.dispatch('delete_note', this.$store.getters.activeNote);
        },
        toggleFavor() {
            var isFavor = this.$store.getters.activeNote.favor? false:true;
            if(isFavor)
                this.$store.dispatch('add_favor');
            else
                this.$store.dispatch('remove_favor');
        }
    }
}
</script>
<style>
.tool-list {
    width: 100px;
    height: 100%;
    background-color: darksalmon;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}
.tool-btn {
    font-size: 30px;
    display: inline-block;
    margin: 10px 0;
}
.favor {
    color: blanchedalmond;
}
.tool-list img{
    width: 50px;
    height: 50px;
    display: inline-block;
}
</style>