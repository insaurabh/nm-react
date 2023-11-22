const CardShimmer = () => {
    return (
        <div className="shimmer-container">
            <div className="card">
                <div className="loader-shimmer-banner shimmer-animation"></div>
                <div className="loader-shimmer-content">
                    <div className="loader-shimmer-header">
                        <div className="loader-shimmer-title shimmer-animation"></div>
                        <div className="loader-shimmer-rating shimmer-animation"></div>
                    </div>
                    <div className="loader-shimmer-list shimmer-animation"></div>
                    <div className="loader-shimmer-info shimmer-animation"></div>
                </div>
            </div>
        </div>
    )
}

export default CardShimmer;