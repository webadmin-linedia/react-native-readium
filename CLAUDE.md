# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`react-native-readium` is a React Native wrapper for the Readium EPUB reading framework. It supports iOS, Android, and Web, and is structured as a monorepo.

## Commands

```bash
yarn bootstrap          # Full setup: install deps + iOS pods
yarn test               # Run Jest tests
yarn typescript         # Type-check only (no emit)
yarn lint               # ESLint on src/ and apps/*/src
yarn lint:fix           # Auto-fix linting issues
yarn prettier           # Check formatting
yarn prettier:fix       # Auto-format
yarn prepare            # Build: clean lib/ + compile TypeScript
yarn nitrogen           # Regenerate Nitro bridge code from specs
yarn pods               # Install iOS CocoaPods for example app
yarn example            # Run example-native app
yarn example:nextjs     # Run example-nextjs web app
```

To run a single Jest test file:
```bash
yarn jest src/__tests__/SomeFile.test.ts
```

## Architecture

### Nitro Modules Bridge

The library uses [Nitro Modules](https://nitro.margelo.com) for the JS↔native bridge. The flow is:

1. **Spec** (`src/specs/ReadiumView.nitro.ts`) — defines the typed interface
2. **Nitrogen codegen** (`yarn nitrogen`) — auto-generates bridging code into `nitrogen/generated/`
3. **Native implementations** — `ios/HybridReadiumView.swift` and Android counterpart implement the spec
4. **React component** — `src/components/ReadiumView.tsx` wraps `NitroReadiumView.tsx`

Never manually edit files under `nitrogen/generated/` — they are regenerated from the spec.

### Platform Split

- `*.tsx` — native (iOS/Android) implementation
- `*.web.tsx` — web implementation (used via bundler platform resolution)

The web implementation (`src/components/ReadiumView.web.tsx`) uses the `@readium/navigator` JS package directly, with hooks in `web/hooks/` managing navigator state.

### Key Files

| File | Role |
|------|------|
| `src/specs/ReadiumView.nitro.ts` | Nitro spec — source of truth for all JS↔native types and methods |
| `src/components/ReadiumView.tsx` | Main exported React component (native) |
| `src/components/ReadiumView.web.tsx` | Web implementation |
| `src/components/NitroReadiumView.tsx` | Low-level Nitro host component wrapper |
| `ios/HybridReadiumView.swift` | iOS Nitro module implementation |
| `ios/Reader/ReaderService.swift` | iOS EPUB document lifecycle |
| `web/hooks/useNavigator.ts` | Web navigator state management |
| `nitro.json` | Maps Nitro spec to native module names |

### Monorepo Structure

- `src/` — library source (published)
- `ios/` / `android/` — native implementations
- `web/` — web-specific hooks and utilities
- `nitrogen/generated/` — auto-generated bridge code (do not edit)
- `apps/example-native/` — React Native test app
- `apps/example-nextjs/` — Next.js web test app
- `apps/common-app/` — shared components between example apps

## Native Requirements

- **iOS**: Xcode 16.2+, Swift 6.0, iOS 13.4+ deployment target
- **Android**: JDK 17, `compileSdkVersion >= 31`, core library desugaring enabled

## Modifying the Native Bridge

When changing the Nitro spec (`src/specs/ReadiumView.nitro.ts`):
1. Update the spec types/methods
2. Run `yarn nitrogen` to regenerate bridge code
3. Update `ios/HybridReadiumView.swift` and the Android equivalent to implement new methods
4. Update the React component and TypeScript types in `src/`
