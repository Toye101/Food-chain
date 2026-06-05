export default function RecentFeedbacks() {
  const feedbacks = [
    {
      name: 'Remisola Adeola',
      initials: 'R',
      text: 'This delivery service is consistent. Whether it\'s rice, swallow or snacks, they always deliver well within Elizade. Highly recommended for students.',
      rating: 5,
      bgColor: 'bg-gray-300',
      initBg: 'bg-black text-white',
      stars: ['text-yellow-400', 'text-yellow-400', 'text-yellow-400', 'text-yellow-400', 'text-yellow-400'],
    },
    {
      name: 'Lanre Gbadamusi',
      initials: 'L',
      text: 'Ordered fried rice and salad for lunch, got it in perfect condition. This service has saved me so many times during exams week.',
      rating: 4,
      bgColor: 'bg-orange-500',
      initBg: 'bg-black text-white',
      stars: ['text-yellow-400', 'text-yellow-400', 'text-yellow-400', 'text-yellow-400', 'text-gray-400'],
    },
    {
      name: 'Kemi Bobola',
      initials: 'K',
      text: 'Consistent and dependable. Whether it\'s breakfast or dinner, they always deliver good food within campus without issues.',
      rating: 5,
      bgColor: 'bg-black text-white',
      initBg: 'bg-orange-500 text-white',
      stars: ['text-yellow-400', 'text-yellow-400', 'text-yellow-400', 'text-yellow-400', 'text-yellow-400'],
    },
  ];

  return (
    <section className="px-8 py-16 bg-[#F5EFE7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-orange-500">Recent Feedbacks</h2>

        <div className="space-y-6">
          {feedbacks.map((feedback, index) => (
            <div key={index} className={`rounded-2xl p-8 flex gap-6 ${feedback.bgColor}`}>
              {/* Avatar */}
              <div className={`${feedback.initBg} w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 text-3xl font-bold`}>
                {feedback.initials}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{feedback.name}</h3>
                  <div className="flex gap-1">
                    {feedback.stars.map((starColor, i) => (
                      <span key={i} className={`text-lg ${starColor}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <p className={feedback.bgColor === 'bg-black text-white' ? 'text-gray-100' : 'text-gray-700'}>
                  {feedback.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
