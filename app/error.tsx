"use client"



interface ErrorPageProps {
    error:Error,
    reset:()=>void
}

export  default  function error({error,reset}:ErrorPageProps){
    return (
        <div>
            <h1>erroe</h1>
            <button onClick={reset}>try again</button>
        </div>
    )
}