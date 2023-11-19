export function formatDate(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed, hence +1
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}
