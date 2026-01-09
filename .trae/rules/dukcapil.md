# Rules Proyek DUKCAPIL SMKI

- SMKI: kerahasiaan, integritas, ketersediaan, audit, kepatuhan
- Stack: React+TS; shadcn/ui+Tailwind; TanStack; Zustand; Zod; Hono+OpenAPI; better-auth
- Modular ERP per domain; skema Zod shared; API jelas
- Frontend: WCAG; virtualisasi tabel; form+Zod; Query untuk data; Zustand untuk UI
- Backend: route ber-versi; auth, rate-limit, audit; validasi Zod; error standar
- OpenAPI: versi, tag modul, kontrak integrasi
- Auth: cookie HTTPOnly; RBAC; MFA; rotasi refresh
- Keamanan: TLS, enkripsi at-rest, redaksi PII, CSRF, rate-limit
- Observability: log JSON, metrics, tracing, health checks
- Testing: unit/integrasi/E2E; security; performance
- CI/CD: lint, typecheck, test, scan; secrets di vault; canary/rollback
- Performance: cache terukur; pagination server-side; bundel splitting
- Aksesibilitas & i18n: keyboard, fokus, bahasa Indonesia
- Penamaan: RESTful routes; query keys; PascalCase komponen
- Secrets & env: .env lokal; produksi via manager
- Retensi & audit: retensi per data; purge auditabel; trail immutable
