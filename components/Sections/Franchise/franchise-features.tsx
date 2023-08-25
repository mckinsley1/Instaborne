export default function PrFeAbout() {
  const stats = [
    { label: 'Fondé', value: '2023' },

    { label: 'Secteurs', value: '12' },
    { label: 'Installations', value: '40+' },
  ]

  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rejoignez le réseau Instaborne
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600">
              En tant que pionnier dans ce domaine en plein essor, nous avons développé une technologie innovante et une expertise solide qui nous permets de fournir des solutions d'installation efficace et durable.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            En rejoignant notre réseau de franchiseurs, vous aurez l'opportunité de devenir un acteur clé dans la transition vers une monde électrique durable respectueuse de l'environnement.
            </p>
            <div className="mt-10 flex-auto">
              <div className="mx-auto max-w-7xl max-[640px]:hidden">
              <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-3">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))} 
            </dl>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-start gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-start">
              <img
                src="/Instaborne-map.jpg"
                alt=""
                className="max-w-3xl object-cover"
              />
              <p className="ml-5 text-sm font-thin italic leading-7 text-gray-600">Image non représentatif du réseau actuel.</p>
            </div>
       
          </div>
        </div>
      </div>
    </div>
  );
}
