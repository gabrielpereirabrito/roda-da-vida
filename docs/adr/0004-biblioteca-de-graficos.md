# ADR 0004 — Biblioteca de Gráficos (Roda da Vida)

**Status**: Aceito  
**Data**: 2026-10-14  
**Autores**: Equipe Roda da Vida

---

## Contexto

O elemento visual central do MVP é a **Roda da Vida**: um gráfico radial (radar/spider) com N eixos (um por categoria de vida), onde cada eixo vai de 0 a 10 representando a média das respostas daquela categoria.

Precisamos de uma biblioteca que:
- Suporte **Radar Chart** nativamente
- Seja compatível com React
- Permita customização visual (cores, labels, animações)
- Tenha boa manutenção e documentação

## Decisão

Adotamos **Recharts v2** como biblioteca de gráficos.

## Alternativas consideradas

| Alternativa       | Prós                                       | Contras                                            |
|-------------------|--------------------------------------------|----------------------------------------------------|
| **Recharts** ✅   | API declarativa React, Radar nativo, leve  | —                                                  |
| Chart.js          | Maduro, muitos tipos de gráfico            | API imperativa; wrapper react-chartjs-2 adiciona camada |
| D3.js             | Máxima flexibilidade                       | Curva de aprendizado alta; muito código para MVP   |
| Victory           | API React declarativa                      | Bundle maior; menos exemplos de radar              |
| ApexCharts        | Bonito out-of-the-box                      | Wrapper React menos mantido                        |

## Componente principal

```tsx
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

<RadarChart data={categoryAverages}>
  <PolarGrid />
  <PolarAngleAxis dataKey="category" />
  <PolarRadiusAxis domain={[0, 10]} />
  <Radar dataKey="score" fill="..." fillOpacity={0.6} />
</RadarChart>
```

## Consequências

- **Positivas**: Integração declarativa com React; animações embutidas; customização de cores via props.
- **Negativas**: Recharts v3 (alpha) existe mas ainda instável — ficar em v2 por ora.
- **Neutras**: Se precisarmos de gráficos muito customizados no futuro, podemos complementar com D3 para casos específicos.
