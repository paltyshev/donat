import { ContentTransformer } from "@crystallize/react-content-transformer";
import { componentContent } from "../crystallize/utils/componentContent";
import { ProductQuery } from "../crystallize/queries/product.generated";
import { Image } from "@crystallize/react-image";
import ReactPlayer from "react-player";
import React from "react";

interface ProductBodyProps {
  body: ProductQuery["product"]["body"];
  table: ProductQuery["product"]["table"];
}

export const ProductBody = ({ body, table }: ProductBodyProps) => {
  return (
    <div className="flex flex-col gap-3 w-full mx-auto z-10">
      {componentContent(
        body?.content,
        "ParagraphCollectionContent"
      ).paragraphs.map((paragraph, index) => (
        <div key={index} className="flex flex-col justify-between">
          <div className="my-3 text-text">
            {paragraph.title && (
              <h2 className="font-semibold text-2xl mb-4">
                {paragraph?.title.text}
              </h2>
            )}
            {paragraph.body && (
              <div>
                <ContentTransformer json={paragraph.body?.json as [any]} />
              </div>
            )}
          </div>
          {paragraph.images && (
            <div className="my-5">
              {paragraph?.images?.map((image) => (
                <Image
                  {...image}
                  sizes="200px"
                  className="rounded-xl overflow-hidden"
                  loading="lazy"
                />
              ))}
            </div>
          )}
          {paragraph.videos && (
            <div className="my-5">
              <ReactPlayer
                controls
                url={
                  paragraph?.videos &&
                  paragraph?.videos.length > 0 &&
                  paragraph?.videos[0].playlists[1]
                }
                width="100%"
                height="100%"
                light={
                  paragraph?.videos &&
                  paragraph?.videos.length > 0 &&
                  paragraph?.videos[0].thumbnails &&
                  paragraph?.videos[0].thumbnails.length > 0 &&
                  paragraph?.videos[0].thumbnails[0].url
                }
                playing={true}
              />
            </div>
          )}
        </div>
      ))}
      {componentContent(table?.content, "PropertiesTableContent").sections.map(
        (section, index) => (
          <div
            key={index}
            className="flex lg:flex-row flex-col justify-between text-text my-20"
          >
            <div>
              <h3 className="font-bold text-2xl py-2">{section?.title}</h3>
              <p className="italic">букета</p>
            </div>
            <div className="lg:w-7/12 w-full">
              {section.properties.map((property, index) => (
                <div
                  key={index}
                  className="flex justify-between my-3 even:bg-grey px-5 py-2"
                >
                  <p>{property.key}</p>
                  <p>{property.value}</p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};