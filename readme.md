# Remember: Session Stopwatch

Tracks how long you've been working (aka jamming), and reminds you to take breaks.

## Features/Fields

- fields
  - name
  - total goal duration
  - proportional break duration
  - focus
    - int: duration
    - int: max duration (hard stop)
    - boolean: show desktop notification
    - boolean: show new tab notification
    - boolean: play sound
    - boolean: stop stopwatch when duration ends (default: false)
      - useful when you're in flow state
  - short break
    - duration
    - show desktop notification
    - play sound
    - boolean: count towards total
  - Long break
    - number of blocks before long break (default: 4)
    - duration
    - show desktop notification
    - play sound
    - boolean: count towards total
- presets
  > custom: maybe shared by URL?
  - pomodoro
    - duration: 25:00
    - break: 5:00
    - long break: 15:00
  - 52:17
    - duration: 52:00
    - break: 17:00
  - deep work
    - duration: 3:00:00
    - break: 1:00:00
- Session log
  - tracks start time, end time, duration, break duration
