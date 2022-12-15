import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

export default function MyCalendar() {
  return (
    <div>
        <Scheduler events={EVENTS} />
    </div>
  );
}
