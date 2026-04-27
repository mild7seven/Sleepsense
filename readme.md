# SleepSense AI - Visual Playback Edition

An intelligent PWA to monitor sleep sounds with real-time AI noise filtering and a synchronized playback visualizer.

## Key Changes
- **Download Removed:** Audio logs are no longer exported.
- **Visual Playback:** When a recording is stopped, a "Play Last Recording" button appears. 
- **Synchronized Visualizer:** During playback, the waveform visualizer follows the actual audio data of the recording, allowing you to see the intensity of snoring or talking sessions.
- **Dual Mode Visualizer:** The waveform changes color (Green for playback, Indigo for active monitoring).

## Features
- AI-based noise gate using TensorFlow.js.
- NREM/REM sleep cycle estimation.
- Integrated wake-up alarm.
- Private: All processing and playback happen strictly on your device.

## License
MIT License.
