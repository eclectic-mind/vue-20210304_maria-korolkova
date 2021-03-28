import MeetupView from './MeetupView.js';
import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
//import MeetupAgenda from './MeetupAgenda.js';
//import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupInfo from './MeetupInfo.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

console.log(fetchMeetup);

export default {
  name: 'MeetupPage',

  data() {
    return {
      meetupId: MEETUP_ID
    }
  },

  computed: {
    meetup() {
      const meetupData = fetchMeetup(this.meetupId);
      console.log(meetupData);
      return meetupData;
    },
  },

  components: {
    MeetupView,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    //MeetupAgenda,
    //MeetupAgendaItem
  },

  template: 
  `<div>
    <meetup-view :date="meetup.date" :agenda="meetup.agenda" :link="meetup.link" :title="meetup.title" :place="meetup.place" :description="meetup.description" :organizer="meetup.organizer" :meetup="meetup" />
  </div>`,
};
