# AAG-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Abraham Alvarado

## Ejemplo

```
 import { ProductCard } from 'do-product-card
```

```
<ProductCard 
    product={ product } 
    className="bg-dark text-white"
    initialValues={{
        count: 4,
        // maxCount: 15
    }}
>
    {
    ({ reset, increaseBy, maxCount, count, isMaxCountReached, ...args }) => (
        <>
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons/>   
        </>
    ) }
</ProductCard>
```