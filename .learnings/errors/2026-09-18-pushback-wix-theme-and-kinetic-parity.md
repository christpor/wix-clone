## Pattern: Dark mode assumption bias on light-mode SaaS reference
## Root Cause: Initial scaffold assumed standard dark modern tech aesthetic instead of inspecting extracted keyframes from the user's video screencast, resulting in inverted background colors and missing kinetic sticky scroll behaviors.
## Prevention: Always decompile reference screencasts into keyframes first; extract exact hex values (#FFFFFF, #E8F7F2, #116dff) and layout dynamics (sticky accordion vs static grid) before scaffolding components.
## Score delta: 5/10 → 9/10
## Project: wix-clone
