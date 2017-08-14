<template>
    <div class="note-list">
        <h3>NOTES</h3>
        <div class="list-wraper">
            <div class="tab">
                <div v-bind:class="{active:showAll==true}" v-on:click="showAllNotes">All Notes</div>
                <div v-bind:class="{active:showAll==false}" v-on:click="showFavorNotes">Favorites</div>
            </div>
            <ul class="show-all" v-if="showAll">
                <li v-for="item in notes" v-bind:class="{activeNote:item==activeNote}" v-on:click="clickNote(item)">
                    {{item.text}}
                </li>
            </ul>
            <ul class="favorites" v-else>
                <li v-for="item in favornotes" class="note" v-bind:class="{activeNote:item==activeNote}" v-on:click="clickNote(item)">
                    {{item.text}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showAll: true
        }
    },
    computed: {
        notes() {
            return this.$store.getters.notes;
        },
        favornotes() {
            return this.$store.getters.notes.filter(note => {
                return note.favor;
            })
        },
        activeNote() {
            return this.$store.getters.activeNote;
        }
    },
    methods: {
        showAllNotes: function() {
            this.showAll = true;
        },
        showFavorNotes: function() {
            this.showAll = false;
        },
        clickNote: function(item) {
            this.$store.dispatch('set_activenote', item);
        }
    }
}
</script>
<style>
.note-list {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: whitesmoke;
}
.list-wraper {
    display: flex;
    flex-direction: column;
    align-content: center;
}
.tab {
    margin: 0 auto;
    margin-bottom: 10px;
}
.tab div{
    cursor: pointer;
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 1px;
    padding: 2px 14px;
}
.active {
    background-color: darksalmon;
    color: white;
}
.show-all, .favorites {
    width: 300px;
    margin: 0;
    padding: 0;
}
.show-all li, .favorites li{
    overflow: hidden;
    word-wrap: break-word; 
    height: 50px;
    margin: 0;
    list-style: none;
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
}
.activeNote {
    background-color: blanchedalmond;
}
</style>