# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

StablePay Demo is a single-file React component (`stablecoin-trust-machines.jsx`) that renders an interactive cryptocurrency/stablecoin wallet application UI. This is a frontend demo/prototype showcasing a modern fintech wallet interface with Trust Machines-inspired "Midnight Emerald" design theme.

## Architecture

**Single Component Application**: The entire application lives in `stablecoin-trust-machines.jsx` as one default export (`TrustMachinesInspiredDemo`). It uses:

- **Inline CSS**: Styles are defined as a template literal string injected via `<style>` tag (CSS custom properties for theming)
- **Lucide React**: Icon library for all UI icons
- **React useState/useEffect**: All state management is local component state

**Key Internal Sections**:
- CSS custom properties define the "Midnight Emerald" color palette (lines 4-522)
- Mock data for assets and transactions (lines 524-537)
- Sub-components: `FloatingElements`, `TxBadge`
- Main tabs: dashboard, wallet, trading, account, settings
- Modal overlays: Transfer and Receive modals

## Running the Application

This is a standalone JSX file. To run it, you'll need to set up a React environment:

```bash
# If using Vite
npm create vite@latest . -- --template react
npm install lucide-react
# Replace src/App.jsx with stablecoin-trust-machines.jsx content
npm run dev
```

## Code Conventions

- Component uses inline styles and CSS-in-JS patterns via template literals
- Color palette uses CSS custom properties prefixed with `--tm-` (Trust Machines)
- Badge system uses semantic class names: `tm-badge-send`, `tm-badge-receive`, `tm-badge-exchange`, etc.
- Button variants: `tm-btn-primary`, `tm-btn-secondary`, `tm-btn-ghost`
