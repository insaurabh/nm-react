import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>{error?.error?.message}</h1>
            <h2>Take me to <a href='/'>Home</a> page</h2>
        </>
    )
}

export default ErrorPage;