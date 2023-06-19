import {PlashImage} from "@/app/module/plash-image";
import Image from "next/image";

export default async function  Page(){
    const response = await fetch("https://www.dmoe.cc/random.php?return=json")
    let result:PlashImage = await response.json()
    // 计算宽高度
    console.log("result",result)
    const  width = Math.min(500,result.width)
    const  height = (width / result.width) * result.height;
    return (
        <div className="d-flex flex-column align-items-center">
            图片
            <Image
              src={result.imgurl}
              width={width}
              height={height}
              alt='img'
            />
        </div>
    )
}