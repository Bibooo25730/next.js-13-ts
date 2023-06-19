// "use client"
import Image from 'next/image'
// import {useEffect} from "react";

export default async function Home() {
  // 默认情况下在 next.13 应用程序路路由器中中所有组件都是服务器组件，默认意味着无论我们使用什么代码放在这里只会在服务器永远不会到达客户端，
  // 我们甚至可以进行 API 调用
  // 当然就不能用 hooks了
  // 可以在顶端 "use client"
  // 可以定义报错路由了
// throw  Error('123')
//   await  new Promise(resolve => setTimeout(resolve,3000))

  return (
    <main className=" p-24">
        <h2>32131</h2>
    </main>
  )
}
