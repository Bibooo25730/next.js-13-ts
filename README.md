
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### next:13

- 默认情况下在 next.13 应用程序路路由器中中所有组件都是服务器组件，默认意味着无论我们使用什么代码放在这里只会在服务器永远不会到达客户端，
- 我们甚至可以进行 API 调用
- 当然就不能用 hooks了
- 可以在顶端 "use client"

````
<body className={inter.className}>
      <Container>{children}</Container>
</body>
````
因为我们当通过 props 的组件，react 必须事先知道内容是什么，children它只是必须在包装器组件中保留一个插槽，所以有一个空洞。

可以说在容器组件中，我们稍后将渲染服务器，但是如果我们硬编码，直接进入容器组件，然后它是客户端组件。

````
<body className={inter.className}>
      <SSRProvider> <Container>{children}</Container></SSRProvider>
</body>
````
用这个 SSR 包裹容器提供者这只是 react 必需的，每当我们使用服务端引导时，渲染否则会有问题。

# next.js-13-ts
