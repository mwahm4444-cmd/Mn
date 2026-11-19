# Architecture

```text
src/
  App.tsx                 Shell, navigation, module composition
  main.tsx                Unit entry point
  components/              Reserved for extracted reusable components
  data/
    defaults.ts            Demo settings and initial records
    modules.ts             Navigation/module registry
  integrations/
    adapter.ts             Replaceable settings adapter contract
  lib/
    store.ts               Local demo persistence and export helpers
  styles/
    nexus.css              Fully namespaced NEXUS styles
```

## Design boundaries

- `App.tsx` renders screens and routes local interactions. It does not import from the host application.
- `data/defaults.ts` owns demo values.
- `lib/store.ts` owns local persistence.
- `integrations/adapter.ts` defines the seam for a future authenticated API adapter.
- All CSS selectors are prefixed with `nx-` except document-level theme variables and font setup. Theme variables are scoped to this app's root/document theme and should be mapped to host tokens during embedding.

## Persistence

Current adapter: browser `localStorage`, key `nexus-control-center:v1`. This is intentionally a demo store, not a secure store. Do not persist credentials, tokens, PINs, or secrets here.
