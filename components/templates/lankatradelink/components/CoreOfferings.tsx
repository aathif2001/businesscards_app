"use client";
import { useState } from "react";
import { GalleryModal } from "./GalleryModal";
import { Wheat, Box, Flame, Candy, CupSoda, Truck, Eye, PhoneCall } from "lucide-react";

const offerings = [
  {
    icon: Wheat,
    title: "Bulk Baking Ingredients",
    description: "Wholesale quantities of flour, sugar, butter, baking powder, yeast, and all your bakery essentials — sourced from certified suppliers.",
    tag: "Top Seller",
  },
  {
    icon: Box,
    title: "Packaging & Containers",
    description: "Food-grade boxes, bags, trays, cups, and sealing solutions for retail bakeries and food businesses of all sizes.",
    tag: null,
  },
  {
    icon: Flame,
    title: "Spices & Dry Rations",
    description: "Import-grade whole and ground spices, lentils, rice, dhal, and dry provisions — consistent quality at wholesale prices.",
    tag: null,
  },
  {
    icon: Candy,
    title: "Confectionery Supplies",
    description: "Chocolate compounds, sprinkles, edible decorations, fondant, marzipan, and a full range of confectionery ingredients.",
    tag: null,
  },
  {
    icon: CupSoda,
    title: "Beverage Syrups & Powders",
    description: "Flavoured syrups, juice concentrates, tea and coffee powders, and milk-based drink mixes for retail and hospitality.",
    tag: null,
  },
  {
    icon: Truck,
    title: "Island-wide Distribution",
    description: "Our dedicated delivery fleet provides next-day delivery across all Sri Lankan provinces — reliable, tracked, and on time.",
    tag: "Free Delivery",
  },
];

export function CoreOfferings() {
  const [galleryCategory, setGalleryCategory] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 px-4" style={{ backgroundColor: "#FFFDF9" }} id="products">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
              <span style={{ color: "#D4A359" }} className="text-xs tracking-widest uppercase font-medium">
                What We Supply
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "#D4A359" }} />
            </div>
            <h2 style={{ color: "#3D2314" }} className="mb-3">Our Product Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Everything your retail shop or bakery needs — sourced from trusted importers and delivered to your door.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative border border-amber-100 rounded-xl p-6 hover:shadow-md transition-all group flex flex-col bg-white"
                >
                  {item.tag && (
                    <span
                      className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: "#D4A359" }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: "#3D2314" }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 style={{ color: "#3D2314" }} className="mb-2 text-base font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.description}</p>

                  <div className="flex gap-2 mt-5">
                    <button
                      onClick={() => setGalleryCategory(item.title)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold border transition-all hover:shadow-sm active:scale-95"
                      style={{ borderColor: "#D4A359", color: "#D4A359", backgroundColor: "transparent" }}
                    >
                      <Eye size={13} />
                      View
                    </button>
                    <a
                      href="#quote"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ backgroundColor: "#D4A359" }}
                    >
                      <PhoneCall size={13} />
                      Order Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {galleryCategory && (
        <GalleryModal category={galleryCategory} onClose={() => setGalleryCategory(null)} />
      )}
    </>
  );
}
