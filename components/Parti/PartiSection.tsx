import React from 'react'

function PartiSection() {
    const news = [
        { id: 1, title: "Ғолибияти хонандагон дар олимпиада", description: "Хонандагони мактаби мо дар олимпиадаи шаҳрӣ сазовори ҷойҳои намоён гаштанд.", date: "25.04.2026", img: "/news1.jpg" },
        { id: 2, title: "Ҷашни иди Наврӯз дар мактаб", description: "Хонандагони мо бо намоиши ҳунарҳои мардумӣ ва хони ҳафтсин омадани баҳорро пешвоз гирифтанд.", date: "21.03.2026", img: "/news2.jpg" },
        { id: 3, title: "Маҷлиси падару модарон", description: "Дар муассиса маҷлиси умумии падару модарон оид ба натиҷаҳои таълим дар чоряки чорум ва омодагӣ ба имтиҳонҳои хатм баргузор гардад.", date: "10.05.2026", img: "/news3.jpg" },
    ];
    return (
        <section className="pb-20  bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Навигариҳои охирин</h2>
                        <div className="h-1 w-20 bg-green-600 mt-2"></div>
                    </div>
                    <button className="text-green-600 font-semibold hover:underline">Ҳамаи хабарҳо →</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                            <div className="relative h-56 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:scale-110 transition-transform duration-500" />
                                <span className="absolute top-4 left-4 z-10 bg-green-600 text-white text-xs px-3 py-1 rounded-full">{item.date}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 mt-3 text-sm line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PartiSection