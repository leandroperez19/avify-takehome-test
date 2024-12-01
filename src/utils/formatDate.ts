export const formattedDate = (date: string | Date, locale = "en-US") => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleString(locale, {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    return formattedDate;
};
