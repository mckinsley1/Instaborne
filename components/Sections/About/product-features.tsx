export default function PrFeAbout() {
  const stats = [
    { id: 1, name: "Ans d’expérience", value: "+5" },
    { id: 2, name: "De clients satisfaits", value: "100%" },
    { id: 3, name: "Installation rapides", value: "2x" },
  ];

  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Qui sommes nous ?
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Instaborne vous assure en tout temps un service de qualité avec
              son équipe d’expert qualifié et spécialisé en borne de recharge
              électrique.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Cette équipe d’expert à la capacité de répondre aux besoins des
              clients, et, est également en mesure de résoudre de nouvelles
              problématiques rencontré sur le terrain afin de vous satisfaire.
            </p>
            <div className="mt-10 flex-auto">
              <div className="mx-auto max-w-7xl max-[640px]:hidden">
                <dl className="flex gap-y-16 gap-x-8 text-left">
                  {stats.map((stat) => (
                    <div
                      key={stat.id}
                      className="flex max-w-xs flex-col gap-y-1"
                    >
                      <dt className="text-sm leading-3 text-gray-600">
                        {stat.name}
                      </dt>
                      <dd className="order-first text-3xl font-semibold text-[#02B5A1] sm:text-2xl">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-start gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-start">
              <img
                src="/contactus.jpeg"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
