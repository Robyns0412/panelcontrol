import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({products}) => {
  /*const { productId } = useParams();*/

  /*const products = [
    {
      id: 1,
      name: 'Base de maquillaje',
      brand: 'Maybelline',
      price: 15.99,
      description: 'Una base de maquillaje de alta cobertura para un acabado impecable.',
    },
    {
      id: 2,
      name: 'Paleta de sombras',
      brand: 'Urban Decay',
      price: 49.99,
      description: 'Una paleta de sombras con una amplia gama de colores para crear looks versátiles.',
    },
    {
      id: 3,
      name: 'Máscara de pestañas',
      brand: 'Benefit',
      price: 24.99,
      description: 'Una máscara de pestañas que proporciona volumen y longitud a tus pestañas.',
    },
    {
      id: 4,
      name: 'Labial líquido',
      brand: 'NYX',
      price: 9.99,
      description: 'Un labial líquido de larga duración con acabado mate.',
    },
    {
      id: 5,
      name: 'Corrector de ojeras',
      brand: 'NARS',
      price: 29.99,
      description: 'Un corrector de ojeras que ilumina y cubre imperfecciones.',
    },
    {
      id: 6,
      name: 'Rubor en polvo',
      brand: 'Milani',
      price: 12.99,
      description: 'Un rubor en polvo altamente pigmentado para un aspecto natural.',
    },
    {
      id: 7,
      name: 'Brochas de maquillaje',
      brand: 'Real Techniques',
      price: 19.99,
      description: 'Un set de brochas de maquillaje para aplicar y difuminar productos.',
    },
    {
      id: 8,
      name: 'Iluminador en polvo',
      brand: 'Becca',
      price: 34.99,
      description: 'Un iluminador en polvo que resalta tus rasgos faciales.',
    },
    {
      id: 9,
      name: 'Delineador líquido',
      brand: 'Stila',
      price: 21.99,
      description: 'Un delineador líquido de larga duración para trazar líneas precisas.',
    },
  ];*/

  const product = products.find(p => p.id === parseInt(4));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Marca: {product.brand}</p>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;



