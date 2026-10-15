# ADR 0006 — Hospedagem MVP: Vercel

| Campo | Valor |
|-------|-------|
| Status | ✅ Aceito |
| Data | 2026-10-15 |
| Decisores | Gabriel Brito |

---

## Contexto

O MVP do Roda da Vida é uma SPA (Single Page Application) client-side, sem backend próprio na primeira versão. O objetivo da hospedagem é viabilizar acesso público rápido para apresentações e demos, sem fricção operacional.

## Decisão

Hospedar o MVP na **Vercel**.

## Motivação

- **Zero config para projetos Vite/React**: Vercel detecta o framework automaticamente e configura build + deploy sem configuração manual.
- **Preview deployments automáticos**: cada push em branches gera uma URL de preview, útil para coletar feedback.
- **Domínio gratuito `*.vercel.app`**: suficiente para o escopo de apresentação do MVP.
- **CI/CD integrado com GitHub**: sem necessidade de configurar pipelines separados.
- **Free tier suficiente**: o projeto MVP não tem backend, logo não há custo com serverless functions ou banco.

## Alternativas consideradas

| Alternativa | Motivo de descarte |
|-------------|-------------------|
| GitHub Pages | Não suporta SPA routing sem workarounds (`404.html` hack); deploy manual mais trabalhoso. |
| Netlify | Viável, mas Vercel tem integração mais nativa com o ecossistema React/Vite. |
| AWS S3 + CloudFront | Overkill para MVP de apresentação; curva de configuração alta. |
| Render | Mais adequado para apps com backend; free tier tem cold starts. |

## Consequências

- Build de produção: `npm run build` → pasta `dist/` publicada na Vercel.
- Variáveis de ambiente configuradas no painel da Vercel (não em `.env` commitado).
- Para o pós-MVP com backend, avaliar se Vercel continua adequada ou migra para infraestrutura dedicada.

## Configuração esperada

```json
// vercel.json (raiz do projeto) — necessário para SPA routing
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

> **Nota:** Nenhuma variável de ambiente sensível existe no MVP (apenas localStorage). O `vercel.json` é o único arquivo de configuração necessário.
