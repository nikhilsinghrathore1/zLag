import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Fourth = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const MainDivRef = useRef(null);

  useEffect(() => {
    if (loaded) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: MainDivRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".fade-in-left",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2 }
      );

      tl.fromTo(
        ".fade-in-right",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      );
    }
  }, [loaded]);

  return (
    <div
      ref={MainDivRef}
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Background cosmic effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 fade-in-left">
            {/* ZeroLag Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white text-xl font-semibold">ZeroLag</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight fade-in-left">
                Effortless Discipline.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight fade-in-left">
                Intuitive Control.
              </h1>
            </div>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium fade-in-left">
              Manage Your Goals. Master Your Progress.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg fade-in-left">
              ZeroLag provides a sleek, user-friendly interface designed for your success. Seamlessly manage all your tasks, track progress in real-time, and gain instant insight into your accountability journey. We've engineered simplicity, so you can focus purely on achieving your goals.
            </p>
          </div>

          {/* Right Content - Device Mockup */}
          <div className="flex justify-center lg:justify-end fade-in-right">
            <div className="relative">
              {/* Tablet Frame */}
              <div className="relative w-80 md:w-96 lg:w-[420px] h-[500px] md:h-[600px] lg:h-[650px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl">
                {/* Screen glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden border border-gray-700">
                  {/* Mock Dashboard Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
                        <span className="text-white font-semibold">ZeroLag</span>
                      </div>
                      <div className="text-gray-400 text-sm">Dashboard</div>
                    </div>

                    {/* User Profile Section */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-teal-900/30 rounded-xl p-4 border border-blue-500/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
                        <div>
                          <div className="text-white font-medium">Abundant Discipline</div>
                          <div className="text-gray-400 text-sm">Current streak: 7 days</div>
                        </div>
                      </div>
                    </div>

                    {/* Task List */}
                    <div className="space-y-3">
                      <div className="text-white font-medium">Today's Tasks</div>
                      
                      {/* Task Items */}
                      {[
                        { name: "Morning Workout", status: "completed", user: "Zeeshan" },
                        { name: "Read 30 minutes", status: "active", user: "Nidhi" },
                        { name: "Meditation", status: "pending", user: "Zeeshan" },
                        { name: "Code Review", status: "pending", user: "Dimple" }
                      ].map((task, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              task.status === 'completed' ? 'bg-green-400' : 
                              task.status === 'active' ? 'bg-blue-400' : 'bg-gray-400'
                            }`}></div>
                            <div>
                              <div className="text-white text-sm">{task.name}</div>
                              <div className="text-gray-400 text-xs">{task.user}</div>
                            </div>
                          </div>
                          <div className={`text-xs px-2 py-1 rounded ${
                            task.status === 'completed' ? 'bg-green-900/30 text-green-400' :
                            task.status === 'active' ? 'bg-blue-900/30 text-blue-400' :
                            'bg-gray-900/30 text-gray-400'
                          }`}>
                            {task.status}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium py-3 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300">
                      Create New Task
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating elements around device */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-500/20 rounded-full animate-bounce delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-16 lg:mt-24 fade-in-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Built with Precision. Powered by Experts.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
