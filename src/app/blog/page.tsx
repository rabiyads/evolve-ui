export default function CircleCardCarousel() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <h2 className="text-3xl font-semibold mb-6">Our Features</h2>

        {/* Carousel */}
        <div className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth mt-4">

          {/* Circle Card 1 */}
          <div className="min-w-[200px] h-[200px] 
            bg-gradient-to-br from-[#0a2342] to-[#1e3a8a] 
            text-white rounded-full flex flex-col items-center justify-center 
            text-center shadow-lg flex-shrink-0 snap-center
            hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-1">Feature 1</h3>
            <p className="text-sm px-4 text-gray-200">Short description</p>
          </div>

          {/* Circle Card 2 */}
          <div className="min-w-[200px] h-[200px] 
            bg-gradient-to-br from-[#0a2342] to-[#1e3a8a] 
            text-white rounded-full flex flex-col items-center justify-center 
            text-center shadow-lg flex-shrink-0 snap-center
            hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-1">Feature 2</h3>
            <p className="text-sm px-4 text-gray-200">Short description</p>
          </div>

          {/* Circle Card 3 */}
          <div className="min-w-[200px] h-[200px] 
            bg-gradient-to-br from-[#0a2342] to-[#1e3a8a] 
            text-white rounded-full flex flex-col items-center justify-center 
            text-center shadow-lg flex-shrink-0 snap-center
            hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-1">Feature 3</h3>
            <p className="text-sm px-4 text-gray-200">Short description</p>
          </div>

          {/* Circle Card 4 */}
          <div className="min-w-[200px] h-[200px] 
            bg-gradient-to-br from-[#0a2342] to-[#1e3a8a] 
            text-white rounded-full flex flex-col items-center justify-center 
            text-center shadow-lg flex-shrink-0 snap-center
            hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold mb-1">Feature 4</h3>
            <p className="text-sm px-4 text-gray-200">Short description</p>
          </div>

        </div>
      </div>
    </section>
  );
}
