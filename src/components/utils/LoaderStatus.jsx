import { useLoaderData, useNavigation, useFetchers, useRevalidator } from "react-router-dom";

const LoaderStatus = () => {
    let navigation = useNavigation();
    let fetchers = useFetchers()
    let revalidator = useRevalidator();
    let fetcherInProgress = fetchers.some((f) =>
        ["loading", "submitting"].includes(f.state)
    );

    return (
        <>
            <div className="progress-bar" >
                {navigation.state != 'idle' && <p>Navigation in progress...</p>}
                {revalidator.state !== "idle" && <p>Revalidation in progress...</p>}
                {fetcherInProgress && <p>Fetcher in progress...</p>}
            </div>
        </>
    )
}

export default LoaderStatus;