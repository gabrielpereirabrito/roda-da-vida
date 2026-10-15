# Runbook: Diagnóstico e Resolução de Problemas

Este diretório contém runbooks operacionais — guias de "como resolver X problema" quando algo dá errado.

---

## 📋 Índice de Runbooks

| Arquivo | Problema | Severidade |
|---------|----------|------------|
| [dados-perdidos.md](./dados-perdidos.md) | Usuário perdeu respostas do questionário | Média |
| [build-falhou.md](./build-falhou.md) | Build de produção falhou | Alta |
| [grafico-nao-renderiza.md](./grafico-nao-renderiza.md) | Roda da Vida não aparece na tela de resultados | Média |

---

## Template para novos runbooks

Ao criar um novo runbook, use o seguinte template:

```markdown
# Runbook: [Nome do Problema]

**Severidade**: Alta / Média / Baixa  
**Última revisão**: YYYY-MM-DD

## Sintomas
- O que o usuário observa

## Diagnóstico
Passos para identificar a causa raiz.

## Resolução
Passos para corrigir.

## Prevenção
Como evitar que volte a acontecer.
```
