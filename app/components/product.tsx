import { ContentTransformer } from "@crystallize/react-content-transformer";
import { Image } from "@crystallize/react-image";
import { ProductQuery } from "../crystallize/queries/product.generated";
import { componentContent } from "../crystallize/utils/componentContent";
import { ProductBody } from "./product-body";
import { VariantSelector } from "./variant-selector";
import { RelatedProducts } from "./related-products";
import { useBasket } from "./basket";
import { useState } from "react";
import { useNavigate } from "remix";
import React from "react";

interface ProductProps {
  product: ProductQuery["product"];
}

export const Product = ({ product }: ProductProps) => {
  let item = componentContent(product, "Product");
  let navigate = useNavigate();

  const [selectedVariant, setSelectedVariant] = useState(item.variants[0]);
  const basket = useBasket();

  const onVariantChange = (variant) => setSelectedVariant(variant);

  const buy = () => {
    basket?.actions?.addItem({
      id: selectedVariant.id,
      sku: selectedVariant.sku,
      path: item.path,
      priceVariantIdentifier: "default",
      stock: selectedVariant.stock,
    });
    navigate("/cart", { replace: false });
  };

  return (
    <div className="py-5">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="max-w-2xl mx-auto flex items-center space-x-2 lg:max-w-7xl"
        >
          <li>
            <div className="flex items-center">
              <a href="/" className="mr-2 text-sm font-medium text-gray-900">
                Главная
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <a
              href={item.path}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {item.name}
            </a>
          </li>
        </ol>
      </nav>

      {/* Image gallery */}
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <Image
            {...item.defaultVariant.firstImage}
            sizes="400px"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      {/* Product info */}
      <div className="max-w-2xl mx-auto pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {item.name}
          </h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:mt-0 lg:row-span-3">
          <h2 className="sr-only">Product information</h2>
          <p className="tracking-tight text-3xl text-gray-900 font-semibold">
            {selectedVariant.price} ₽
          </p>

          {/* Variants */}
          <div className="mt-10">
            <VariantSelector
              variants={item.variants}
              selectedVariant={selectedVariant}
              onVariantChange={onVariantChange}
            />
          </div>

          <button
            onClick={() => buy()}
            className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Купить
          </button>
        </div>

        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">
                <ContentTransformer
                  json={
                    componentContent(item.summary.content, "RichTextContent")
                      ?.json as [any]
                  }
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center mt-10 mb-5">
        <div className="flex flex-col text-text w-auto">
          <h1 className="font-extrabold text-5xl mb-3">{item.name}</h1>
          <ContentTransformer
            json={
              componentContent(item.summary.content, "RichTextContent")
                ?.json as [any]
            }
          />
        </div>
        <Image
          {...item.defaultVariant.firstImage}
          sizes="400px"
          className="w-full rounded-sm"
        />
        <div className="flex flex-col">
          <VariantSelector
            variants={item.variants}
            selectedVariant={selectedVariant}
            onVariantChange={onVariantChange}
          />
        </div>
      </div>
      <div className="flex z-10 justify-between lg:w-5/12 w-8/12 mx-auto bg-white p-5 text-text rounded-xl">
        <div>
          <p className="font-semibold text-sm">Итого</p>
          <p className="font-bold text-lg">${selectedVariant.price}</p>
        </div>
        <button
          onClick={() => buy()}
          className="bg-background2 px-4 rounded-xl"
        >
          Купить
        </button>
      </div>
      <div>
        <ProductBody body={item.body} table={item.table} />
        <p className="text-text mb-4 font-semibold">Похожие букеты</p>
      </div>
      <RelatedProducts related={item.related} />
    </div>
  );
};