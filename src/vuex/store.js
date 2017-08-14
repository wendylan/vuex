import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {},
    favorNotes: []
}

const getters = {
    notes: (state) => state.notes,
    activeNote: (state) => state.activeNote,
    favorNotes: (state) => state.favorNotes
}

const actions = {
    add_note({commit}) {
        return commit('ADD_NOTE');
    },
    delete_note({commit}) {
        return commit('DELETE_NOTE');
    },
    add_favor({commit}) {
        return commit('ADD_FAVOR');
    },
    remove_favor({commit}) {
        return commit('REMOVE_FAVOR');
    },
    // toggle_favor({commit}) {
    //     return commit('TOGGLE_FAVOR');
    // },
    edit_note({commit}, text) {
        return commit('EDIT_NOTE', text);
    },
    set_activenote({commit}, item) {
        return commit('SET_ACTIVENOTE', item);
    }
}

const mutations = {
    ADD_NOTE(state) {
        //根据id判断是否为同一个note
        const noteid = Math.round(Math.random()*10000);
        const note = {
            id: noteid,
            text: 'New Note, say somthing...',
            favor: false
        }
        state.notes.push(note);
        console.log(state.notes);
        if(state.notes.length == 1) {
        state.activeNote = state.notes[0];
        }
    },
    DELETE_NOTE(state) {
        let notes = state.notes;
        for(let key in notes) {
            if(notes[key].id == state.activeNote.id) {
                state.notes.splice(key, 1);
            }
        }
        if(state.notes.length != 0)
            state.activeNote = state.notes[0];
        else
            state.activeNote = {}
    },
    ADD_FAVOR(state) {
        state.activeNote.favor = true;
    },
    REMOVE_FAVOR(state) {
        state.activeNote.favor = false;
    },
    
    // TOGGLE_FAVOR(state) {
    //     state.activeNote.favor = state.activeNote.favor?false:true;
    // },
    EDIT_NOTE(state, text) {
        state.activeNote.text = text;
        for(let i in state.notes) {
            if(i == state.activeNote) {
                i.text = text;
            }
        }
    },
    SET_ACTIVENOTE(state, item) {
        state.activeNote = item;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})