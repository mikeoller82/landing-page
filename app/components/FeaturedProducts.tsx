import Image from 'next/image'

interface Product {
  node: {
    id: string
    title: string
    handle: string
    priceRange: {
      minVariantPrice: {
        amount: string
      }
    }
    images: {
      edges: {
        node: {
          originalSrc: string
          altText: string
        }
      }[]
    }
  }
}

interface FeaturedProductsProps {
  products: Product[]
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(({ node: product }) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.images.edges[0]?.node.originalSrc || '/placeholder.svg'}
                  alt={product.images.edges[0]?.node.altText || product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}</span>
                  <a 
                    href={`/products/${product.handle}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    View Product
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

