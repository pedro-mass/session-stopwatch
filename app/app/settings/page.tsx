import { z } from "zod";
import * as time from "../../__utils/time";

const onComplete = z.object({
  showDesktopNotification: z.boolean().default(true),
  playSound: z.boolean().default(true),
});

const timeBlock = z.object({
  duration: z.number().int().positive(),
  onComplete,
});

const settings = z.object({
  name: z.string().min(1),
  totalGoalDuration: z.number().int().positive(),
  proportionalBreakDurations: z.boolean().default(false),
  focus: timeBlock.and(
    z.object({
      maxDuration: z.number().int().positive().optional(),
    })
  ),
  break: timeBlock.and(
    z.object({
      countTowardsTotal: z.boolean().default(true),
    })
  ),
  includeMaxBreaks: z.boolean().default(true),
  maxBreakAfterXTimeBlocks: z.number().int().positive().optional(),
  maxBreak: timeBlock.and(
    z.object({
      countTowardsTotal: z.boolean().default(false),
    })
  ),
});
type Settings = z.infer<typeof settings>;

const presets: Record<string, Settings> = {
  pomodoro: {
    name: "Pomodoro",
    totalGoalDuration: time.ms.parse("4h"),
    focus: { duration: time.ms.parse("25m") },
    break: { duration: time.ms.parse("5m") },
    maxBreakAfterXTimeBlocks: 4,
    maxBreak: { duration: time.ms.parse("15m") },
  },
  "52:17": {
    name: "52:17",
    totalGoalDuration: time.ms.parse("6h"),
    focus: { duration: time.ms.parse("52m") },
    break: { duration: time.ms.parse("17m") },
    maxBreakAfterXTimeBlocks: 4,
    maxBreak: { duration: time.ms.parse("1hr") },
  },
  deepWork: {
    name: "Deep Work",
    totalGoalDuration: time.ms.parse("6h"),
    proportionalBreakDurations: true,
    focus: { duration: time.ms.parse("25m"), maxDuration: time.ms.parse("3h") },
    break: { duration: time.ms.parse("15m") },
    maxBreak: { duration: time.ms.parse("1hr") },
  },
};

export default function Page() {
  // are we building the form with react-hook form, or trying to do server actions?

  return (
    <main>
      {/* form */}
      <h1>Settings Page</h1>
      {/* start button */}
      {/* menu button */}

      {/* session: name */}
    </main>
  );
}
