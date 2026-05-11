import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, Award, Star } from 'lucide-react';
import TeachersSection from '../Teachers/TeachersSection';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const administration = [
    {
        id: "1",
        name: "Давлатова Зебо",
        position: "Директори мактаби №97",
        experience: "40 сол",
        image: "/Teacher.png",
        shortBio: "Профессор, доктори илмҳои филологӣ. Роҳбари мактаб аз соли 2025. Муаллифи барномаҳои таълимии ҷумҳуриявӣ ва аълочии маорифи Тоҷикистон."
    },
];

export default function AdministrationPage() {
    const director = administration[0];

    return (
        <div className="min-h-screen bg-[#fcfcfc]">
            <div className="md:px-0 px-3 py-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 -z-10"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 md:mb-10  space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic">
                            Роҳбарияти <span className="text-green-600">Мактаб</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative bg-white rounded-[2rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.07)] overflow-hidden border border-gray-50 group">
                        <div className="flex flex-col md:flex-row items-stretch">

                            <div className="w-full md:w-2/5 relative min-h-[450px] overflow-hidden bg-gray-100">
                                <Image
                                    src={director.image}
                                    alt={director.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />

                                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
                                    <p className="text-3xl font-bold">{director.experience}</p>
                                    <p className="text-[10px] uppercase tracking-widest opacity-80">Таҷрибаи корӣ</p>
                                </div>
                            </div>

                            <div className="w-full md:w-3/5 p-10 md:p-20 flex flex-col justify-center relative">
                                <Award className="absolute top-10 right-10 text-gray-50" size={120} />

                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-3">
                                        <span className="px-4 py-1.5 bg-green-50 text-green-700 rounded-xl text-xs font-bold uppercase tracking-widest border border-green-100">
                                            Роҳбарият
                                        </span>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-none tracking-tight">
                                            {director.name}
                                        </h1>
                                        <p className="text-2xl font-semibold text-green-600 italic flex items-center gap-3">
                                            <span className="w-1 h-6 bg-green-600"></span>
                                            {director.position}
                                        </p>
                                    </div>

                                    <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-light italic">
                                        "{director.shortBio}"
                                    </p>

                                    <div className="flex flex-wrap gap-5 pt-6">
                                        <InteractiveHoverButton>Маълумоти пурра </InteractiveHoverButton>

                                        <div className="flex gap-3">
                                            <button className="p-5 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-md transition-all text-gray-600 hover:text-green-600">
                                                <Mail size={24} />
                                            </button>
                                            <button className="p-5 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-md transition-all text-gray-600 hover:text-green-600">
                                                <Phone size={24} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}