import * as counter from './modules/counter/counterState';

export default {
    state: {
        counter: counter.initialState,
    },
    mutations: {
        ...counter.mutations,
    },
};
