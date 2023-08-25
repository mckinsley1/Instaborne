const stats = [
    { id: 1, name: 'Ans d’expériences', value: '+5' },
    { id: 2, name: 'De clients satisfaits', value: '100%' },
    { id: 3, name: 'Plus rapides', value: '2X' },
  ]
  
  export default function AboutStat() {
    return (
      <div>
        <div className="mx-auto max-w-7xl max-[640px]:hidden">
          <dl className="flex gap-y-16 gap-x-8 text-left">
            {stats.map((stat) => (
              <div key={stat.id} className="flex max-w-xs flex-col gap-y-1">
                <dt className="text-sm leading-3 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold text-[#02B5A1] sm:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  