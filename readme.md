# SleepSense AI - Pro Sleep Analyzer

A professional Progressive Web App (PWA) designed to monitor sleep sounds (snoring, talking) while intelligently filtering out environmental noise using the **YAMNet** deep learning model.

## Features
- **YAMNet AI Integration:** Classifies audio in real-time to distinguish between human sleep sounds and background noise (traffic, horns, clocks).
- **Smart Noise Gate:** Automatically mutes recording when noise is detected, ensuring clean data logs.
- **NREM/REM Cycle Tracking:** Visualizes sleep stages based on the standard 90-minute human sleep cycle.
- **Waveform Visualizer:** Real-time audio feedback.
- **PWA Ready:** Installable on Android/iOS and works offline.
- **Privacy First:** All AI processing happens locally in your browser.

## Tech Stack
- TensorFlow.js (YAMNet Model)
- Web Audio API (Analyser & Gain Nodes)
- Canvas API
- Service Workers (Offline support)

## License
MIT License - See LICENSE file for details.
