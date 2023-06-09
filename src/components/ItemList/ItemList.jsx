import { memo } from 'react'
import Item from '../Item/Item';

const ItemList = memo(
    ({products}) => {
        console.log(products);
        return (
                <>
                    { products.map((prod) =>
                        <Item prod={prod} key={prod.id}/>
                    )}
                </>
        );
    }
)

export default ItemList