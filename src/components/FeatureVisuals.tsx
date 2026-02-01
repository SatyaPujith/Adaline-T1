

import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---
const GradientGrid = () => (
    <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Dashed Lines */}
        <div
            className="absolute inset-0 flex justify-between"
            style={{
                backgroundImage: 'linear-gradient(to right, transparent 50%, transparent 50%)',
                backgroundSize: '25% 100%'
            }}
        >
            {[...Array(5)].map((_, i) => (
                <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-border/40 to-transparent" style={{ backgroundImage: 'linear-gradient(to bottom, #e5e7eb 50%, transparent 50%)', backgroundSize: '1px 12px' }} />
            ))}
        </div>
        {/* Horizontal Dashed Lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-px w-full" style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 50%, transparent 50%)', backgroundSize: '12px 1px' }} />
            ))}
        </div>
    </div>
);

// --- Visual 1: Tree View (Iterate 1/3) ---
const IterateTreeVisual = () => {
    const items = [
        { icon: '📂', label: 'Customer Service' },
        { icon: '📄', label: 'AI representative' },
        { icon: '📄', label: 'Test Cases' },
        { icon: '🗄️', label: 'May Production Logs' },
        { icon: '🗄️', label: 'June Production Logs' },
        { icon: '✈️', label: 'Home' },
    ];

    return (
        <div className="w-full h-full flex items-start justify-center p-8 pt-24 bg-transparent">
            <motion.div
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-border/50 w-64"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Shared</div>
                <div className="space-y-3">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 text-sm text-foreground/80 hover:bg-muted/50 p-1 rounded cursor-default"
                        >
                            <span className="opacity-70">{item.icon}</span>
                            <span>{item.label}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

// --- Visual 2: Image Grid (Iterate 2/3) ---
const IterateImageGridVisual = () => {
    return (
        <div className="w-full h-full relative p-8">
            <motion.div
                className="absolute top-10 right-20 w-48 bg-white p-2 rounded shadow-lg transform rotate-2"
                initial={{ y: 20, opacity: 0, rotate: 0 }}
                animate={{ y: 0, opacity: 1, rotate: 6 }}
                transition={{ duration: 0.8, ease: "backOut" }}
            >
                <div className="h-32 bg-stone-200 rounded overflow-hidden relative">
                    {/* Placeholder for pottery image */}
                    <div className="absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-500">Img 1</div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-muted-foreground">img-var-5.819.jpg</div>
            </motion.div>

            <motion.div
                className="absolute bottom-20 left-20 w-40 bg-white p-2 rounded shadow-lg transform -rotate-3"
                initial={{ y: 20, opacity: 0, rotate: 0 }}
                animate={{ y: 0, opacity: 1, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            >
                <div className="h-40 bg-stone-600 rounded overflow-hidden relative">
                    {/* Placeholder for stones image */}
                    <div className="absolute inset-0 bg-stone-700 flex items-center justify-center text-stone-400">Img 2</div>
                </div>
            </motion.div>

            <motion.div
                className="absolute top-1/2 left-1/2 w-auto bg-purple-50 border border-purple-100 px-3 py-1 rounded-full text-xs text-purple-700 font-mono shadow-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                style={{ x: '-50%', y: '-50%' }}
            >
                {'{submitted_image_2}'}
            </motion.div>
        </div>
    );
};

