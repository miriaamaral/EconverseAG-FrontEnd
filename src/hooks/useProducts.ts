import { useState, useEffect } from 'react';
import type { Product, ProductsApiResponse } from '../models/product.model';

const API_URL = '/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data: ProductsApiResponse = await response.json();
        
        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          throw new Error('Formato de resposta inválido da API');
        }
      } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        setError('Não foi possível carregar os produtos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};