export default function HowWeWork() {
  return (
    <section className="px-8 py-16 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">How We Work</h2>

        <div className="grid grid-cols-3 gap-8">
          {/* Fast Delivery Card */}
          <div className="border-2 border-gray-400 rounded-2xl p-8 bg-white">
            <h3 className="text-2xl font-bold mb-6">Fast Delivery</h3>

            <div className="space-y-3 text-gray-700 text-sm mb-6">
              <p>We don't just deliver – we deliver fast.</p>
              <p>Once your order is picked up, our riders use intelligent route optimization and real-time traffic updates to get it to you in the shortest time possible.</p>
              <p className="font-semibold">Average delivery time: 25-35 minutes</p>
              <p>No delays. No excuses. Just speed and reliability.</p>
            </div>

            {/* Placeholder icons */}
            <div className="space-y-2 text-gray-300">
              <div className="h-4 bg-gray-300 rounded w-full" />
              <div className="h-4 bg-gray-300 rounded w-3/4" />
            </div>
          </div>

          {/* Safe Transaction Card */}
          <div className="border-2 border-orange-500 rounded-2xl p-8 bg-orange-500 text-white">
            <h3 className="text-2xl font-bold mb-6">Safe Transaction</h3>

            <div className="space-y-3 text-sm mb-6">
              <p>Your security is our top priority. Every payment is encrypted and processed securely through trusted gateways. We support cards, bank transfers, mobile money.</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>256-bit SSL encryption</li>
                <li>No hidden charges</li>
                <li>Full transaction protection</li>
              </ul>
            </div>
          </div>

          {/* Icon Card */}
          <div className="border-2 border-gray-400 rounded-2xl overflow-hidden bg-black h-[360px]">
            <img src="/componet_img/Frame 24.png" alt="FoodChain Icon" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
