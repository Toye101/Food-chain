export default function RegularPicks() {
  const picks = [
    {
      name: 'Crispy Chicken',
      price: 'N2000',
      unit: 'per Piece',
      restaurant: 'Laughter Kitchen',
      image: '/componet_img/Descargar ai generado frito pollo png aislado en transparente antecedentes gratis 1.png',
      description: 'Crispy golden chicken pieces served hot with a spicy kick.',
    },
    {
      name: 'Jollof Rice',
      price: 'N450',
      unit: 'per Scoop',
      restaurant: 'Dunkayce',
      image: '/componet_img/Fried Rice in a Bowl on Transparent Background 1.png',
      description: 'Spicy jollof rice served with mixed vegetables and herbs.',
    },
    {
      name: 'Fried Rice',
      price: 'N500',
      unit: 'per Scoop',
      restaurant: 'Dunkayce',
      image: '/componet_img/npD26 1.png',
      description: 'Savory fried rice loaded with carrots, peas, and spices.',
    },
    {
      name: 'Shawarma',
      price: 'N3500',
      unit: 'per Piece',
      restaurant: 'Grills',
      image: '/componet_img/delicioso carne de vaca shawarma envuelve apilado, Listo a comer, en transparente antecedentes 1.png',
      description: 'A classic beef shawarma wrap packed with fresh veggies.',
    },
  ];

  return (
    <section className="px-8 py-16 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">Regular Picks</h2>

        <div className="grid grid-cols-4 gap-6">
          {picks.map((pick, index) => (
            <div key={index} className="border-2 border-gray-400 rounded-2xl overflow-hidden hover:border-orange-500 transition">
              <div className="bg-gray-300 h-48 flex items-center justify-center">
                <img src={pick.image} alt={pick.name} className="w-40 h-40 object-contain" />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2 text-black">{pick.name}</h3>
                <p className="text-sm text-black mb-3">{pick.description}</p>
                <p className="text-black text-sm mb-4">
                  {pick.price} <span className="text-gray-500">{pick.unit}</span>
                </p>

                <button className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold text-sm hover:bg-orange-600">
                  {pick.restaurant}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
