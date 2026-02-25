import React from 'react';
import { motion } from 'framer-motion';

function ProfileSection() {
    const stats = [
        { id: 1, value: '10+', label: 'Tech courses available' },
        { id: 2, value: '91%', label: 'Satisfaction Rate from student' },
        { id: 3, value: '5000+', label: 'Students taught online and offline' },
        { id: 4, value: '93%', label: 'Course Completion Rate' }
    ];

    // Framer Motion variants for a smooth staggered fade-up
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <section className="bg-[#212121] py-8 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* The Main Wide Banner Container */}
                <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                    
                    {/* Background Image of students */}
                    <div className="absolute inset-0">
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                            alt="Students collaborating" 
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Heavy Orange Overlay (Replicates the screenshot perfectly) */}
                    <div className="absolute inset-0 bg-[#F7941D]/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[#F7941D]/75"></div>

                    {/* Content Container */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative z-10 py-12 px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-white items-center text-center"
                    >
                        {stats.map((stat) => (
                            <motion.div key={stat.id} variants={itemVariants} className="flex flex-col items-center">
                                {/* The large numbers */}
                                <h2 
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-tighter leading-none drop-shadow-md" 
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {stat.value}
                                </h2>
                                {/* The labels */}
                                <p 
                                    className="text-sm md:text-base font-medium leading-tight max-w-[180px] drop-shadow-sm" 
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default ProfileSection;