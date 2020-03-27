import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { API_URL } from '~/env';

export const state = () => ({
  user: null,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {

};

export const mutations: MutationTree<RootState> = {
  SET_USER (state, payload) {
    state.user = payload;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit ({ commit }, { req }) {
    const headers = req.headers;
    const res = await fetch(`${API_URL}/user/account`, {
      headers: {
        cookie: headers.cookie,
      },
    });
    if (!res.ok) {
      return;
    }
    const json = await res.json();
    const [user] = json;
    commit('SET_USER', user);
  },
};
