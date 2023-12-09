import React, { useEffect, useRef } from 'react'
import placeholder from './../assets/placeholder.jpg'

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// In progress
const ImageLoad = ({ children }) => {
    const imageRef = useRef(null);
    let options = {
        root: document.querySelector('.restro-container'),
        rootMargin: "0px",
        threshold: 0.75,
    }

    useEffect(() => {
        imageRef.current.src = placeholder;

        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting &&
                    entry.intersectionRatio >= 0.75 &&
                    !imageRef?.current?.classList?.contains('image-loaded')) {
                    imageRef?.current?.classList?.add('image-loaded');
                    imageRef.current.src = imageRef.current.getAttribute('data-src')
                    if (entry?.target) {
                        observer.unobserve(entry.target);
                    }
                }
            });
        };

        let observer = new IntersectionObserver(callback, options);
        let targetImages = document.querySelectorAll('img');
        if (targetImages?.length !== 0) {
            targetImages.forEach(img => {
                observer.observe(img);
            });
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
        // console.log('imageRef', imageRef.current.getAttribute('data-src'))
        //     setTimeout(() => {
        //         imageRef.current.src = imageRef.current.getAttribute('data-src')
        //     }, 100);
    }, [])

    return (
        <>
            <img
                ref={imageRef}
                {...children.props}
                data-src={children?.props?.src}
                alt={children?.props?.alt || 'Recipe image'}
                title={children?.props?.title || 'Recipe image'}

            />
        </>
    )
}

export default ImageLoad