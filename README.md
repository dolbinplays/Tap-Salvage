# Scrap Shelter Lite v0.26.06.04.0700 - Stage 1C Streak Feedback

This is the fast-ROI Lite branch of Scrap Shelter. It keeps the base repair/upgrade loop and replaces the complex block-placement puzzle with a simple tap-to-salvage grid.

## Stage 1C streak feedback additions
- Generated Web Audio clinks, chimes, and buzzes for salvage reveals
- Stronger ascending streak-bonus sound
- Cache, crate, and run-goal bonus chimes
- Short visual pulse on streak/cache/summary bonus moments

## Stage 1C daily hook additions
- Once-per-day salvage crate for return-session testing
- Small achievement checklist in Inventory
- Run-goal bonus added at claim time
- Expanded metrics for daily crates and run-goal bonuses

## Stage 1C additions
- First-session checklist on the Base screen
- Local test metrics for runs, repairs, upgrades, mock ad taps, double-ad taps, and best run
- Mock rewarded-ad button for post-run double salvage
- Mock rewarded-ad emergency crate on the Base screen
- Visible upgrade effects for Workshop, Generator, and Water Filter
- Room wear tuned so upgrades reduce maintenance pressure instead of increasing it
- Reset Prototype Data button for clean first-session retests
- Lightweight smoke test for the single-file prototype

## Stage 1B additions
- Salvage location choices: Junk Pile, Abandoned Garage, Appliance Heap
- Clearer tile reveal feedback and reveal banner
- Small run goals and streak bonus feedback
- Better run summary: location, caches, hazards, best find, tool condition
- Stronger base repair prompts after salvage runs
- Rewarded-ad placeholders only; no real ad SDK yet

## How to play
1. Start a salvage run.
2. Pick a salvage location.
3. Tap hidden tiles to uncover parts, caches, hazards, or empty junk.
4. Claim salvage and return to the base.
5. Repair and upgrade Workshop, Generator, and Water Filter.

## Notes
The displayed in-game version matches this folder/zip version: v0.26.06.04.0700.

## Smoke test
Run this from the project folder with the bundled Codex Node runtime or any recent Node install:

```powershell
node smoke_test_index.js
```
