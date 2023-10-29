import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.error(err);
    return (
        <>
         <div>
            Dang!
         </div>
        </>
    )
}

export default Error