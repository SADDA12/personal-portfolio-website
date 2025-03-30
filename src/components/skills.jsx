import React from 'react';

export default function Skills() {

    return(
        <>
        <section id="skills" className="bg-white p-6">
        <h1 className="font-semibold text-xl md:text-2xl text-center">Skills</h1>

        
    <div className="lg:flex lg:gap-4 lg:justify-center">

        <div className="lg:w-1/2">
    
    <div className="mb-4">
        <h3 className="font-semibold italic">html/css</h3>
        <div className="w-full bg-slate-100 h-2 rounded shadow">
            <div className="bg-violet-300 h-2 rounded shadow" style={{ width: '90%' }}></div>
        </div>
    </div>

    <div className="mb-4">
        <h3 className="font-semibold italic">javascript</h3>
        <div className="w-full bg-slate-100 h-2 rounded shadow">
            <div className="bg-violet-300 h-2 rounded shadow" style={{ width: '70%' }}></div>
        </div>
    </div>

    <div className="mb-4">
        <h3 className="font-semibold italic">react</h3>
        <div className="w-full bg-slate-100 h-2 rounded shadow">
            <div className="bg-violet-300 h-2 rounded shadow" style={{ width: '80%' }}></div>
        </div>
    </div>

    <div className="mb-4">
        <h3 className="font-semibold italic">responsive web design</h3>
        <div className="w-full bg-slate-100 h-2 rounded shadow">
            <div className="bg-violet-300 h-2 rounded shadow" style={{ width: '90%' }}></div>
        </div>
    </div>

    </div>
    <div className="lg:w-1/2">

    <div className="mb-4">
        <h3 className="font-semibold italic">node.js/express</h3>
        <div className="w-full bg-slate-100 h-2 rounded shadow">
            <div className="bg-violet-300 h-2 rounded shadow" style={{ width: '70%' }}></div>
        </div>
    </div>

    <div className="mb-4">
        <h3 className="font-semibold italic">api integration</h3>
        <div className="w-full bg-slate-100 h-2 rounded shadow">
            <div className="bg-violet-300 h-2 rounded shadow" style={{ width: '60%' }}></div>
        </div>
    </div>

    <div className="mb-4">
        <h3 className="font-semibold italic">react native</h3>
        <div className="w-full bg-slate-100 h-2 rounded shadow">
            <div className="bg-violet-300 h-2 rounded shadow" style={{ width: '70%' }}></div>
        </div>
    </div>


    </div>

    </div>

    <div>
        <h3 className='text-center font-semibold'>Other Skills</h3>
    </div>

    <div>
        <p>Project Management</p>
        <p>Communication</p>
        <p>Teamwork</p>
        <p>Adaptabilty</p>
    </div>
    

</section>

        </>
    )
};