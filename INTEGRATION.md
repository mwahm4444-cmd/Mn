# Future NEXUS OS integration

1. Mount the module at a host route such as `/settings` and render its exported entry component (`App` in `src/App.tsx`) within the host router.
2. Keep the module's navigation registry local initially; later map its module IDs (`account`, `appearance`, `locale`, etc.) to host route IDs.
3. Implement `SettingsAdapter` in `src/integrations/adapter.ts` using the host's authenticated API. `load(userId)` should return a partial settings object; `save(settings, userId)` should persist validated settings server-side.
4. Replace `loadSettings`/`saveSettings` in `src/lib/store.ts` with an injected adapter or provider. Keep the component contract unchanged so the UI does not need rebuilding.
5. Pass the authenticated user's safe profile projection from the host. Do not pass access tokens or secrets into this module.
6. Connect navigation visibility, pinned sections, widgets and default page to the host navigation service only after the host confirms its schema.
7. Use server-side OAuth callback handlers and secret storage for Google, Discord, GitHub, YouTube, Twitch, Steam and API integrations. Never implement provider secrets in browser storage.
8. Keep account deletion, password changes, 2FA, session revocation, invitations, backup restore and wallet access behind host authorization and explicit confirmation.

## Suggested host contract

```ts
export interface SettingsAdapter {
  load(userId?: string): Promise<Record<string, unknown> | null>;
  save(settings: Record<string, unknown>, userId?: string): Promise<void>;
}
```

The demo includes this contract in `src/integrations/adapter.ts`.
