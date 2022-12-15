import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

export default function MyCalendar() {
  return (
    <Scheduler events={EVENTS} />
  );
}