// --- Visual 3: Version Code Stack (Iterate 3/3) ---
const IterateVersionStackVisual = () => {
    const cards = Array.from({ length: 5 });
    return (
        <div className="w-full h-full flex items-start justify-center pt-32 perspective-1000">
            <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
                {cards.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-64 h-40 bg-white rounded-lg border border-border shadow-md p-4 flex flex-col gap-2 origin-center"
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{
                            opacity: 1 - (i * 0.15),
                            x: i * 40 - 80,
                            y: i * -10,
                            scale: 1 - (i * 0.05),
                            zIndex: 10 - i,
                            rotateY: -10
                        }}
                        transition={{
                            delay: i * 0.1,
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >
                        <div className="flex gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-400/50" />
                            <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
                        </div>
                        <div className="space-y-1 font-mono text-[8px] text-muted-foreground opacity-60">
                            <div className="w-3/4 h-1.5 bg-muted rounded" />
                            <div className="w-1/2 h-1.5 bg-muted rounded" />
                            <div className="w-full h-1.5 bg-muted rounded" />
                            <div className="text-purple-600/60 mt-2">"location": "Vancouver, BC"</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// --- Visual 4: Code Window (Evaluate 1/3) ---
const EvaluateCodeWindowVisual = () => {
    return (
        <div className="w-full h-full flex items-start justify-center p-6 pt-20">
            <motion.div
                className="w-full max-w-lg bg-white rounded-xl shadow-2xl border border-border overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="bg-muted/30 border-b border-border p-3 flex items-center gap-3">
                    <div className="bg-white border border-border p-1.5 rounded-md shadow-sm">
                        <span className="text-xs font-mono text-muted-foreground px-1">{`<>`}</span>
                    </div>
                    <div>
                        <div className="text-xs font-medium text-foreground">How many chicken are there in the farm?</div>
                        <div className="text-[10px] text-muted-foreground flex gap-2">
                            <span>May Production Logs</span>
                            <span>LLM Rubric</span>
                        </div>
                    </div>
                </div>

                {/* Code Body */}
                <div className="p-4 bg-[#fbfbfb] font-mono text-xs overflow-hidden relative">
                    <div className="text-muted-foreground/60 absolute top-4 left-2 select-none">1<br />2<br />3<br />4<br />5<br />6<br />7</div>
                    <div className="pl-6 space-y-1">
                        <div className="text-purple-600">async function <span className="text-blue-600">evaluate</span>(prompt, completion) {'{'}</div>
                        <div className="pl-4 text-foreground/80">const words = completion.trim().split(/\s+/);</div>
                        <div className="h-2" />
                        <div className="pl-4 text-foreground/80">if (words.length {'>'} 0) {'{'}</div>
                        <div className="pl-8 text-purple-600">return <span className="text-foreground/80">{'{'}</span></div>
                        <div className="pl-12 text-foreground/80">result: <span className="text-green-600">"pass"</span>,</div>
                        <div className="pl-12 text-foreground/80">reason: <span className="text-green-600">"The first and last words match."</span></div>
                        <div className="pl-8 text-foreground/80">{'}'};</div>
                        <div className="pl-4 text-foreground/80">{'}'}</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- Visual 5: Performance Chart (Evaluate 2/3) ---
const EvaluateChartVisual = () => {
    return (
        <div className="w-full h-full flex items-start justify-center p-4 pt-20">
            <div className="w-full h-64 relative perspective-1000">
                {/* 3D Looking Lines */}
                {[0, 1, 2].map((i) => (
                    <motion.svg
                        key={i}
                        className="absolute inset-0 w-full h-full overflow-visible"
                        style={{
                            transform: `translateZ(${i * 20}px) translateY(${i * 10 - 20}px)`,
                            opacity: 1 - (i * 0.1),
                            zIndex: 10 - i
                        }}
                    >
                        <motion.path
                            d={`M0,${120 + i * 10} C100,${100 + i * 5} 200,${140 + i * 15} 300,${110 + i * 10} 400,${130 + i * 5} 500,${90 + i * 20}`}
                            fill="none"
                            stroke={i === 0 ? "#10b981" : i === 1 ? "#f59e0b" : "#ec4899"}
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                        />
                    </motion.svg>
                ))}
                {/* Grid dots background */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-40 transform rotate-x-12 translate-y-10 scale-110" />
            </div>
        </div>
    );
};

// --- Visual 6: Rollback Chart (Evaluate 3/3) ---
const EvaluateRollbackVisual = () => {
    return (
        <div className="w-full h-full flex items-start justify-center p-4 pt-20">
            <div className="w-full h-64 relative">
                {/* Main Line Chart */}
                <svg className="w-full h-full overflow-visible">
                    <motion.path
                        d="M0,150 C50,140 100,160 150,120 C200,80 250,85 300,110 C350,135 400,120 450,100"
                        fill="none"
                        stroke="url(#gradient-line)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#d6d3d1" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Dotted Lines/Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-40 transform perspective-1000 rotate-x-12 translate-y-10" />

                {/* Hover/Selection Point */}
                <motion.div
                    className="absolute right-10 top-20 flex flex-col items-end"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Eval Score</div>
                    <div className="text-2xl font-light text-[#2D4A2D]">90%</div>

                    <div className="mt-4 text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Version</div>
                    <div className="text-[9px] font-mono text-muted-foreground/60 w-32 break-all leading-tight">
                        d701b807 da1b 4c9b a3d9 d2754f6ca1bb
                    </div>
                    <button className="text-[9px] text-muted-foreground hover:text-foreground mt-1 underline decoration-dotted">
                        Click to rollback
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

// --- Visual 7: Deploy Environments (Deploy 1/3) ---
const DeployEnvironmentVisual = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-4 pt-24">
            {/* Cards Container */}
            <div className="flex gap-4 items-center mb-8 relative">
                {/* Connecting Line */}
                <div className="absolute top-[3.5rem] left-0 right-0 h-px bg-dashed border-t border-dashed border-border/50 -z-10" />

                {['Production', 'Experimental', 'Staging'].map((env, i) => (
                    <motion.div
                        key={env}
                        className={`bg-white rounded-lg p-3 w-32 shadow-sm border ${i === 1 ? 'border-dashed border-green-300' : 'border-border'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="text-[9px] text-muted-foreground uppercase mb-1">Environment</div>
                        <div className="text-sm font-medium text-foreground">{env}</div>
                    </motion.div>
                ))}
            </div>

            {/* Code Snippet */}
            <motion.div
                className="relative mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {/* Vertical connecting line */}
                <div className="absolute -top-8 left-1/2 w-px h-8 bg-dashed border-l border-dashed border-foreground/20" />

                <div className="text-[9px] text-center text-muted-foreground mb-2">From Experimental</div>
                <div className="bg-white border border-border rounded-md px-3 py-2 font-mono text-[10px] shadow-sm text-foreground/80">
                    <span className="text-purple-600">import</span> {'{prompt}'} <span className="text-purple-600">from</span> <span className="text-green-600">"Adaline"</span>
                </div>
            </motion.div>
        </div>
    );
};

// --- Visual 8: Deploy Diff (Deploy 2/3) ---
const DeployDiffVisual = () => {
    return (
        <div className="w-full h-full flex items-start justify-center p-8 pt-16">
            <motion.div
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm border border-border/50 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Background strikethrough lines effect */}
                <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                    <div className="w-full h-full bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,#e5e7eb_4px,#e5e7eb_5px)] absolute inset-0" />
                </div>

                <div className="space-y-4 relative z-10 text-xs text-foreground/70 leading-relaxed font-serif">
                    <p>
                        <span className="line-through decoration-red-300 text-muted-foreground mr-1">You are a customer service</span>
                        <span className="bg-green-100 text-green-800 px-1 rounded mx-1">agent</span>
                        <span className="bg-green-100 text-green-800 px-1 rounded">representative</span>
                        for a friendly customer service airline company tasked with responding to users...
                    </p>
                    <p>
                        <span className="bg-green-100/50 text-green-800 px-1">responsible for addressing customer complaints and inquiries concerning their travel experiences.</span>
                    </p>

                    <div className="mt-4 pt-4 border-t border-dashed border-border">
                        <div className="text-[10px] text-muted-foreground mb-1">Rules:</div>
                        <ul className="list-disc pl-4 space-y-1 text-[10px]">
                            <li>Never offer compensation...</li>
                            <li>Never assign blame directly...</li>
                            <li className="bg-green-50 text-green-700">- Keep responses to 3 sentences or less</li>
                            <li><span className="bg-gray-100 text-gray-400 line-through">Keep it short</span></li>
                        </ul>
                    </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                    className="absolute bottom-4 right-4 bg-[#b91c1c] text-white text-[10px] px-2 py-1 rounded flex items-center gap-1 shadow-md"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    In Editor <span className="mx-1">→</span> Production
                </motion.div>
            </motion.div>
        </div>
    );
};

// --- Visual 9: Deploy History (Deploy 3/3) ---
const DeployHistoryVisual = () => {
    const history = [
        { model: 'gpt-4o', env: 'Production', time: 'Just now', status: 'bg-green-500' },
        { model: 'gpt-4o', env: 'Staging', time: '20 min', status: 'bg-yellow-400' },
        { model: 'gpt-4o', env: 'Production', time: '4 hours', status: 'bg-gray-300' },
        { model: 'gpt-4o', env: 'Staging', time: 'Yesterday', status: 'bg-gray-300' },
        { model: 'claude-3.5-sonnet', env: 'Experimental', time: '3 days', status: 'bg-purple-400' },
        { model: 'claude-3.5-sonnet', env: 'Staging', time: '6 days', status: 'bg-gray-300' },
    ];

    return (
        <div className="w-full h-full flex items-center justify-end p-8 -mt-24">
            <div className="w-64 border-l border-dashed border-border/60 pl-6 py-2 relative">
                <div className="absolute -top-8 left-6 text-[10px] font-medium text-muted-foreground">Deploy History</div>
                <div className="space-y-5">
                    {history.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 0, y: 30, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 group cursor-pointer"
                        >
                            <div className="mt-0.5 text-base">
                                {item.model.includes('gpt') ? '⚡' : '🧠'}
                            </div>
                            <div>
                                <div className="text-sm font-medium text-foreground group-hover:text-green-700 transition-colors">
                                    / {item.model}
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.status}`} />
                                    <div className="text-[10px] text-muted-foreground">
                                        {item.status === 'bg-green-500' ? <span className="text-green-600 font-medium">{item.env}</span> : item.env} · {item.time}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Visual 10: Monitor Trace (Monitor 1/3) ---
const MonitorTraceVisual = () => {
    return (
        <div className="w-full h-full flex items-start justify-center p-6 pt-16 bg-transparent">
            <div className="w-full max-w-xl">
                {/* Header Row */}
                <div className="flex justify-between items-end mb-4 pb-2">
                    <div className="text-[10px] font-mono font-semibold text-foreground">
                        Trace: <span className="font-normal text-muted-foreground">user-web-query</span>
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">143ms</div>
                </div>

                {/* Bars */}
                <div className="space-y-4 font-mono text-[9px] text-muted-foreground relative">
                    {/* Grid lines vertical */}
                    <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20 z-0">
                        <div className="w-px h-full bg-border border-l border-dashed" />
                        <div className="w-px h-full bg-border border-l border-dashed" />
                        <div className="w-px h-full bg-border border-l border-dashed" />
                        <div className="w-px h-full bg-border border-l border-dashed" />
                    </div>

                    <motion.div className="flex items-center gap-4 relative z-10" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                        <div className="w-28 flex-shrink-0 text-right">process-intent</div>
                        <div className="w-8 text-center text-[8px] opacity-60">32ms</div>
                        <div className="flex-1 relative h-6 flex items-center">
                            <div className="absolute left-0 w-px h-3 bg-foreground top-1.5" />
                            <div className="absolute left-[20%] w-px h-3 bg-foreground top-1.5" />
                            <div className="absolute left-0 right-[80%] h-[1px] bg-foreground top-3" />
                        </div>
                    </motion.div>

                    <motion.div className="flex items-center gap-4 relative z-10" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <div className="w-28 flex-shrink-0 text-right">fetch-information</div>
                        <div className="w-8 text-center text-[8px] opacity-60">16ms</div>
                        <div className="flex-1 relative h-6 flex items-center">
                            <div className="absolute left-[20%] w-px h-3 bg-foreground top-1.5" />
                            <div className="absolute left-[30%] w-px h-3 bg-foreground top-1.5" />
                            <div className="absolute left-[20%] right-[70%] h-[1px] bg-foreground top-3" />
                        </div>
                    </motion.div>

                    <motion.div className="flex items-center gap-4 relative z-10" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                        <div className="w-28 flex-shrink-0 text-right">chat-generation</div>
                        <div className="w-8 text-center text-[8px] opacity-60">95ms</div>
                        <div className="flex-1 relative h-6 flex items-center">
                            <div className="absolute left-[30%] w-px h-3 bg-foreground top-1.5" />
                            <div className="absolute left-[95%] w-px h-3 bg-foreground top-1.5" />
                            <div className="absolute left-[30%] right-[5%] h-[1px] bg-foreground top-3" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- Visual 11: Monitor Continuous Eval (Monitor 2/3) ---
const MonitorEvalVisual = () => {
    return (
        <div className="w-full h-full flex items-start justify-center p-6 pt-20 gap-8 bg-transparent">
            {/* Left: JSON Data */}
            <motion.div
                className="w-80 font-mono text-[9px] text-muted-foreground/80 bg-white/50 p-4 rounded-lg border border-border/30 backdrop-blur-sm shadow-sm"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            >
                <div className="flex items-center gap-2 mb-3 text-[10px] text-foreground font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Production, completed 5m ago
                    <span className="ml-auto text-muted-foreground font-normal">1200 ms</span>
                </div>
                <div className="space-y-1 overflow-hidden">
                    <div>{`{ "page_views": [ { "page_url": "/home",`}</div>
                    <div className="pl-2">{`"time_spent_seconds": 120 }, { "page_url": "/about",`}</div>
                    <div className="pl-2">{`"time_spent_seconds": 90 }, { "page_url": "/contact",`}</div>
                    <div className="pl-2">{`"time_spent_seconds": 30 }, { "page_url": "/home",`}</div>
                    <div className="pl-2">{`"time_spent_seconds": 150 }, { "page_url": "/services",`}</div>
                    <div className="pl-2">{`"time_spent_seconds": 60 }, { "page_url": "/about",`}</div>
                    <div>{`] }`}</div>
                </div>
            </motion.div>

            {/* Right: Score */}
            <motion.div
                className="flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-border/50 shadow-sm min-w-[140px]"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            >
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Score</div>
                <div className="text-4xl font-light text-[#2D4A2D] mb-4">83%</div>
                <div className="text-[10px] text-muted-foreground mb-2">Evaluations</div>
                <div className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-red-500">!</span>
                    <span className="text-red-500">!</span>
                    <span className="text-green-600">✓</span>
                </div>
            </motion.div>
        </div>
    );
};

// --- Visual 12: Monitor Human Annotations (Monitor 3/3) ---
const MonitorHumanVisual = () => {
    return (
        <div className="w-full h-full flex items-start justify-center p-6 pt-20 gap-6 bg-transparent">
            {/* Chat Conversation */}
            <div className="w-full max-w-sm space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between text-[10px] text-muted-foreground mb-4"
                >
                    <div className="flex items-center gap-1">
                        <span className="text-purple-600">AI Representative</span>
                        <span>4 mins ago</span>
                    </div>
                    <div className="flex gap-2 opacity-50">
                        <span>🔗</span> <span>✕</span>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white p-4 rounded-lg shadow-sm border border-border/50 relative"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                >
                    {/* Feedback Modal Overlay */}
                    <div className="absolute -top-3 left-4 right-4 bg-[#fbfbfb] border border-border shadow-sm rounded p-2 flex items-center justify-between z-10 transition-all hover:scale-105 cursor-pointer">
                        <div className="flex items-center gap-2 text-[10px]">
                            <span className="text-green-600 text-xs">👍</span>
                            <span>The response correctly identified the user's intent.</span>
                            <span className="w-px h-3 bg-border mx-1" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] bg-muted px-1.5 py-0.5 rounded border border-border/50">Text Cases</span>
                            <button className="text-[9px] bg-[#4a5f4a] text-white px-2 py-0.5 rounded shadow-sm">Save ↵</button>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3 text-[10px] text-muted-foreground leading-relaxed">
                        <div className="text-[9px] text-muted-foreground/50 uppercase tracking-widest mb-2">System</div>
                        <p>You are a customer service representative for a large airline, tasked with responding to complaints or inquiries related to customer experience.</p>
                        <p>Your job is to identify the nature of their message, determine which category it fits into, and respond accordingly.</p>
                        <p className="opacity-50">Be concise, knowledgeable, and compassionate.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};


// --- Main Container ---
export const FeatureVisuals = ({ activeFeature, activeSubStep }: { activeFeature: number; activeSubStep: number }) => {
    // Shared transition settings for specific "scroll" feel
    const variants = {
        enter: { opacity: 0, y: 120 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -120 },
    };
    const transition = { duration: 0.6, ease: [0.32, 0.72, 0, 1] as any };

    return (
        <div className="w-full h-full relative overflow-hidden" style={{ perspective: '1000px' }}>
            <AnimatePresence mode="popLayout" custom={activeSubStep}>
                {/* Iterate Feature */}
                {activeFeature === 0 && activeSubStep === 0 && (
                    <motion.div key="iter-1" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <IterateTreeVisual />
                    </motion.div>
                )}
                {activeFeature === 0 && activeSubStep === 1 && (
                    <motion.div key="iter-2" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <IterateImageGridVisual />
                    </motion.div>
                )}
                {activeFeature === 0 && activeSubStep === 2 && (
                    <motion.div key="iter-3" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <IterateVersionStackVisual />
                    </motion.div>
                )}

                {/* Evaluate Feature */}
                {activeFeature === 1 && activeSubStep === 0 && (
                    <motion.div key="eval-1" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <EvaluateCodeWindowVisual />
                    </motion.div>
                )}
                {activeFeature === 1 && activeSubStep === 1 && (
                    <motion.div key="eval-2" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <EvaluateChartVisual />
                    </motion.div>
                )}
                {activeFeature === 1 && activeSubStep === 2 && (
                    <motion.div key="eval-3" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <EvaluateRollbackVisual />
                    </motion.div>
                )}

                {/* Deploy Feature */}
                {activeFeature === 2 && activeSubStep === 0 && (
                    <motion.div key="dep-1" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <DeployEnvironmentVisual />
                    </motion.div>
                )}
                {activeFeature === 2 && activeSubStep === 1 && (
                    <motion.div key="dep-2" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <DeployDiffVisual />
                    </motion.div>
                )}
                {activeFeature === 2 && activeSubStep === 2 && (
                    <motion.div key="dep-3" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <DeployHistoryVisual />
                    </motion.div>
                )}

                {/* Monitor Feature */}
                {activeFeature === 3 && activeSubStep === 0 && (
                    <motion.div key="mon-1" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <MonitorTraceVisual />
                    </motion.div>
                )}
                {activeFeature === 3 && activeSubStep === 1 && (
                    <motion.div key="mon-2" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <MonitorEvalVisual />
                    </motion.div>
                )}
                {activeFeature === 3 && activeSubStep === 2 && (
                    <motion.div key="mon-3" className="absolute inset-0" variants={variants} initial="enter" animate="center" exit="exit" transition={transition}>
                        <GradientGrid />
                        <MonitorHumanVisual />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
