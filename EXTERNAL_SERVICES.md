# External services — not connected

| Feature | Current state | Required production service |
|---|---|---|
| Google / Discord / GitHub / YouTube / Twitch / Steam | UI simulation only | Official OAuth apps, redirect handlers, scopes, token vault |
| Password change / recovery / 2FA | UI notice only | Host identity provider |
| Browser notifications | Preference stored only | Browser permission flow + notification service |
| Devices and session revocation | Sample devices only | Auth/session API |
| Users, roles and invitations | Demo records only | User directory, RBAC authorization, email provider |
| AI assistant and memory | Preferences only | AI gateway, policy enforcement, memory service |
| Storage and file management | Illustrative metrics | Object storage and file metadata API |
| Backup and sync | Local demo history only | Backup scheduler, encrypted storage, sync/conflict API |
| API keys and integration health | Sandbox labels only | Server-side secret manager and integration proxy |
| Performance telemetry | Static sample metrics | Monitoring and telemetry backend |
| Support, policy, guide links | UI placeholders | Published documentation and support destinations |

No real credentials are requested or stored. Do not treat any demo toggle as proof that a provider connection or security feature is active.
