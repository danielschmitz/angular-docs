---
keyword: DataBindPage
---

{% raw %}


O Angular oferece várias formas de data binding para conectar o template (HTML) com o componente (TypeScript). O data binding é uma das funcionalidades mais poderosas do Angular, permitindo que você crie aplicações dinâmicas e interativas. Neste manual, vamos explorar os principais tipos de data binding: **Interpolação**, **Property Binding**, e **Event Binding**.

## 1. Interpolação

A interpolação é a forma mais simples de data binding no Angular. Ela permite que você exiba valores de propriedades do componente diretamente no template.

### Sintaxe:
```html
{{ expressão }}
```

### Exemplo:
Suponha que você tenha uma propriedade `title` no seu componente:

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem-vindo ao Angular 15!';
}
```

No template, você pode exibir o valor de `title` usando interpolação:

```html
<!-- app.component.html -->
<h1>{{ title }}</h1>
```

### Resultado:
```html
<h1>Bem-vindo ao Angular 15!</h1>
```

## 2. Property Binding

O property binding permite que você associe propriedades de elementos HTML a propriedades do componente. Isso é útil quando você deseja definir dinamicamente atributos de elementos HTML, como `src`, `disabled`, `class`, etc.

### Sintaxe:
```html
[property]="expressão"
```

### Exemplo:
Suponha que você tenha uma propriedade `imageUrl` no seu componente:

```typescript
// app.component.ts
export class AppComponent {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
}
```

No template, você pode usar property binding para definir o atributo `src` de uma imagem:

```html
<!-- app.component.html -->
<img [src]="imageUrl" alt="Angular Logo">
```

### Resultado:
```html
<img src="https://angular.io/assets/images/logos/angular/angular.png" alt="Angular Logo">
```

## 3. Event Binding

O event binding permite que você responda a eventos do DOM, como cliques, teclas pressionadas, movimentos do mouse, etc. Você pode associar métodos do componente a esses eventos.

### Sintaxe:
```html
(event)="método()"
```

### Exemplo:
Suponha que você tenha um método `onClick()` no seu componente:

```typescript
// app.component.ts
export class AppComponent {
  onClick() {
    alert('Botão clicado!');
  }
}
```

No template, você pode usar event binding para chamar o método `onClick()` quando o botão for clicado:

```html
<!-- app.component.html -->
<button (click)="onClick()">Clique aqui</button>
```

### Resultado:
Quando o botão for clicado, uma mensagem de alerta será exibida.

## 4. Two-Way Data Binding

O two-way data binding combina property binding e event binding para permitir que você sincronize automaticamente o valor de uma propriedade do componente com um elemento de entrada no template.

### Sintaxe:
```html
[(ngModel)]="propriedade"
```

### Exemplo:
Para usar o two-way data binding, você precisa importar o módulo `FormsModule` no seu módulo principal:

```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Agora, suponha que você tenha uma propriedade `name` no seu componente:

```typescript
// app.component.ts
export class AppComponent {
  name = '';
}
```

No template, você pode usar o two-way data binding para sincronizar o valor de `name` com um campo de entrada:

```html
<!-- app.component.html -->
<input [(ngModel)]="name" placeholder="Digite seu nome">
<p>Olá, {{ name }}!</p>
```

> **Note**
> Apesar de abordamos o _two-way data binding_ para criar um formulário, esta nao é a melhor forma de criar formulários no Angular. Existe o conceito de Reactive Forms que será abordado em outro tópico, onde é a melhor forma de criar um formulário no angular. 

### Resultado:
Quando você digitar algo no campo de entrada, o valor da propriedade `name` será atualizado automaticamente e o texto abaixo do campo será atualizado em tempo real.

## 5. Combinando Data Bindings

Você pode combinar diferentes tipos de data binding para criar interfaces de usuário dinâmicas e interativas.

### Exemplo:
Suponha que você tenha um componente com uma propriedade `isDisabled` e um método `toggleDisabled()`:

```typescript
// app.component.ts
export class AppComponent {
  isDisabled = false;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
```

No template, você pode usar property binding para desabilitar um botão com base no valor de `isDisabled` e event binding para chamar o método `toggleDisabled()` quando o botão for clicado:

```html
<!-- app.component.html -->
<button [disabled]="isDisabled" (click)="toggleDisabled()">
  {{ isDisabled ? 'Desabilitado' : 'Habilitado' }}
</button>
```

### Resultado:
O botão será desabilitado ou habilitado com base no valor de `isDisabled`, e o texto do botão será atualizado dinamicamente.

## Conclusão

O data binding é uma das funcionalidades mais poderosas do Angular, permitindo que você crie aplicações dinâmicas e interativas com facilidade. Com a interpolação, property binding, event binding e two-way data binding, você pode conectar o template ao componente de forma eficiente e criar interfaces de usuário ricas e responsivas.

Este manual cobre os conceitos básicos de data binding no Angular 15. À medida que você avança no desenvolvimento com Angular, você encontrará situações mais complexas onde esses conceitos serão combinados e expandidos para criar aplicações ainda mais poderosas.

{% endraw %}