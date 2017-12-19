export const formatPrice = price => 
        price.toLocaleString(
            'de-DE', { style: 'currency', currency: 'EUR' 
        });

export const findById = (id, list) => 
    list.find(item => item.id === id);

  
export const incrementRating = listItem => {
    return (
        { ...listItem, rating: 1 + listItem.rating++ }
    );
}

export const updateShopItems = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex+1)
    ];
}