import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titleMap = {
    '/': "Welcome to Ranjan Restro",
    '/about-us/': 'About Chefs',
    '/contact/': 'Contact Chef'
};

/**
 * We can react-helmet for proper handling and more features like meta
 * For now used custom hooks
 */
const usePageTitle = (pageTitle) => {
    const { pathname } = useLocation();
    const prevTitle = document.title;
    let newTitle = '';

    if (titleMap[pathname]) {
        newTitle = titleMap[pathname]
    }

    // we can handle dynamic routes
    const recipePageRegex = /^\/recipe\/(\w+)$/;
    if (recipePageRegex.test(pathname)) {
        newTitle = 'Recipe page - Ranjan Restro'
    }

    if (pageTitle) {
        newTitle = pageTitle;
    }

    useEffect(() => {
        document.title = newTitle
        return () => {
            document.title = prevTitle
        }
    }, [])

    return null;
}

export default usePageTitle;