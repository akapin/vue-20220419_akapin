import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  agendaItemIcons,

  agendaItemDefaultTitles,

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    iconName() {
      return this.$options.agendaItemIcons[this.agendaItem.type];
    },

    defaultTitle() {
      return this.$options.agendaItemDefaultTitles[this.agendaItem.type];
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${iconName}.svg\`" class="icon" :alt="agendaItem.type" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 v-if="agendaItem.title" class="agenda-item__title">{{ agendaItem.title }}</h3>
        <h3 v-else class="agenda-item__title">{{ defaultTitle }}</h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
