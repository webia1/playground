# Angular Documentation

## Angular Setup

1.Install Angular CLI

`npm install -g @angular/cli`

2.Create new Project

`ng new mfs`

3.Generate Component

`ng g c components/dashboard`

4.Create Routes

`app-routing.modules.ts`

```ts
const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },

  {
    path: "dashboard",
    component: DashboardComponent,
  },

  {
    path: "**",
    component: Error404Component,
  },
];
```
