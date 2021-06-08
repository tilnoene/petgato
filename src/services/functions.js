export const convertDate = ( date ) => {
    const newDate = date.split('-');

    return `${newDate[1]}/${newDate[0]}/${newDate[2]}`;
}

export const convertTags = ( tags ) => {
    let newTags = [];
    
    tags.forEach(tag => newTags.push(tag.name));

    return newTags.join(', ');
}