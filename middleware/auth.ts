import { Context } from '@nuxt/types';

export default function ({ store, error }: Context) {
  if (!store.getters.authenticated) {
    error({
      message: 'You are not logged in',
      statusCode: 403,
    });
  }
};
