export const findById = (id, list) => list.find(item => item.id === id);

export const toggleClass = (listItem, list) => {

    return(
        {
            ...listItem,
            isActive: !listItem.isActive,
        }
    );
};

export const updateList = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id);
    return [
      ...list.slice(0, updatedIndex),
      updated,
      ...list.slice(updatedIndex+1)
    ]
};

export const partial = (fn, ...args) => fn.bind(null, ...args);

export const formatPrice = (price) => price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });