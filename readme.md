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
  > maybe these can be shared by URL?
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

## dev notes

### tasks/phases

- [ ] outline page urls
- [ ] Settings/Start page
  - [ ] all the fields for the session, maybe model off of Marinara Timer
- [ ] build presets menu -> do this at the end?
- [ ] Stopwatch running page
  - [ ] wire `start` button to route to this page with the settings passed in
  - [ ] title
  - [ ] action buttons
    - [ ] take break
    - [ ] end session
  - [ ] menu
    - [ ] restart session
      - [ ] deletes current session and starts over
    - [ ] change settings
  - [ ] stopwatch
    - [ ] countdown
    - [ ] progress bar
  - [ ] sessions table
  - [ ] list of sessions
  - [ ] totals row
- [ ] Take Break -> Resume
  - on clicking `Take Break`
    - [ ] pause timer
    - [ ] change button to Resume
- [ ] End Session -> Fail
  - on clicking `End Session`
    - [ ] route to Session Summary Page
    - [ ] Give them an `Almost!` message for positive encouragement
    - [ ] most of the Stopwatch page still there
    - [ ] title
    - [ ] action buttons
      - [ ] `keep going!`
    - [ ] progress bar
    - [ ] sessions table
- [ ] End Session -> Pass
  - [ ] same as `Fail`
  - [ ] change: `Almost!` to `Success!`
  - [ ] change: `keep going!` to `restart/reset`
  - [ ] throw confetti
