import gsap from "gsap"
import React, { useEffect, useRef, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { TrendingUp, Flame, Users, Coins, BarChart3 } from "lucide-react"

// Mock chart data
const chartData = [
  { time: "00:00", price: 0.045, burn: 15, adoption: 25 },
  { time: "04:00", price: 0.052, burn: 18, adoption: 32 },
  { time: "08:00", price: 0.048, burn: 22, adoption: 28 },
  { time: "12:00", price: 0.067, burn: 25, adoption: 45 },
  { time: "16:00", price: 0.078, burn: 30, adoption: 52 },
  { time: "20:00", price: 0.089, burn: 35, adoption: 58 },
  { time: "24:00", price: 0.095, burn: 40, adoption: 65 },
]

function FloatingCoin() {
  return (
    <div className="relative flex items-center justify-center h-full">
      <div className="animate-float">
        <img
          src="/coinhehe.png"
          alt="$ZLAG Coin"
          className="w-64 h-64 object-contain drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255, 136, 0, 0.5))",
          }}
        />
      </div>

      {/* Floating particles around the coin */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

const Fifth = () => {
  const [activeChart, setActiveChart] = useState("price")
  const mainRef = useRef(null)

  useEffect(() => {
    gsap.to(mainRef.current, {
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
      },
    })
  }, [])

  return (
    <>
      {/* Inline Styles */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(2deg);
          }
          66% {
            transform: translateY(-5px) rotate(-2deg);
          }
        }

        @keyframes glow {
          from {
            box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
          }
          to {
            box-shadow: 0 0 30px rgba(0, 255, 136, 0.6);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 136, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 136, 0.7);
        }
      `}</style>

      <div
        ref={mainRef}
        className="w-full px-14 -mt-[300vh] h-fit relative pt-40 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A0624 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #0A0624 100%)'
        }}
      >
        {/* Blurred background layer */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/images/background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(4px)",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <ParticleField />

        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Section */}
            <div className="space-y-8">
              {/* 3D Coin Section */}
              <div className="relative h-96 bg-black/30 backdrop-blur-sm rounded-3xl border border-green-500/30 overflow-hidden shadow-2xl shadow-green-500/20">
                {/* Text content at the top */}
                <div className="absolute top-0 left-0 right-0 text-center p-6 z-20">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    Why $ZLAG is Ready to Moon 🔥
                  </h1>
                  <p className="text-gray-200 text-sm">
                    Deflationary, utility-packed, and built for disciplined growth.
                  </p>
                </div>

                {/* Coin positioned in center-bottom area */}
                <div className="absolute bottom-0 left-0 right-0 h-64 flex items-center justify-center">
                  <FloatingCoin />
                </div>

                {/* Burn rate at the bottom */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-1 rounded-full text-white text-sm font-semibold animate-pulse shadow-lg shadow-green-500/30">
                    <Flame className="inline w-3 h-3 mr-1" />
                    ZLAG BURN RATE: LIVE
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Coins className="w-6 h-6" />,
                    title: "Utility",
                    desc: "Staking, NFTs, DAO votes",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Scarcity",
                    desc: "Burn mechanism reducing supply",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Community",
                    desc: "Rising validator base",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    <div className="text-green-400 mb-2">{card.icon}</div>
                    <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                    <p className="text-gray-300 text-sm">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6">
              {/* Chart Section */}
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-3xl p-6 shadow-2xl shadow-green-500/20">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Live Performance</h2>
                  <div className="flex gap-2">
                    {["price", "burn", "adoption"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveChart(type)}
                        className={`px-3 py-1 rounded-full text-sm transition-all ${
                          activeChart === type
                            ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                            : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis
                        dataKey="time"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9ca3af", fontSize: 12 }}
                      />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
                      <Line
                        type="monotone"
                        dataKey={activeChart}
                        stroke={activeChart === "price" ? "#00ff88" : activeChart === "burn" ? "#ffaa00" : "#00ccff"}
                        strokeWidth={3}
                        dot={{ fill: "#00ff88", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: "#00ff88", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Chart Markers */}
                <div className="flex justify-around mt-4 text-sm">
                  <div className="text-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                    <span className="text-gray-300">Supply Burn %</span>
                  </div>
                  <div className="text-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                    <span className="text-gray-300">User Adoption %</span>
                  </div>
                  <div className="text-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mb-1 animate-pulse"></div>
                    <span className="text-gray-300">Rewards Issued</span>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-3xl p-6 shadow-2xl shadow-green-500/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {[
                    { label: "$ZLAG Burned", value: "230,000+", color: "text-orange-400" },
                    { label: "Total Holders", value: "8.5K+", color: "text-green-400" },
                    { label: "Tasks Completed", value: "25,000+", color: "text-cyan-400" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105">
                    Buy $ZLAG Now
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-gray-600/50 hover:to-gray-700/50 text-white font-semibold py-4 px-6 rounded-xl border border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 backdrop-blur-sm">
                    <BarChart3 className="inline w-5 h-5 mr-2" />
                    View Tokenomics Chart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive $ZLAG Information Section - Full Width */}
          <div className="mt-12 bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 shadow-2xl shadow-green-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Why You Should Be Bullish About $ZLAG
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Utility-Packed */}
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Utility-Packed</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Stake, earn bonuses, and unlock NFT rewards through real productivity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deflationary */}
              <div className="bg-black/40 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Deflationary</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Token burns from missed tasks increase scarcity and value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth-Driven */}
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Growth-Driven</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Your consistency fuels the strength and price of $ZLAG.
                    </p>
                  </div>
                </div>
              </div>

              {/* Beyond Staking */}
              <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Beyond Staking</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Complete tasks to earn crypto, NFTs, and DAO voting power.
                    </p>
                  </div>
                </div>
              </div>

              {/* Self-Sustaining Economy */}
              <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Self-Sustaining Economy</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Smart contracts and AI ensure fairness and continuous growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Habits = Assets */}
              <div className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-xl p-6 hover:border-teal-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Your Habits = Assets</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Turn daily discipline into real on-chain wealth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Momentum - Full Width */}
            <div className="mt-6 bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Community Momentum</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A rapidly growing validator and user base powers future gains. Join thousands of disciplined individuals building wealth through consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 cursor-pointer">
                🚀 Start Your $ZLAG Journey Today
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fifth