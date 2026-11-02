# PROJECT #14: CHIPTUNE / DEMOSCENE

Status: First local audiovisual prototype, 0.1.0
Created: 2026-10-28
Owner: Leterel

## Vision

Create an original, standalone audiovisual software artwork.

The demoscene and classic cracktros are technical inspiration,
not templates to copy.

This project must have its own visual identity, original music,
original characters and original animation concepts.

## Creative Requirements

- Original 8-bit-inspired pixel-art sprites
- Characters dancing and jumping to the musical rhythm
- Chiptune music with precise BPM synchronization
- Real-time synthesis or tracker-based music playback
- Animated and rotating 2D/3D typography
- Continuous scrolling text
- Procedural geometry and graphical effects
- Multiple simultaneous animation layers
- Seamless looping where appropriate
- Potential interactive and generative elements
- Unique artistic identity, not a Razor 1911 remake

## Music and Animation

Music is central to the experience.

Investigate synchronization using:

- BPM and beat position
- Bars and subdivisions
- Tracker pattern and row positions
- Kick, snare and other musical events
- Audio amplitude and frequency analysis
- Explicit synchronization events

Sprites should be able to dance, jump and change animation
frames in response to the music.

Text scrolling, geometry, typography and visual effects
should operate simultaneously.

A shared audio timeline should keep everything synchronized.

## Technical Research

Audio:
- Chiptune synthesis
- Software DSP
- Oscillators and envelopes
- MOD, XM and IT tracker modules
- libopenmpt
- Web Audio API

Graphics:
- Pixel-art animation
- Sprite sheets
- Canvas 2D
- WebGL
- Three.js
- Shaders
- Procedural animation

## Development Environment

Primary OS: Windows
Shell: PowerShell 7
Version control: Git and GitHub

Preferred approach:
Local AI-assisted development.

Candidates:
- Ollama
- Qwen Coder
- Local coding agent
- JavaScript / TypeScript
- Web Audio API
- WebGL

WSL is optional and not required.

Ollama provides model inference, not autonomous filesystem
access. A coding agent is needed to edit project files.

No final framework or model has been selected.

## Isolation and Safety

- Keep Project #14 independent of all other projects.
- Prefer local inference without paid cloud APIs.
- Restrict coding-agent filesystem access.
- Use a real sandbox where practical.
- Do not modify unrelated repositories.
- Require approval for destructive operations.
- Keep development version-controlled.

A working directory alone is not a security boundary.

## Reference

Technical inspiration:
Razor 1911 cracktro associated with Red Dead Redemption 2.

Interesting techniques:
- Dancing pixel character
- Music synchronization
- Rotating typography
- Scrolling text
- Layered visual effects
- Continuous audiovisual presentation

Do not copy existing music, graphics, text or branding.

## Open Decisions

- Fixed choreography, generative art or hybrid?
- Browser prototype or native Windows executable?
- Tracker composition or procedural synthesis?
- Which Qwen model and coding agent?
- Which graphics framework?
- Which original visual and musical identity?
- Interactive controls?
- Packaging and distribution?

## Project Continuity

This GitHub repository is the persistent notebook for Project #14.

Future development sessions should read this README first.

Distinguish confirmed decisions from proposals.
Do not assume that software is installed without checking.
Do not assume prototype code already exists.
Do not modify unrelated projects.

## Rastergarten prototype — 2026-11-02

`npm start`, then http://127.0.0.1:8865. Node 22+, no installation of packages.
Select Start mit Ton; keep volume low. Pause freezes the shared AudioContext
clock, Stop closes it, and hiding the tab pauses playback. The drawing supports
the browser's reduced-motion preference. `npm test` checks beat/phrase timing.

Original square-wave melody and sine bass at 112 BPM, procedural pixel creatures,
perspective grid, rotating title and scrolling text run on the same audio clock.
The initial phrase contains eight beats (two bars), looped as a generated audio
buffer. This is an exploratory browser implementation, not a finished artwork.
No tracker import, 3D engine, model inference or native executable yet.
Next: browser/audio QA, richer original choreography and a longer composition.
