import React from 'react'

const SingleProduct = () => {
    return (
        <main className="bg-background text-foreground min-h-full mt-[80px] flex items-center justify-center">
            <div className="max-w-4xl w-full mx-6 p-6 bg-card text-card-foreground rounded-lg flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src="https://placehold.co/400x400.png?text=Lisinopril" alt="Single Product" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
                    <h1 className="text-3xl font-bold text-primary">Lisinopril</h1>
                    <p className="text-lg font-bold text-primary mt-2">$10.99</p>
                    {/* <p className="text-sm text-muted mt-2">Stock Left: 5</p> */}
                    <p className="text-sm mt-4">Lisinopril is a prescription medication used to treat high blood pressure and heart failure. It belongs to a class of drugs called ACE inhibitors, which help relax blood vessels, improving blood flow. By lowering blood pressure, Lisinopril reduces the risk of strokes and heart attacks. It is typically taken once daily, with or without food. Always follow your healthcare provider's instructions for optimal results.</p>
                    <button className="text-white font-semibold  bg-[#33186B] rounded-lg hover:bg-[#33186B]/70 px-4 py-2  mt-4 focus:outline-none">Add to Cart</button>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct