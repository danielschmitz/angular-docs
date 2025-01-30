---
keyword: ComponentesTemplates
---

{% raw %}

No Angular, **componentes** são a base da arquitetura de uma aplicação. Eles são responsáveis por controlar uma parte da interface do usuário (UI) e são compostos por três partes principais: o **template** (HTML), a **classe** (TypeScript) e os **metadados** (decorators). Já os **templates** são usados para definir a estrutura HTML que será renderizada na tela, podendo ser criados de forma inline (dentro do componente) ou externa (em um arquivo separado). Além disso, a **interpolação de dados** é uma das formas mais simples de exibir dados dinâmicos no template.

Abaixo, vamos explorar cada um desses tópicos com exemplos práticos.

## 1. Criação de Componentes com Angular CLI

O Angular CLI (Command Line Interface) é uma ferramenta poderosa que facilita a criação e gerenciamento de componentes. Para criar um novo componente, basta usar o comando `ng generate component` ou sua forma abreviada `ng g c`.

### Explicação:
Quando você cria um componente com o Angular CLI, ele gera automaticamente os arquivos necessários (TypeScript, HTML, CSS e testes) e atualiza o módulo principal da aplicação para incluir o novo componente.

### Exemplo 1: Criando um componente chamado `meu-componente`

```bash
ng generate component meu-componente
```
Isso criará uma pasta chamada `meu-componente` com os seguintes arquivos:
- `meu-componente.component.ts` (classe do componente)
- `meu-componente.component.html` (template externo)
- `meu-componente.component.css` (estilos)
- `meu-componente.component.spec.ts` (testes)

### Exemplo 2: Criando um componente com um prefixo personalizado
```bash
ng generate component shared/meu-componente --prefix app
```
Isso criará um componente dentro da pasta `shared` com o prefixo `app` no seletor (`app-meu-componente`).

---

## 2. Uso de Templates Inline vs. Templates Externos

No Angular, os templates podem ser definidos de duas formas: **inline** (diretamente no arquivo TypeScript) ou **externos** (em um arquivo HTML separado).

### Explicação:

- **Templates Inline**: Úteis para componentes simples, onde o HTML é curto e não requer um arquivo separado. Eles são definidos diretamente no decorator `@Component` usando a propriedade `template`.
- **Templates Externos**: Recomendados para componentes mais complexos, onde o HTML é extenso. Eles são definidos em um arquivo `.html` separado e referenciados no decorator `@Component` usando a propriedade `templateUrl`.

### Exemplo 1: Template Inline

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `<h1>Este é um template inline!</h1>`
})
export class InlineTemplateComponent {}
```
Aqui, o HTML é definido diretamente na propriedade `template`.

### Exemplo 2: Template Externo
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-externo-template',
  templateUrl: './externo-template.component.html'
})
export class ExternoTemplateComponent {}
```
Neste caso, o HTML está em um arquivo separado chamado `externo-template.component.html`.

## 3. Interpolação de Dados ( {{ ... }} )

A interpolação de dados é uma das formas mais comuns de exibir dados dinâmicos no template. Ela usa a sintaxe &#123;&#123; &#125;&#125; para vincular propriedades da classe do componente ao template.

#### Explicação:

A interpolação permite que você insira valores de variáveis, expressões ou chamadas de métodos diretamente no HTML. O Angular avalia automaticamente o conteúdo dentro das chaves e o exibe no template.

#### Exemplo 1: Exibindo uma variável
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  template: `<p>Olá, {{ nome }}!</p>`
})
export class InterpolacaoComponent {
  nome = 'João';
}
```

No template, `{{ nome }}` será substituído por "João".

#### Exemplo 2: Usando uma expressão

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  template: `<p>A soma de 2 + 2 é {{ 2 + 2 }}</p>`
})
export class InterpolacaoComponent {}

```
Aqui, `{{ 2 + 2 }}` será avaliado como `4`.

{% endraw %}

### Conclusão

Os componentes e templates são fundamentais no Angular, permitindo a criação de interfaces dinâmicas e reutilizáveis. Com o Angular CLI, a criação de componentes é simplificada, enquanto a escolha entre templates inline e externos oferece flexibilidade para diferentes cenários. A interpolação de dados, por sua vez, é uma ferramenta poderosa para exibir informações dinâmicas de forma simples e eficiente. Dominar esses conceitos é essencial para construir aplicações Angular robustas e bem estruturadas.
