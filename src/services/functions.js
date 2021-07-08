export const convertDate = ( date ) => {
    if (!date) return;

    const newDate = date.split('-');

    return `${newDate[1]}/${newDate[0]}/${newDate[2]}`;
}

export const convertTags = ( tags ) => {
    if (!tags) return;
    
    let newTags = [];
    
    tags.forEach(tag => newTags.push(tag.name));

    return newTags.join(', ');
}