/* eslint-disable ember/no-mixins */
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  session: service(),
  sessionAccount: service(),

  init() {
    this._super(...arguments);

    this.get('session').setup();
  },

  beforeModel() {
    return this.get('sessionAccount').loadCurrentUser().catch(() => this.get('session').invalidate());
  }
});
