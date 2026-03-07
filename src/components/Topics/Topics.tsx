import {
    Flame,
    Star,
    Clock,
    PieChart,
    ArrowLeftRight,
    Medal,
} from 'lucide-react'

export const Topics = () => {
    return (
        <div className="flex min-h-screen justify-center bg-slate-100">
            <div className="relative flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden bg-gradient-to-b from-sky-100 to-white pb-24 shadow-xl">
                {/* Header */}
                <header className="mt-4 flex items-center justify-between p-6 pb-2">
                    <div className="flex items-center gap-3">
                        <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#0369a1]/20">
                            {/* <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCI3w1iuLnF_FX1O3jfGLPJA2g1ZL5O1FGvfvn0Ai9O6_R12kaCvMq-Mve3nglfsVso3vH87oudakC-p5i98NsCsV9v-Di1JrDqAlR0AtBbTvUQWyv9SCjT3habtm6LMcTaPbt81ibTkrl6IWtHwnYQpJoHpNSrvGHxPfUdLcG3EJg1Q3bh6ftdP7VIorRld3PaKUhvY9hZpxcnEcKv1EejKrgG4dGKAmoNFzj4_UDv2ZHGgMgMA2xHIdPKFEW00AdW7CLi1lWzo"
                alt="Avatar"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              /> */}
                        </div>
                        <div>
                            <h2 className="text-lg leading-tight font-extrabold tracking-tight text-slate-900">
                                Hi there, Time Traveler!
                            </h2>
                            <p className="mt-0.5 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                                Ready to learn?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                        <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
                        <span className="text-sm font-bold text-slate-900">
                            7
                        </span>
                        <div className="mx-1 h-3 w-[1px] bg-slate-200"></div>
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-bold text-slate-900">
                            120
                        </span>
                    </div>
                </header>

                {/* Continue Learning */}
                <section className="px-6 py-4">
                    <h3 className="mb-4 text-xl font-bold text-slate-800">
                        Continue Learning
                    </h3>
                    <div className="flex flex-col gap-5 rounded-[1.5rem] bg-white p-5 shadow-[8px_8px_16px_#e0e5e9,-8px_-8px_16px_#ffffff]">
                        <div className="flex items-center gap-4">
                            <div className="flex size-16 items-center justify-center rounded-2xl border border-[#0369a1]/20 bg-[#0369a1]/10">
                                <Clock className="h-8 w-8 text-[#0369a1]" />
                            </div>
                            <div className="flex-1">
                                <p className="text-lg leading-tight font-bold text-slate-900">
                                    Half Past the Hour
                                </p>
                                <p className="mt-1 text-sm font-medium text-slate-500">
                                    Lesson 4 of 10
                                </p>
                            </div>
                        </div>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center justify-between text-xs font-bold tracking-tighter text-slate-600 uppercase">
                                <span>Progress</span>
                                <span className="text-[#0369a1]">40%</span>
                            </div>
                            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="h-full rounded-full bg-[#0369a1]"
                                    style={{ width: '40%' }}
                                ></div>
                            </div>
                        </div>
                        <button className="mt-1 w-full rounded-xl bg-[#0369a1] py-3.5 text-base font-bold text-white shadow-lg shadow-[#0369a1]/30 transition-transform active:scale-95">
                            Resume Lesson
                        </button>
                    </div>
                </section>

                {/* Learning Topics */}
                <section className="px-6 py-4">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold text-slate-800">
                            Learning Topics
                        </h3>
                        <button className="text-sm font-bold text-[#0369a1]">
                            See All
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Topic 1 */}
                        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-100">
                                <Clock className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">
                                    The Basics
                                </h4>
                                <div className="mt-1 flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-bold text-slate-600">
                                        4.9 (2k+)
                                    </span>
                                </div>
                            </div>
                            <button className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700">
                                Start
                            </button>
                        </div>
                        {/* Topic 2 */}
                        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-orange-100">
                                <PieChart className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h4 className="text-sm leading-tight font-bold text-slate-900">
                                    Quarter To & Past
                                </h4>
                                <div className="mt-1 flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-bold text-slate-600">
                                        4.8 (1k+)
                                    </span>
                                </div>
                            </div>
                            <button className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700">
                                Start
                            </button>
                        </div>
                        {/* Topic 3 */}
                        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-purple-100">
                                <ArrowLeftRight className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <h4 className="text-sm leading-tight font-bold text-slate-900">
                                    Digital vs Analog
                                </h4>
                                <div className="mt-1 flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-bold text-slate-600">
                                        4.7 (800)
                                    </span>
                                </div>
                            </div>
                            <button className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700">
                                Start
                            </button>
                        </div>
                        {/* Topic 4 */}
                        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-pink-100">
                                <Medal className="h-6 w-6 text-pink-600" />
                            </div>
                            <div>
                                <h4 className="text-sm leading-tight font-bold text-slate-900">
                                    Military Time
                                </h4>
                                <div className="mt-1 flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-bold text-slate-600">
                                        4.9 (500)
                                    </span>
                                </div>
                            </div>
                            <button className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700">
                                Start
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
