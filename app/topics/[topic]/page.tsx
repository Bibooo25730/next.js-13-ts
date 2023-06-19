import {Metadata} from "next";

interface PageProps {
    params: { topic:string}
}

// export const dynamicParams = false // true | false,
// const dynamicParams = false;
// export { dynamicParams };
// 我们不想渲染用户第一次访问它们时，我们想在构建时渲染它们就可以使用
// 这个函数可以是动态的，如果你需要在这里和这个获取一些数据相当于获取静态路径旧的页面路由器，但语法更简单了。
// 我们只需要返回一个数组，在这里包含我们的对象键
// 我们可以放置任何关键字，数组中的每一个元素我们将它映射到每个主题上
// ({topic}) 这不是返回一个函数
// xxx 我们已经提前获取了这些数据编译项目，无需加载立即完成。
// 如果你就只想访问这三个xxx 你可以 export  const dynamicParams = false;
// ts报错 const dynamicParams = false;export { dynamicParams };
// 在构建渲染和缓存静态页面时间，即使 URL 具有动态参数这是我们在这里返回的
export function generateStaticParams(){
    return ["xxx","xxx","xxx"].map(topic => ({topic}))
}
// 设置元数据
export function  generateMetadata({params:{topic}}:PageProps): Metadata{
    return {
        title: topic + 'haha'
    }
}

export default async function Page({params:{topic}}:PageProps) {
    return (
        <div>
            {topic}
        </div>
    )
}