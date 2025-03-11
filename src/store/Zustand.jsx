import { create } from "zustand";

const useEventStore = create((set) => ({
  event: {
    event_organizer: "",
    event_name: "",
    event_date: "",
    event_time: "",
    event_venue: "",
  },
  setEvent: (newEvent) => set({ event: newEvent }),
}));
