import TaskApi from "../../common/apis/TaskApi";

const state = {
    tasks: [],
    formTask: undefined,
    showTaskForm: false,
    status: 'loading',
}
const actions = {
    async setFormTask({ commit }, task) {
        commit('setFormTask', task);
    },
    async toggleTaskForm({ commit, getters }) {
        commit('toggleTaskForm');
        if (!getters.showTaskForm) {
            commit('setFormTask', undefined);
        }
    },
    async updateTask({ commit }, task) {
        try {
            const updatedTask = await TaskApi.update(task.id, task);
            commit('updatePartialTask', updatedTask);
        } catch (e) {
            alert("failed to update task");
        }
    },
    async toggleTaskReminder({ commit }, id) {
        const task = await TaskApi.findOne(id);
        const newReminder = !task.reminder;
        const body = { reminder: newReminder };
        await TaskApi.update(id, body);
        commit('updatePartialTask', { id, ...body });

    },
    async addTask({ commit }, task) {
        try {
            const addedTask = await TaskApi.add(task);
            commit('newTask', addedTask);
        } catch (e) {
            alert("failed to add task");
        }
    },
    async deleteTask({ commit }, id) {
        try {
            await TaskApi.delete(id);
            commit('deleteTask', id);
        } catch (e) {
            console.log(e)
            alert("failed to delete task");
        }
    },
    async fetchAllTasks({ commit }) {
        try {
            commit('setStatus', 'loading');
            const tasks = await TaskApi.findAll();
            this.tasks = tasks;
            commit('setTasks', tasks);
            commit('setStatus', 'succeeded');
        } catch (e) {
            alert("failed to fetch tasks");
            commit('setStatus', 'error');
        }
    }
}
const getters = {
    allTasks(state) {
        return state.tasks;
    },
    formTask(state) {
        return state.formTask;
    },
    showTaskForm(state) {
        return state.showTaskForm;
    },
    tasksStatus: (state) => state.status,
}
const mutations = {
    toggleTaskForm: (state, _) => state.showTaskForm = !state.showTaskForm,
    setStatus: (state, payload) => state.status = payload,
    setTasks: (state, payload) => state.tasks = payload,
    newTask: (state, payload) => state.tasks.unshift(payload),
    updatePartialTask: (state, payload) => {
        const idx = state.tasks.findIndex(item => item.id == payload.id);
        if (idx > -1) {
            const task = state.tasks[idx];
            const updatedTask = {
                ...task,
                ...payload
            }
            state.tasks.splice(idx, 1, updatedTask);
        }
    },
    deleteTask: (state, payload) => {
        const idx = state.tasks.findIndex(item => item.id = payload);
        if (idx > -1) {
            state.tasks.splice(idx, 1);
            if (state.formTask?.id == payload) {
                state.formTask = undefined;
            }
        }
    },
    setFormTask: (state, payload) => state.formTask = payload,
}

export default {
    state, actions, getters, mutations
}