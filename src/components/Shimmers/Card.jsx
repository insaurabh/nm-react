const CardShimmer = () => {
    return (
        <div className="shimmer-container">
            <div class="card">
                <div class="loader-shimmer-banner shimmer-animation"></div>
                <div class="loader-shimmer-content">
                    <div class="loader-shimmer-header">
                        <div class="loader-shimmer-title shimmer-animation"></div>
                        <div class="loader-shimmer-rating shimmer-animation"></div>
                    </div>
                    <div class="loader-shimmer-list shimmer-animation"></div>
                    <div class="loader-shimmer-info shimmer-animation"></div>
                </div>
            </div>
        </div>
    )
}

export default CardShimmer;