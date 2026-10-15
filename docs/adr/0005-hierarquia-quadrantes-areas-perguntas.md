# ADR 0005 — Estrutura Hierárquica: Quadrantes → Áreas → Perguntas (Backend Futuro)

**Status**: Proposto (pendente de implementação)  
**Data**: 2026-10-14  
**Autores**: Equipe Roda da Vida

---

## Contexto

No MVP atual, as categorias da Roda da Vida são estruturas fixas, hardcoded no frontend. O modelo é flat (plano): existe apenas um nível de agrupamento — a "categoria" — que contém diretamente as perguntas.

Com a evolução do produto, identificamos a necessidade de uma hierarquia de três níveis para tornar o sistema **configurável via backend**, permitindo que diferentes "rodas" sejam montadas dinamicamente:

```
Quadrante
  └── Área
        └── Perguntas
```

### Exemplo concreto

> **Quadrante**: Qualidade de Vida  
> ├── **Área**: Criatividade  
> │     ├── "Com que frequência você expressa sua criatividade?"  
> │     └── "Você sente que tem espaço para criar no seu dia a dia?"  
> ├── **Área**: Hobbies e Diversão  
> │     ├── "Você dedica tempo regular aos seus hobbies?"  
> │     └── "Seu lazer te recarrega de energia?"  
> ├── **Área**: Plenitude e Felicidade  
> │     ├── "Com qual frequência você sente gratidão pelo que tem?"  
> │     └── "Você se sente realizado com o caminho que está trilhando?"  
> └── **Área**: Espiritualidade  
>       ├── "Você tem uma prática espiritual ou meditativa regular?"  
>       └── "Você sente conexão com algo maior do que você mesmo?"

---

## Decisão

Quando o backend for implementado, adotar o modelo de dados hierárquico **Quadrante → Área → Pergunta**, mantendo a compatibilidade com o frontend via API REST (já documentada em `docs/api/openapi.yaml`).

### Entidades planejadas

| Entidade     | Descrição                                                              |
|--------------|------------------------------------------------------------------------|
| `Quadrant`   | Agrupamento macro (ex.: "Qualidade de Vida", "Vida Profissional")      |
| `LifeArea`   | Subdivisão do quadrante (ex.: "Criatividade", "Hobbies e Diversão")    |
| `Question`   | Pergunta específica vinculada a uma área (escala 0–10)                 |
| `WheelConfig`| Configuração de uma "roda" — quais quadrantes/áreas ela inclui         |

### Regras de negócio

- Um **Quadrante** contém 1 ou mais **Áreas**.
- Uma **Área** contém 1 ou mais **Perguntas**.
- A **média de uma Área** = média das respostas das perguntas daquela área.
- A **média de um Quadrante** = média das médias das suas áreas (ponderada igualmente no MVP).
- O gráfico Roda da Vida exibe os **Quadrantes** como eixos principais (não as áreas individualmente).
- Uma tela de detalhamento por quadrante mostra o breakdown por área.

---

## Hierarquia de cálculo

```
score(Pergunta)   = resposta do usuário (0–10)
score(Área)       = média das respostas das perguntas da área
score(Quadrante)  = média dos scores das áreas do quadrante
```

### Exemplo numérico

```
Quadrante: Qualidade de Vida
├── Área: Criatividade        → perguntas: [8, 7]       → média: 7.5
├── Área: Hobbies e Diversão  → perguntas: [6, 9]       → média: 7.5
├── Área: Plenitude           → perguntas: [5, 6, 7]    → média: 6.0
└── Área: Espiritualidade     → perguntas: [4, 5]       → média: 4.5

Score do Quadrante = (7.5 + 7.5 + 6.0 + 4.5) / 4 = 6.4
```

---

## Quadrantes propostos para o MVP estendido

| Quadrante              | Áreas previstas                                                    |
|------------------------|--------------------------------------------------------------------|
| Qualidade de Vida      | Criatividade, Hobbies e Diversão, Plenitude e Felicidade, Espiritualidade |
| Saúde e Bem-estar      | Corpo e Movimento, Alimentação, Sono e Energia, Saúde Mental       |
| Vida Profissional      | Carreira e Propósito, Capacitação e Estudos, Finanças, Empreendedorismo |
| Relacionamentos        | Família, Amizades, Amor e Parceria, Comunidade e Impacto           |

> **Nota**: esta definição é inicial e pode ser refinada com pesquisa de usuários antes da implementação.

---

## Impacto no Frontend (MVP atual)

No MVP, o frontend simula a hierarquia com dados estáticos:

```ts
// src/data/categories.ts (MVP — hardcoded)
export const LIFE_CATEGORIES = [
  {
    id: 'quality-of-life',   // futuro: quadrantId
    label: 'Qualidade de Vida',
    areas: [                  // futuro: vem da API
      { id: 'creativity', label: 'Criatividade', questions: [...] },
      { id: 'hobbies',    label: 'Hobbies e Diversão', questions: [...] },
      // ...
    ],
  },
  // ...
];
```

Quando o backend existir, essa estrutura será substituída por uma chamada à API:

```ts
// Futuro: buscar hierarquia da API
const { data: wheelConfig } = useQuery(['wheel-config'], fetchWheelConfig);
```

---

## Alternativas consideradas

| Alternativa                         | Prós                           | Contras                                      |
|-------------------------------------|--------------------------------|----------------------------------------------|
| Manter flat (apenas categorias)     | Simples, já implementado       | Não permite customização ou novas dimensões  |
| **Quadrante → Área → Pergunta** ✅  | Flexível, escalável, configurável via CMS | Requer backend, mais complexo     |
| 4 níveis (Roda → Quadrante → Área → Pergunta) | Máxima flexibilidade | Overengineering para o MVP               |

---

## Consequências

- **Positivas**: Sistema configurável via painel admin; possibilidade de múltiplas "rodas" temáticas (roda do trabalho, roda da saúde); cálculo agregado por quadrante mais rico visualmente.
- **Negativas**: Requer backend, banco de dados relacional e autenticação (ver ADRs futuros).
- **Próximos passos**: Ao iniciar o backend, revisar `docs/api/openapi.yaml` para incluir endpoints de `quadrants` e `areas`.
